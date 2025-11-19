import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
           protocol: "https",
           hostname: "assets.aceternity.com",
           pathname: "/**",
         },
      {
           protocol: "https",
           hostname: "img.youtube.com",
           pathname: "/**",
         },
    ],
  },
};

export default nextConfig;