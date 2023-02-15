import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MyPageFirstContainer, MyPageSecondContainer, MyPageThirdContainer } from "@/components/mypage";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyNftList, fetchMyPage, myNftList, myRunningFundList } from "@/middleware/fetchMypage";
const MyPage = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const dispatch = useDispatch();

  const isCreator = useSelector((state) => state.userInfo.isCreator);
  const user_wallet_address = useSelector((state) => state.userInfo.address);

  useEffect(() => {
    console.log("통신좀 해");
    console.log(user_wallet_address);
    dispatch(fetchMyPage({ user_wallet_address }));
    dispatch(myNftList(user_wallet_address));
    dispatch(fetchMyNftList({ user_wallet_address }));
    if (isCreator) {
      console.log(isCreator, "ssississississi");
      dispatch(myRunningFundList({ user_wallet_address }));
    }
  }, [user_wallet_address]);

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
          {isCreator ? (
            <motion.div className={` ${selectedOption === 0 ? "selected" : "option"}`} onClick={() => handleClick(0)}>
              크리에이터
            </motion.div>
          ) : (
            <motion.div className={` ${selectedOption === 0 ? "selected" : "option"}`} onClick={() => handleClick(0)}>
              크리에이터 신청
            </motion.div>
          )}
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
