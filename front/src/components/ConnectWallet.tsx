import { useState, useEffect } from "react";
import { useAppDispatch } from "../hooks/useFetch";
import Web3 from "web3";
import { userAction } from "../redux/userSlice";

const ConnectWallet = () => {
  const [account, setAccount] = useState<string>("");
  const [web3, setWeb3] = useState<Web3 | undefined>(undefined);
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useAppDispatch();

  const getRequestAccount = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
    console.log(accounts[0]);
    console.log(accounts); // 배열로 반환해줌
    return accounts[0];
  };

  useEffect(() => {
    (async () => {
      try {
        const web3 = new Web3(window.ethereum);
        setWeb3(web3);

        // 메타마스크 연동할 때 계정도 회원가입할 때 보내주기 위해서 state에 dispatch
        dispatch(userAction.addressUpdate(account));

        // 계정이 변경되면 감지
        window.ethereum.on("accountsChanged", handleAccountsChanged);
      } catch (err) {
        console.log(err);
      }
    })();

    setIsLogin(!(account === ""));
  }, [account, dispatch]);

  const handleAccountsChanged = (accounts: string) => {
    if (accounts.length === 0) {
      // MetaMask is locked or the user has not connected any accounts
      console.log("Please connect to MetaMask.");
    } else if (accounts[0] !== accounts) {
      setAccount(accounts[0]);
      // Do any other work!
    }
  };

  return <>{!isLogin ? <button onClick={() => getRequestAccount()}>ConnectWallet</button> : <div>{account}님 로그인 완료</div>}</>;
};
export default ConnectWallet;
