import useWeb3 from "@/hooks/useWeb3";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PageNationFrame from "../PageNationFrame";
import Atropos from "atropos/react";
import "atropos/atropos.css";
import { useRouter } from "next/router";

const My_NFT = () => {
  const router = useRouter();
  const myNftList = useSelector((state) => state.myPageInfo.myNftList);
  useEffect(() => {
    console.log(myNftList[0].image, "good");
    console.log(myNftList.image, "good");
    console.log(myNftList, "good");
    console.log(myNftList[0], "good");
  }, []);
  return (
    <div className="thirdMyPage">
      <div className="MyPageThirdContainerFrame">
        <div className="infoSection">
          <div className="infoFrame">
            <div>소유한 NFT 총 갯수</div>
            <div>{myNftList.length}</div>
          </div>
          <div className="underLine" />
        </div>
        <div className="fundingItemList">
          {myNftList.map((item) => (
            <Atropos className="ownedNftBox atropos-banner" key={item.tokenId}>
              <div className="ownedNftFrame">
                <Image className="ownNftImg" src={item.data.image} alt="3dRender" width={210} height={189} data-atropos-offset="10" />
                <div className="nftTitleSection" data-atropos-offset="10">
                  <div>{item.data.name}</div>
                </div>
                <div className="middleLine" />
                <div
                  className="sellButton"
                  data-atropos-offset="10"
                  onClick={() => {
                    router.push("");
                  }}
                >
                  판 매 하 기
                </div>
              </div>
            </Atropos>
          ))}
        </div>
      </div>
      <div className="pageNationFrame">
        <PageNationFrame />
      </div>
    </div>
  );
};

export default My_NFT;

/** 
 {myNftList.length != 0 ? (
            myNftList.map((item) => (
              <div className="ownedNftBox">
                <div className="ownedNftFrame">
                  <Image className="ownNftImg" src={item.data.image} alt="3dRender" width={210} height={189} />
                  <div className="nftTitleSection">
                    <div>{item.data.name}</div>
                    <button
                      onClick={() => {
                        router.replace(`/NFTmarket/${item.tokenId}`);
                      }}
                      style={{ color: "red" }}
                    >
                      판매
                    </button>
                  </div>
                  <div className="middleLine" />
                  <div className="infoSection">{item.data.description}</div>
                </div>
              </div>
            ))
          ) : (
            <div>보유한 Nft가 없습니다 펀딩 혹은 마켓플레이스 이용하여 nft를 구매하실 수 있습니다!</div>
          )}
 */
