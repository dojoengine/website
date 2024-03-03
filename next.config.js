/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  trailingSlash: true,
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "loaf.coffee",
      },
    ],
  },
  swcMinify: false,
};

module.exports = nextConfig;
