
import styles from './Projects.module.scss';
import { TbBrandGithub, TbExternalLink, TbStar } from 'react-icons/tb';

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
interface Project {
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
  /** Array of featured projects with detailed metadata */
  const projects: Project[] = [
    {
      id: 1,
      title: "react-native-sensitive-info",
      description: "🔐 React Native secure storage, rebuilt with Nitro Modules ⚡️ Biometric-ready, StrongBox-aware, and metadata-rich for modern mobile apps",
      technologies: ["React Native", "Java", "Android", "iOS", "Keychain", "Encryption"],
      githubUrl: "https://github.com/mCodex/react-native-sensitive-info",
      icon: "🔐",
      stars: 1005,
      category: "Security"
    },
    {
      id: 2,
      title: "react-native-rooster",
      description: "High-performance, fully-customizable and accessible toast notifications for React Native. WCAG 2.1 AA compliant, fully typed, zero config.",
      technologies: ["React Native", "TypeScript", "UI/UX", "Animations"],
      githubUrl: "https://github.com/mCodex/react-native-rooster",
      icon: "🐔",
      stars: 32,
      category: "UI Library"
    },
    {
      id: 3,
      title: "react-native-inappbrowser-nitro",
      description: "🚀 Lightning-fast in-app browser for React Native powered by Nitro Modules. Direct JSI bindings for native performance with Safari View Controller (iOS) & Chrome Custom Tabs (Android). Zero bridge overhead, TypeScript-first, with React hooks support.",
      technologies: ["React Native", "TypeScript", "Nitro Modules", "JSI", "Safari", "Chrome"],
      githubUrl: "https://github.com/mCodex/react-native-inappbrowser-nitro",
      icon: "🧑‍💻",
      stars: 17,
      category: "Browser"
    },
    {
      id: 4,
      title: "react-native-plugpag-nitro",
      description: "High-performance React Native library for PagSeguro PlugPag payment terminals with TypeScript-first hooks API, real-time events, and 10x faster performance using Nitro Modules",
      technologies: ["React Native", "TypeScript", "Nitro Modules", "Payment", "PagSeguro", "Hooks"],
      githubUrl: "https://github.com/mCodex/react-native-plugpag-nitro",
      icon: "💳",
      stars: 1,
      category: "Payment"
    },
    {
      id: 5,
      title: "react-native-sized-webview",
      description: "📏 React Native WebView that auto-sizes itself, trims CMS fluff, observes media, and keeps parent scroll buttery smooth—no timers, no flicker.",
      technologies: ["React Native", "TypeScript", "WebView", "Resize Observer", "Mobile"],
      githubUrl: "https://github.com/mCodex/react-native-sized-webview",
      icon: "📏",
      stars: 2,
      category: "Utilities"
    },
    {
      id: 6,
      title: "react-native-nitro-sfsymbols",
      description: "🍎 Render Apple's beautiful SF Symbols natively on iOS with React Native. Zero-bridge overhead, fully typed, production-ready.",
      technologies: ["React Native", "TypeScript", "Nitro Modules", "iOS", "SF Symbols", "JSI"],
      githubUrl: "https://github.com/mCodex/react-native-nitro-sfsymbols",
      icon: "🎨",
      stars: 0,
      category: "UI Components"
    },
  ];

  /** Calculate total GitHub stars across all projects */
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
