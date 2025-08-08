'use client';

import { useState, useEffect } from 'react';
import styles from './Navigation.module.scss';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

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
