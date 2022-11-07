/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "github.com",
      "www.youtube.com",
      "youtube.com",
      "img.youtube.com",
    ],
  },
};

module.exports = nextConfig;
