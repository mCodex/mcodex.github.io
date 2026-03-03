'use client';

import Image from 'next/image';
import { TbChevronDown } from 'react-icons/tb';
import SparkleBackground from '../SparkleBackground/SparkleBackground';
import styles from './Hero.module.scss';

/**
 * Hero Component - Main landing section of the portfolio
 *
 * Displays the primary introduction with:
 * - Animated sparkle background for visual interest
 * - Profile avatar with hover effects
 * - Name and title with gradient text
 * - Compelling description
 * - Skill tags with modern styling
 * - Call-to-action buttons
 * - Animated scroll indicator
 *
 * Design: Apple Liquid Glass aesthetic with glassmorphism effects
 *
 * @component
 * @returns {React.ReactElement} The hero section with all intro elements
 *
 * @example
 * // Usage in page layout
 * <section id="home">
 *   <Hero />
 * </section>
 */
const Hero: React.FC = () => {
  /** Array of key technologies and skills */
  const skills = [
    'React Native',
    'React.js',
    'Node.js',
    'TypeScript',
    'JavaScript',
    'Next.js',
    'React',
    'Mobile Development',
  ];

  /**
   * Smoothly scrolls to the projects section
   * Uses native scroll API with smooth behavior
   */
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      {/* Sparkle background animation - subtle and discrete */}
      <SparkleBackground count={8} />

      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.avatar}>
            <Image
              src="/avatar.jpeg"
              alt="mCodex Avatar"
              width={150}
              height={150}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Crect width='150' height='150' fill='%23007BFF'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='60' font-family='Arial'%3EmC%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>

          <h1 className={styles.title}>mCodex</h1>
          <p className={styles.subtitle}>
            Full-Stack Developer & JavaScript Enthusiast
          </p>

          <p className={styles.description}>
            Passionate about creating exceptional mobile and web experiences
            with React Native, React.js, and Node.js. I love building scalable
            applications and exploring the latest in JavaScript ecosystem.
          </p>

          <div className={styles.skills}>
            {skills.map((skill) => (
              <span key={skill} className={styles.skillTag}>
                {skill}
              </span>
            ))}
          </div>

          <div className={styles.cta}>
            <a
              href="#projects"
              className={`${styles.button} ${styles.primary}`}
            >
              View My Work
            </a>
            <a
              href="mailto:mat.andrade@live.com"
              className={`${styles.button} ${styles.secondary}`}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <button
        type="button"
        className={styles.scrollIndicator}
        onClick={scrollToProjects}
        aria-label="Scroll to projects"
      >
        <TbChevronDown size={24} />
      </button>
    </section>
  );
};

export default Hero;
