import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  outputFileTracingExcludes: {
    "*": [
      "public/images/projects/**/*.mov",
      "public/images/projects/**/*.mp4",
    ],
  },
};

export default nextConfig;
