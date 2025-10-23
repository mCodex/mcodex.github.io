'use client';

import styles from './About.module.scss';
import { TbMail } from 'react-icons/tb';

/**
 * About Component - Introduces the developer with background and statistics
 * 
 * Displays:
 * - Professional background and experience narrative
 * - Key statistics (years of experience, GitHub stars, projects, contributions)
 * - Call-to-action button for collaboration
 * - Animated stat counters for visual interest
 * 
 * @component
 * @returns {React.ReactElement} The about section with biographical content
 * 
 * @example
 * // Usage in page layout
 * <section id="about">
 *   <About />
 * </section>
 */
const About: React.FC = () => {
  /**
   * Statistics data representing key achievements and metrics
   * @type {Array<{number: string, label: string}>}
   */
  const stats = [
    { number: '8+', label: 'Years Experience' },
    { number: '1K+', label: 'GitHub Stars' },
    { number: '6', label: 'Open Source Projects' },
    { number: '447', label: 'Contributions This Year' }
  ];

  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2>About Me</h2>
            <p>
              I&apos;m a passionate full-stack developer with a deep love for JavaScript and its ecosystem. 
              My journey began with web development, but I quickly fell in love with React Native&apos;s 
              ability to create native mobile experiences with the web technologies I already knew.
            </p>
            <p>
              Over the years, I&apos;ve specialized in building scalable applications that provide exceptional 
              user experiences. From mobile apps that serve thousands of users to backend systems that 
              handle complex business logic, I enjoy every aspect of the development process.
            </p>
            <p>
              As a generalist JavaScript developer with a passion for back-end and software architecture, 
              I&apos;ve been working with React/React-Native/NodeJS since 2015. I&apos;m constantly learning 
              and exploring new technologies like Go, Elixir, Docker, Kubernetes, and cloud-native solutions.
            </p>

            {/** Stats showcase with key metrics and achievements */}
            <div className={styles.stats}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>

            <a href="mailto:mat.andrade@live.com" className={styles.contactButton}>
              <TbMail size={20} />
              Let&apos;s Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
