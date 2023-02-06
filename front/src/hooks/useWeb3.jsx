import { useEffect, useState } from "react";
import Web3 from "web3";

const useWeb3 = () => {
  const [web3, setWeb3] = useState();

  const getWeb3 = () => {
    try {
      // 메타마스크를 설치했으면 window 안에 ethereum 객체가 생김
      if (!window.ethereum) return;
      setWeb3(new Web3(window.ethereum));
      console.log("1");
    } catch (error) {
      console.log(error);
    }
  };

  const getFundContract = () => {
    if (!web3) return;
    const NEWSIC_FUND_CONTRACT = new web3.eth.Contract(NEWSIC_FUND_ABI, NEWSIC_FUND_CA);
    setNEWSIC_FUND(NEWSIC_FUND_CONTRACT);
    console.log("2");
  };

  const getMarketContract = () => {
    if (!web3) return;
    const NEWSIC_MARKET_CONTRACT = new web3.eth.Contract(NEWSIC_MARKET_ABI, NEWSIC_MARKET_CA);
    setNEWSIC_MARKET(NEWSIC_MARKET_CONTRACT);
    console.log("3");
  };

  useEffect(() => {
    if (!web3) {
      getWeb3();
      console.log("몇번!!");
    } else {
      getFundContract();
      getMarketContract();
    }
  }, [web3]);

  console.log(web3, NEWSIC_FUND, NEWSIC_MARKET);
  return { web3, NEWSIC_FUND, NEWSIC_MARKET };
};

export default useWeb3;
