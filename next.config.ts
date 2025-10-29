/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
  images: {
    domains: ['payroll-backend-staging.onrender.com'],
  },
};

module.exports = nextConfig;
