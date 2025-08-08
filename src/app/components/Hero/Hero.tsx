'use client';

import styles from './Hero.module.scss';
import { TbChevronDown } from 'react-icons/tb';

const Hero: React.FC = () => {
  const skills = [
    'React Native',
    'React.js',
    'Node.js',
    'TypeScript',
    'JavaScript',
    'Next.js',
    'React',
    'Mobile Development'
  ];

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.avatar}>
            <img 
              src="/avatar.jpeg" 
              alt="mCodex Avatar"
              width={150}
              height={150}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Crect width='150' height='150' fill='%23007BFF'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='60' font-family='Arial'%3EmC%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
          
          <h1 className={styles.title}>mCodex</h1>
          <p className={styles.subtitle}>Full-Stack Developer & JavaScript Enthusiast</p>
          
          <p className={styles.description}>
            Passionate about creating exceptional mobile and web experiences with React Native, 
            React.js, and Node.js. I love building scalable applications and exploring the 
            latest in JavaScript ecosystem.
          </p>

          <div className={styles.skills}>
            {skills.map((skill, index) => (
              <span key={index} className={styles.skillTag}>
                {skill}
              </span>
            ))}
          </div>

          <div className={styles.cta}>
            <a href="#projects" className={`${styles.button} ${styles.primary}`}>
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
      
      <div className={styles.scrollIndicator} onClick={scrollToProjects}>
        <TbChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
