/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  reactStrictMode: true,
  env: {
    GOOGLEMAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLEMAPS_API_KEY,
  },
  images: {
    loader: "akamai",
    path: "",
  },
}