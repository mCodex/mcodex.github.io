'use client';

import { useEffect, useState } from 'react';
import styles from './SparkleBackground.module.scss';

/**
 * Sparkle interface - defines a single sparkle particle
 * @interface Sparkle
 * @property {number} id - Unique identifier for the sparkle
 * @property {number} x - Horizontal position (0-100%)
 * @property {number} y - Vertical position (0-100%)
 * @property {number} size - Size of the sparkle (1-3)
 * @property {number} duration - Animation duration in seconds
 * @property {number} delay - Animation delay in seconds
 */
interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;  // 0.3-0.7px - extremely discrete
  duration: number;  // 5-8 seconds - very slow
  delay: number;  // 0-6 seconds - staggered
}

/**
 * SparkleBackground Component - Animated background with very subtle twinkling sparkles
 * 
 * Creates a discrete, magical background effect with minimally positioned
 * sparkles that animate with varying durations and delays. Inspired by
 * Apple's liquid glass aesthetic with understated animated accents.
 * 
 * Features:
 * - Configurable number of sparkles (minimal by default)
 * - Random positioning and animation timing
 * - Performance optimized with CSS animations
 * - Responsive to viewport size
 * - WCAG 2.2 compliant (no excessive flashing)
 * - Minimal JavaScript overhead
 * 
 * @component
 * @returns {React.ReactElement} SVG-based subtle sparkle background
 * 
 * @example
 * // Usage in hero or full-screen sections
 * <SparkleBackground count={6} />
 * 
 * @param {number} [count=6] - Number of sparkles to render (default: 6 for maximum subtlety)
 */
const SparkleBackground: React.FC<{ count?: number }> = ({ count = 6 }) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  /**
   * Initialize sparkles with random properties
   * Generates sparkles with:
   * - Random positions across the viewport
   * - Extremely small sizes (0.3-0.7px for maximum discretion)
   * - Very slow animation timings (5-8 second cycles)
   * - Minimal opacity range (barely visible)
   */
  useEffect(() => {
    const generateSparkles = (): Sparkle[] => {
      return Array.from({ length: count }, (_, index) => ({
        id: index,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 0.4 + 0.3,  // 0.3-0.7px (even smaller)
        duration: Math.random() * 3 + 5,  // 5-8 seconds (much slower)
        delay: Math.random() * 6,         // Up to 6 second delay for more stagger
      }));
    };

    setSparkles(generateSparkles());
  }, [count]);

  return (
    <div className={styles.sparkleBackgroundContainer}>
      <svg
        className={styles.sparkleBackground}
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Gradient definition for sparkle glow - very subtle */}
          <radialGradient id="sparkleGradient" r="50%">
            <stop offset="0%" stopColor="#E6F4FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0099AA" stopOpacity="0.1" />
          </radialGradient>
        </defs>

        {/* Render each sparkle as a circle with animation */}
        {sparkles.map((sparkle) => (
          <circle
            key={sparkle.id}
            cx={sparkle.x}
            cy={sparkle.y}
            r={sparkle.size}
            fill="url(#sparkleGradient)"
            className={styles.sparkle}
            style={{
              '--duration': `${sparkle.duration}s`,
              '--delay': `${sparkle.delay}s`,
              '--size': `${sparkle.size}`,
            } as React.CSSProperties & { [key: string]: string }}
          />
        ))}
      </svg>

      {/* Semi-transparent overlay for depth */}
      <div className={styles.sparkleOverlay} />
    </div>
  );
};

export default SparkleBackground;
