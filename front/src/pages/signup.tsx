import axios from "axios";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

const SignUp = () => {
  const [isChoice, setIsChoice] = useState("User");
  const backgroundColorControls = useAnimation();
  const backgroundColorControls2 = useAnimation();
  useEffect(() => {
    if (isChoice === "User") {
      backgroundColorControls.start({ backgroundColor: "rgba(0, 0, 0, 0.7)", color: "rgba(255, 255, 255, 1)", border: "1px solid rgba(255, 255, 255, 0.1)" });
    } else {
      backgroundColorControls.start({ backgroundColor: "rgba(255, 255, 255, 0.1)", color: "rgba(255, 255, 255, 0.2)", border: "none" });
    }
  }, [isChoice, backgroundColorControls]);
  useEffect(() => {
    if (isChoice === "Creator") {
      backgroundColorControls2.start({ backgroundColor: "rgba(0, 0, 0, 0.7)", color: "rgba(255, 255, 255, 1)", border: "1px solid rgba(255, 255, 255, 0.1)" });
    } else {
      backgroundColorControls2.start({ backgroundColor: "rgba(255, 255, 255, 0.1)", color: "rgba(255, 255, 255, 0.2)", border: "none" });
    }
  }, [isChoice, backgroundColorControls2]);
  return (
    <div className="signUpPageBackGround">
      <div className="signUpFrame">
        <div className="signUpSection">
          <div className="signUpTitle">LOGIN</div>
          <div className="signUpInputSection">
            <div className="userNameSection">
              <div className="nameText">USER NAME</div>
              <div className="nameInput">
                <input />
              </div>
            </div>
            <div className="userEmailSection">
              <div className="emailText">USER E-MAIL</div>
              <div className="emailInput">
                <input />
              </div>
            </div>
          </div>
          <div className="signUpChoiceSection">
            <div className="signUpinfoText">what is your purpose?</div>
            <div className="signUpButtonSection">
              <motion.div className="userButton" animate={backgroundColorControls} onTap={() => setIsChoice("User")}>
                USER
              </motion.div>
              <motion.div className="createrButton" animate={backgroundColorControls2} onTap={() => setIsChoice("Creator")}>
                CREATER
              </motion.div>
            </div>
          </div>
          <div className="signUpButtonFrame">
            <div className="signUpButton">SIGN UP</div>
          </div>
        </div>
        <div className="imgSection" />
      </div>
    </div>
  
  );
};

export default SignUp;
