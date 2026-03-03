/**
 * React Hooks - Custom hooks for common patterns
 *
 * These hooks encapsulate logic to be reused across components
 * following React best practices and the DRY principle.
 */

import { useCallback, useEffect, useState } from 'react';

/**
 * Hook to detect if user has scrolled past a certain threshold
 *
 * @param threshold - Scroll distance in pixels to trigger detection (default: 50)
 * @returns Boolean indicating if scrolled past threshold
 *
 * @example
 * const isScrolled = useScrollDetection(100);
 *
 * // Add shadow to navbar on scroll
 * return (
 *   <nav className={isScrolled ? 'scrolled' : ''}>
 *     Navigation
 *   </nav>
 * );
 */
export const useScrollDetection = (threshold: number = 50): boolean => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
};

/**
 * Hook to check if a media query matches
 *
 * @param query - CSS media query string
 * @returns Boolean indicating if query matches
 *
 * @example
 * const isMobile = useMediaQuery('(max-width: 48rem)');
 *
 * return (
 *   <div>
 *     {isMobile ? <MobileNav /> : <DesktopNav />}
 *   </div>
 * );
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // Set initial value
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = (): void => setMatches(media.matches);

    // Add listener with proper cleanup
    if (media.addEventListener) {
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    } else {
      // Fallback for older browsers
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [matches, query]);

  return matches;
};

/**
 * Hook to track click-outside behavior
 *
 * @param ref - React ref to the element
 * @param callback - Function to call when click outside happens
 *
 * @example
 * const ref = useRef(null);
 * useClickOutside(ref, () => setIsOpen(false));
 *
 * return (
 *   <div ref={ref} className="menu">
 *     Menu content
 *   </div>
 * );
 */
export const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void,
): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, callback]);
};

/**
 * Hook to manage boolean state with callbacks
 *
 * @param initialValue - Initial state value (default: false)
 * @returns Tuple of [value, open, close, toggle]
 *
 * @example
 * const [isOpen, open, close, toggle] = useToggle(false);
 *
 * return (
 *   <>
 *     <button onClick={toggle}>Toggle Menu</button>
 *     {isOpen && <Menu onClose={close} />}
 *   </>
 * );
 */
export const useToggle = (
  initialValue: boolean = false,
): [boolean, () => void, () => void, () => void] => {
  const [value, setValue] = useState(initialValue);

  const open = useCallback(() => setValue(true), []);
  const close = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((v) => !v), []);

  return [value, open, close, toggle];
};

/**
 * Hook to prevent body scroll
 *
 * @param shouldPrevent - Boolean to enable/disable scroll prevention
 *
 * @example
 * const [isOpen, setIsOpen] = useState(false);
 * usePreventScroll(isOpen);
 *
 * return (
 *   <>
 *     <button onClick={() => setIsOpen(true)}>Open Modal</button>
 *     {isOpen && <Modal />}
 *   </>
 * );
 */
export const usePreventScroll = (shouldPrevent: boolean): void => {
  useEffect(() => {
    if (shouldPrevent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [shouldPrevent]);
};

/**
 * Hook to get and update localStorage
 *
 * @param key - LocalStorage key
 * @param initialValue - Initial value if not in storage
 * @returns Tuple of [value, setValue, removeValue]
 *
 * @example
 * const [theme, setTheme, removeTheme] = useLocalStorage('theme', 'light');
 *
 * return (
 *   <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
 *     Toggle Theme: {theme}
 *   </button>
 * );
 */
export const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void, () => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window?.localStorage?.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.warn(`Error reading localStorage key "${key}":`, err);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T) => {
      try {
        setStoredValue(value);
        window?.localStorage?.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key],
  );

  const removeValue = useCallback(() => {
    try {
      window?.localStorage?.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error);
    }
  }, [key, initialValue]);

  return [storedValue, setValue, removeValue];
};
