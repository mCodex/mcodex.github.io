import { useCallback, useEffect, useState } from 'react';
import type { Project } from '../components/Projects/Projects';

const useRepos = () => {
  const initialProjects: Project[] = [
    {
      id: 1,
      title: 'react-native-sensitive-info',
      description:
        '🔐 React Native secure storage, rebuilt with Nitro Modules ⚡️ Biometric-ready, StrongBox-aware, and metadata-rich for modern mobile apps',
      technologies: [
        'React Native',
        'Java',
        'Android',
        'iOS',
        'Keychain',
        'Encryption',
      ],
      githubUrl: 'https://github.com/mCodex/react-native-sensitive-info',
      icon: '🔐',
      stars: 1005,
      category: 'Security',
    },
    {
      id: 2,
      title: 'react-native-rooster',
      description:
        'High-performance, fully-customizable and accessible toast notifications for React Native. WCAG 2.1 AA compliant, fully typed, zero config.',
      technologies: ['React Native', 'TypeScript', 'UI/UX', 'Animations'],
      githubUrl: 'https://github.com/mCodex/react-native-rooster',
      icon: '🐔',
      stars: 32,
      category: 'UI Library',
    },
    {
      id: 3,
      title: 'react-native-inappbrowser-nitro',
      description:
        '🚀 Lightning-fast in-app browser for React Native powered by Nitro Modules. Direct JSI bindings for native performance with Safari View Controller (iOS) & Chrome Custom Tabs (Android). Zero bridge overhead, TypeScript-first, with React hooks support.',
      technologies: [
        'React Native',
        'TypeScript',
        'Nitro Modules',
        'JSI',
        'Safari',
        'Chrome',
      ],
      githubUrl: 'https://github.com/mCodex/react-native-inappbrowser-nitro',
      icon: '🧑‍💻',
      stars: 17,
      category: 'Browser',
    },
    {
      id: 4,
      title: 'react-native-plugpag-nitro',
      description:
        'High-performance React Native library for PagSeguro PlugPag payment terminals with TypeScript-first hooks API, real-time events, and 10x faster performance using Nitro Modules',
      technologies: [
        'React Native',
        'TypeScript',
        'Nitro Modules',
        'Payment',
        'PagSeguro',
        'Hooks',
      ],
      githubUrl: 'https://github.com/mCodex/react-native-plugpag-nitro',
      icon: '💳',
      stars: 1,
      category: 'Payment',
    },
    {
      id: 5,
      title: 'react-native-sized-webview',
      description:
        '📏 React Native WebView that auto-sizes itself, trims CMS fluff, observes media, and keeps parent scroll buttery smooth—no timers, no flicker.',
      technologies: [
        'React Native',
        'TypeScript',
        'WebView',
        'Resize Observer',
        'Mobile',
      ],
      githubUrl: 'https://github.com/mCodex/react-native-sized-webview',
      icon: '📏',
      stars: 2,
      category: 'Utilities',
    },
    {
      id: 6,
      title: 'react-native-nitro-sfsymbols',
      description:
        "🍎 Render Apple's beautiful SF Symbols natively on iOS with React Native. Zero-bridge overhead, fully typed, production-ready.",
      technologies: [
        'React Native',
        'TypeScript',
        'Nitro Modules',
        'iOS',
        'SF Symbols',
        'JSI',
      ],
      githubUrl: 'https://github.com/mCodex/react-native-nitro-sfsymbols',
      icon: '🎨',
      stars: 0,
      category: 'UI Components',
    },
  ];

  const [projectsState, setProjectsState] =
    useState<Project[]>(initialProjects);

  /** Calculate total GitHub stars across all projects */
  const totalStars = projectsState.reduce(
    (sum, project) => sum + project.stars,
    0,
  );

  const fetchStars = useCallback(async () => {
    const updated = await Promise.all(
      projectsState.map(async (project) => {
        if (!project.githubUrl) return project;
        const repo = project.githubUrl.replace('https://github.com/', '');
        try {
          const res = await fetch(`https://api.github.com/repos/${repo}`);
          if (res.ok) {
            const data = await res.json();
            return { ...project, stars: data.stargazers_count };
          }
        } catch (e) {
          console.warn('Failed to fetch stars for', repo, e);
        }
        return project;
      }),
    );

    setProjectsState(updated);
  }, [projectsState]);

  // fetch latest star counts once on mount
  useEffect(() => {
    fetchStars();
  }, [fetchStars]);

  return { projectsState, totalStars };
};

export default useRepos;
