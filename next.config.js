/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [],
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'out'
}

module.exports = nextConfig