/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: "github.com",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "pbs.twimg.com",
      },
    ],
  },
  reactStrictMode: false,
  transpilePackages: ["@vapotertn/ui", "@vapotertn/utils", "@vapotertn/database"],
};
