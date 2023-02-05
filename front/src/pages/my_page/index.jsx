import { useState } from "react";
import MyPageFirstContainer from "../my_page/apply_creator";
import MyPageSecondContainer from "../my_page/favorite";
import MyPageThirdContainer from "../my_page/my_NFT";
import { motion } from "framer-motion";
const MyPage = () => {
  const [selectedOption, setSelectedOption] = useState(1);
  return (
    <div className="myPageFrame">
      <motion.div className="switchToggle">
        <motion.div
          className={`${selectedOption === 1 ? "selected" : "option"}`}
          onClick={() => setSelectedOption(1)}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
        >
          크리에이터 신청
        </motion.div>
        <motion.div
          className={`${selectedOption === 2 ? "selected" : "option"}`}
          onClick={() => setSelectedOption(2)}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
        >
          관심 (펀딩 & NFT)
        </motion.div>
        <motion.div
          className={`${selectedOption === 3 ? "selected" : "option"}`}
          onClick={() => setSelectedOption(3)}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
        >
          소유한 NFT
        </motion.div>
      </motion.div>
      {selectedOption === 1 ? <MyPageFirstContainer /> : null}
      {selectedOption === 2 ? <MyPageSecondContainer /> : null}
      {selectedOption === 3 ? <MyPageThirdContainer /> : null}
    </div>
  );
};

export default MyPage;
