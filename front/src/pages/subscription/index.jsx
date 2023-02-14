import useWeb3 from "@/hooks/useWeb3";
import { useEffect, useState } from "react";
import { store } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchBuyTicket } from "@/middleware/fetchUser";

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
    const _date = new Date();
    const set_date = 30;
    _date.setDate(_date.getDate() + set_date);

    // 가격 설정
    const _price = await web3.utils.toWei("0.005", "ether");

    console.log(NEWSIC_FUND);
    if (NEWSIC_FUND) {
      // 컨트랙트로 티켓 구매
      const _buy_ticket = await NEWSIC_FUND.methods
        .subscriptionPay()
        .send({ from: user.address, value: _price });
      // 구매 후 백으로 데이터 전달(UserSlice에 있음)
      // console.log(typeof _buy_ticket.from);
      // console.log(d);
      dispatch(
        fetchBuyTicket({
          user_wallet_address: _buy_ticket.from,
          ticket_type: 1, // 기본타입(n)
          expired: _date.toISOString(),
        })
      );
    } else {
      console.log("컨트랙트 안읽혀짐");
    }
    // console.log(_buy_ticket);
  };

  useEffect(() => {}, [NEWSIC_FUND]);

  return (
    <div className="SubscriptionContainer">
      <div className="SubscriptionFrame">
        <div className="SubscriptionText">
          <div>Ready to start?</div>
          <div>
            Launch a site for free. Choose a site plan to unlock more features.
          </div>
          <div />
        </div>
        <div className="SubscriptionListFrame">
          <div className="optionBox1">
            <div className="optionTitle">Free plan</div>
            <div className="optionPrice">$15/mo</div>
            <div className="benefitsSummary">
              <div>Up to 3 projects</div>
              <div />
            </div>
            <div className="optionBenefitList">
              <div>Custom domain</div>
              <div>Password protect</div>
              <div>10GB bandwidth</div>
              <div>1,000 CMS items</div>
              <div>10,000 visitors</div>
            </div>
            <div className="option1BuyButton">Try for free</div>
          </div>
          <div className="optionBox2">
            <div className="recommendedMark">Popular</div>
            <div className="optionTitle">Basic plan</div>
            <div className="optionPrice">$30/mo</div>
            <div className="benefitsSummary">
              <div>Billed yearly</div>
              <div />
            </div>
            <div className="optionBenefitList">
              <div>Custom domain</div>
              <div>Password protect</div>
              <div>10GB bandwidth</div>
              <div>1,000 CMS items</div>
              <div>10,000 visitors</div>
            </div>
            <div
              className="option1BuyButton"
              onClick={() => {
                buyTicket();
              }}
            >
              Subscribe
            </div>
            <div className="optionBenefitList">
              <div>Custom domain</div>
              <div>Password protect</div>
              <div>10GB bandwidth</div>
              <div>1,000 CMS items</div>
              <div>10,000 visitors</div>
            </div>
            <div
              className="option1BuyButton"
              onClick={() => {
                buyTicket();
              }}
            >
              Subscribe
            </div>
          </div>
          <div className="optionBox3">
            <div className="optionTitle">Pro plan</div>
            <div className="optionPrice">$45/mo</div>
            <div className="benefitsSummary">
              <div>Billed yearly</div>
              <div />
            </div>
            <div className="optionBenefitList">
              <div>Custom domain</div>
              <div>Password protect</div>
              <div>10GB bandwidth</div>
              <div>1,000 CMS items</div>
              <div>10,000 visitors</div>
            </div>
            <div className="option1BuyButton">Subscribe</div>
          </div>
          <div className="optionBox3">
            <div className="optionTitle">Pro plan</div>
            <div className="optionPrice">$45/mo</div>
            <div className="benefitsSummary">
              <div>Billed yearly</div>
              <div />
            </div>
            <div className="optionBenefitList">
              <div>Custom domain</div>
              <div>Password protect</div>
              <div>10GB bandwidth</div>
              <div>1,000 CMS items</div>
              <div>10,000 visitors</div>
            </div>
            <div className="option1BuyButton">Subscribe</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionContainer;
