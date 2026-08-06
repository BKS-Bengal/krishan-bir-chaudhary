/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/timeline', destination: '/journey', permanent: true },
      { source: '/issues', destination: '/agriculture', permanent: true },
    ];
  },
};

export default nextConfig;
