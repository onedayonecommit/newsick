import React from "react";
import { motion } from "framer-motion";
import testUserImg from "../../public/image/park.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import MypageBackDrop from "@/components";
const dropIn = {
  hidden: {
    x: "100vh",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    x: "100vh",
    opacity: 0,
  },
};
//   <motion.label
//   className='lyricsSource' for="lyricsSource"
//   whileHover={{
//       scale:0.9
//   }}
//   >
//      + 가사 첨부하기
//  </motion.label>
//  <input type="file" className='lyricsSource' id='lyricsSource' style={{display:"none"}}/>

const ChangeMember = ({ handleClose, text }) => {
  return (
    <MypageBackDrop onClick={handleClose}>
      <motion.div onClick={(e) => e.stopPropagation()} className="changeUserInfoFrame" variants={dropIn} initial="hidden" animate="visible" exit="exit">
        <div className="changeNavBar">
          <div className="successBtn" onClick={handleClose}>
            완료
          </div>
          <div className="infoText">회원정보 변경</div>
        </div>
        <div className="middleLine" />
        <div className="changeMainSection">
          <label className="imgChange" for="imgChange">
            <FontAwesomeIcon icon={faCamera} className="faCamera" />
            <input type="file" className="imgChange" id="imgChange" style={{ display: "none" }} />
          </label>
          <img className="userImg" src={testUserImg} alt="userImg" />
          <motion.span
            whileHover={{
              scale: 1.1,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <input className="userNickName" placeholder="현재 닉네임" />
          </motion.span>
        </div>
      </motion.div>
    </MypageBackDrop>
  );
};

export default ChangeMember;
