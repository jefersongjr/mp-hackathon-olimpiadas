/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['codante.s3.amazonaws.com'],
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://apis.codante.io/olympic-games/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;