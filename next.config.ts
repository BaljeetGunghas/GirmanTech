/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables React strict mode for better debugging
  swcMinify: true, // Enables SWC for faster builds and minification
  images: {
    domains: [], // Add allowed domains for optimized images if using next/image
  },
  env: {
    // Add environment variables here if needed
    CUSTOM_KEY: "my-custom-value",
  },
};

module.exports = nextConfig;
