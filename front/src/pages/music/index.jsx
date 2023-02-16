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
        rank:1,
        musicName:"Music Name",
        singerName:"Singer Name",
        lapTime:"3:36",
    },
    {
        img:ironImg,
        rank:2,
        musicName:"Music Name",
        singerName:"Singer Name",
        lapTime:"3:36",
    },
    {
        img:ironImg,
        rank:3,
        musicName:"Music Name",
        singerName:"Singer Name",
        lapTime:"3:36",
    },
    {
        img:ironImg,
        rank:4,
        musicName:"Music Name",
        singerName:"Singer Name",
        lapTime:"3:36",
    },
    {
        img:ironImg,
        rank:5,
        musicName:"Music Name",
        singerName:"Singer Name",
        lapTime:"3:36",
    },
    {
        img:ironImg,
        rank:6,
        musicName:"Music Name",
        singerName:"Singer Name",
        lapTime:"3:36",
    },
    {
        img:ironImg,
        rank:7,
        musicName:"Music Name",
        singerName:"Singer Name",
        lapTime:"3:36",
    },
    {
        img:ironImg,
        rank:8,
        musicName:"Music Name",
        singerName:"Singer Name",
        lapTime:"3:36",
    },
    {
        img:ironImg,
        rank:9,
        musicName:"Music Name",
        singerName:"Singer Name",
        lapTime:"3:36",
    },
]
const variantModal = {
    initial:{
        opacity: 0, scaleY: 0, transformOrigin: '50% 50%'
    }, 
    animate:{
        opacity: 1, scaleY: 1,
        transition:{
            type: 'tween', duration: 0.3 
        }
    },
    exit:{
        opacity: 0, scaleY: 0,
        transition:{
            type: 'tween', duration: 0.3 
        }
    }
}
const newSongVariant={
    initial:{
        x:"100vh",opacity:0
    },
    animate:{
        x:0,opacity:1
    },
}
const MusicContainer = () => {
  const nuwSongListRef = useRef();
  const togglePointRef = useRef(null);
  const [toggle, setToggle] = useState(false);
  const [togglePointWidth, setTogglePointWidth] = useState(0);

  //============================================================20230215 추가 start
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const handleGenreClick = (genre) => {
    setIsOpen(true);
    setSelectedGenre(genre);
  };
  const ModalContent = () => {
    switch (selectedGenre) {
      case 'public':
        return (
          <>
          <div className='publicBackImg'>
            <div className='rankBackDrop'/>
            <div className='rankContainer'>
                <div className='topInfoSection'>
                    <div className="infoFrame">
                        <div>가요 TOP 100</div>
                        <div onClick={() => setIsOpen(false)}>X</div>
                    </div>
                    <div className="infoText">매월 1일 오후 7시 업데이트</div>
                    <div className="playButton">전체재생</div>
                    <div className="lastLine"/>
                </div>
                <div className='bottomRankList'>
                    {
                        topChartItem.map((rank)=>(
                            <div className='rankItemBox'>
                                <div className='leftSide'>
                                    <Image src={rank.img} alt="iron" className='rankItemImg'/>
                                    <div className='rankNum'>{rank.rank}</div>
                                    <div className='rankInfoFrame'>
                                        <div className='musicName'>{rank.musicName}</div>
                                        <div className='singerName'>{rank.singerName}</div>
                                    </div>
                                </div>
                                <div className='rightSide'>
                                    <div className='musicTime'>{rank.lapTime}</div>
                                    <div className='likeButton'>
                                        <FontAwesomeIcon icon={faHeart}/>
                                    </div>
                                    <div className='takeButton'>
                                        <FontAwesomeIcon icon={faPlus}/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
          </div>
          </>
        );
      case 'pop':
        return (
          <>
          <div className='popBackImg'>
            <div className='rankBackDrop'/>
            <div className='rankContainer'>
                <div className='topInfoSection'>
                    <div className="infoFrame">
                        <div>팝 TOP 100</div>
                        <div onClick={() => setIsOpen(false)}>X</div>
                    </div>
                    <div className="infoText">매월 1일 오후 7시 업데이트</div>
                    <div className="playButton">전체재생</div>
                    <div className="lastLine"/>
                </div>
                <div className='bottomRankList'>
                    {
                        topChartItem.map((rank)=>(
                            <div className='rankItemBox'>
                                <div className='leftSide'>
                                    <Image src={rank.img} alt="iron" className='rankItemImg'/>
                                    <div className='rankNum'>{rank.rank}</div>
                                    <div className='rankInfoFrame'>
                                        <div className='musicName'>{rank.musicName}</div>
                                        <div className='singerName'>{rank.singerName}</div>
                                    </div>
                                </div>
                                <div className='rightSide'>
                                    <div className='musicTime'>{rank.lapTime}</div>
                                    <div className='likeButton'>
                                        <FontAwesomeIcon icon={faHeart}/>
                                    </div>
                                    <div className='takeButton'>
                                        <FontAwesomeIcon icon={faPlus}/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
          </div>
          </>
        );
      case 'trot':
        return (
          <>
          <div className='trotBackImg'>
            <div className='rankBackDrop'/>
            <div className='rankContainer'>
                <div className='topInfoSection'>
                    <div className="infoFrame">
                        <div>트로트 TOP 100</div>
                        <div onClick={() => setIsOpen(false)}>X</div>
                    </div>
                    <div className="infoText">매월 1일 오후 7시 업데이트</div>
                    <div className="playButton">전체재생</div>
                    <div className="lastLine"/>
                </div>
                <div className='bottomRankList'>
                    {
                        topChartItem.map((rank)=>(
                            <div className='rankItemBox'>
                                <div className='leftSide'>
                                    <Image src={rank.img} alt="iron" className='rankItemImg'/>
                                    <div className='rankNum'>{rank.rank}</div>
                                    <div className='rankInfoFrame'>
                                        <div className='musicName'>{rank.musicName}</div>
                                        <div className='singerName'>{rank.singerName}</div>
                                    </div>
                                </div>
                                <div className='rightSide'>
                                    <div className='musicTime'>{rank.lapTime}</div>
                                    <div className='likeButton'>
                                        <FontAwesomeIcon icon={faHeart}/>
                                    </div>
                                    <div className='takeButton'>
                                        <FontAwesomeIcon icon={faPlus}/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
          </div>
          </>
        );
      case 'classic':
        return (
          <>
          <div className='classicBackImg'>
            <div className='rankBackDrop'/>
            <div className='rankContainer'>
                <div className='topInfoSection'>
                    <div className="infoFrame">
                        <div>클래식 TOP 100</div>
                        <div onClick={() => setIsOpen(false)}>X</div>
                    </div>
                    <div className="infoText">매월 1일 오후 7시 업데이트</div>
                    <div className="playButton">전체재생</div>
                    <div className="lastLine"/>
                </div>
                <div className='bottomRankList'>
                    {
                        topChartItem.map((rank)=>(
                            <div className='rankItemBox'>
                                <div className='leftSide'>
                                    <Image src={rank.img} alt="iron" className='rankItemImg'/>
                                    <div className='rankNum'>{rank.rank}</div>
                                    <div className='rankInfoFrame'>
                                        <div className='musicName'>{rank.musicName}</div>
                                        <div className='singerName'>{rank.singerName}</div>
                                    </div>
                                </div>
                                <div className='rightSide'>
                                    <div className='musicTime'>{rank.lapTime}</div>
                                    <div className='likeButton'>
                                        <FontAwesomeIcon icon={faHeart}/>
                                    </div>
                                    <div className='takeButton'>
                                        <FontAwesomeIcon icon={faPlus}/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
          </div>
          </>
        );
      default:
        return null;
    }
  };
  //============================================================20230215 추가 done

  useEffect(() => {
      const width = togglePointRef.current.offsetWidth;
      setTogglePointWidth(width);
    }, []);
  
return (
  <div className='MusicContainerFrame'>
      <div className='newSongSection' ref={nuwSongListRef}>
          <div className='text'>New Song</div>
          <motion.div className='newSongList' drag="x" dragConstraints={nuwSongListRef} >
              {
                  newSongItem.map((item,index)=>(
                    <motion.div className='newSongCard'
                    variants={newSongVariant}
                    key={index}
                    initial="initial"
                    animate="animate"
                    // 차례대로 delay 하는 로직
                    transition={{duration:0.3,type:"spring",delay:0.1*index}}
                >   
                          <Image src={item.img} alt="Park.jpg" className='newSongImg'  style={{webkitUserDrag:" none"}}/>
                          <div className='newSongTagFrame'>
                              <div>{item.musicName}</div>
                              <div>{item.singerName}</div>
                          </div>
                    </motion.div>
                  ))
              }
          </motion.div>
      </div>
      <div className='bottomFrame'>
          <div className='topChartSection'>
            <div className='topChartTextFrame' >
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
              <motion.div className='topChartList'>
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
              <motion.div className='publicGenreFrame'
                        onClick={() => handleGenreClick('public')}
              
                    >
                        <div className='publicSongSection'>
                            <div className='text'>가요</div>
                        </div>
                    </motion.div>
                    <motion.div className='popGenreFrame'
                        onClick={() => handleGenreClick('pop')}
                    >
                        <div className='popSection'>
                            <div className='text'>팝</div>
                        </div>
                    </motion.div>
                    <motion.div className='tortGenreFrame'
                        onClick={() => handleGenreClick('trot')}
                    >
                         <div className='tortSection'>
                            <div className='text'>트로트</div>
                         </div>
                    </motion.div>
                    <motion.div className='classicGenreFrame'
                        onClick={() => handleGenreClick('classic')}
                    >
                         <div className='classicSection'>
                            <div className='text'>클래식</div>
                         </div>
                    </motion.div>
              </div>
          </div>
      </div>
                {isOpen && (
                   <motion.div
                    className='genreModal'
                    variants={variantModal}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    // onClick={() => setIsOpen(false)} 닫는 버튼
                   >
                     <ModalContent/>
                   </motion.div>
                )}
  </div>
)
}

export default MusicContainer