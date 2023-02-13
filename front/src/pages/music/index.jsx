// 음악 스트리밍 메인 페이지
/*
- Top100 인기차트
- NFT 인기차트
- 신규 앨범
- 장르별
*/
import React, { useEffect, useRef, useState } from 'react'
import parkImg from "../../../public/image/park.jpg"
import ironImg from "../../../public/image/IRON.jpg"
import {motion} from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";

// 뮤직 메인페이지

const newSongItem =[
  { img:parkImg,musicName:"Music Name",singerName:"Signer Name"},
  { img:parkImg,musicName:"Music Name",singerName:"Signer Name"},
  { img:parkImg,musicName:"Music Name",singerName:"Signer Name"},
  { img:parkImg,musicName:"Music Name",singerName:"Signer Name"},
  { img:parkImg,musicName:"Music Name",singerName:"Signer Name"},
  { img:parkImg,musicName:"Music Name",singerName:"Signer Name"},
  { img:parkImg,musicName:"Music Name",singerName:"Signer Name"},
  { img:parkImg,musicName:"Music Name",singerName:"Signer Name"},
]

const topChartItem = [
  {
      img:ironImg,
      musicName:"Music Name",
      singerName:"Singer Name",
      lapTime:"3:36",
  },
  {
      img:ironImg,
      musicName:"Music Name",
      singerName:"Singer Name",
      lapTime:"3:36",
  },
  {
      img:ironImg,
      musicName:"Music Name",
      singerName:"Singer Name",
      lapTime:"3:36",
  },
  {
      img:ironImg,
      musicName:"Music Name",
      singerName:"Singer Name",
      lapTime:"3:36",
  },
  {
      img:ironImg,
      musicName:"Music Name",
      singerName:"Singer Name",
      lapTime:"3:36",
  },
  {
      img:ironImg,
      musicName:"Music Name",
      singerName:"Singer Name",
      lapTime:"3:36",
  },
]

const MusicContainer = () => {
  const togglePointRef = useRef(null);
  const [toggle, setToggle] = useState(false);
  const [togglePointWidth, setTogglePointWidth] = useState(0);
  useEffect(() => {
      const width = togglePointRef.current.offsetWidth;
      setTogglePointWidth(width);
    }, []);
  
return (
  <div className='MusicContainerFrame'>
      <div className='newSongSection'>
          <div className='text'>New Song</div>
          <motion.div className='newSongList' drag="x" dragConstraints={{right:0,left:0}} >
              {
                  newSongItem.map((item)=>(
                      <div className='newSongCard'>
                          <Image src={item.img} alt="Park.jpg" className='newSongImg'/>
                          <div className='newSongTagFrame'>
                              <div>{item.musicName}</div>
                              <div>{item.singerName}</div>
                          </div>
                      </div>
                  ))
              }
          </motion.div>
      </div>
      <div className='bottomFrame'>
          <div className='topChartSection'>
              <div className='topChartTextFrame'>
                  <div className='leftSide'>
                      <div className='text'>Top Chart</div>
                      <motion.div className='topRankToggle'>
                          <motion.div 
                          className='togglePoint'
                          ref={togglePointRef}
                          animate={{ x: toggle ? togglePointWidth : 0 }}
                          whileHover={{ scale: 0.9 }}
                          onClick={() => setToggle(!toggle)}
                          >
                              <div>
                                  {toggle ? "NFT" : "MUSIC"}
                              </div>
                          </motion.div>
                      </motion.div>
                  </div>
                  <div className='rightSide'>show All</div>
              </div>
              <motion.div className='topChartList' drag="y"  dragConstraints={{top:0,bottom:0}}>
              {
                  topChartItem.map((item)=>(
                      <div className='musicTopItemBox'>
                      <div className='leftSection'>
                          <Image src={item.img} alt="" className='musicTopItemImg'/>
                          <div className='musicInfoFrame'>
                              <div className='musicName'>{item.musicName}</div>
                              <div className='singerName'>{item.singerName}</div>
                          </div>
                      </div>
                      <div className='rightSection'>
                          <div className='lapTime'>{item.lapTime}</div>
                          <div className='likeButton'>
                              <FontAwesomeIcon icon={faHeart}/>
                          </div>
                          <div className='takeListButton'>
                              <FontAwesomeIcon icon={faPlus}/>
                          </div>
                      </div>
                      </div>
                  ))
              }

              </motion.div>
          </div>
          <div className='genreListSection'>
              <div className='genreText'>Genre List</div>
              <div className='genreList'>
                  <div>가요 </div>
                  <div>팝</div>
                  <div>트로트</div>
                  <div>클래식</div>
              </div>
          </div>
      </div>
  </div>
)
}

export default MusicContainer