import { ReactNode } from 'react';
import StyledComponentsRegistry from '@/src/lib/styled-components-registry';
import ClientLayout from '@/src/lib/client-layout';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';

const montSerrat = Montserrat({
  weight: ['400', '500', '600'],
});

export default function RootLayout({ children }: { children: ReactNode }): React.JSX.Element {
  return (
    <html lang="en">
      <Head>
        <title>mCodex - Mateus Andrade</title>
      </Head>
      <body className={montSerrat.className}>
        <StyledComponentsRegistry>
          <ClientLayout>{children}</ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
