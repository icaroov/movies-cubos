/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const path = require('path')
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd,
})

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
  },
}

module.exports = withPWA(nextConfig)
