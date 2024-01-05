/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  assetPrefix: process.env.NODE_ENV === "development" ? '' : "/sudoku/",

  experimental: {
    serverActions: {
      allowedForwardedHosts: ["http://localhost", "https://justaplant.dev", "http://localhost:3005", "https://justaplant.dev/sudoku", "https://justaplant.dev/", "justaplant.dev"],
      allowedOrigins: ["http://localhost", "https://justaplant.dev", "http://localhost:3005", "https://justaplant.dev/sudoku", "https://justaplant.dev/", "justaplant.dev"]
    }
  }
}

module.exports = nextConfig
