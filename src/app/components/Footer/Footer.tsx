
import styles from './Footer.module.scss';
import { TbBrandGithub, TbBrandLinkedin, TbBrandX } from 'react-icons/tb';

/**
 * Footer Component - Site footer with social links, contact info, and navigation
 * 
 * Features:
 * - Responsive grid layout for desktop and mobile
 * - Social media links with hover animations
 * - Quick navigation links
 * - Contact information
 * - Copyright and attribution
 * - Modern glassmorphism effects and gradients
 * 
 * @component
 * @returns {React.ReactElement} The footer section with all meta information
 * 
 * @example
 * // Usage at the bottom of pages
 * <Footer />
 */
const Footer: React.FC = () => {
  /** Get current year dynamically for copyright notice */
  const currentYear = new Date().getFullYear();

  /**
   * Social media links configuration
   * @type {Array<{href: string, label: string, icon: React.ReactNode}>}
   */
  const socialLinks = [
    {
      href: "https://github.com/mcodex",
      label: "GitHub",
      icon: TbBrandGithub
    },
    {
      href: "https://www.linkedin.com/in/mat-andrade/",
      label: "LinkedIn",
      icon: TbBrandLinkedin
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.brand}>
            <h3>mCodex</h3>
            <p>Building the future, one line of code at a time.</p>
          </div>

          <div className={styles.socialLinks}>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.label}
                  title={social.label}
                >
                  <Icon size={24} />
                </a>
              );
            })}
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
