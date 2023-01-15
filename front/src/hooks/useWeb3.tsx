import { useEffect, useState } from "react";
import Web3 from "web3";

export const useWeb3 = () => {
  const [account, setAccount] = useState<string>();
  const [web3, setWeb3] = useState<Web3 | undefined>();

  const getRequestAccount = async () => {
    const [account] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    return account;
  };

  useEffect(() => {
    (async () => {
      const account = await getRequestAccount();
      const web3 = new Web3(window.ethereum);

      setAccount(account);
      setWeb3(web3);

      // 계정이 변경되면 감지
      window.ethereum.on("accountsChanged", handleAccountsChanged);
    })();
  }, []);

  function handleAccountsChanged(accounts: string) {
    if (accounts.length === 0) {
      // MetaMask is locked or the user has not connected any accounts
      console.log("Please connect to MetaMask.");
    } else if (accounts[0] !== accounts) {
      setAccount(accounts[0]);
      // Do any other work!
    }
  }

  return { web3, account };
};
