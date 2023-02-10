import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserCheck } from "../middleware/fetchUser";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import useWeb3 from "../hooks/useWeb3";
import { userAction } from "@/redux/userSlice";

/**계정 전환했을 때 reset 시켜줄 초기 값 */
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
  const { web3 } = useWeb3();
  // console.log("웹3", web3);
  const dispatch = useDispatch();
  const router = useRouter();
  const userName = useSelector((state) => state.userInfo.userName);
  const userEmail = useSelector((state) => state.userInfo.userEmail);
  const createStatus = useSelector((state) => state.userInfo.createStatus);

  const getRequestAccount = async () => {
    if (!web3) return;

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log("계정 스테이트", account);

    if (createStatus == false) {
      alert("회원가입을 해주세요!");
      router.push("/sign_up");
    } else {
      alert("로그인 완료!");
      router.push("/");
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

        // 여기서 회원이면 유저 정보 전체 받아오고
        // 비회원이면 createStatus : false 받아옴
        dispatch(fetchUserCheck({ user_wallet_address: linkedAccount[0] }));
      } catch (err) {
        console.log(err);
      }
      // 계정 변경 감지
      window.ethereum.on("accountsChanged", handleAccountsChanged);
    })();
  }, [web3, account]);

  useEffect(() => {
    (async () => {
      if (!web3) return;
      const linkedAccount = await web3.eth.getAccounts();
      if (createStatus == true) {
        setAccount(linkedAccount[0]);
      }
    })();
  }, [createStatus]);

  const handleAccountsChanged = (accounts) => {
    console.log(accounts.length);
    console.log("계정 바꿀때마다", accounts[0]);
    console.log("state 계정", account);

    if (accounts.length === 0) {
      // 메타마스크 연결하세요!
      console.log("Please connect to MetaMask.");
    } else if (accounts[0] !== account) {
      setAccount(accounts[0]);
    }
  };

  return (
    // 지갑주소가 있으면 로그인, 없으면 회원가입으로 이동
    // 회원이고 지갑이 연결이 되어있으면 페이지에 들어가자마자 로그인되게!
    // 회원가입 후 로그인되면 메인으로 이동
    <>
      {createStatus ? (
        <div className="userProfile">
          <div className="userName">{userName}</div>
          <div className="userEmail">{userEmail}</div>
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
