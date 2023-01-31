import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { SideBar, SwitchToggle } from "../components";

const MyPageLayOut = ({ isOpen, handleClose }: any) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="myPageLayOutFrame">
        <div className="myPageLayoutBox">
          <SideBar />
          <div className="infoSection">
            <div className="optionSection"></div>
            <div className="userInfoSection">
              <div className="userImage" onClick={handleClose}></div>
              <div className="userProfile">
                <div className="userName">UserName</div>
                <div className="userEmail">User@Email.com</div>
              </div>
              <motion.div
                className="metaConnectButton"
                whileHover={{
                  scale: [1, 1.1],
                  color: "rgba(255, 255, 255, 1)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                MetaMask Connect
              </motion.div>
            </div>
            <div className="stateInfoSection"></div>
            <div className="anotherInfoSection"></div>
          </div>
          <div className="myPageContentFrame">
            <SwitchToggle />
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default MyPageLayOut;
