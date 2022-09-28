// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  reactStrictMode: false,
  swcMinify: false,
  env: {
    IPFS: process.env.IPFS === "true" ? "true" : "false",
    COMMIT_SHA:
      process.env.VERCEL_GITHUB_COMMIT_SHA ||
      process.env.GITHUB_SHA ||
      "master",
    POKT_PROJECT_ID: "",
  },
};
