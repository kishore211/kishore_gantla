/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'github.com', 'avatars.githubusercontent.com'],
  },
  // Remove output: 'standalone' for Vercel deployment
  // output: 'standalone',
}

module.exports = nextConfig
