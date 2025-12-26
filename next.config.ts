import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**", // Allows all paths from this domain
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", 
      },
    ],
  },
  // Optional: Automatically remove console.* logs in production to keep it clean
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;