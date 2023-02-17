/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["i.pinimg.com", "gyeongil-newsic-2team-bucket.s3.ap-northeast-3.amazonaws.com", "nftstorage.link"],
  },
};

module.exports = nextConfig;
