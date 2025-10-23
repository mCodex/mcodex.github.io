'use client';

import { useState, useEffect } from 'react';
import styles from './Navigation.module.scss';

/**
 * Navigation Component - Fixed header with responsive navigation menu
 * 
 * Features:
 * - Fixed positioning with scroll detection for enhanced styling
 * - Mobile-responsive hamburger menu with smooth animations
 * - Smooth scroll to section navigation
 * - Backdrop blur for modern glassmorphism effect
 * - Dynamic styling based on scroll position
 * 
 * @component
 * @returns {React.ReactElement} Navigation bar with menu overlay
 * 
 * @example
 * // Usage in layout
 * <Navigation />
 */
const Navigation: React.FC = () => {
  /** State for mobile menu visibility */
  const [isOpen, setIsOpen] = useState(false);
  
  /** State for scroll detection - triggers header styling changes */
  const [isScrolled, setIsScrolled] = useState(false);

  /**
   * Handles scroll event to update header styling
   * Adds shadow and background changes when user scrolls beyond 50px
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Toggles mobile menu visibility
   */
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  /**
   * Closes the mobile menu
   */
  const closeMenu = () => {
    setIsOpen(false);
  };

  /**
   * Scrolls to a specific section smoothly using native scroll API
   * @param {string} sectionId - The HTML ID of the target section
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <div className="container">
          <div className={styles.navContent}>
            <a 
              href="#home" 
              className={styles.logo}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              mCodex
            </a>

            <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
              <li className={styles.navLink}>
                <a 
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                  }}
                >
                  Home
                </a>
              </li>
              <li className={styles.navLink}>
                <a 
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('projects');
                  }}
                >
                  Projects
                </a>
              </li>
              <li className={styles.navLink}>
                <a 
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                >
                  About
                </a>
              </li>
              <li className={styles.navLink}>
                <a href="mailto:mat.andrade@live.com">Contact</a>
              </li>
            </ul>

            <button 
              className={`${styles.menuToggle} ${isOpen ? styles.open : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div 
        className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
        onClick={closeMenu}
      />
    </>
  );
};

export default Navigation;
