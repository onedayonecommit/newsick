import Image from "next/image";
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>123</div>
      <Image
        src={
          "https://newsic-userprofile-nft-metadata-bucket.s3.ap-northeast-2.amazonaws.com/2f6da4e8-35e6-4f7d-8e92-48c54b0d2d70.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2HAZVLM4FI2SC22N%2F20230112%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20230112T025808Z&X-Amz-Expires=900&X-Amz-Signature=34930b19627ccb25451aa341635a38e722e3907b4373386001412cb762da2023&X-Amz-SignedHeaders=host"
        }
        alt="logo"
        width={300}
        height={300}
      />
    </>
  );
}
