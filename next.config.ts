import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    experimental: {
    turbo: false, // Turbopack বন্ধ
  },
};

export default nextConfig;
