import useWeb3 from "@/hooks/useWeb3";
import { useEffect, useState } from "react";
import { store } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchBuyTicket } from "@/middleware/fetchUser";
import { motion } from "framer-motion";
const svgVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 0.7,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
const SubscriptionContainer = () => {
  const { web3, NEWSIC_FUND } = useWeb3();
  const user = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  // 티켓구매 컨트랙트로
  const tempFunc = async () => {
    // 가격 설정
    const _price = await web3.utils.toWei("0.005", "ether");
    // 티켓구매

    try {
      const _buy_ticket = await NEWSIC_FUND.methods.subscriptionPay().send({ from: user.address, value: _price });
      const status = await _buy_ticket.events.subscriber.returnValues._status;
      if (status) {
        dispatch(fetchBuyTicket({ user_wallet_address: user.address }));
      }
      alert("구독권 구매 성공하였습니다.")
    } catch (error) {
      
    }
  };

  // 구독권 구매
  const buyTicket = async () => {
    if (NEWSIC_FUND) {
      // backend 저장
      tempFunc()
        .then((_ticket) => {
          console.log(_ticket);
          dispatch(
            fetchBuyTicket({
              user_wallet_address: _ticket.from,
              ticket_type: 3, // 1 : 기본타입(1)
              expired: _date.toISOString(),
            })
          );
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      console.log("컨트랙트 안읽혀짐");
    }
    // console.log(_buy_ticket);
  };

  useEffect(() => {}, [NEWSIC_FUND]);

  return (
    <motion.div className="SubscriptionContainer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <div className="SubscriptionFrame">
        <div className="SubscriptionText">
          <div>Ready to start?</div>
          <div>Launch a site for free. Choose a site plan to unlock more features.</div>
          <div />
        </div>
        <div className="SubscriptionListFrame">
          <div className="optionBox">
            <div className="recommendedMark">Popular</div>
            <div className="middleLine" />
            <div className="middleMark" />
            <div className="optionTitle">Basic plan</div>
            <div className="optionPrice">0.005 ETH</div>
            <div className="benefitsSummary">
              <div>한달 (30일)</div>
            </div>
            <div className="optionBenefitList">
              <div>
                <div>새로운 들을거리 !</div>
                <div>30일 오디오 컨텐츠</div>
              </div>
            </div>
            <motion.div
              className="optionBuyButton"
              whileTap={{ scale: 0.8 }}
              onClick={() => {
                tempFunc();
              }}
            >
              Subscribe
            </motion.div>
          </div>
          <div className="subscriptionProgressSection">
            <motion.svg viewBox="0 0 100 100" width="450" height="450" variants={svgVariants} initial="hidden" animate="visible">
              <motion.circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="4" strokeDasharray="283" variants={svgVariants} animate={{ pathLength: "70%" }}></motion.circle>
            </motion.svg>
            <motion.div className="persentCircle">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, delay: 0.5 }}>
                회원 구독권 구매 비율
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, delay: 1 }}>
                70%
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SubscriptionContainer;
