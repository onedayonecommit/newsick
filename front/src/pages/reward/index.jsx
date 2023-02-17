import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import image1 from "../../../public/image/Funding.jpg";
import image2 from "../../../public/image/lee.jpg";
import PageNationFrame from "../../components/PageNationFrame";
import { fetchPopularPick, fetchBringData } from "@/middleware/fetchFund";
import useWeb3 from "@/hooks/useWeb3";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
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
  const { web3, NEWSIC_FUND } = useWeb3();
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    state.userInfo;
  });
  const fund = useSelector((state) => {
    state.fundList;
  });
  const [selectedDiv, setSelectedDiv] = useState("div1");
  const handleClick = (id) => {
    setSelectedDiv(id);
  };

  // 메인 좋아요 가장 많은 NFT
  const popularPick = (_data) => {
    dispatch(fetchPopularPick(_data));
  };

  // 진행중인 펀딩 데이터 가져오는 함수
  const ing_fundingData = async () => {
    const _data = await NEWSIC_FUND.methods.viewALL().call();
    console.log(_data);
    dispatch(fetchBringData(_data));
  };
  // 진행예정 펀딩 데이터 가져오는 함수
  const before_fundingData = async () => {
    const _data = await NEWSIC_FUND.methods.beforeStart().call();
    console.log(_data);
    dispatch(fetchBringData(_data));
  };
  // 진행종료후 제작중인 펀딩 데이터 가져오는 함수
  const make_fundingData = async () => {
    const _data = await NEWSIC_FUND.methods.makeStart().call();
    console.log(_data);
    dispatch(fetchBringData(_data));
  };
  // 진행종료후 제작종료 펀딩 데이터 가져오는 함수
  const end_fundingData = async () => {
    const _data = await NEWSIC_FUND.methods.fundingEnd().call();
    console.log(_data);
    dispatch(fetchBringData(_data));
  };

  // 세부페이지 들어가는 함수
  const detailPage = (e) => {
    return <Link href={`/reward/${e}`}></Link>;
  };

  useEffect(() => {
    const _data = dispatch(fetchBringData());
    console.log("응???", _data);
  }, []);

  return (
    <div className="FundingContainerFrame">
      <div className="fundingTopBar">
        <div className="todayCreatorSection">
          <div className="sectionText">Today Creator</div>
          <div className="creatorInfoFrame">
            <div className="creatorInfoBox">
              <div className="creatorInfo">
                <div className="creatorName">CreatorName</div>
                <div className="fundingInfo">FundingInfo</div>
              </div>
              <div className="detailButton">DETAIL</div>
            </div>
            <div className="creatorImg" />
          </div>
        </div>
        <motion.div className="swiperSection">
          {data.map((item, index) => (
            <motion.div className="swiperBox" key={index}>
              <div className="hotCreatorInfoFrame">
                <div className="hotCreatorInfoBox">
                  <div className="hotFundingName">{item.fundingName}</div>
                  <div className="hotCreatorName">{item.creatorName}</div>
                  <div className="hotFundingInfo">{item.fundingInfo}</div>
                </div>
                <div className="detailButton">DETAIL</div>
              </div>
              <Image
                className="swiperImage"
                src={item.image}
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
              제작 완료
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
              종료 펀딩
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
              진행중인 펀딩
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
