import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import GloalStyle from '../src/styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>mCodex - Mateus Andrade</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Component {...pageProps} />
    <GloalStyle />
  </>
);

export default MyApp;
