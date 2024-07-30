/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['codante.s3.amazonaws.com'],
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: `${process.env.API_BASE_URL}/:path*`,
        },
      ];
    },
  };
  
  export default nextConfig;