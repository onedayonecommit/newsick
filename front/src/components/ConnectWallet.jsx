import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserCheck } from "../middleware/fetchUser";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useWeb3 } from "../hooks/useWeb3";
import { userAction } from "@/redux/userSlice";

// 더미 데이터
const user = {
  address: "0x4A48Cb2d163b71CE587b5D11abECF4bf36962183",
  userName: "hoho",
  userEmail: "hoho@gmail.com",
  isCreator: false,
  createStatus: true,
};

/**계정 전환했을 때 reset 시켜줄 초기 값 */
const userStateReset = {
  address: "",
  userName: "",
  userEmail: "",
  isCreator: false,
  createStatus: false,
};
console.log("@@@", userStateReset.address);

// 계정을 바꾸면 다시 버튼이 생겨야함! 자동으로 로그아웃!
const ConnectWallet = () => {
  const [account, setAccount] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const { web3 } = useWeb3();
  const dispatch = useDispatch();
  const router = useRouter();
  const createStatus = useSelector((state) => state.userInfo.createStatus);

  const getRequestAccount = async () => {
    if (!web3) return;
    // 현재 연결된 계정 가져오는 함수!!!
    // const getAccount = await web3.eth.getAccounts();
    // console.log(getAccount[0]);

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log("계정 스테이트", account);
    console.log(user.address);

    // if (createStatus == false) {
    //   alert("회원가입을 해주세요!");
    //   router.push("/sign_up");
    // } else {
    //   alert("로그인 완료!");
    //   router.push("/");
    //   setIsLogin(true);
    // }

    // 회원가입 더미데이터 테스트
    if (account !== user.address) {
      alert("회원가입을 해주세요!");
      router.push("/sign_up");
    } else if (account == user.address) {
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
        setAccount(linkedAccount[0]);

        // 테스트 유저용!!!!!!!!!!!!!!!!!!!!!!!!!!
        if (account == user.address) {
          setIsLogin(true);
        }
        // if (createStatus == true) {
        //   setIsLogin(true);
        // }

        // 여기서 회원이면 유저 정보 전체 받아오고
        // 비회원이면 createStatus : false 받아옴
        dispatch(fetchUserCheck(linkedAccount[0]));

        window.ethereum.on("accountsChanged", handleAccountsChanged);

        // 계정 변경 감지
        console.log("계정 연결확인 : ", window.ethereum.isConnected());
      } catch (err) {
        console.log(err);
      }
    })();
  }, [web3, account, isLogin]);

  const handleAccountsChanged = (accounts) => {
    console.log(accounts.length);
    console.log("계정 바꿀때마다", accounts[0]);
    console.log("state 계정", account);
    // console.log("유저유저", user.address);

    if (accounts.length === 0) {
      // 메타마스크 연결하세요!
      console.log("Please connect to MetaMask.");
    } else if (accounts[0] !== account) {
      setAccount(accounts[0]);
      setIsLogin(false);
      console.log("[0]", accounts[0]);
      console.log("바뀐 state 계정", account);
      console.log(isLogin);
      // if (createStatus == true) {
      //   setIsLogin(true);
      // } else {
      //   dispatch(userAction.reset(userStateReset));
      //   setIsLogin(false);
      // }
    }
  };

  return (
    // 지갑주소가 있으면 로그인, 없으면 회원가입으로 이동
    // 회원이고 지갑이 연결이 되어있으면 페이지에 들어가자마자 로그인되게!
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
