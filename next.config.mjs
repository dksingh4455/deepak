/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    swcMinify: true, // Explicitly enable SWC minification
  },
};

export default nextConfig;

