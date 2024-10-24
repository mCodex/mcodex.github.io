'use client';

import { ReactNode } from 'react';
import { ThemeProvider, type DefaultTheme } from 'styled-components';
import GlobalStyle from '@/src/styles/global';

export default function ClientLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <ThemeProvider theme={{} as DefaultTheme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
}
