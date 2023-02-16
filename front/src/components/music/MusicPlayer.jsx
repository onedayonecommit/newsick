import React, { useReducer, useState } from "react";
import { AnimatePresence, motion, Reorder } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHeart, faList } from "@fortawesome/free-solid-svg-icons";
import ironImage from "../../../public/image/IRON2.jpg";
import leeImage from "../../../public/image/lee.jpg";
import ParkImage from "../../../public/image/park.jpg";
import YounImage from "../../../public/image/YOUNHA.jpg";
import ChangImage from "../../../public/image/chang.jpg";
import MusicSlideForm from "./MusicSlideForm";
import MusicPlayerPlayBar from "./MusicPlayerPlayBar";
import MusicPlayerListBar from "./MusicPlayerListBar";
import Image from "next/image";
const slides = [
  {
    id: 0,
    songName: "Machu Picchu",
    singerName: "Peru",
    image: ironImage,
  },
  {
    id: 1,
    songName: "Chamonix",
    singerName: "France",
    image: leeImage,
  },
  {
    id: 2,
    songName: "Mimisa Rocks",
    singerName: "Australia",
    image: ParkImage,
  },
  {
    id: 3,
    songName: "Four",
    singerName: "Australia",
    image: YounImage,
  },
  {
    id: 4,
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
const itemVariants = {
  hidden: { opacity: 0 },
  visible: (custom) => ({
    opacity: 1,
    transition: { delay: custom },
  }),
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
  const [listCount, setListCount] = useState(0);
  const [listItem, setListItem] = useState(slides);

  const [liked, setLiked] = useState({});
  const toggleLike = (id) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [id]: !prevLiked[id],
    }));
  };
  // 카드 뒤집기
  const FilippedChoice = () => {
    setIsFlipped(!isFlipped);
  };
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex: state.slideIndex === 0 ? slides.length + 1 : state.slideIndex + 1,
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
    <motion.div className="songListSection" initial="hidden" animate={isFlipped ? "visible" : "hidden"} variants={backVariant}>
      <div className="listTopBar">
        <FontAwesomeIcon icon={faArrowLeft} className="backToMain" onClick={playerClick} />
        <div className="playListText">PlayList</div>
      </div>
      <div className="listSection">
        <div className="listControlBar">
          <div className="dropDownFrame">
            <div className="totalNum">총곡개수</div>
            <div className="dropDown">플레이리스트보기 ▽</div>
          </div>
          <div className="sortButton">정렬</div>
        </div>
        <Reorder.Group className="listFrame" axis="y" values={listItem} onReorder={setListItem}>
          <AnimatePresence>
            {slides.map((list, index) => (
              <Reorder.Item className="listSongItem" key={list.id} value={list} variants={itemVariants} initial="hidden" animate="visible" exit="hidden" layoutId={list.id} custom={(index + 1) * 0.2} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.1 }}>
                <motion.div className="listLeft">
                  <motion.span whileHover={{ scale: 1.1 }} onClick={() => toggleLike(list.id)}>
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="likeButton"
                      style={{
                        color: liked[list.id] ? "white" : "transparent",
                      }}
                    />
                  </motion.span>
                  <motion.div className="songInfo">
                    <Image src={list.image} alt="youn" className="songImg" />
                    <motion.div className="infoFrame">
                      <motion.div>{list.songName}</motion.div>
                      <motion.div>{list.singerName}</motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
                <motion.span className="dragButton">
                  <FontAwesomeIcon icon={faList} />
                </motion.span>
              </Reorder.Item>
            ))}
          </AnimatePresence>
        </Reorder.Group>
      </div>
      <MusicPlayerListBar image={slides[listCount].image} FilippedChoice={FilippedChoice} />
    </motion.div>
    {/* ===============================================================위에가 playList */}
    <motion.div className="songDetailSection" initial="visible" animate={isFlipped ? "hidden" : "visible"} variants={frontVariant} style={isFlipped ? { pointerEvents: "none" } : ""}>
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
    <motion.div className="songDetailSection" initial="visible" animate={isFlipped ? "hidden" : "visible"} variants={frontVariant}>
      <div className="slideSection">
        <div className="slideBackground" />
        <FontAwesomeIcon icon={faArrowLeft} className="backToMain" onClick={playerClick} />
        <div className="slideList">
          <div className="slides">
            <button onClick={() => dispatch({ type: "PREV" })}>‹</button>
            {[...slides, ...slides, ...slides].map((slide, i) => {
              let offset = slides.length + (state.slideIndex - i);
              return <MusicSlideForm slide={slide} offset={offset} key={i} image={slide.image} />;
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

export default MusicPlayer;
