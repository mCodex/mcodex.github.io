'use client';
import { TbBrandGithub, TbExternalLink, TbStar } from 'react-icons/tb';
import useRepos from '@/app/hooks/useRepos';
import styles from './Projects.module.scss';

/**
 * Project interface defining the structure of project data
 * @interface Project
 * @property {number} id - Unique identifier for the project
 * @property {string} title - Project name/title
 * @property {string} description - Detailed project description
 * @property {string[]} technologies - Array of tech stack used
 * @property {string} [githubUrl] - Optional GitHub repository URL
 * @property {string} [liveUrl] - Optional live demo URL
 * @property {string} icon - Emoji or icon identifier for visual representation
 * @property {number} stars - GitHub stars count for popularity
 * @property {string} [category] - Optional project category/type
 */
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  icon: string;
  stars: number;
  category?: string;
}

/**
 * Projects Component - Showcases featured open-source and professional projects
 *
 * Features:
 * - Responsive grid layout that adapts to different screen sizes
 * - Glassmorphism card design with hover animations
 * - GitHub stars display and statistics
 * - Technology tag badges
 * - Links to GitHub repositories and live demos
 * - Animated stats bar showing cumulative GitHub stars
 *
 * @component
 * @returns {React.ReactElement} The projects showcase section
 *
 * @example
 * // Usage in page layout
 * <Projects />
 */
const Projects: React.FC = () => {
  const { projectsState, totalStars } = useRepos();

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <p className={styles.sectionSubtitle}>
          A collection of my recent work showcasing expertise in React Native,
          React.js, Node.js, and modern JavaScript development.
        </p>
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <TbStar size={20} />
            <span>{totalStars}+ GitHub Stars</span>
          </div>
        </div>

        <div className={styles.projectGrid}>
          {projectsState.map((project) => (
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
                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.techStack}>
                  {project.technologies.map((tech, index) => (
                    <span key={index.toString()} className={styles.techTag}>
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
