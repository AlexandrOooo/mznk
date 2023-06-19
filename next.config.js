/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.rozetka.com.ua'
      }
    ]
  }
}

module.exports = nextConfig
