/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // eslint-disable-next-line require-await
  redirects: async () => [
    {
      source: '/live',
      destination: '/',
      permanent: false,
    },
  ],
}

module.exports = nextConfig;
