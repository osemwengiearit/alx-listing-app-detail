import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;

module.exports = {
  images: {
    domains: ['example.com'], // ✅ add your domains here
  },
};
