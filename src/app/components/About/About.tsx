'use client';

import styles from './About.module.scss';
import { TbMail } from 'react-icons/tb';

const About: React.FC = () => {
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

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>8+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>1K+</span>
                <span className={styles.statLabel}>GitHub Stars</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>6</span>
                <span className={styles.statLabel}>Open Source Projects</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>447</span>
                <span className={styles.statLabel}>Contributions This Year</span>
              </div>
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
