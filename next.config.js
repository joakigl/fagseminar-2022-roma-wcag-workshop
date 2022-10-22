/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["nb", "nn", "se", "en"],
    defaultLocale: "nb",
  },
};

module.exports = nextConfig;
