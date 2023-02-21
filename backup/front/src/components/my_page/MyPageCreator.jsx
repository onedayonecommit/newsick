// 크리에이터 관리자 페이지
// - 지금까지 펀딩된 금액 확인
// - 내 펀딩 히스토리
// - 진행하고 있는 내 펀딩 상세 페이지에서 펀딩 종료 가능
// - 펀딩 상세 페이지에서 공지사항 게시판 핸들링 가능

// - 제작된 음원 첨부파일로 등록할 수 있게
import React from "react";
import Graph from "./Graph";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { RegisterNftSong } from "@/components";

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
  return (
    <div className="MyPageCreaterFrame">
      <AnimatePresence>
        {modalOpen && (
          <RegisterNftSong modalOpen={modalOpen} handleClose={close} />
        )}
      </AnimatePresence>
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
        <div className="historyGrapSection">
          <div className="historyText">Fundding History</div>
          <div className="historyGrapFrame">
            <Graph data={dateFunndingData} />
          </div>
        </div>
      </div>
      <div className="bottomSection">
        <div className="createrHandlerFrame">
          <div className="handleNavBar">
            <div className="text">진행중인 펀딩 핸들러</div>
            <div className="button">공지사항 확인하기</div>
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
                  <motion.div
                    className="buttonLine"
                    onClick={() => (modalOpen ? close() : open())}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
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