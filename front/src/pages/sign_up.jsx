import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserCreated, fetchUserCheck } from "../middleware/fetchUser";
import useWeb3 from "../hooks/useWeb3";
import { useRouter } from "next/router";
import { SuccessLog } from "@/components";

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

  const [isFalseText, setIsFalseText] = useState();
  const falseText = () => {
    setIsFalseText(!isFalseText);
  };
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  let [isInputClicked, setIsInputClicked] = useState(false);

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

  /**???????????? ????????? ????????? ??? */
  const signUpHandler = async () => {
    if (!web3) return;
    const getAccount = await web3.eth.getAccounts();
    setLinkedAccount(getAccount[0]);
    const userName = userNameRef.current.value;
    const userEmail = userEmailInput.current.value;
    const creatorPrice = await web3.utils.toWei("0.1", "ether");
    // emailRegExp(userEmail);
    console.log("?????? ?????????", userName);
    console.log("?????? ?????????", userEmail);
    console.log("????????? ??????", creatorPrice);
    console.log(isCreator);

    const regBlank = /[\s]/g;
    const regSpecial = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

    // ????????? ????????? ??????
    const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (!(userName.length > 0 && userName.length <= 10)) return alert("???????????? 10??? ????????? ??????????????????");
    if (regBlank.test(userName) == true) return alert("????????? ????????? ???????????????.");
    if (regSpecial.test(userName) == true) return alert("??????????????? ????????? ???????????????.");
    if (regEmail.test(userEmail) == false) return alert("????????? ????????? ?????? ??????????????????.");
    else {
      // ?????????????????? ??????????????? ??????!
      if (isCreator == true) {
        const creatorPay = await NEWSIC_FUND.methods.creatorJoinPay().send({ from: linkedAccount, value: creatorPrice });
        // NEWSIC_FUND.events.creatorApplicant()
        console.log("???????????? ?????? ??????", creatorPay);
        // console.log("?????????", creatorPay.events);
        // console.log("??????????????????", creatorPay.events.creatorApplicant);
        // console.log("??????", creatorPay.events.creatorApplicant.returnValues);
        // console.log("???????????? ?????????", creatorPay.events.creatorApplicant.returnValues[1]);

        dispatch(fetchUserCreated({ user_name: userName, user_email: userEmail, user_wallet_address: linkedAccount, is_creator: creatorPay.events.creatorApplicant.returnValues._status }));
      } else {
        dispatch(fetchUserCreated({ user_name: userName, user_email: userEmail, user_wallet_address: linkedAccount, is_creator: isCreator })).then((e) => {
          if (!typeof e.payload == "string") {
            router.replace("/");
          }
        });
      }
    }
  };

  useEffect(() => {
    (async () => {
      try {
        if (!web3) return;
        const getAccount = await web3.eth.getAccounts();
        setLinkedAccount(getAccount[0]);
        console.log("??????????????? ???????????? ????????? ??????", getAccount[0]);
        dispatch(fetchUserCheck({ user_wallet_address: getAccount[0] }));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [web3, linkedAccount]);

  // useEffect(() => {
  //   console.log("set??????", linkedAccount);
  // }, [linkedAccount]);

  useEffect(() => {
    (async () => {
      if (isCreator == true) {
        if (createStatus == true) {
          router.replace("/");
        }
      } else if (createStatus == true) {
        router.replace("/");
      }
    })();
  }, [createStatus]);

  return (
    <div className="signUpPageBackGround">
      <AnimatePresence>{modalOpen && <SuccessLog modalOpen={modalOpen} handleClose={close} />}</AnimatePresence>
      <div className="signUpFrame">
        <div className="signUpSection">
          <div className="signUpTitle" onClick={falseText}>
            SIGN UP
          </div>
          <div className="signUpInputSection">
            <div className="userNameSection">
              <div className="nameText">USER NAME</div>
              <motion.div className="nameInput" initial={{ x: 0 }} animate={isFalseText ? { x: [0, -15, 15, 0] } : { x: 0 }} style={isFalseText ? { border: "1px solid red" } : { border: "1px solid white" }} transition={{ duration: 0.25, ease: "easeInOut" }}>
                <input
                  ref={userNameRef}
                  type="text"
                  name="user_name"
                  onFocus={() => {
                    setIsInputClicked(true);
                  }}
                  onBlur={() => {
                    setIsInputClicked(false);
                  }}
                  placeholder={isInputClicked === true ? "" : "???????????? 10??? ??????, ??????, ???????????? ????????????"}
                  className="signUpUserNameInput"
                />
              </motion.div>
            </div>
            <div className="userEmailSection">
              <div className="emailText">USER E-MAIL</div>
              <motion.div className="emailInput" initial={{ x: 0 }} animate={isFalseText ? { x: [0, -15, 15, 0] } : { x: 0 }} style={isFalseText ? { border: "1px solid red" } : { border: "1px solid white" }} transition={{ duration: 0.25, ease: "easeInOut" }}>
                <input ref={userEmailInput} type="text" name="user_email" />
              </motion.div>
            </div>
          </div>
          <div className="signUpChoiceSection">
            <div className="signUpinfoText">what is your purpose?</div>
            <div className="signUpButtonSection">
              <motion.div className="userButton" animate={backgroundColorControls} onTap={() => setIsCreator(false)}>
                USER
              </motion.div>
              <motion.div className="creatorButton" animate={backgroundColorControls2} onTap={() => setIsCreator(true)}>
                CREATOR
              </motion.div>
            </div>
          </div>
          <div className="signUpButtonFrame">
            <div onClick={() => signUpHandler()} className="signUpButton">
              SIGN UP
            </div>
          </div>
        </div>
        <div className="imgSection" onClick={() => (modalOpen ? close() : open())} />
      </div>
    </div>
  );
};

export default SignUp;
