/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.ton.eu',
          },
        ],
      },
};

export default nextConfig;
