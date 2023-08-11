/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
