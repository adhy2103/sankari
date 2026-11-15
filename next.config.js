/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disables Next.js image optimization proxy so images load directly on Netlify, Vercel, and static hosts
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
