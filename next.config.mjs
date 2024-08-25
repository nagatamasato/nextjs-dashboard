/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    esmExternals: {
      ppr: 'incremental',
    }
  },
};

export default nextConfig;
