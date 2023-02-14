import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  MusicPlayer,
  PlayBar,
  SearchBar,
  SideBar,
  UserBar,
  VolumeBox,
  Loading,
} from "@/components";
const Layout = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSoundClick, setIsSoundClick] = useState(false);
  const [isPlayerClick, setIsPlayerClick] = useState(false);

  const layOutRef = useRef(null);

  const soundClick = () => {
    setIsSoundClick(!isSoundClick);
  };
  const playerClick = () => {
    setIsPlayerClick(!isPlayerClick);
  };
  return (
    <>
      {isLoading ? (
        <Loading setIsLoading={setIsLoading} />
      ) : (
        <motion.div>
          <motion.div className="layoutFrame" ref={layOutRef}>
            <MusicPlayer
              layOutRef={layOutRef}
              isPlayerClick={isPlayerClick}
              playerClick={playerClick}
            />
            {isSoundClick ? <VolumeBox /> : null}
            <div className="layoutBox">
              <SideBar />
              <PlayBar
                soundClick={soundClick}
                playerClick={playerClick}
                isPlayerClick={isPlayerClick}
              />
              <div className="contentSection">
                <SearchBar />
                <div className="content">{props.children}</div>
              </div>
              <UserBar />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Layout;
