import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { RegisterNftSong } from "@/components";
import Link from "next/link";
import { useSelector } from "react-redux";

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
  const [totalEth, setTotalEth] = useState(0);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const block = Array.from({ length: 5 }, () => <div></div>);
  const myFundingList = useSelector(
    (state) => state.myPageInfo.runningFundList
  );
  const noticeList = useSelector((state) => state.myPageInfo.noticeList);

  useEffect(() => {
    let totalETH = 0;
    console.log("ddddddddddddddd", myFundingList);
    myFundingList.map((e) => {
      totalETH += e.funding_sales * e.funding_price;
    });
    setTotalEth(totalETH);
  }, []);

  return (
    <div className="MyPageCreatorFrame">
      <AnimatePresence>
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
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
        <div className="creatorNoticeSection">
          <div className="noticeNav">
            <div className="noticeText">공지사항 확인하기</div>
            <div className="noticeShowAll">Show All</div>
          </div>
          <div className="noticeList">
            {noticeList.map((item) => (
              <motion.div className="noticeWrap" whileHover={{ scale: 1.01 }}>
                <div className="date">
                  {new Date(item.created_at)
                    .toISOString()
                    .split("T")[0]
                    .substring(2)}
                </div>
                <div className="title">{item.title}</div>
                <div className="infoFrame">
                  <div>{item.funding_id}</div>
                  {/* <div>조회수</div> */}
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
            <Link href="mypage/creator/createfund">
              <div className="button">펀 딩 등 록</div>
            </Link>
          </div>
          <div className="funddingList">
            {myFundingList.map((item) => (
              <div className="funddingItemBox">
                <div className="infoSection">
                  <div className="funddingTitle">{item.funding_title}</div>
                  <div className="funddingDate">
                    {new Date(item.funding_start_date)
                      .toISOString()
                      .split("T")[0]
                      .substring(2)}
                    ~
                    {new Date(item.funding_finish_date)
                      .toISOString()
                      .split("T")[0]
                      .substring(2)}
                  </div>
                  <div className="unitPrice">{item.funding_price} ETH</div>
                  <div className="leftDay">
                    종료까지{" "}
                    {Math.floor(
                      (Math.floor(
                        new Date(item.funding_finish_date).getTime() / 1000
                      ) -
                        Math.floor(new Date().getTime() / 1000)) /
                        3600
                    )}{" "}
                    분
                  </div>
                  <div className="quantityPercentage">
                    누적 판매 수량 : {item.funding_sales}
                  </div>
                </div>
                <div className="musicInputButton">
                  {item.funding_music_regist ? (
                    <motion.div
                      className="buttonLine"
                      onClick={() => (modalOpen ? close() : open())}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      음원등록
                    </motion.div>
                  ) : (
                    <motion.div
                      className="buttonLine"
                      onClick={() =>
                        alert(
                          "이미 음원을 등록하셨습니다. 재 등록 원하는 경우 별도 문의 바랍니다."
                        )
                      }
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      음원 등록 완료
                    </motion.div>
                  )}
                </div>
                {item.funding_finish_status ? (
                  <div className="funddingTerminationButton">펀딩종료</div>
                ) : (
                  <div className="funddingTerminationButton">분배완료</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageCreator;
