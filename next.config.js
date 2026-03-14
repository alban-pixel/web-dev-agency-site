const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/web-dev-agency-site' : '',
  assetPrefix: isProd ? '/web-dev-agency-site/' : '',
};

module.exports = nextConfig;
