import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// nft 상세 페이지
const nftData = [
  {
    infoName: "음원 정보",
    info: "정보 텍스트",
  },
  {
    infoName: "가수 프로필",
    info: "정보 텍스트",
  },
  {
    infoName: "작곡가 프로필",
    info: "정보 텍스트",
  },
  {
    infoName: "기타 등등",
    info: "정보 텍스트",
  },
];

const NftDetailContainer = () => {
  const [selectedDiv, setSelectedDiv] = useState("div1");

  const block = Array.from({ length: 5 }, () => <div></div>);

  const handleClick = (id) => {
    setSelectedDiv(id);
  };
  return (
    <div className="nftDetailContainerFrame">
      <div className="topSection">
        <div className="statisticsSection">
          <div className="statisticsSectionFrame">
            <div className="chartInfoSection">
              <div className="transactionStatistics">
                Transaction Statistics
              </div>
              <div className="monthLayoutSection">
                <motion.div
                  animate={{
                    color:
                      selectedDiv === "div1"
                        ? "#ffffff"
                        : "rgba(255, 255, 255, 0.4)",
                  }}
                  onClick={() => handleClick("div1")}
                >
                  1 Month
                </motion.div>
                <motion.div
                  animate={{
                    color:
                      selectedDiv === "div2"
                        ? "#ffffff"
                        : "rgba(255, 255, 255, 0.4)",
                  }}
                  onClick={() => handleClick("div2")}
                >
                  3 Month
                </motion.div>
                <motion.div
                  animate={{
                    color:
                      selectedDiv === "div3"
                        ? "#ffffff"
                        : "rgba(255, 255, 255, 0.4)",
                  }}
                  onClick={() => handleClick("div3")}
                >
                  6 Month
                </motion.div>
              </div>
            </div>
            <div className="chartSection"></div>
          </div>
        </div>
        <div className="infoSwiperSection">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -510 }}
            className="frameBox"
          >
            {nftData.map((item) => (
              <div className="nftInfoBox">
                <div className="infoName">{item.infoName}</div>
                <div className="infoText">{item.info}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="bottomSection">
        <div className="askingPriceSection">
          <div className="topPriceSection">
            <div className="accrueList">{block}</div>
            <div className="priceList">{block}</div>
            <div className="infoList"></div>
          </div>
          <div className="middleLine" />
          <div className="bottomPriceSection">
            <div className="infoList"></div>
            <div className="priceList">{block}</div>
            <div className="accrueList">{block}</div>
          </div>
        </div>
        <div className="orderSection">
          <div className="categorySection">
            <div className="buyTap">매수</div>
            <div className="sellTap">매도</div>
            <div className="historyTap">거래내역</div>
          </div>
          <div className="inputSection">
            <div className="inputList">
              <div className="canOrderPriceSection">
                <div className="leftSection">
                  <div className="text">주문 가능</div>
                </div>
                <div className="RightSection">
                  <div className="inputSection">
                    <div></div>
                    <div>KRW</div>
                  </div>
                </div>
              </div>
              <div className="buyPriceSection">
                <div className="leftSection">
                  <div className="text">매수 가격</div>
                </div>
                <div className="rightSection">
                  <input />
                </div>
              </div>
              <div className="orderQuantitySection">
                <div className="leftSection">
                  <div className="text">주문 수량</div>
                </div>
                <div className="rightSection">
                  <input />
                </div>
              </div>
              <div className="orderPriceSection">
                <div className="leftSection">
                  <div className="text">주문 총액</div>
                </div>
                <div className="RightSection">
                  <div className="inputSection">
                    <div></div>
                    <div>KRW</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="loginButtonSection">
              <div className="loginButton">LOGIN</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftDetailContainer;
