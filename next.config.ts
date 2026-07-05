import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingExcludes: {
    "*": [
      "public/images/projects/**/*.mov",
      "public/images/projects/**/*.mp4",
    ],
  },
};

export default nextConfig;
