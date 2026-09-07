import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages; NEXT_PUBLIC_BASE_PATH is set by the
  // deploy workflow (empty in local dev, "/<repo>" on github.io).
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  images: { unoptimized: true },
  // The project lives inside a directory tree that contains a stray parent
  // lockfile; pin the tracing root to this project to silence the warning.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
