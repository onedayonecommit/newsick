import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import PlayBar from "./PlayBar";
import { useRouter } from "next/router";

// 컴포넌트
const SideBar = () => {
  const router = useRouter();
  const sidePage=[["FUNDING","reward"],["NFT MARKET","NFTmarket"],["MUSIC","music"],["SITE INFO","newsic_is"],["SUBSCRIPTIONS","subscription"]]
  function movePage(_page){
    _page == "home"? router.replace('/') : router.push(`/${_page}`);
  }
  const [isHover,setIsHover] = useState(false);
  return (
    <div className="sideBarSection">
      <div className="iconBar">
        <div className="buttonList">
          <div className="iconButton"></div>
        </div>
      </div>
      <div className="categories">
        <div className="headerSection" onClick={()=>{
          movePage("home")
        }}>NEWSIC</div>
        <div className="menuSection">
          {sidePage.map((value, index)=>{
            return(
              <motion.div
                whileHover={{
                  y: -1.5,
                }}
                transition={{ ease: [0.44, 0, 0.56, 1], stiffness: 500, damping: 60, mass: 1, duration: 0.3 }}
                whileTap={{ scale: 0.9 }}
                className="menuItem"
                onClick={()=>{movePage(value[1])}}
                >
                {value[0]}
              </motion.div>
            )
          })}
          
        </div>
      </div>
    </div>
  );
};

export default SideBar;
