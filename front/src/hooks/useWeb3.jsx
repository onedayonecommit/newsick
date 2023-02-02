import { useEffect, useState } from "react";
import Web3 from "web3";

export const useWeb3 = () => {
  const [web3, setWeb3] = useState();

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
    })();
  }, []);

  // const handleChainIdChanged = () => {
  //   window.location.reload();
  // };

  return web3;
};
