import { useRef, useState } from "react";
import { MusicPlayer, PlayBar, SearchBar, SideBar, UserBar, VolumeBox } from "../components";
import { AnimatePresence, motion } from "framer-motion";
import { Loading, ChangeMember, Congratulations } from "@/components";

const Layout = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSoundClick, setIsSoundClick] = useState(false);
  const [isPlayerClick, setIsPlayerClick] = useState(false);
  const [switchState, setSwitchState] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const layOutRef = useRef(null);
  //====================================================
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
    //====================================================
  };

  const soundClick = () => {
    setIsSoundClick(!isSoundClick);
  };
  const playerClick = () => {
    setIsPlayerClick(!isPlayerClick);
  };
  return (
    <>
      {/* {isLoading ? (
        <Loading setIsLoading={setIsLoading} />
      ) : ( */}
        <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          transition={{duration:0.3}}
        >
          <motion.div className="layoutFrame" ref={layOutRef}>
            {/* ========================================================== */}
            {isClick ? <Congratulations isClick={isClick} /> : null}
            {/* ========================================================== */}
            <MusicPlayer layOutRef={layOutRef} isPlayerClick={isPlayerClick} playerClick={playerClick} />
            {isSoundClick ? <VolumeBox /> : null}
            <AnimatePresence>{modalOpen && <ChangeMember modalOpen={modalOpen} handleClose={close} />}</AnimatePresence>
            <div className="layoutBox">
              <SideBar />
              <PlayBar soundClick={soundClick} playerClick={playerClick} isPlayerClick={isPlayerClick} />
              <div className="contentSection">
                <SearchBar />
                <div className="content">{props.children}</div>
              </div>
              <UserBar handleOpen={open} handleClick={handleClick} />
            </div>
          </motion.div>
        </motion.div>
      {/* )} */}
    </>
  );
};

export default Layout;
