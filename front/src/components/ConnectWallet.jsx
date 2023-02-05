import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserCheck } from "../middleware/fetchUser";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useWeb3 } from "../hooks/useWeb3";
import { userAction } from "@/redux/userSlice";

const user = {
  address: "0x4A48Cb2d163b71CE587b5D11abECF4bf36962183",
  userName: "hoho",
  userEmail: "hoho@gmail.com",
  isCreator: false,
  createStatus: true,
};

const userStateReset = {
  address: "",
  userName: "",
  userEmail: "",
  isCreator: false,
  createStatus: false,
};

// 계정을 바꾸면 다시 버튼이 생겨야함! 자동으로 로그아웃!
const ConnectWallet = () => {
  const [account, setAccount] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const web3 = useWeb3();
  const dispatch = useDispatch();
  const router = useRouter();
  const createStatus = useSelector((state) => state.userInfo.createStatus);
  const addressState = useSelector((state) => state.userInfo.address);

  const getRequestAccount = async () => {
    if (!web3) return;
    // 현재 연결된 계정 가져오는 함수!!!
    const getAccount = await web3.eth.getAccounts();
    console.log(getAccount[0]);

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    // 계정이 DB에 있나 확인하기 위해서 dispatch
    dispatch(fetchUserCheck(getAccount[0]));
    // if (createStatus == false) {
    //   alert("회원가입을 해주세요!");
    //   router.push("/sign_up");
    // } else {
    //   alert("로그인 완료!");
    //   router.push("/");
    //   setIsLogin(true);
    // }

    setAccount(accounts[0]);
    console.log(accounts[0]);

    // 회원가입 더미데이터 테스트
    if (getAccount[0] !== user.address) {
      alert("회원가입을 해주세요!");
      router.push("/sign_up");
    } else {
      alert("로그인 완료!");
      router.push("/");
      setIsLogin(true);
    }

    // console.log(accounts); // 배열로 반환해줌
    return accounts;
  };

  useEffect(() => {
    (async () => {
      try {
        // 현재 연결된 계정 확인용!
        if (!web3) return;
        const linkedAccount = await web3.eth.getAccounts();
        console.log("현재 연결된 계정 _app : ", linkedAccount);
        // setAccount(linkedAccount);
        // if (!window.ethereum) return;
        window.ethereum.on("accountsChanged", handleAccountsChanged);
        console.log("계정 연결확인 : ", window.ethereum.isConnected());
      } catch (err) {
        console.log(err);
      }
    })();
  }, [web3, account]);

  const handleAccountsChanged = (accounts) => {
    console.log(accounts.length);
    if (accounts.length === 0) {
      // 메타마스크 연결하세요!
      console.log("Please connect to MetaMask.");
    } else if (accounts[0] !== account) {
      // 리덕스 userInfo를 초기화
      // user의 create 상태를 false로 바꿔주기
      // 무조건 로그인은 유저바에서만 가넝..
      setIsLogin(false);
      dispatch(userAction.reset(userStateReset));
    }
  };

  return (
    // 지갑주소가 있으면 로그인, 없으면 회원가입으로 이동
    // 회원가입 후 로그인되면 메인으로 이동
    <>
      {isLogin ? (
        <div className="userProfile">
          <div className="userName">{user.userName}</div>
          <div className="userEmail">{user.userEmail}</div>
        </div>
      ) : (
        <motion.div
          onClick={() => getRequestAccount()}
          className="metaConnectButton"
          whileHover={{
            scale: [1, 1.1],
            color: "rgba(255, 255, 255, 1)",
          }}
          whileTap={{ scale: 0.9 }}
        >
          MetaMask Connect
        </motion.div>
      )}
    </>
  );
};
export default ConnectWallet;
