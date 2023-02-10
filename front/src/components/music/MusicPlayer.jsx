import React, { useReducer, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCaretLeft,
  faCaretRight,
  faList,
  faList12,
  faListAlt,
  faListCheck,
  faListDots,
  faListNumeric,
  faListSquares,
  faPause,
  faRepeat,
  faShuffle,
  faVolumeHigh,
  faVolumeXmark,
} from "@fortawesome/free-solid-svg-icons";
import ironImage from "../../../public/image/IRON2.jpg";
import leeImage from "../../../public/image/lee.jpg";
import ParkImage from "../../../public/image/park.jpg";
import YounImage from "../../../public/image/YOUNHA.jpg";
import ChangImage from "../../../public/image/chang.jpg";
import MusicSlideForm from "./MusicSlideForm";
import MusicPlayerPlayBar from "./MusicPlayerPlayBar";
const slides = [
  {
    songName: "Machu Picchu",
    singerName: "Peru",
    image: ironImage,
  },
  {
    songName: "Chamonix",
    singerName: "France",
    image: leeImage,
  },
  {
    songName: "Mimisa Rocks",
    singerName: "Australia",
    image: ParkImage,
  },
  {
    songName: "Four",
    singerName: "Australia",
    image: YounImage,
  },
  {
    songName: "Five",
    singerName: "Australia",
    image: ChangImage,
  },
];
const variantPlay = {
  animate: {
    x: ["calc(0px)", "calc(504px)"],
    transition: {
      x: {
        ease: "linear",
        duration: 15,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  },
};
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
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
  hidden: {
    rotateY: 180,
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
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
  hidden: {
    rotateY: 0,
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
  visible: {
    rotateY: 360,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
  // 카드 뒤집기
};

const musicPlayerOpen = {
  initial: {
    y: "-100vw",
    opacity: 0,
    zIndex: -1,
  },
  animate: {
    y: 0,
    opacity: 1,
    zIndex: 999,
  },
};

const MusicPlayer = ({ layOutRef, isPlayerClick, playerClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  // 카드 뒤집기
  const FilippedChoice = () => {
    setIsFlipped(!isFlipped);
  };
  const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
      return {
        ...state,
        slideIndex: (state.slideIndex - 1) % slides.length,
      };
    }
    if (event.type === "PREV") {
      return {
        ...state,
        slideIndex:
          state.slideIndex === 0 ? slides.length + 1 : state.slideIndex + 1,
      };
    }
  };
  const initialState = {
    slideIndex: 0,
  };
  const [state, dispatch] = useReducer(slidesReducer, initialState);
  return (
    <motion.div
      className="MusicPlayFrame"
      drag
      dragConstraints={layOutRef}
      variants={musicPlayerOpen}
      initial={isPlayerClick ? "animate" : "initial"}
      animate={!isPlayerClick ? "initial" : "animate"}
      transition={{
        type: "spring",
        duration: 0.75,
        bounce: 0.5,
      }}
    >
      <motion.div
        className="songListSection"
        initial="hidden"
        animate={isFlipped ? "visible" : "hidden"}
        variants={backVariant}
      >
        <div className="listTopBar">
          <FontAwesomeIcon icon={faArrowLeft} />
          <div className="playListText">PlayList</div>
        </div>
        <div className="listSection">
          <div className="listControlBar"></div>
          <div className="listFrame"></div>
        </div>
        <MusicPlayerPlayBar />
      </motion.div>
      <motion.div
        className="songDetailSection"
        initial="visible"
        animate={isFlipped ? "hidden" : "visible"}
        variants={frontVariant}
      >
        <div className="slideSection">
          <div className="slideBackground" />
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="backToMain"
            onClick={playerClick}
          />
          <div className="slideList">
            <div className="slides">
              <button onClick={() => dispatch({ type: "PREV" })}>‹</button>
              {[...slides, ...slides, ...slides].map((slide, i) => {
                let offset = slides.length + (state.slideIndex - i);
                return (
                  <MusicSlideForm
                    slide={slide}
                    offset={offset}
                    key={i}
                    image={slide.image}
                  />
                );
              })}
              <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
            </div>
          </div>
        </div>
        <div className="lyricsSection">
          <div className="lyricsFrame">가사</div>
        </div>
        <MusicPlayerPlayBar FilippedChoice={FilippedChoice} />
      </motion.div>
    </motion.div>
  );
};

export default MusicPlayer;
