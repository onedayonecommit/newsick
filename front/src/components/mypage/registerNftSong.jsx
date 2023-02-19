import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { MypageBackDrop } from "@/components";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};
const subMenuAnimate = {
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
    display: "flex",
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  },
};
const RegisterNftSong = ({ handleClose, text }) => {
  const [isChoice, setIsChoice] = useState("Sub");
  const backgroundColorControls = useAnimation();
  const backgroundColorControls2 = useAnimation();
  const [isHover, toggleHover] = useState(false);
  const [selectedOption, setSelectedOption] = useState("가요");

  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    toggleHover(false);
  };
  useEffect(() => {
    if (isChoice === "Sub") {
      backgroundColorControls.start({ backgroundColor: "rgba(0, 0, 0, 0.7)", color: "rgba(255, 255, 255, 1)", style: { border: "1px solid rgba(255, 255, 255, 0.1)" } });
    } else {
      backgroundColorControls.start({ backgroundColor: "rgba(255, 255, 255, 0.1)", color: "rgba(255, 255, 255, 0.2)", style: { border: "none" } });
    }
  }, [isChoice, backgroundColorControls]);
  useEffect(() => {
    if (isChoice === "Title") {
      backgroundColorControls2.start({ backgroundColor: "rgba(0, 0, 0, 0.7)", color: "rgba(255, 255, 255, 1)", style: { border: "1px solid rgba(255, 255, 255, 0.1)" } });
    } else {
      backgroundColorControls2.start({ backgroundColor: "rgba(255, 255, 255, 0.1)", color: "rgba(255, 255, 255, 0.2)", style: { border: "none" } });
    }
  }, [isChoice, backgroundColorControls2]);
  return (
    <MypageBackDrop onClick={handleClose}>
      <motion.div onClick={(e) => e.stopPropagation()} className="modal orangeGradient" variants={dropIn} initial="hidden" animate="visible" exit="exit">
        <div className="nftRegistrationFrame">
          <div className="topText">NFT 펀딩용 음원동록</div>
          <div className="bottomFrame">
            <div className="bottomList">
              <div>곡이름</div>
              <input placeholder="곡이름" />
            </div>
            <div className="bottomList">
              <div>가수 이름</div>
              <input placeholder="가수 이름" />
            </div>
            <div className="bottomList">
              <div>작곡가</div>
              <input placeholder="작곡가" />
            </div>
            <div className="bottomList">
              <div>작사가</div>
              <input placeholder="작사가" />
            </div>
            <div className="bottomList">
              <div>앨범명</div>
              <input placeholder="앨범명" />
            </div>
            <div className="genreList">
              <div className="genreText">장르</div>
              <div className="chooseInput">
                <motion.div className="list" initial="exit" animate={isHover ? "enter" : "exit"} variants={subMenuAnimate}>
                  <div className="option" onClick={() => handleOptionClick("가요")}>
                    가요
                  </div>
                  <div className="option" onClick={() => handleOptionClick("팝")}>
                    팝
                  </div>
                  <div className="option" onClick={() => handleOptionClick("트로트")}>
                    트로트
                  </div>
                  <div className="option" onClick={() => handleOptionClick("클래식")}>
                    클래식
                  </div>
                </motion.div>
                <motion.div className="defalt" onClick={toggleHoverMenu}>
                  {selectedOption}
                </motion.div>
              </div>
            </div>
            <div className="bottomList">
              <div>음원 파일</div>
              <motion.label
                className="soundSource"
                for="soundSource"
                whileHover={{
                  scale: 0.9,
                }}
              >
                + 음원 파일 선택하기
              </motion.label>
              <input type="file" className="soundSource" id="soundSource" style={{ display: "none" }} />
            </div>
            <div className="bottomList">
              <div>앨범 커버사진</div>
              <motion.label
                className="albumCover"
                for="albumCover"
                whileHover={{
                  scale: 0.9,
                }}
              >
                + 커버사진 선택하기
              </motion.label>
              <input type="file" className="albumCover" id="albumCover" style={{ display: "none" }} />
            </div>
            <div className="bottomList">
              <div>타이틀 여부</div>
              <div className="switchBox">
                <motion.div className="notTitle" animate={backgroundColorControls} onTap={() => setIsChoice("Sub")}>
                  SUB
                </motion.div>
                <motion.div className="title" animate={backgroundColorControls2} onTap={() => setIsChoice("Title")}>
                  TITLE
                </motion.div>
              </div>
            </div>

            <div className="bottomListButton">
              <motion.div className="cancelButton" onClick={handleClose}>
                취소하기
              </motion.div>
              <motion.div className="registerButton">등록하기</motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </MypageBackDrop>
  );
};

export default RegisterNftSong;
