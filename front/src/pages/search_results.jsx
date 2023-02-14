// 검색 결과 페이지
// npm install react-intersection-observer --save
import { useInView } from "react-intersection-observer";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const itemData = [
  {
    itemName: "곡",
    itemMany: 18,
  },
  {
    itemName: "NFT",
    itemMany: 3,
  },
  {
    itemName: "펀딩",
    itemMany: 13,
  },
];

const SearchTotal = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0 });
    }
    console.log("use effect hook, inView =", inView);
  });

  return (
    <motion.div className="searchTotalFrame">
      <motion.div className="searchInfoTextFrame" animate={animation}>
        <div>" ** "</div>
        <div>에 대한 검색 결과 입니다.</div>
      </motion.div>
      <div className="justLine" />
      <div className="switchListBox">
        <motion.div className="optionFunding" animate={animation}>
          펀딩 리스트
        </motion.div>
        <motion.div className="optionMusic" animate={animation}>
          음악
        </motion.div>
        <motion.div className="optionNftMusic" animate={animation}>
          음악(NFT)
        </motion.div>
        <motion.div className="optionNft" animate={animation}>
          NFT
        </motion.div>
        <motion.div className="optionDum" animate={animation}>
          혹시 몰라서
        </motion.div>
      </div>
      <div className="infoScrollBox" ref={ref}>
        <motion.div className="artistSection" animate={animation}>
          <div className="navBar">
            <div className="leftSide">
              <div className="text">아티스트</div>
              <div className="howMany">( 7 )</div>
            </div>
            <div className="showAll"> showAll</div>
          </div>
          <div className="infoSection"></div>
        </motion.div>
        {itemData.map((item) => (
          <motion.div className="anotherInfoSection" animate={animation}>
            <div className="navBar">
              <div className="leftSide">
                <div className="text">{item.itemName}</div>
                <div className="howMany">( {item.itemMany} )</div>
              </div>
              <div className="showAll"> showAll</div>
            </div>
            <div className="infoSection"></div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SearchTotal;
