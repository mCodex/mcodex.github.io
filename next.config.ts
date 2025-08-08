import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  
  experimental: {
    useCache: true,
    useLightningcss: true,
  }
};

export default nextConfig;
