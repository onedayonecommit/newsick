/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["i.pinimg.com", "newsic-userprofile-nft-metadata-bucket.s3.ap-northeast-2.amazonaws.com", "nftstorage.link"],
  },
};

module.exports = nextConfig;
