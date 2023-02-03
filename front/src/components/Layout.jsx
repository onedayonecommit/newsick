import { useEffect, useRef, useState } from "react";
import { CoverPage, MusicPlayer, PlayBar, SearchBar, SideBar, UserBar, VolumeBox } from "../components";
import { AnimatePresence, motion } from "framer-motion";
const scrollVariant = {
  initial:{
    opacity:1
  },
  animate:{
    opacity:0
  },
  transition:{
    duration:1
  }
}
const mainOpenVariant ={
  initial:{
    opacity:0
  },
  animate:{
    opacity:1
  },
  transition:{
    duration:1
  }
}
const Layout = (props) => {
  const [isSoundClick, setIsSoundClick]=useState(false);
  const [isPlayerClick,setIsPlayerClick]=useState(false);
  const [isHideCover,setIsHideCover] = useState(false);
  
  useEffect(() => {
    localStorage.setItem(true, JSON.stringify(isHideCover));
  }, [isHideCover]);

  const layOutRef=useRef(null)

  const soundClick = () =>{
    setIsSoundClick(!isSoundClick);
  }
  const playerClick = () =>{
    setIsPlayerClick(!isPlayerClick)
  }
  const handleScroll = () => {
    setIsHideCover(!isHideCover);
    };
    
  return (
    <motion.div>
      <AnimatePresence>
          <motion.div
            variants={scrollVariant}
            initial={!isHideCover?"initial":""}
            animate={!isHideCover?"animate":""}
            transition={!isHideCover?"transition":""}
            onAnimationComplete={() => setIsHideCover(true)}
          >
            <CoverPage setIsHideCover={setIsHideCover}  handleScroll={handleScroll}/>
          </motion.div>
      </AnimatePresence>
      <div className="layoutFrame"  ref={layOutRef}>
        { isPlayerClick ? <MusicPlayer layOutRef={layOutRef}/> : null}
        {isSoundClick ? <VolumeBox/> : null}
        <div className="layoutBox">
          <SideBar />
          <PlayBar soundClick={soundClick} playerClick={playerClick} />
          <div className="contentSection">
            <SearchBar />
            <div className="content">{props.children}</div>
          </div>
          <UserBar />
        </div>
      </div>
    </motion.div>
  );
};

export default Layout;
