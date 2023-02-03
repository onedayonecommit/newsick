import React, { useReducer, useState } from 'react'
import {motion} from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCaretLeft, faCaretRight, faList, faList12, faListAlt, faListCheck, faListDots, faListNumeric, faListSquares, faPause, faRepeat, faShuffle, faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons'
import ironImage from "../../../public/image/IRON.jpg"
import leeImage from "../../../public/image/lee.jpg"
import ParkImage from "../../../public/image/park.jpg"
import YounImage from "../../../public/image/YOUNHA.jpg"
import ChangImage from "../../../public/image/chang.jpg"
import MusicSlideForm from "./MusicSlideForm";
import MusicPlayerPlayBar from './MusicPlayerPlayBar'
const slides = [
  {
    songName: "Machu Picchu",
    singerName: "Peru",
    image:"url(https://ncc-phinf.pstatic.net/20141215_126/1418613823678JBcyP_JPEG/2.jpg?type=w646)"
  },
  {
    songName: "Chamonix",
    singerName: "France",
    image:"url(https://image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/IV2/Genie_Magazine/6182/Mgz_Main_Top_20190123113540.jpg/dims/resize/Q_80,0)"
  },
  {
    songName: "Mimisa Rocks",
    singerName: "Australia",
    image: "url(https://img.sbs.co.kr/newsnet/etv/upload/2014/10/21/30000425947_1280.jpg)"
  },
  {
    songName: "Four",
    singerName: "Australia",
    image:"url(https://file2.nocutnews.co.kr/newsroom/image/2019/07/09/20190709130501865032_0_450_660.jpg)"
  },
  {
    songName: "Five",
    singerName: "Australia",
    image:"url(https://image.bugsm.co.kr/artist/images/1000/801892/80189299.jpg)"
  }
];
const variantPlay = {
    animate: { 
        x: ["calc(0px)","calc(504px)"] , 
          transition: {
            x:{
                ease: "linear",
                duration: 15,
                repeat: Infinity,
                repeatType: "loop",
            },
          },
    },
  
  }
  // const playBarState ={
  //     animate:{
  //       width:["calc(0%)","calc(100%)"],
  //       transition:{
  //         width:{
  //           ease:"linear",
  //           duration: 200,
  //           repeat: Infinity,
  //           repeatType: "loop",
  //         }
  //       }
  //     }
  // }
  const frontVariant = {
    visible: { rotateY: 0,opacity: 1,
    transition:{
        duration:0.7,
    }
    },
    hidden: { rotateY: 180,opacity: 0 ,
      transition:{
          duration:0.7,
      } }
    // 카드 뒤집기
  };
  // transition: {
  //   x:{
  //       ease: "linear",
  //       duration: 15,
  //       repeat: Infinity,
  //       repeatType: "loop",
  //   },
  // },
  const backVariant = {
    hidden: { rotateY: 0 ,opacity: 0,
      transition:{
          duration:0.7,
      },
    },
    visible: { rotateY: 360,opacity: 1,
      transition:{
          duration:0.7,
      }  }
    // 카드 뒤집기
  };

const MusicPlayer = ({layOutRef}) => {
    const [isPlay,setIsPlay]=useState();
    const [isFlipped, setIsFlipped] = useState(false);
    // 카드 뒤집기
    const FilippedChoice = ()=>{
      setIsFlipped(!isFlipped);
    }
    const slidesReducer = (state, event) => {
      if (event.type === "NEXT") {
        return {
          ...state,
          slideIndex: (state.slideIndex + 1) % slides.length
        };
      }
      if (event.type === "PREV") {
        return {
          ...state,
          slideIndex:
            state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
        };
      }
    };
    const initialState = {
      slideIndex: 0
    };
    const [state, dispatch] = useReducer(slidesReducer, initialState);
  return (
    <motion.div className='MusicPlayFrame' drag dragConstraints={layOutRef}>
                <motion.div className='songListSection'
             initial="hidden"
             animate={isFlipped ? "visible" : "hidden"}
             variants={backVariant}
       >
                <div className='listTopBar'>
                  <FontAwesomeIcon icon={faArrowLeft}/>
                  <div className='playListText'>PlayList</div>
                </div>
                <div className='listSection'>
                  <div className='listControlBar'></div>
                  <div className='listFrame'></div>
                </div>
                <MusicPlayerPlayBar/>
        </motion.div>  
      <motion.div className='songDetailSection'
            initial="visible"
            animate={isFlipped ? "hidden" : "visible"}
            variants={frontVariant}
      >
            <div className='slideSection'>
              <div className="slideBackground"/>
                <FontAwesomeIcon icon={faArrowLeft} className="backToMain"/>
                <div className="slideList" >
                  <div className="slides">
                    <button onClick={() => dispatch({ type: "PREV" })}>‹</button>
                    {[...slides, ...slides, ...slides].map((slide, i) => {
                      let offset = slides.length + (state.slideIndex - i);
                      return <MusicSlideForm slide={slide} offset={offset} key={i} image={slide.image}/>;
                    })}
                    <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
                  </div>
                </div>
            </div>
            <div className='lyricsSection'>
                <div className='lyricsFrame'>
                    가사
                </div>
            </div>
            <MusicPlayerPlayBar FilippedChoice={FilippedChoice}/>
      </motion.div>    
  </motion.div>
  )
}

export default MusicPlayer