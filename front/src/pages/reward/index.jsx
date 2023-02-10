// 펀딩 메인페이지
/*
- 진행중인 펀딩
- 진행 예정 펀딩
- 종료 펀딩
- 제작 완료
*/
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import image1 from "../../../public/image/Funding.jpg";
import image2 from "../../../public/image/lee.jpg";
import { PageNationFrame } from "@/components";
import useWeb3 from "@/hooks/useWeb3";

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
  const { web3, NEWSIC_FUND } = useWeb3();

  console.log(web3);
  console.log(NEWSIC_FUND);
  const test = async () => {
    console.log("dddd");
    const fundList = await NEWSIC_FUND.methods.viewAll().call();
    console.log("펀딩 리스트 컨트랙트", fundList);
  };

  // useEffect(()=>{},)

  const handleClick = (id) => {
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
              <button className="detailButton" onClick={test}>
                DETAIL
              </button>
            </div>
            <div className="createrImg" />
          </div>
          ß
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
              <img
                className="swiperImage"
                src={item.image.src}
                alt={item.fundingName}
              />
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
              <option value="Close">Close</option>s
              <option value="Latest ">Latest </option>
            </select>
          </div>
          <div className="StateSection">
            <motion.div
              style={{
                color:
                  selectedDiv === "div1"
                    ? "#ffffff"
                    : "rgba(255, 255, 255, 0.4)",
              }}
              onClick={() => handleClick("div1")}
            >
              진행중인 펀딩
            </motion.div>
            <motion.div
              style={{
                color:
                  selectedDiv === "div2"
                    ? "#ffffff"
                    : "rgba(255, 255, 255, 0.4)",
              }}
              onClick={() => handleClick("div2")}
            >
              진행 예정 펀딩
            </motion.div>
            <motion.div
              style={{
                color:
                  selectedDiv === "div3"
                    ? "#ffffff"
                    : "rgba(255, 255, 255, 0.4)",
              }}
              onClick={() => handleClick("div3")}
            >
              제작중(버튼)
            </motion.div>
            <motion.div
              style={{
                color:
                  selectedDiv === "div4"
                    ? "#ffffff"
                    : "rgba(255, 255, 255, 0.4)",
              }}
              onClick={() => handleClick("div4")}
            >
              종료 펀딩
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
