'use client';

import { ReactNode } from 'react';
import { ThemeProvider, type DefaultTheme } from 'styled-components';
import GlobalStyle from '@/src/styles/global';
import { DefaultSeo } from 'next-seo';

import SEO from '../../next-seo.config';

export default function ClientLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <ThemeProvider theme={{} as DefaultTheme}>
      {children}

      <GlobalStyle />
      <DefaultSeo {...SEO} />
    </ThemeProvider>
  );
}
