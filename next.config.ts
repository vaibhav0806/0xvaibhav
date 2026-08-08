import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "github.com", pathname: "/vaibhav0806.png" },
      { protocol: "https", hostname: "img.logo.dev" },
    ],
  },
};

export default nextConfig;
