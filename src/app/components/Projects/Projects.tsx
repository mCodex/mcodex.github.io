import React from 'react';
import styles from './Projects.module.scss';
import { TbBrandGithub, TbExternalLink, TbStar } from 'react-icons/tb';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  icon: string;
  stars: number;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "react-native-sensitive-info",
      description: "Save sensitive data into Android's Shared Preferences with keystore encryption/iOS's Keychain for React Native. A widely adopted security solution for React Native apps.",
      technologies: ["React Native", "Java", "Android", "iOS", "Keychain", "Encryption"],
      githubUrl: "https://github.com/mCodex/react-native-sensitive-info",
      icon: "🔐",
      stars: 987
    },
    {
      id: 2,
      title: "react-native-inappbrowser-nitro",
      description: "🚀 Lightning-fast in-app browser for React Native powered by Nitro Modules. Direct JSI bindings for native performance with Safari View Controller (iOS) & Chrome Custom Tabs (Android).",
      technologies: ["React Native", "TypeScript", "Nitro Modules", "JSI", "Safari", "Chrome"],
      githubUrl: "https://github.com/mCodex/react-native-inappbrowser-nitro",
      icon: "🧑‍💻",
      stars: 6
    },
    {
      id: 3,
      title: "react-native-rooster",
      description: "Your toast solution for react-native apps 🐔. A clean and customizable toast notification library with smooth animations and flexible positioning.",
      technologies: ["React Native", "TypeScript", "UI/UX", "Animations"],
      githubUrl: "https://github.com/mCodex/react-native-rooster",
      icon: "🐔",
      stars: 29
    },
    {
      id: 4,
      title: "react-native-plugpag-nitro",
      description: "High-performance React Native library for PagSeguro PlugPag payment terminals with TypeScript-first hooks API, real-time events, and 10x faster performance using Nitro Modules.",
      technologies: ["React Native", "TypeScript", "Nitro Modules", "Payment", "PagSeguro", "Hooks"],
      githubUrl: "https://github.com/mCodex/react-native-plugpag-nitro",
      icon: "💳",
      stars: 1
    },
  ];

  // Calculate total stars
  const totalStars = projects.reduce((sum, project) => sum + project.stars, 0);

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <p className={styles.sectionSubtitle}>
          A collection of my recent work showcasing expertise in React Native, React.js, 
          Node.js, and modern JavaScript development.
        </p>
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <TbStar size={20} />
            <span>{totalStars}+ GitHub Stars</span>
          </div>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <div className={styles.projectImage}>
                  <span style={{ fontSize: '3rem' }}>{project.icon}</span>
                </div>
                <div className={styles.projectMeta}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={styles.starsCount}>
                    <TbStar size={16} />
                    <span>{project.stars}</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.projectContent}>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.techStack}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.projectFooter}>
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.codeButton}
                  >
                    <TbBrandGithub size={16} />
                    View Code
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.demoButton}
                  >
                    <TbExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.viewMoreContainer}>
          <a 
            href="https://github.com/mCodex" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.viewMoreButton}
          >
            <TbBrandGithub size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
