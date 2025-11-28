/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Remove Vercel's default Permissions-Policy header that breaks old browsers
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "Permissions-Policy",
          value: "interest-cohort=()",
        },
      ],
    },
  ],
};

module.exports = nextConfig;