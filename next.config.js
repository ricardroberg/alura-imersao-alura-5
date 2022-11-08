/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "github.com",
      "youtube.com",
      "www.youtube.com",
      "img.youtube.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
