// eslint-disable-next-line
const withPWA = require('next-pwa')({
  dest: 'public',
});

const isProd = process.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPWA({
  ...nextConfig,
  pwa: {
    dest: 'public',
    disable: !isProd,
  },
});
