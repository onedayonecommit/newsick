import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";

const dateFunndingData = [
  [0, 10],
  [5, 50],
  [15, 75],
  [55, 100],
  [75, 10],
  [100, 5],
  [120, 50],
  [140, 100],
  [180, 50],
];

const FunddingDateItem = [
  {
    funddingTitle: "Fundding Title",
    funddingDate: "펀딩기간 ~ 펀딩기간",
    unitPrice: "개당 단가",
    leftDay: "남은 기간(일)",
    quantity: "수량 완료 분수 ( 5/10 )",
  },
  {
    funddingTitle: "Fundding Title",
    funddingDate: "펀딩기간 ~ 펀딩기간",
    unitPrice: "개당 단가",
    leftDay: "남은 기간(일)",
    quantity: "수량 완료 분수 ( 5/10 )",
  },
  {
    funddingTitle: "Fundding Title",
    funddingDate: "펀딩기간 ~ 펀딩기간",
    unitPrice: "개당 단가",
    leftDay: "남은 기간(일)",
    quantity: "수량 완료 분수 ( 5/10 )",
  },
  {
    funddingTitle: "Fundding Title",
    funddingDate: "펀딩기간 ~ 펀딩기간",
    unitPrice: "개당 단가",
    leftDay: "남은 기간(일)",
    quantity: "수량 완료 분수 ( 5/10 )",
  },
  {
    funddingTitle: "Fundding Title",
    funddingDate: "펀딩기간 ~ 펀딩기간",
    unitPrice: "개당 단가",
    leftDay: "남은 기간(일)",
    quantity: "수량 완료 분수 ( 5/10 )",
  },
  {
    funddingTitle: "Fundding Title",
    funddingDate: "펀딩기간 ~ 펀딩기간",
    unitPrice: "개당 단가",
    leftDay: "남은 기간(일)",
    quantity: "수량 완료 분수 ( 5/10 )",
  },
  {
    funddingTitle: "Fundding Title",
    funddingDate: "펀딩기간 ~ 펀딩기간",
    unitPrice: "개당 단가",
    leftDay: "남은 기간(일)",
    quantity: "수량 완료 분수 ( 5/10 )",
  },
  {
    funddingTitle: "Fundding Title",
    funddingDate: "펀딩기간 ~ 펀딩기간",
    unitPrice: "개당 단가",
    leftDay: "남은 기간(일)",
    quantity: "수량 완료 분수 ( 5/10 )",
  },
];
const MyPageCreator = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const block = Array.from({ length: 5 }, () => <div></div>);
  return (
    <div className="MyPageCreatorFrame">
      <AnimatePresence>{modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}</AnimatePresence>
      <div className="topSection">
        <div className="totalMoneySection">
          <div className="infoText">
            <div>지금까지 펀딩된 금액 확인</div>
            <div />
          </div>
          <div className="infoNumber">
            <div>ETH</div>
            <div>2.255</div>
          </div>{" "}
        </div>
        <div className="creatorNoticeSection">
          <div className="noticeNav">
            <div className="noticeText">공지사항 확인하기</div>
            <div className="noticeShowAll">Show All</div>
          </div>
          <div className="noticeList">
            {block.map(() => (
              <motion.div className="noticeWrap" whileHover={{ scale: 1.01 }}>
                <div className="date">2023-02-13</div>
                <div className="title">Fundding Title</div>
                <div className="infoFrame">
                  <div>공지내용</div>
                  <div>조회수</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="bottomSection">
        <div className="creatorHandlerFrame">
          <div className="handleNavBar">
            <div className="text">진행중인 펀딩 핸들러</div>
            <div className="button">펀 딩 등 록</div>
          </div>
          <div className="funddingList">
            {FunddingDateItem.map((item) => (
              <div className="funddingItemBox">
                <div className="infoSection">
                  <div className="funddingTitle">{item.funddingTitle}</div>
                  <div className="funddingDate">{item.funddingDate}</div>
                  <div className="unitPrice">{item.unitPrice}</div>
                  <div className="leftDay">{item.leftDay}</div>
                  <div className="quantityPercentage">{item.quantity}</div>
                </div>
                <div className="musicInputButton">
                  <motion.div className="buttonLine" onClick={() => (modalOpen ? close() : open())} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    음원등록
                  </motion.div>
                </div>
                <div className="funddingTerminationButton">펀딩종료</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageCreator;

/**
    import React, { useEffect } from "react";
    import Graph from "../creator/Graph";
    import { motion, AnimatePresence } from "framer-motion";
    import { useState } from "react";
    import Modal from "./Modal";
    import { useSelector } from "react-redux";

    const MyPageCreater = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [totalEth, setTotalEth] = useState();
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const runningFundList = useSelector((state) => state.myPageInfo.runningFundList);

  useEffect(() => {
    var aaa = 0;
    // runningFundList.map((e) => {
    //   console.log(e.funding_price * e.funding_sales, "누적 판매 가격");
    //   aaa += e.funding_price * e.funding_sales;
    //   console.log(aaa, "aaagoodgood");
    //   return aaa;
    // });
    for (let i = 0; i < runningFundList.length; i++) {
      aaa += runningFundList[i].funding_price * runningFundList[i].funding_sales;
    }
    setTotalEth(aaa);
  }, []);
  return (
    <div className="MyPageCreatorFrame">
      <AnimatePresence>{modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}</AnimatePresence>
      <div className="topSection">
        <div className="totalMoneySection">
          <div className="infoText">
            <div>지금까지 펀딩된 금액 확인</div>
            <div />
          </div>
          <div className="infoNumber">
            <div>ETH</div>
            <div>{totalEth}</div>
          </div>{" "}
        </div>
        <div className="historyGrapSection">
          <div className="historyText">Fundding History</div>
          <div className="historyGrapFrame">
            <Graph data={dateFunndingData} />
          </div>
        </div>
      </div>
      <div className="bottomSection">
        <div className="creatorHandlerFrame">
          <div className="handleNavBar">
            <div className="text">진행중인 펀딩 핸들러</div>
            <div className="button">공지사항 확인하기</div>
          </div>
          <div className="funddingList">
            {runningFundList.map((item) => (
              <div className="funddingItemBox">
                <div className="infoSection">
                  <div className="funddingTitle">{item.funding_title}</div>
                  <div className="funddingDate">
                    {item.funding_start_date.split("T")[0]}~{item.funding_finish_date.split("T")[0]}
                  </div>
                  <div className="unitPrice">{item.funding_price}ETH</div>
                  <div className="leftDay">{item.leftDay}</div>
                  <div className="quantityPercentage">
                    판매 수량 : {item.funding_sales}
                    남은 수량 : {item.funding_hard_cap - item.funding_sales}
                  </div>
                </div>
                <div className="musicInputButton">
                  <motion.div className="buttonLine" onClick={() => (modalOpen ? close() : open())} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    음원등록
                  </motion.div>
                </div>
                <div className="funddingTerminationButton">펀딩종료</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageCreater;
 */
