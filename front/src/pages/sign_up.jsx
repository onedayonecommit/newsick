import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserCreated } from "../middleware/fetchUser";

const SignUp = () => {
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

  const userNameRef = useRef();
  const userEmailInput = useRef();

  const dispatch = useDispatch();
  const userAdress = useSelector((state) => state.userInfo.address);
  // const signUpUser = useAppSelector((state) => state.userInfo);

  // 이메일 정규식 체크
  const emailRegExp = (userEmail) => {
    const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (regEmail.test(userEmail) == false) return alert("이메일 형식에 맞게 입력");
  };

  const signUpHandler = () => {
    const userName = userNameRef.current.value;
    const userEmail = userEmailInput.current.value;
    emailRegExp(userEmail);
    console.log(userName);
    console.log(userEmail);
    dispatch(fetchUserCreated({ userName, userEmail, userAdress, isCreator }));
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
