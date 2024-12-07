import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',////////////////// // Add the hostname of the external image URL
      },
    ],
  },
};

export default nextConfig;
