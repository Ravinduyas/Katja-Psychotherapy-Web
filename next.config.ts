import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // The project lives inside a directory tree that contains a stray parent
  // lockfile; pin the tracing root to this project to silence the warning.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
