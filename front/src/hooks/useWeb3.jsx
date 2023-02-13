import { useEffect, useState } from "react";
import Web3 from "web3";
import { NEWSIC_FUND_CA, NEWSIC_FUND_ABI, NEWSIC_MARKET_CA, NEWSIC_MARKET_ABI } from "@/web3.config";
import { useDispatch } from "react-redux";
import { fetchUserCheck } from "@/middleware/fetchUser";

const useWeb3 = () => {
  const [web3, setWeb3] = useState();
  const [changeAccount, setChangeAccount] = useState("");
  const [NEWSIC_FUND, setNEWSIC_FUND] = useState();
  const [NEWSIC_MARKET, setNEWSIC_MARKET] = useState();
  const dispatch = useDispatch();

  const getWeb3 = () => {
    try {
      // 메타마스크를 설치했으면 window 안에 ethereum 객체가 생김
      if (!window.ethereum) return;
      setWeb3(new Web3(window.ethereum));
    } catch (error) {
      console.log(error);
    }
  };

  const getFundContract = () => {
    if (!web3) return;
    const NEWSIC_FUND_CONTRACT = new web3.eth.Contract(NEWSIC_FUND_ABI, NEWSIC_FUND_CA);
    setNEWSIC_FUND(NEWSIC_FUND_CONTRACT);
  };

  const getMarketContract = () => {
    if (!web3) return;
    const NEWSIC_MARKET_CONTRACT = new web3.eth.Contract(NEWSIC_MARKET_ABI, NEWSIC_MARKET_CA);
    setNEWSIC_MARKET(NEWSIC_MARKET_CONTRACT);
  };

  useEffect(() => {
    if (!web3) {
      getWeb3();
    } else {
      getFundContract();
      getMarketContract();
    }
    window.ethereum.on("accountsChanged", handleAccountsChanged);
  }, [web3]);

  const handleAccountsChanged = (accounts) => {
    console.log(accounts.length);
    if (accounts.length === 0) {
      // 메타마스크 연결하세요!
      console.log("Please connect to MetaMask.");
    } else if (accounts[0] !== changeAccount) {
      console.log("계정 바꿀때마다", accounts[0]);
      setChangeAccount(accounts[0]);
      dispatch(fetchUserCheck({ user_wallet_address: accounts[0] }));
      console.log("state 계정", changeAccount);
    }
  };

  console.log(web3, NEWSIC_FUND, NEWSIC_MARKET, changeAccount);
  return { web3, NEWSIC_FUND, NEWSIC_MARKET };
};

export default useWeb3;
