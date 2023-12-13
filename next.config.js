/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bezybee-public-bucket.s3.ca-central-1.amazonaws.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
