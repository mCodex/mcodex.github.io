/**
 * Scroll Utilities - Centralized scroll-related helper functions
 * 
 * These utilities handle smooth scrolling and page navigation
 * to reduce code duplication across components.
 */

/**
 * Smoothly scrolls to an element by its ID
 * @param elementId - The ID of the target element
 * @param offset - Optional scroll offset in pixels (default: 0)
 * 
 * @example
 * smoothScrollToElement('projects');
 * smoothScrollToElement('about', 50);
 */
export const smoothScrollToElement = (
  elementId: string,
  offset: number = 0
): void => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.warn(`Element with ID "${elementId}" not found`);
    return;
  }

  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

/**
 * Smoothly scrolls to the top of the page
 * @param offset - Optional scroll offset (default: 0)
 * 
 * @example
 * smoothScrollToTop();
 */
export const smoothScrollToTop = (offset: number = 0): void => {
  window.scrollTo({
    top: offset,
    behavior: 'smooth',
  });
};

/**
 * Checks if an element is visible in the viewport
 * @param elementId - The ID of the element to check
 * @returns Boolean indicating if element is visible
 * 
 * @example
 * if (isElementVisible('hero')) {
 *   console.log('Hero section is visible');
 * }
 */
export const isElementVisible = (elementId: string): boolean => {
  const element = document.getElementById(elementId);
  if (!element) return false;

  const rect = element.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom > 0
  );
};

/**
 * Gets the scroll position as a percentage of total page height
 * @returns Number between 0 and 100
 * 
 * @example
 * const scrollPercent = getScrollPercentage();
 * console.log(`Scrolled ${scrollPercent}% down the page`);
 */
export const getScrollPercentage = (): number => {
  const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
  return windowHeight > 0 ? (window.scrollY / windowHeight) * 100 : 0;
};
