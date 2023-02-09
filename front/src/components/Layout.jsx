import { useEffect, useRef, useState } from "react";
import { MusicPlayer, PlayBar, SearchBar, SideBar, UserBar, VolumeBox } from "../components";
import {motion} from "framer-motion"
const Layout = (props) => {
  const [isSoundClick,setIsSoundClick] = useState(false);
  const [isPlayerClick,setIsPlayerClick]=useState(false);
  const [switchState, setSwitchState] = useState(false)

  const layOutRef = useRef(null)


  const soundClick = () =>{
    setIsSoundClick(!isSoundClick);
  }
  const playerClick = () =>{
    setIsPlayerClick(!isPlayerClick)
  }
  return (
    <motion.div>
      <motion.div className='layoutFrame' ref={layOutRef}>
        <MusicPlayer layOutRef={layOutRef} isPlayerClick={isPlayerClick} playerClick={playerClick}/> 
          {
            isSoundClick ? <VolumeBox/>:null
          }
        <div className='layoutBox'>
          <SideBar/>
            <PlayBar soundClick={soundClick} playerClick={playerClick} isPlayerClick={isPlayerClick}/>
              <div className='contentSection'>
                <SearchBar/>
                <div className='content'>
                {props.children}
               </div>
              </div>
          <UserBar/>
        </div>
      </motion.div>
    </motion.div>
    )
};

export default Layout;
