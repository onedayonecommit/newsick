import { useReducer, useState } from "react";
import { AnimatePresence, motion, Reorder } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// npm install @radix-ui/react-dropdown-menu
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { faArrowLeft, faHeart, faList } from "@fortawesome/free-solid-svg-icons";
import ironImage from "../../../public/image/IRON2.jpg";
import leeImage from "../../../public/image/lee.jpg";
import ParkImage from "../../../public/image/park.jpg";
import YounImage from "../../../public/image/YOUNHA.jpg";
import ChangImage from "../../../public/image/chang.jpg";
import { MusicSlideForm, MusicPlayerPlayBar, MusicPlayerListBar } from "@/components";

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

const itemVariants = {
  hidden: { opacity: 0 },
  visible: (custom) => ({
    opacity: 1,
    transition: { delay: custom },
  }),
};

const frontVariant = {
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
    display: "flex",
  },
  hidden: {
    rotateY: 180,
    opacity: 0,
    transition: {
      duration: 0.7,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

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
    display: "flex",
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
const listHoverVariant = {
  initial: {
    y: 0,
  },
  animate: {
    y: [2, -2],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 0.5,
    },
  },
};
const MusicPlayer = ({ layOutRef, isPlayerClick, playerClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [listCount, setListCount] = useState(0);
  const [listItem, setListItem] = useState(slides);
  const [hoverList, setHoverList] = useState(false);
  const HoverList = () => {
    setHoverList(true);
  };
  const UnHoverList = () => {
    setHoverList(false);
  };
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
  const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
      const nextIndex = state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1;
      return {
        ...state,
        slideIndex: nextIndex,
      };
    }
    if (event.type === "PREV") {
      return {
        ...state,
        slideIndex: state.slideIndex === slides.length - 1 ? 0 : state.slideIndex + 1,
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
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <motion.div className="dropDown" onMouseEnter={HoverList} onMouseLeave={UnHoverList}>
                    플레이리스트보기
                    <motion.div variants={listHoverVariant} initial={hoverList === false ? "initial" : "animate"} animate={hoverList === true ? "animate" : "initial"}>
                      ▽
                    </motion.div>
                  </motion.div>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className="dropDownContent">
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="itemBox"
                  >
                    <DropdownMenu.Item className="dropItem">Play List</DropdownMenu.Item>
                    <DropdownMenu.Item className="dropItem">Play List</DropdownMenu.Item>
                    <DropdownMenu.Item className="dropItem">Play List</DropdownMenu.Item>
                  </motion.div>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
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
        <div className="slideSection">
          <div className="slideBackground" />
          <FontAwesomeIcon icon={faArrowLeft} className="backToMain" onClick={playerClick} />
          <div className="slideList">
            <div className="slides">
              <button
                onClick={() => {
                  dispatch({ type: "NEXT" });
                  setListCount(listCount === slides.length - 1 ? 0 : listCount + 1);
                }}
              >
                ‹
              </button>
              {[...slides, ...slides, ...slides].map((slide, i) => {
                let offset = slides.length + (state.slideIndex - i);
                return <MusicSlideForm slide={slide} offset={offset} key={i} image={slide.image} />;
              })}
              <button
                onClick={() => {
                  dispatch({ type: "PREV" });
                  setListCount(listCount === 0 ? slides.length - 1 : listCount - 1);
                }}
              >
                ›
              </button>
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
