import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/de',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;