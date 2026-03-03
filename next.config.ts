import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',

  reactCompiler: true,

  images: {
    unoptimized: true,
  },

  experimental: {
    useCache: true,
    useLightningcss: true,
  },
};

export default nextConfig;
