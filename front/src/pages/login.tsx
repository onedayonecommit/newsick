import { useState, useEffect } from "react";
import Web3 from "web3";
import { useWeb3 } from "../hooks/useWeb3";

export default function Login() {
  const [account, setAccount] = useState<string>();
  const [web3, setWeb3] = useState<Web3 | undefined>(undefined);
  const [isLogin, setIsLogin] = useState(false);

  const getRequestAccount = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
    console.log(accounts[0]);
    console.log(accounts);
    return accounts[0];
  };

  // const loginHandler = () => {
  //   async () => {
  //     const account = await getRequestAccount();
  //     console.log(account);
  //     setAccount(account);
  //   };
  // };

  useEffect(() => {
    (async () => {
      try {
        const web3 = new Web3(window.ethereum);

        setWeb3(web3);

        // 계정이 변경되면 감지
        window.ethereum.on("accountsChanged", handleAccountsChanged);
      } catch (err) {
        console.log(err);
      }
    })();

    if (account === undefined) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [account]);

  const handleAccountsChanged = (accounts: string) => {
    if (accounts.length === 0) {
      // MetaMask is locked or the user has not connected any accounts
      console.log("Please connect to MetaMask.");
    } else if (accounts[0] !== accounts) {
      setAccount(accounts[0]);
      // Do any other work!
    }
  };

  return <>{!isLogin ? <button onClick={() => getRequestAccount()}>로그인</button> : <div>{account}님 로그인 완료</div>}</>;
}
