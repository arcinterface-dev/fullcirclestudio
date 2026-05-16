/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable persistent cache in dev to prevent Windows file-locking / rename errors
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
