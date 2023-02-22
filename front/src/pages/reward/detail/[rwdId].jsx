import React from "react";
import { motion } from "framer-motion";
import leeImg from "../../../../public/image/lee.jpg";
import { useRef } from "react";
import { useState } from "react";
import FundingDetailModal from "@/components/FundingDetailModal";
import Image from "next/image";
import { useSelector } from "react-redux";
import useWeb3 from "@/hooks/useWeb3";
import { useRouter } from "next/router";

const FundingDetail = () => {
  const _pageData = useSelector((state) => state.fundList.page);
  const { web3, NEWSIC_FUND } = useWeb3();
  const [amount, setAmount] = useState(0);
  const infoSlideFrameRef = useRef(null);

  const block = Array.from({ length: 10 });
  const [hoverFunding, setHoverFunding] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onHoverFundingImg = () => {
    setHoverFunding(true);
  };
  const onLeaveFundingImg = () => {
    setHoverFunding(false);
  };
  const handleBoxClick = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const user = useSelector((state) => state.userInfo);
  const fundBuy = async () => {
    const _price = await web3.utils.toWei(_pageData.funding_price, "ether");
    const _temp = String(_price * amount);
    console.log(_temp);
    try {
      const _buy_ticket = await NEWSIC_FUND.methods
        .mint(_pageData.id, amount, "0x00")
        .send({ from: user.address, value: _temp });
      return _buy_ticket;
    } catch (error) {}
  };

  return (
    <div className="fundingDetailFrame">
      {isModalOpen && (
        <FundingDetailModal isOpen={isModalOpen} onClose={handleModalClose}>
          <div className="fundingInfoSection"></div>
        </FundingDetailModal>
      )}
      <div className="fundingInfoSection" ref={infoSlideFrameRef}>
        <motion.div className="fundingImgFrame">
          <Image
            src={_pageData.funding_nft_image}
            width={100}
            height={100}
            alt="fundingImg"
            className="fundingImg"
          />
          <div className="fundingImgInfo">
            <div className="buyNum">
              <input
                type="number"
                onChange={(e) => setAmount(e.target.value)}
              />
              <div>개</div>
            </div>
            <div className="buyButton" onClick={fundBuy}>
              BUY
            </div>
          </div>
        </motion.div>
        <motion.div className="infoSlideFrame">
          {/* {right:0,left:-510} */}
          <motion.div
            className="infoList"
            drag="x"
            dragConstraints={{ right: 0, left: -1300 }}
          >
            <motion.div
              className="infoItemBox"
              onClick={handleBoxClick}
              initial={{ x: "100vh", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1, type: "spring" }}
            >
              <div className="title">펀딩 타이틀</div>
              <div className="innerText">
                제작기간, 개당판매단가, 펀딩목표금액, 등
              </div>
            </motion.div>
            <motion.div
              className="infoItemBox"
              initial={{ x: "100vh", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.2, type: "spring" }}
            >
              <div className="title">가수 프로필</div>
              <div className="innerText">
                the 1500s, when an unknown printer took a galleymbled it to make
                a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.mbled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting,{" "}
              </div>
            </motion.div>
            <motion.div
              className="infoItemBox"
              initial={{ x: "100vh", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.3, type: "spring" }}
            >
              <div className="title">작사가 프로필</div>
              <div className="innerText">
                the 1500s, when an unknown printer took a galleymbled it to make
                a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.mbled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting,{" "}
              </div>
            </motion.div>
            <motion.div
              className="infoItemBox"
              initial={{ x: "100vh", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.4, type: "spring" }}
            >
              <div className="title">작곡가 프로필</div>
              <div className="innerText">
                the 1500s, when an unknown printer took a galleymbled it to make
                a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.mbled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting,{" "}
              </div>
            </motion.div>
            <motion.div
              className="infoItemBox"
              initial={{ x: "100vh", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.5, type: "spring" }}
            >
              <div className="title">기타 정보들</div>
              <div className="innerText">
                기타정보, 디스코드 주소, 각종 링크들
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <div className="announcementSection">
        <div className="announcementTitle">공지사항</div>
        <div className="announcementList">
          {block.map((index) => (
            <motion.div
              className="announcementItem"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, type: "spring", delay: 0.1 * index }}
            ></motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FundingDetail;
