import React from 'react';
import styles from './Footer.module.scss';
import { TbBrandGithub, TbBrandLinkedin, TbBrandX } from 'react-icons/tb';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.brand}>
            <h3>mCodex</h3>
            <p>Building the future, one line of code at a time.</p>
          </div>

          <div className={styles.socialLinks}>
            <a 
              href="https://github.com/mcodex" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <TbBrandGithub size={24} />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/mat-andrade/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <TbBrandLinkedin size={24} />
            </a>
          </div>

          <div className={styles.contact}>
            <h4>Get In Touch</h4>
            <p><a href="mailto:mat.andrade@live.com">mat.andrade@live.com</a></p>
            <p>Available for freelance work</p>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.quickLinks}>
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="mailto:mat.andrade@live.com">Contact</a>
          </div>
          <p>© {currentYear} mCodex. All rights reserved. Built with Next.js & ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
