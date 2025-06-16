import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['www.ceerbourgogne.com'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    mdxRs: true,
  },
};

export default nextConfig; 