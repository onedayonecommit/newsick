import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import image1 from "../../../public/image/Funding.jpg";
import image2 from "../../../public/image/lee.jpg";
import { PageNationFrame } from "../../components";
import Image from "next/image";

// 펀딩 메인페이지
const data = [
  {
    fundingName: "Funding1",
    creatorName: "Creator1",
    fundingInfo: "Info1",
    image: image1,
  },
  {
    fundingName: "Funding 2",
    creatorName: "Creator 2",
    fundingInfo: "Info 2",
    image: image2,
  },
];
const fundingUItemData = [
  {
    leftTime: "21:30:12",
  },
  {
    leftTime: "21:30:12",
  },
  {
    leftTime: "21:30:12",
  },
  {
    leftTime: "21:30:12",
  },
  {
    leftTime: "21:30:12",
  },
  {
    leftTime: "21:30:12",
  },
  {
    leftTime: "21:30:12",
  },
  {
    leftTime: "21:30:12",
  },
  {
    leftTime: "21:30:12",
  },
  {
    leftTime: "21:30:12",
  },
  {
    leftTime: "21:30:12",
  },
  {
    leftTime: "21:30:12",
  },
  {
    leftTime: "21:30:12",
  },
  {
    leftTime: "21:30:12",
  },
  {
    leftTime: "21:30:12",
  },
  {
    leftTime: "21:30:12",
  },
  {
    leftTime: "21:30:12",
  },
  {
    leftTime: "21:30:12",
  },
  {
    leftTime: "21:30:12",
  },
  {
    leftTime: "21:30:12",
  },
];

const FundingContainer = () => {
  const [selectedDiv, setSelectedDiv] = useState("div1");
  const [selectedPage, setSelectedPage] = useState(1);
  const pageClick = (page: number) => {
    setSelectedPage(page);
  };
  const handleClick = (id: string) => {
    setSelectedDiv(id);
  };
  return (
    <div className="FundingContainerFrame">
      <div className="fundingTopBar">
        <div className="todayCreaterSection">
          <div className="sectionText">Today Creater</div>
          <div className="createrInfoFrame">
            <div className="createrInfoBox">
              <div className="createrInfo">
                <div className="createrName">CreaterName</div>
                <div className="fundingInfo">FundingInfo</div>
              </div>
              <div className="detailButton">DETAIL</div>
            </div>
            <div className="createrImg" />
          </div>
        </div>
        <motion.div className="swiperSection">
          {data.map((item, index) => (
            <motion.div className="swiperBox" key={index}>
              <div className="hotCreaterInfoFrame">
                <div className="hotCreaterInfoBox">
                  <div className="hotFundingName">{item.fundingName}</div>
                  <div className="hotCreaterName">{item.creatorName}</div>
                  <div className="hotFundingInfo">{item.fundingInfo}</div>
                </div>
                <div className="detailButton">DETAIL</div>
              </div>
              <Image className="swiperImage" src={item.image} alt="슬라이드" />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="fundingListSection">
        <div className="listTopBarFram">
          <div className="sequenceSection">
            <div className="feedText">FEED</div>
            <select className="sequenceDropdown">
              <option value="popular">popular</option>
              <option value="Close">Close</option>s<option value="Latest ">Latest </option>
            </select>
          </div>
          <div className="StateSection">
            <motion.div animate={{ color: selectedDiv === "div1" ? "#ffffff" : "rgba(255, 255, 255, 0.4)" }} onClick={() => handleClick("div1")}>
              제작 완료
            </motion.div>
            <motion.div animate={{ color: selectedDiv === "div2" ? "#ffffff" : "rgba(255, 255, 255, 0.4)" }} onClick={() => handleClick("div2")}>
              종료 펀딩
            </motion.div>
            <motion.div animate={{ color: selectedDiv === "div3" ? "#ffffff" : "rgba(255, 255, 255, 0.4)" }} onClick={() => handleClick("div3")}>
              진행중인 펀딩
            </motion.div>
            <motion.div animate={{ color: selectedDiv === "div4" ? "#ffffff" : "rgba(255, 255, 255, 0.4)" }} onClick={() => handleClick("div4")}>
              진행 예정 펀딩
            </motion.div>
          </div>
        </div>
        <div className="listFram">
          {fundingUItemData.map((item, index) => (
            <motion.div className="fundingItem" key={index}>
              <div className="leftTime">{item.leftTime}</div>
            </motion.div>
          ))}
        </div>

        <PageNationFrame />
      </div>
    </div>
  );
};

export default FundingContainer;
