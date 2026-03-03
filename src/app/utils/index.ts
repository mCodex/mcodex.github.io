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

// React hooks
export {
  useClickOutside,
  useLocalStorage,
  useMediaQuery,
  usePreventScroll,
  useScrollDetection,
  useToggle,
} from './hooks';
// Scroll utilities
export {
  getScrollPercentage,
  isElementVisible,
  smoothScrollToElement,
  smoothScrollToTop,
} from './scroll';

// Types
export type {
  AnimationConfig,
  ApiResponse,
  BadgeProps,
  ButtonProps,
  CardProps,
  FormField,
  NavLink,
  PaginationState,
  Project,
  Skill,
  SocialLink,
  StatItem,
  ThemeConfig,
} from './types';
