import useWeb3 from "@/hooks/useWeb3";
import { useEffect, useState } from "react";
import { store } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchBuyTicket } from "@/middleware/fetchUser";

const SubscriptionContainer = () => {
  const { web3, NEWSIC_FUND } = useWeb3();
  const user = useSelector((state) => state.userInfo);
  const [ticket, setTicket] = useState({});
  const dispatch = useDispatch();

  // 티켓구매 컨트랙트로
  const tempFunc = async () => {
    // 가격 설정
    const _price = await web3.utils.toWei("0.005", "ether");
    // 티켓구매
    const _buy_ticket = await NEWSIC_FUND.methods
      .subscriptionPay()
      .send({ from: user.address, value: _price });
    console.log("dddddd");
    setTicket(_buy_ticket);
    return _buy_ticket;
  };

  // 구독권 구매
  const buyTicket = async () => {
    const _date = new Date();
    const set_date = 30;
    _date.setDate(_date.getDate() + set_date);
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
