import { useEffect, useRef, useState } from "react";
import { MusicPlayer, PlayBar, SearchBar, SideBar, UserBar, VolumeBox } from "../components";
import { AnimatePresence, motion } from "framer-motion";
import { Loading, ChangeMember, Congratulations } from "@/components";
import { useSelector } from "react-redux";

const Layout = (props) => {
  const excuteContract = useSelector((state) => state.eventView.excuteContract);
  console.log("컨트랙트 실행 여부", excuteContract);

  // const [isLoading, setIsLoading] = useState(true);
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
      {excuteContract ? (
        // <Loading setIsLoading={setIsLoading} />
        <Loading />
      ) : (
        <motion.div>
          <motion.div className="layoutFrame" ref={layOutRef}>
            {/* ========================================================== */}
            {isClick ? <Congratulations isClick={isClick} /> : null}
            {/* ========================================================== */}
            {isSoundClick ? <VolumeBox /> : null}
            <MusicPlayer layOutRef={layOutRef} isPlayerClick={isPlayerClick} playerClick={playerClick} />
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
      )}
    </>
  );
};

export default Layout;
