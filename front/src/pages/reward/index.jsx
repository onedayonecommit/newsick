// 펀딩 메인페이지
/*
- 진행중인 펀딩
- 진행 예정 펀딩
- 종료 펀딩
- 제작 완료
*/
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import image1 from "../../../public/image/cover.jpg";
import image2 from "../../../public/image/chang.jpg";
import { PageNationFrame } from "@/components";
import useWeb3 from "@/hooks/useWeb3";
import { fetchPopularPick, fetchBringData } from "@/middleware/fetchFund";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// 펀딩 메인페이지
const data = [
  {
    id:1,
    fundingName: "Funding Title",
    creatorName: "Creator",
    fundingInfo: "info",
    image: image1,
  },
  {
    id:2,
    fundingName: "Funding Title",
    creatorName: "Creator",
    fundingInfo: "info",
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
// ===========================================================
  const [activeIndex, setActiveIndex] = useState(0);
  const handleDragEnd = (event, info) => {
    const { offset, velocity } = info;
    const swipe = offset.x > 0 ? -1 : 1;
    const nextIndex = activeIndex + swipe;
    const lastIndex = data.length - 1;
    if (nextIndex < 0) {
      setActiveIndex(lastIndex);
    } else if (nextIndex > lastIndex) {
      setActiveIndex(0);
    } else {
      setActiveIndex(nextIndex);
    }
  };
  const handleNextClick = () => {
    const lastIndex = data.length - 1;
    const nextIndex = activeIndex === lastIndex ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const handlePreviousClick = () => {
    const nextIndex = data.length - 1;
    const lastIndex = activeIndex === nextIndex ? 0 : activeIndex + 1;
    setActiveIndex(lastIndex);
  };
  // ===========================================================

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
    <motion.div className="FundingContainerFrame"
      initial={{opacity:0,scale:0}}
      animate={{opacity:1, scale:1}}
      exit={{opacity:0,scale:0}}
      transition={{duration:0.3}}
    >
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
        <AnimatePresence>
          <motion.div className="swiperSection">
            {
              data.map((item, index)=>(
                  <motion.div
                    key={item.id}
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      left: `${(index - activeIndex) * 100}%`,
                    }}
                    drag="x"
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.1}
                    onDragEnd={handleDragEnd}
                    transition={{ 
                       type: "spring", stiffness: 300, damping: 30 , duration: 0.3
                    }}
                  >
                    <Image src={item.image} alt="coverImg" className="rewardItemImg" style={{ webkitUserDrag: " none" }}/>
                    <div className="rewardInfoFrame">
                      <div className="buttonFrame">
                        <div className="nextButton" onClick={handleNextClick}>
                          <FontAwesomeIcon icon={faArrowRight}/>
                        </div>
                        <div className="previousButton" onClick={handlePreviousClick}>
                          <FontAwesomeIcon icon={faArrowLeft}/>
                        </div>
                      </div>
                      <div className="infoSection">
                        <div className="infoFrame">
                            <div>{item.fundingName}</div>
                            <div>{item.creatorName}</div>
                            <div>{item.fundingInfo}</div>
                        </div>
                        <div className="detailButton">detail</div>
                      </div>
                    </div>
                  </motion.div>
              ))
            }
          </motion.div>
        </AnimatePresence>
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
            <motion.div style={{ color: selectedDiv === "div1" ? "#ffffff" : "rgba(255, 255, 255, 0.4)" }} onClick={() => handleClick("div1")}>
              제작 완료
            </motion.div>
            <motion.div style={{ color: selectedDiv === "div2" ? "#ffffff" : "rgba(255, 255, 255, 0.4)" }} onClick={() => handleClick("div2")}>
              종료 펀딩
            </motion.div>
            <motion.div style={{ color: selectedDiv === "div3" ? "#ffffff" : "rgba(255, 255, 255, 0.4)" }} onClick={() => handleClick("div3")}>
              진행중인 펀딩
            </motion.div>
            <motion.div style={{ color: selectedDiv === "div4" ? "#ffffff" : "rgba(255, 255, 255, 0.4)" }} onClick={() => handleClick("div4")}>
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
    </motion.div>
  );
};

export default FundingContainer;
