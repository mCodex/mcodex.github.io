/**
 * TypeScript Types and Interfaces
 *
 * Central location for all shared types to maintain consistency
 * across components and utilities.
 */

/**
 * GitHub project metadata
 */
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  icon: string;
  stars: number;
  category?: string;
}

/**
 * Statistics item for About section
 */
export interface StatItem {
  number: string;
  label: string;
}

/**
 * Social media link configuration
 */
export interface SocialLink {
  href: string;
  label: string;
  icon: React.ComponentType<{ size: number }>;
}

/**
 * Navigation link configuration
 */
export interface NavLink {
  label: string;
  href: string;
  id?: string;
}

/**
 * Skill tag for hero section
 */
export interface Skill {
  name: string;
  category?: string;
  proficiency?: 'beginner' | 'intermediate' | 'expert';
}

/**
 * Component props for common UI patterns
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
  glass?: boolean;
}

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Animation configuration
 */
export interface AnimationConfig {
  duration: number; // in milliseconds
  delay?: number; // in milliseconds
  easing?: 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
  repeat?: number; // -1 for infinite
}

/**
 * Theme configuration
 */
export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  darkMode: boolean;
}

/**
 * API Response wrapper
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * Pagination state
 */
export interface PaginationState {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
}

/**
 * Form field configuration
 */
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'textarea' | 'select' | 'checkbox';
  placeholder?: string;
  required?: boolean;
  validation?: (value: string) => boolean | string;
}
