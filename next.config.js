/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  nextConfig,
  plugins: [["vite-plugin-next", {}]],
  experimental: {
    reactServerComponents: true,
  },
};
