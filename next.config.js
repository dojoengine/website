/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    experimental: {
        serverActions: true,
    },
    images: {
        remotePatterns: [
            {
                hostname: 'loaf.coffee',
            },
        ],
    },
}

module.exports = nextConfig
