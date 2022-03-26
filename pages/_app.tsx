import Head from 'next/head';
import { AppProps } from 'next/app';
import Router from 'next/router';
import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';

import GloalStyle from '../src/styles/global';

import { pageview } from '../src/services/ga';

Router.events.on(
  'routeChangeComplete',
  (url) => process.env.NODE_ENV === 'production' && pageview(url)
);

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>mCodex - Mateus Andrade</title>
    </Head>
    <DefaultSeo {...SEO} />
    <Component {...pageProps} />
    <GloalStyle />
  </>
);

export default MyApp;
