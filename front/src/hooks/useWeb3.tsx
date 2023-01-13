import { useEffect, useState } from "react";
import Web3 from "web3";

export const useWeb3 = () => {
  const [account, setAccount] = useState<string>();
  const [web3, setWeb3] = useState();

  useEffect(() => {
    if ((window as any).ethereum) {
      console.log("meta mask 있음!");
    } else {
      console.log("meta mask 없음!");
    }
  });

  //   const [account, setAccount] = useState();
  //   const [web3, setWeb3] = useState();

  //   const getRequestAccount = async () => {
  //     const [account] = await window.ethereum.request({
  //       method: "eth_requestAccounts",
  //     });
  //     return account;
  //   };

  //   useEffect(() => {
  //     (async () => {
  //       const account = await getRequestAccount();
  //       const web3 = new Web3(window.ethereum);

  //       setAccount(account);
  //       setWeb3(web3);

  //       // ㅜ 이더리움 계정 변경하면 동작
  //       window.ethereum.on("accountsChanged", handleAccountsChanged);
  //     })();
  //   }, []);
  //   // ㅜ 이더리움 계정이 일어나면 accounts에 변경된 값을 담는다.
  //   function handleAccountsChanged(accounts) {
  //     if (accounts.length === 0) {
  //       // MetaMask is locked or the user has not connected any accounts
  //       console.log("Please connect to MetaMask.");
  //     } else if (accounts[0] !== accounts) {
  //       setAccount(accounts[0]);
  //       // Do any other work!
  //     }
  //   }

  //   return [web3, account];
};
