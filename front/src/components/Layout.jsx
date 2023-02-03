import { useRef, useState } from "react";
import { MusicPlayer, PlayBar, SearchBar, SideBar, UserBar, VolumeBox } from "../components";

const Layout = (props) => {
  const [isSoundClick, setIsSoundClick]=useState(false);
  const [isPlayerClick,setIsPlayerClick]=useState(false);

  const layOutRef=useRef(null)

  const soundClick = () =>{
    setIsSoundClick(!isSoundClick);
  }
  const playerClick = () =>{
    setIsPlayerClick(!isPlayerClick)
  }

  return (
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
  );
};

export default Layout;
