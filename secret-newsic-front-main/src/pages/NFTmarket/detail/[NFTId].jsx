import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { marketDetail, marketDetailInfo } from "@/middleware/fetchNft";
import useWeb3 from "@/hooks/useWeb3";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
// nft 상세 페이지
const graphDate = [
  {name: '2022.07', ETH: 400, pv: 2400, amt: 2400},
  {name: '2022.08', ETH: 300, pv: 2400, amt: 2400},
  {name: '2022.09', ETH: 300, pv: 2400, amt: 2400},
  {name: '2022.10', ETH: 200, pv: 2400, amt: 2400},
  {name: '2022.11', ETH: 270, pv: 2400, amt: 2400},
];

const NftDetailContainer = () => {
  const [selectedDiv, setSelectedDiv] = useState("div1");
  const {web3,NEWSIC_FUND,NEWSIC_MARKET } = useWeb3()
  const dispatch = useDispatch();
  const block = Array.from({ length: 5 }, () => <div></div>);
  const createStatus = useSelector((state) => state.userInfo.createStatus);
  const user_wallet_address = useSelector((state) => state.userInfo.address);
  const router = useRouter();
  const [orderEth, setOrderEth] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [offerStatus, setOfferStatus] = useState(0);
  const _balance = useSelector((state) => state.userInfo.balance);
  const sellList = useSelector((state) => state.marketInfo.detail_sell_info);
  const offerList = useSelector((state) => state.marketInfo.detail_offer_info);
  const handleClick = (id) => {
    setSelectedDiv(id);
  };
  const [myNftAmount, setMyNftAmount] = useState(0)
  const buyOffer = async () => {
    // console.log(router.query.NFTId, orderCount, await web3.utils.fromWei(String(orderEth), "ether"));
    const price = await web3.utils.toWei(String(orderEth), "ether");
    const totalPrice = await price * orderCount
      const buyOfferResult = await NEWSIC_MARKET.methods._createBuyList(router.query.NFTId, orderCount, price).send({ value: totalPrice, from: user_wallet_address });
      alert("구매 신청하였습니다.")
      console.log(buyOfferResult);
  }
  
  const sellOffer = async () => {
    const price = await web3.utils.toWei(String(orderEth), "ether")
      const sellOfferResult = await NEWSIC_MARKET.methods._createSellList(router.query.NFTId, orderCount, price).send({ from: user_wallet_address })  
    alert("판매 등록에 성공하였습니다.")
    console.log(sellOfferResult)
  }
  const myAmountCheck = async (tokenId) => {
    console.log("가진갯수 불러오기")
    console.log(tokenId,'갯수 토큰아이디')
    const amountValue = await NEWSIC_FUND.methods.balanceOf(user_wallet_address, tokenId).call({from:user_wallet_address})
    console.log(amountValue,"내가 가진 갯수")
    setMyNftAmount(await amountValue)
  }

  useEffect(() => {
    const NFTId = router.query.NFTId;
    console.log(NFTId, "엔엪티아이디다 임마");
    dispatch(marketDetail(NFTId));
    console.log(_balance);
    myAmountCheck(NFTId);
  }, [router.query.NFTId,user_wallet_address]);
  useEffect(() => {
    console.log(sellList, "셀오퍼");
    console.log(offerList, "바이오퍼");
  }, []);
  return (
    <div className="nftDetailContainerFrame">
      <div className="topSection">
        <div className="statisticsSection">
          <div className="statisticsSectionFrame">
            <div className="chartInfoSection">
              <div className="transactionStatistics">Transaction Statistics</div>
              <div className="monthLayoutSection">
                <motion.div animate={{ color: selectedDiv === "div1" ? "#ffffff" : "rgba(255, 255, 255, 0.4)" }} onClick={() => handleClick("div1")}>
                  1 Month
                </motion.div>
                <motion.div animate={{ color: selectedDiv === "div2" ? "#ffffff" : "rgba(255, 255, 255, 0.4)" }} onClick={() => handleClick("div2")}>
                  3 Month
                </motion.div>
                <motion.div animate={{ color: selectedDiv === "div3" ? "#ffffff" : "rgba(255, 255, 255, 0.4)" }} onClick={() => handleClick("div3")}>
                  6 Month
                </motion.div>
              </div>
            </div>
            <div className="chartSection">
            <LineChart data={graphDate} width={1200} height={200} >
                        <Line type="monotone" dataKey="ETH" stroke="#8884d8" />
                            {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                        </LineChart>
            </div>
          </div>
        </div>
        <div className="infoSwiperSection">{/* <motion.div drag="x" dragConstraints={{ right: 0, left: -510 }} className="frameBox"></motion.div> */}</div>
      </div>
      <div className="bottomSection">
        <div className="askingPriceSection">
          <div className="topPriceSection">{}
            <div className="accrueList">{
              sellList.map((e) => {
                return <div>{e[2]}</div>
              })
              // block
            }</div>
            <div className="priceList">{
              sellList.map((e) => {
                return <div>{Number(e[3]/(10**18))} ETH</div>
              })
              // block
            }</div>
            <div className="infoList"></div>
          </div>
          <div className="middleLine" />
          <div className="bottomPriceSection">
            <div className="infoList"></div>
            <div className="priceList">{
              offerList.map((e) => {
                return <div>{Number(e[3]) / (10**18)} ETH</div>
              })
              // block
            }</div>
            <div className="accrueList">{
              offerList.map((e) => {
                return <div>{e[2]}</div>
              })
              // block
            }</div>
          </div>
        </div>
        <div className="orderSection">
          <div className="categorySection">
            <div className="selected" onClick={()=>{setOfferStatus(0)}}>매수</div>
            <div className="selected" onClick={()=>{setOfferStatus(1)}}>매도</div>
          </div>
          {offerStatus ==0?<div className="inputSection">
            <div className="inputList">
              <div className="canOrderPriceSection">
                <div className="leftSection">
                  <div className="text">주문 가능</div>
                </div>
                <div className="RightSection">
                  <div className="inputSection">
                    <div>{_balance}</div>
                    <div>ETH</div>
                  </div>
                </div>
              </div>
              <div className="buyPriceSection">
                <div className="leftSection">
                  <div className="text">매수 가격</div>
                </div>
                <div className="rightSection">
                  <input
                    onChange={(e) => {
                      setOrderEth(Number(e.target.value));
                    }}
                  />
                </div>
              </div>
              <div className="orderQuantitySection">
                <div className="leftSection">
                  <div className="text">주문 수량</div>
                </div>
                <div className="rightSection">
                  <input
                    onChange={(e) => {
                      setOrderCount(Number(e.target.value));
                    }}
                  />
                </div>
              </div>
              <div className="orderPriceSection">
                <div className="leftSection">
                  <div className="text">주문 총액</div>
                </div>
                <div className="RightSection">
                  <div className="inputSection">
                    <div>{orderEth * orderCount}</div>
                    <div>ETH</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="loginButtonSection">
              {createStatus ? (
                <div className="loginButton" onClick={async() => {
                  await buyOffer()
                }}>매수</div>
              ) : (
                <div
                  className="loginButton"
                  onClick={() => {
                    alert("지갑 연결 후 거래하실 수 있습니다.");
                  }}
                >
                  로그인
                </div>
              )}
            </div>
          </div>:<div className="inputSection">
            <div className="inputList">
              <div className="canOrderPriceSection">
                <div className="leftSection">
                  <div className="text">판매 가능</div>
                </div>
                <div className="RightSection">
                  <div className="inputSection">
                    <div>{myNftAmount}</div>
                    <div>개</div>
                  </div>
                </div>
              </div>
              <div className="buyPriceSection">
                <div className="leftSection">
                  <div className="text">매도 가격</div>
                </div>
                <div className="rightSection">
                  <input
                    onChange={(e) => {
                      setOrderEth(Number(e.target.value));
                    }}
                  />
                </div>
              </div>
              <div className="orderQuantitySection">
                <div className="leftSection">
                  <div className="text">판매 수량</div>
                </div>
                <div className="rightSection">
                  <input
                    onChange={(e) => {
                      setOrderCount(Number(e.target.value));
                    }}
                  />
                </div>
              </div>
              <div className="orderPriceSection">
                <div className="leftSection">
                  <div className="text">판매시 수령액</div>
                </div>
                <div className="RightSection">
                  <div className="inputSection">
                    <div>{orderEth * orderCount}</div>
                    <div>ETH</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="loginButtonSection">
              {createStatus ? (
                  <div className="loginButton" onClick={async () => {
                    if (orderCount <= myNftAmount) {
                      await sellOffer()
                    }
                    else {alert(`현재 보유중인 수량은${myNftAmount}이고 판매 요청하는 수량은${orderCount}입니다. 판매 수량 수정 후 재 요청 바랍니다. 정상적으로 입력하였으나 해당 문구가 지속 발생하는 경우 새로고침 또는 문의 바랍니다.`)}
                }}>매도</div>
              ) : (
                <div
                  className="loginButton"
                  onClick={() => {
                    alert("지갑 연결 후 거래하실 수 있습니다.");
                  }}
                >
                  로그인
                </div>
              )}
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default NftDetailContainer;

// export async function getServerSideProps(context) {
//   const { NFTId } = context.query; // NFTID를 쿼리에서 가져옵니다.
//   const web3 = new Web3("https://goerli.infura.io/v3/38ffb7857b6943d589150bc276de6e8f");
//   console.log(NFTId, "타입 nftid");
//   const contract = new web3.eth.Contract(NEWSIC_MARKET_ABI, NEWSIC_MARKET_CA);
//   const result = await contract.methods._offers(Number(NFTId)).call();
//   console.log(result[0]);
//   return {
//     props: {
//       buyOffer: result[0],
//       sellOffer: result[1],
//     },
//   };
// }
