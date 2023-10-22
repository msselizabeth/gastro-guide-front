/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "gg-southamerica.s3.eu-central-1.amazonaws.com",
      "gg-northamerica.s3.eu-central-1.amazonaws.com",
    ], 
  },
};

const withNextIntl = require("next-intl/plugin")(
  "./i18n.js"
);

module.exports = withNextIntl(nextConfig);
