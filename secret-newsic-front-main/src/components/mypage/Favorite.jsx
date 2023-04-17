import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import PageNationFrame from "../PageNationFrame";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyNftList } from "@/middleware/fetchMyPage";

const itemVariant = {
  initial: {
    y: 100,
    opacity: 0,
    rotateY: -100,
  },
  animate: {
    y: 0,
    opacity: 1,
    rotateY: 0,
  },
};
const Favorite = () => {
  const [isFilled, setIsFilled] = useState();
  const [selectedItem, setSelectedItem] = useState(null);
  const [hurryUpList, setHurryUpList] = useState(null);

  const [isNftView, setIsNftView] = useState(true);
  const handleSwitchView = () => {
    setIsNftView(!isNftView);
  };

  const heartNftList = useSelector((state) => state.myPageInfo.heart_nft);
  const heartFundingList = useSelector((state) => state.myPageInfo.heart_funding);

  const container = useRef(null);
  const ref = useRef(null);
  const isInView = useInView({ root: container });

  const handleClick = (item) => {
    setSelectedItem(item.id);
  };

  useEffect(() => {
    console.log(heartFundingList[0], "하트펀딩");
    var hurryarr = [];
    for (let i = 0; i < heartFundingList.length; i++) {
      console.log("여기 과연?", new Date(heartFundingList[i].heartFundingList.funding_finish_date).getTime());
      console.log(new Date(heartFundingList[i].heartFundingList.funding_finish_date).getTime() > new Date().getTime() + 86400000);
      if (new Date(heartFundingList[i].heartFundingList.funding_finish_date).getTime() > new Date().getTime() + 86400000) {
        hurryarr.push(heartFundingList[i].heartFundingList);
      }
    }
    setHurryUpList(hurryarr);
  }, []);

  return (
    <div className="secondMyPage" ref={container}>
      {isNftView ? (
        <div className="myPageSecondContainerFrame" style={isNftView ? { display: "flex" } : { display: "none" }}>
          <div className="topInfoSection">
            <motion.div initial={{ x: 20, y: -20, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
              관심 있는 NFT{" "}
            </motion.div>
            <div className="slideSection">
              <div className="infoSection">info</div>
              <div className="switchButton" onClick={handleSwitchView}>
                펀딩 보기
              </div>
            </div>
          </div>
          <div className="nftItemList">
            {heartNftList.map((item, index) => (
              <motion.div className="nftWishItemBox" key={item.heartNftList.id} ref={ref} variants={itemVariant} initial={!isInView ? "initial" : "animate"} animate={!isInView ? "animate" : "initial"} transition={{ duration: 0.5, type: "spring", delay: 0.1 * index }}>
                <div className="topSection">
                  <img className="nftImage" src={item.heartNftList.funding_nft_image} alt="ironImage" />
                  <motion.div key={item.heartNftList.id} style={{ color: isFilled && selectedItem === item.id ? "rgb(255, 255, 255)" : "rgba(0, 0, 0, 0.14)" }} transition={{ duration: 0.3 }} onClick={() => setIsFilled(!isFilled)} onClickCapture={() => handleClick(item)} className="wishButton">
                    <FontAwesomeIcon icon={faHeart} />
                  </motion.div>
                  {/* <div className="infoStateFrame">
                    <div className="state">
                      <div>{item..}</div>
                    </div>
                  </div> */}
                </div>
                <div className="middleSection">
                  <div className="nftNameTag">{item.nftName}</div>
                  <div className="creatorNameTag">
                    <img src={"https://i.pinimg.com/236x/ce/93/7e/ce937eb3c1a0cb0722066411249bfbb2.jpg"} alt="creatorImage" />
                    <div>{item.heartNftList.funding_title}</div>
                  </div>
                </div>
                <div className="bottomSection">
                  <div className="detailButton" typeof="button">
                    Detail
                  </div>
                  <div className="buyNowButton" typeof="button">
                    Buy Now
                  </div>
                </div>
              </motion.div>
            ))}
            <PageNationFrame />
          </div>
        </div>
      ) : (
        <div className="myPageSecondContainerFrameNFT" style={!isNftView ? { display: "flex" } : { display: "none" }}>
          <div className="topInfoSection">
            <motion.div initial={{ x: 20, y: -20, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
              관심 있는 펀딩{" "}
            </motion.div>
            <div className="slideSection">
              <div className="infoSection">info</div>
              <div className="switchButton" onClick={handleSwitchView}>
                NFT 보기
              </div>
            </div>
          </div>
          <div className="fundItemList">
            {heartFundingList.map((item, index) => (
              <motion.div className="fundWishItemBox" key={item.heartFundingList.id} ref={ref} variants={itemVariant} initial={!isInView ? "initial" : "animate"} animate={!isInView ? "animate" : "initial"} transition={{ duration: 0.5, type: "spring", delay: 0.1 * index }}>
                <div className="topSection">
                  <img className="nftImage" src={item.heartFundingList.funding_nft_image} alt="ironImage" />
                  <motion.div key={item.heartFundingList.id} style={{ color: isFilled && selectedItem === item.heartFundingList.id ? "rgb(255, 255, 255)" : "rgba(0, 0, 0, 0.14)" }} transition={{ duration: 0.3 }} onClick={() => setIsFilled(!isFilled)} onClickCapture={() => handleClick(item)} className="wishButton">
                    <FontAwesomeIcon icon={faHeart} />
                  </motion.div>
                  <div className="infoStateFrame">
                    <div className="state">
                      <div>
                        {new Date(item.heartFundingList.funding_start_date).toISOString().split("T")[0].substring(2)}~{new Date(item.heartFundingList.funding_finish_date).toISOString().split("T")[0].substring(2)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="middleSection">
                  <div className="nftNameTag">{item.heartFundingList.funding_title}</div>
                  <div className="creatorNameTag">
                    <img src={item.heartFundingList.funding_nft_image} alt="creatorImage" />
                    <div>{item.heartFundingList.funding_price}ETH</div>
                  </div>
                </div>
                <div className="bottomSection">
                  <div className="detailButton" typeof="button">
                    Detail
                  </div>
                  <div className="buyNowButton" typeof="button">
                    Buy Now
                  </div>
                </div>
              </motion.div>
            ))}
            <PageNationFrame />
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorite;
/**
 * <div>마감 임박한 펀딩</div>
          <div className="slideSection">
            {hurryUpList.map((e) => {
              return e.funding_finish_date;
            })}
          </div>
        </div>
        <div className=""></div>
        <div className="nftItemList">
          {heartFundingList ? (
            heartFundingList.map((item) => (
              <div className="nftWishItemBox" key={item.id}>
                <div className="topSection">
                  <img className="nftImage" src={item.heartFundingList.funding_nft_image} alt="ironImage" />
                  <motion.div key={item.id} style={{ color: isFilled && selectedItem === item.id ? "rgb(255, 255, 255)" : "rgba(0, 0, 0, 0.14)" }} transition={{ duration: 0.3 }} onClick={() => setIsFilled(!isFilled)} onClickCapture={() => handleClick(item)} className="wishButton">
                    <FontAwesomeIcon icon={faHeart} />
                  </motion.div>
                  <div className="infoStateFrame">
                    <div className="price">
                      <div>{item.heartFundingList.funding_price}</div>
                      <div>ETH</div>
                    </div>
                    <div className="state">
                      <div>{item.state}</div>
                    </div>
                  </div>
                </div>
                <div className="middleSection">
                  <div className="nftNameTag">{item.nftName}</div>
                  <div className="creatorNameTag">
                    <img src={item.creatorImgUrl} alt="creatorImage" />
                    <div>{item.creatorName}</div>
                  </div>
                </div>
                <div className="bottomSection">
                  <div className="detailButton" typeof="button">
                    Detail
                  </div>
                  <div className="buyNowButton" typeof="button">
                    Buy Now
                  </div>
                </div>
              </div>
            ))
          ) : (
            <></>
          )} 
          */
