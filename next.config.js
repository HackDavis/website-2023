/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // eslint-disable-next-line require-await
  redirects: async () => [
    {
      source: '/',
      destination: '/live',
      permanent: false,
    },
  ],
};

module.exports = nextConfig;
