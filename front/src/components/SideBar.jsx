import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { PlayBar } from "@/components";
import { useRouter } from "next/router";
import useWeb3 from "@/hooks/useWeb3";
import { useSelector } from "react-redux";

// 컴포넌트
const SideBar = () => {
  const router = useRouter();
  const { NEWSIC_FUND } = useWeb3();
  const sidePage = [
    ["FUNDING", "reward"],
    ["NFT MARKET", "NFTmarket"],
    ["MUSIC", "music"],
    ["SITE INFO", "newsic_is"],
    ["SUBSCRIPTIONS", "subscription"],
  ];
  function movePage(_page) {
    _page == "home" ? router.replace("/") : router.push(`/${_page}`);
  }
  const user_wallet_address = useSelector((state) => state.userInfo.address);
  const [isHover, setIsHover] = useState(false);
  //---크리에이터 권한 초기화 함수---------
  const resetContract = async () => {
    const reset = await NEWSIC_FUND.methods.creatorDelete().send({
      from: user_wallet_address,
    });
    console.log("크리에이터 초기화", reset);
  };
  // ----------------------------------
  return (
    <div className="sideBarSection">
      <div className="iconBar">
        <div className="buttonList">
          <div className="iconButton"></div>
        </div>
      </div>
      <div className="categories">
        <div
          className="headerSection"
          onClick={() => {
            movePage("home");
          }}
        >
          NEWSIC
        </div>
        <button onClick={resetContract}>크리에이터 권한 제거</button>
        <div className="menuSection">
          {sidePage.map((value, index) => {
            return (
              <motion.div
                whileHover={{
                  y: -1.5,
                  boxShadow:
                    "0px 1.6733156776526186px 1.6733156776526186px 0px rgba(0, 0, 0, 0), 0px 3.984206390969505px 3.984206390969505px 0px rgba(0, 0, 0, 0.00996), 0px 7.259321882820145px 7.259321882820145px 0px rgba(0, 0, 0, 0.01815), 0px 12.068385491961365px 12.068385491961365px 0px rgba(0, 0, 0, 0.03017), 0px 19.50049274209897px 19.50049274209897px 0px rgba(0, 0, 0, 0.04875), 0px 31.901418213351462px 31.901418213351462px 0px rgba(0, 0, 0, 0.07975), 0px 54.96035212570371px 54.96035212570371px 0px rgba(0, 0, 0, 0.1374), 0px 100px 100px 0px rgba(0, 0, 0, 0.25)",
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  borderRadius: "25px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                transition={{ ease: [0.44, 0, 0.56, 1], stiffness: 500, damping: 60, mass: 1, duration: 0.3 }}
                whileTap={{ scale: 0.9 }}
                className="menuItem"
                onClick={() => {
                  movePage(value[1]);
                }}
              >
                {value[0]}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
