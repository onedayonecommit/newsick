import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserCreated, fetchUserCheck } from "../middleware/fetchUser";
import useWeb3 from "../hooks/useWeb3";
import { useRouter } from "next/router";

const SignUp = () => {
  const { web3, NEWSIC_FUND } = useWeb3();
  console.log(web3, NEWSIC_FUND);
  const [isCreator, setIsCreator] = useState(false);

  const router = useRouter();
  const userNameRef = useRef();
  const userEmailInput = useRef();
  const dispatch = useDispatch();
  const [linkedAccount, setLinkedAccount] = useState("");
  const createStatus = useSelector((state) => state.userInfo.createStatus);

  const backgroundColorControls = useAnimation();
  const backgroundColorControls2 = useAnimation();
  useEffect(() => {
    if (isCreator === false) {
      backgroundColorControls.start({ backgroundColor: "rgba(0, 0, 0, 0.7)", color: "rgba(255, 255, 255, 1)", border: "1px solid rgba(255, 255, 255, 0.1)" });
    } else {
      backgroundColorControls.start({ backgroundColor: "rgba(255, 255, 255, 0.1)", color: "rgba(255, 255, 255, 0.2)", border: "none" });
    }
  }, [isCreator, backgroundColorControls]);
  useEffect(() => {
    if (isCreator === true) {
      backgroundColorControls2.start({ backgroundColor: "rgba(0, 0, 0, 0.7)", color: "rgba(255, 255, 255, 1)", border: "1px solid rgba(255, 255, 255, 0.1)" });
    } else {
      backgroundColorControls2.start({ backgroundColor: "rgba(255, 255, 255, 0.1)", color: "rgba(255, 255, 255, 0.2)", border: "none" });
    }
  }, [isCreator, backgroundColorControls2]);

  /**회원가입 버튼을 눌렀을 때 */
  const signUpHandler = async () => {
    if (!web3) return;
    const getAccount = await web3.eth.getAccounts();
    setLinkedAccount(getAccount[0]);
    const userName = userNameRef.current.value;
    const userEmail = userEmailInput.current.value;
    const creatorPrice = await web3.utils.toWei("0.1", "ether");
    // emailRegExp(userEmail);
    console.log("유저 닉네임", userName);
    console.log("유저 이메일", userEmail);
    console.log("전송할 이더", creatorPrice);
    console.log(isCreator);

    // 이메일 정규식 체크
    const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (regEmail.test(userEmail) == false) return alert("이메일 형식에 맞게 입력");
    else {
      // 크리에이터로 회원가입할 경우!
      if (isCreator == true) {
        const creatorPay = await NEWSIC_FUND.methods.creatorJoinPay().send({ from: linkedAccount, value: creatorPrice });
        // NEWSIC_FUND.events.creatorApplicant()
        console.log("컨트랙트 실행 결과", creatorPay);
        // console.log("이벤트", creatorPay.events);
        // console.log("크리에이터앱", creatorPay.events.creatorApplicant);
        // console.log("리턴", creatorPay.events.creatorApplicant.returnValues);
        // console.log("컨트랙트 이벤트", creatorPay.events.creatorApplicant.returnValues[1]);

        dispatch(fetchUserCreated({ user_name: userName, user_email: userEmail, user_wallet_address: linkedAccount, is_creator: creatorPay.events.creatorApplicant.returnValues._status }));
      } else {
        dispatch(fetchUserCreated({ user_name: userName, user_email: userEmail, user_wallet_address: linkedAccount, is_creator: isCreator }));
        alert("회원가입 추카추");
        router.replace("/");
      }
    }
  };

  useEffect(() => {
    (async () => {
      try {
        if (!web3) return;
        const getAccount = await web3.eth.getAccounts();
        setLinkedAccount(getAccount[0]);
        console.log("회원가입창 들어오면 연결된 계정", getAccount[0]);
        dispatch(fetchUserCheck({ user_wallet_address: getAccount[0] }));
      } catch (error) {
        console.log(error);
      }
      window.ethereum.on("accountsChanged", handleAccountsChanged);
    })();
  }, [web3, linkedAccount]);

  // useEffect(() => {
  //   console.log("set계정", linkedAccount);
  // }, [linkedAccount]);

  useEffect(() => {
    (async () => {
      if (isCreator == true) {
        if (createStatus == true) {
          alert("크리에이터 가입 추카추");
          router.replace("/");
        }
      } else if (createStatus == true) {
        alert("이미 가입된 회원입니다");
        router.replace("/");
      }
    })();
  }, [createStatus]);

  const handleAccountsChanged = (accounts) => {
    console.log(accounts.length);
    console.log("계정 바꿀때마다", accounts[0]);
    console.log("state 계정", linkedAccount);
    // console.log("유저유저", user.address);

    if (accounts.length === 0) {
      // 메타마스크 연결하세요!
      console.log("Please connect to MetaMask.");
    } else if (accounts[0] !== linkedAccount) {
      setLinkedAccount(accounts[0]);
    }
  };

  return (
    <div className="signUpPageBackGround">
      <div className="signUpFrame">
        <div className="signUpSection">
          <div className="signUpTitle">SIGN UP</div>
          <div className="signUpInputSection">
            <div className="userNameSection">
              <div className="nameText">USER NAME</div>
              <div className="nameInput">
                <input ref={userNameRef} type="text" name="user_name" />
              </div>
            </div>
            <div className="userEmailSection">
              <div className="emailText">USER E-MAIL</div>
              <div className="emailInput">
                <input ref={userEmailInput} type="text" name="user_email" />
              </div>
            </div>
          </div>
          <div className="signUpChoiceSection">
            <div className="signUpinfoText">what is your purpose?</div>
            <div className="signUpButtonSection">
              <motion.div className="userButton" animate={backgroundColorControls} onTap={() => setIsCreator(false)}>
                USER
              </motion.div>
              <motion.div className="createrButton" animate={backgroundColorControls2} onTap={() => setIsCreator(true)}>
                CREATER
              </motion.div>
            </div>
          </div>
          <div className="signUpButtonFrame">
            <div onClick={() => signUpHandler()} className="signUpButton">
              SIGN UP
            </div>
          </div>
        </div>
        <div className="imgSection" />
      </div>
    </div>
  );
};

export default SignUp;
