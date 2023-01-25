/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["newsic-userprofile-nft-metadata-bucket.s3.ap-northeast-2.amazonaws.com"],
  },
};

module.exports = nextConfig;
