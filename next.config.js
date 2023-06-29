/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/v1/api/:path*',
        destination: 'http://localhost:9090/api/:path*',
      },
    ]
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.ignoreWarnings = [
      { module: /node_modules\/swarm-js\/node_modules\/keyv\/src\/index.js/ },
      { file: /node_modules\/swarm-js\/node_modules\/keyv\/src\/index.js/ },
    ];
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  }
};

module.exports = nextConfig;
