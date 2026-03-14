const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/web-dev-agency-site' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
