import useWeb3 from "@/hooks/useWeb3";
import { useEffect, useState } from "react";
import { store } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchBuyTicket } from "@/middleware/fetchUser";
import { motion } from "framer-motion";
const svgVariants = {
  hidden: { 
    opacity: 0, 
    pathLength: 0 
  },
  visible: { 
    opacity: 1, 
    pathLength: 0.7,
    transition: { 
      duration: 2, 
      ease: "easeInOut" 
    } 
  }
};
const SubscriptionContainer = () => {
  const { web3, NEWSIC_FUND } = useWeb3();
  const user = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  // let d = new Date();
  // let set_date = 30;
  // d.setDate(d.getDate() + set_date);

  // let year = d.getFullYear();
  // let month = ("0" + (d.getMonth() + 1)).slice(-2);
  // let day = ("0" + d.getDate()).slice(-2);
  // let dt = year + "-" + month + "-" + day;

  // 구독권 구매
  const buyTicket = async () => {
    const date = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    let formattedDate = date.toLocaleDateString("en-US", options);
    // 가격 설정
    const _price = await web3.utils.toWei("0.005", "ether");
    // 컨트랙트로 티켓 구매
    const _buy_ticket = await NEWSIC_FUND.methods.subscriptionPay().send({ from: user.address, value: _price });
    // 구매 후 백으로 데이터 전달(UserSlice에 있음)
    // console.log(typeof _buy_ticket.from);
    // console.log(d);
    dispatch(
      fetchBuyTicket({
        user_wallet_address: _buy_ticket.from,
        ticket_type: 1, // 기본타입(n)
        expired: formattedDate,
      })
    );
    // console.log(_buy_ticket);
  };

  return (
    <div className='SubscriptionContainer'>
      <div className='SubscriptionFrame'>
        <div className='SubscriptionText'>
            <div>Ready to start?</div>
            <div>Launch a site for free. Choose a site plan to unlock more features.</div>
            <div/>
        </div>
        <div className='SubscriptionListFrame'>
          <div className='optionBox'>
            <div className='recommendedMark'>Popular</div>
            <div className='middleLine'/>
            <div className='middleMark'/>
          <div className='optionTitle'>Basic plan</div>
              <div className='optionPrice'>0.005 ETH</div>
              <div className='benefitsSummary'>
                <div>한달 (30일)</div>
              </div>
              <div className='optionBenefitList'>
                <div>
                  <div>새로운 들을거리 !</div>
                  <div>30일 오디오 컨텐츠</div>         
                </div>
              </div>
              <div className='optionBuyButton'
              onClick={() => {
                buyTicket();
              }}
              >Subscribe</div>
          </div>
          <div className='subscriptionProgressSection'>
          <motion.svg
            viewBox="0 0 100 100"
            width="450"
            height="450"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="4"
              strokeDasharray="283"
              variants={svgVariants}
              animate={{ pathLength: "70%" }}
            />
          </motion.svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionContainer;
