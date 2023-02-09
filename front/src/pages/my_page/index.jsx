import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MyPageFirstContainer, MyPageSecondContainer, MyPageThirdContainer } from "@/components/mypage";
const MyPage = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleClick = (index) => {
    setSelectedOption(index);
  };
  return (
    <div className="myPageFrame">
      <div className="toggleFrame">
        <div className="toggle">
          <AnimatePresence>
            {selectedOption === 0 && <motion.div className="togglePoint" initial={{ x: 5 }} animate={{ x: 5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} />}
            {selectedOption === 1 && <motion.div className="togglePoint" initial={{ x: 356.5 }} animate={{ x: 356.5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} />}
            {selectedOption === 2 && <motion.div className="togglePoint" initial={{ x: 718 }} animate={{ x: 718 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} />}
          </AnimatePresence>
          <motion.div className={` ${selectedOption === 0 ? "selected" : "option"}`} onClick={() => handleClick(0)}>
            크리에이터 신청
          </motion.div>
          <motion.div className={` ${selectedOption === 1 ? "selected" : "option"}`} onClick={() => handleClick(1)}>
            관심 (펀딩 & NFT)
          </motion.div>
          <motion.div className={` ${selectedOption === 2 ? "selected" : "option"}`} onClick={() => handleClick(2)}>
            소유한 NFT
          </motion.div>
        </div>
      </div>
      {selectedOption === 0 ? <MyPageFirstContainer /> : null}
      {selectedOption === 1 ? <MyPageSecondContainer /> : null}
      {selectedOption === 2 ? <MyPageThirdContainer /> : null}
    </div>
  );
};

export default MyPage;
