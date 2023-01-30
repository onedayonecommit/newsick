import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useFetch";
import Web3 from "web3";
import { userAction } from "../redux/userSlice";
import { fetchUserCheck } from "../middleware/fetchUser";
import SignUp from "../pages/signup";

const ConnectWallet = () => {
  const [account, setAccount] = useState<string>("");
  const [web3, setWeb3] = useState<Web3 | undefined>(undefined);
  const [isLogin, setIsLogin] = useState(false);
  const createStatus = useAppSelector((state) => state.userInfo.createStatus);

  const dispatch = useAppDispatch();

  const getRequestAccount = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
    // console.log(accounts[0]);
    // console.log(accounts); // 배열로 반환해줌
    return accounts[0];
  };

  useEffect(() => {
    (async () => {
      try {
        const web3 = new Web3(window.ethereum);
        setWeb3(web3);

        // 메타마스크 연동할 때 계정도 회원가입할 때 보내주기 위해서 state에 dispatch
        dispatch(userAction.addressCheck(account));
        // 계정이 DB에 있나 확인하기 위해서 dispatch
        dispatch(fetchUserCheck(account));

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

  return (
    // 지갑주소가 있으면 로그인, 없으면 회원가입으로 이동
    // 회원가입 후 로그인되면 메인으로 이동
    <>{!isLogin ? <button onClick={() => getRequestAccount()}>ConnectWallet</button> : <div>{account}님 로그인 완료</div>}</>
  );
};
export default ConnectWallet;
