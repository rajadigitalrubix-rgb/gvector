import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow images from any domain
  images: {
    unoptimized: true,
  },
  // Required for Hostinger Node.js hosting
  output: "standalone",
};

export default nextConfig;
