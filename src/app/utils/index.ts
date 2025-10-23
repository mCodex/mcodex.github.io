/**
 * Utils barrel export
 * 
 * Central export point for all utilities to simplify imports
 * across the application.
 * 
 * @example
 * // Instead of
 * import { smoothScrollToElement } from '@/utils/scroll';
 * import { useScrollDetection } from '@/utils/hooks';
 * 
 * // Use
 * import { smoothScrollToElement, useScrollDetection } from '@/utils';
 */

// Scroll utilities
export { 
  smoothScrollToElement, 
  smoothScrollToTop,
  isElementVisible,
  getScrollPercentage 
} from './scroll';

// React hooks
export {
  useScrollDetection,
  useMediaQuery,
  useClickOutside,
  useToggle,
  usePreventScroll,
  useLocalStorage
} from './hooks';

// Types
export type {
  Project,
  StatItem,
  SocialLink,
  NavLink,
  Skill,
  ButtonProps,
  CardProps,
  BadgeProps,
  AnimationConfig,
  ThemeConfig,
  ApiResponse,
  PaginationState,
  FormField
} from './types';
