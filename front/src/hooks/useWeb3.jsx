import { useEffect, useState } from "react";
import Web3 from "web3";
import { NEWSIC_FUND_CA, NEWSIC_FUND_ABI, NEWSIC_MARKET_CA, NEWSIC_MARKET_ABI } from "@/web3.config";

export const useWeb3 = () => {
  const [web3, setWeb3] = useState();
  const [NEWSIC_FUND, setNEWSIC_FUND] = useState();
  const [NEWSIC_MARKET, setNEWSIC_MARKET] = useState();

  // const getRequestChainId = async () => {
  //   if (!window.ethereum) return;
  //   const getChainId = await window.ethereum.request({
  //     method: "eth_chainId",
  //   });
  //   return getChainId;
  // };

  useEffect(() => {
    (() => {
      // 메타마스크를 설치했으면 window 안에 ethereum 객체가 생김
      if (!window.ethereum) return;
      setWeb3(new Web3(window.ethereum));

      if (!web3) return;
      const NEWSIC_FUND_CONTRACT = new web3.eth.Contract(NEWSIC_FUND_ABI, NEWSIC_FUND_CA);
      setNEWSIC_FUND(NEWSIC_FUND_CONTRACT);

      const NEWSIC_MARKET_CONTRACT = new web3.eth.Contract(NEWSIC_MARKET_ABI, NEWSIC_MARKET_CA);
      setNEWSIC_MARKET(NEWSIC_MARKET_CONTRACT);
    })();
  }, []);

  // const handleChainIdChanged = () => {
  //   window.location.reload();
  // };

  console.log(web3, NEWSIC_FUND, NEWSIC_MARKET);
  return { web3, NEWSIC_FUND, NEWSIC_MARKET };
};
