/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
