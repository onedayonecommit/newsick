import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserCreated } from "../middleware/fetchUser";
import { useWeb3 } from "../hooks/useWeb3";
import { useRouter } from "next/router";

const SignUp = () => {
  const { web3, NEWSIC_FUND } = useWeb3();
  console.log(web3, NEWSIC_FUND);
  const [isCreator, setIsCreator] = useState(false);
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

  const router = useRouter();
  const userNameRef = useRef();
  const userEmailInput = useRef();
  const dispatch = useDispatch();
  const [linkedAccount, setLinkedAccount] = useState();
  const [isLogin, setIsLogin] = useState(false);

  const createStatus = useSelector((state) => state.userInfo.createStatus);

  // 이메일 정규식 체크
  const emailRegExp = (userEmail) => {
    const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (regEmail.test(userEmail) == false) return alert("이메일 형식에 맞게 입력");
  };

  console.log(isCreator);
  /**회원가입 버튼을 눌렀을 때 */
  const signUpHandler = async () => {
    if (!web3) return;
    const getAccount = await web3.eth.getAccounts();
    setLinkedAccount(getAccount[0]);
    console.log(linkedAccount);
    const userName = userNameRef.current.value;
    const userEmail = userEmailInput.current.value;
    const creatorPrice = web3.utils.toWei("0.1", "ether");
    emailRegExp(userEmail);
    console.log(userName);
    console.log(userEmail);
    console.log(creatorPrice);

    // 크리에이터로 회원가입할 경우!
    if (isCreator == true) {
      const creatorPay = await NEWSIC_FUND.methods.creatorJoinPay().send({ from: linkedAccount, value: creatorPrice });
      // NEWSIC_FUND.events.creatorApplicant()
      console.log("컨트랙트 실행 결과", creatorPay);
      dispatch(fetchUserCreated({ user_name: userName, user_email: userEmail, user_wallet_address: linkedAccount, is_creator: isCreator }));
      // isLogin을 true로 바꿔주고
      // 로그인이 된 상태로 메인페이지로 돌아감!
      // if (createStatus == true) {
      //   alert("회원가입 추카추~");
      //   router.push("/");
      // }
      setIsLogin(true);
      alert("회원가입 추카추");
      router.push("/");
    } else {
      console.log(dispatch(fetchUserCreated({ user_name: userName, user_email: userEmail, user_wallet_address: linkedAccount, is_creator: isCreator })));
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
