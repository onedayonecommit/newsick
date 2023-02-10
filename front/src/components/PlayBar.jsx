import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faHeart } from "@fortawesome/free-solid-svg-icons";

const variantPlay = {
  animate: {
    x: ["calc(0px)", "calc(247px)"],
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
const playBarState = {
  animate: {
    width: ["calc(0%)", "calc(100%)"],
    transition: {
      width: {
        ease: "linear",
        duration: 200,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  },
};

const openPlayBar = {
  initial: {
    y: 0,
    opacity: 1,
    zIndex: 999,
  },
  animate: {
    y: "-100vw",
    opacity: 0,
    zIndex: -1,
  },
};

const PlayBar = ({ soundClick, playerClick, isPlayerClick }) => {
  const [isPlay, setIsPlay] = useState();
  const [selected, setSelected] = useState();

  const shackIcon = () => {
    return {
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1.4,0.55,1)",
        "scale3d(0.75,1.25,1)",
        "scale3d(1.25,0.85,1)",
        "scale3d(0.9,1.05,1)",
        "scale3d(1,1,1)",
      ],
    };
  };

  return (
    <motion.div
      className="musicBar"
      variants={openPlayBar}
      initial={isPlayerClick ? "animate" : "initial"}
      animate={!isPlayerClick ? "initial" : "animate"}
      transition={{
        type: "spring",
        duration: 0.75,
        bounce: 0.5,
      }}
    >
      <div className="playBar">
        <div className="playBarFrame" onClick={() => setIsPlay(!isPlay)}>
          <motion.div
            className="nowPlayState"
            animate={isPlay ? "animate" : ""}
            variants={playBarState}
          />
          <motion.div
            className="playMotionWave"
            animate={isPlay ? "animate" : ""}
            variants={variantPlay}
          >
            <svg
              viewBox="0 0 248 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 17V19M4 16V20M8 14V22M12 10V26M16 6V30M20 0V36M24 8V28M28 9V27M32 12V24M36 15V21M40 17V19M44 17V19M48 17V19M52 17V19M56 13V23M60 8V28M64 10V26M68 6V30M72 0V36M76 3V33M80 9V27M84 12V24M88 15V21M92 17V19M96 17V19M100 17V19M104 17V19M108 16V20M112 14V22M116 10V26M120 6V30M124 0V36M128 8V28M132 8V28M136 3V33M140 0V36M144 8V28M148 14V22M152 14V22M156 14V22M160 13V23M164 8V28M168 0V36M172 3V33M176 0V36M180 3V33M184 0V36M188 8V28M192 14V22M196 17V19M200 17V19M204 13V23M208 8V28M212 13V23M216 3V33M220 0V36M224 3V33M228 0V36M232 8V28M236 8V28M240 13V23M244 15V21M248 17V19"
                stroke="url(#paint0_linear_597_368)"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_597_368"
                  x1="14"
                  y1="36"
                  x2="248"
                  y2="36"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00E9FF"></stop>
                  <stop offset="1" stopColor="#FF00D8"></stop>
                </linearGradient>
              </defs>
            </svg>
            <svg
              viewBox="0 0 248 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 17V19M4 16V20M8 14V22M12 10V26M16 6V30M20 0V36M24 8V28M28 9V27M32 12V24M36 15V21M40 17V19M44 17V19M48 17V19M52 17V19M56 13V23M60 8V28M64 10V26M68 6V30M72 0V36M76 3V33M80 9V27M84 12V24M88 15V21M92 17V19M96 17V19M100 17V19M104 17V19M108 16V20M112 14V22M116 10V26M120 6V30M124 0V36M128 8V28M132 8V28M136 3V33M140 0V36M144 8V28M148 14V22M152 14V22M156 14V22M160 13V23M164 8V28M168 0V36M172 3V33M176 0V36M180 3V33M184 0V36M188 8V28M192 14V22M196 17V19M200 17V19M204 13V23M208 8V28M212 13V23M216 3V33M220 0V36M224 3V33M228 0V36M232 8V28M236 8V28M240 13V23M244 15V21M248 17V19"
                stroke="url(#paint0_linear_597_368)"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_597_368"
                  x1="14"
                  y1="36"
                  x2="248"
                  y2="36"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00E9FF"></stop>
                  <stop offset="1" stopColor="#FF00D8"></stop>
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
          <svg
            viewBox="0 0 316 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="playBackGround"
          >
            <g filter="url(#filter0_f_597_303)">
              <path
                d="M158 0L316 28L158 56L0 28L158 0Z"
                fill="url(#paint0_linear_597_303)"
              ></path>
            </g>
            <defs>
              <filter
                id="filter0_f_597_303"
                x="-40"
                y="-40"
                width="396"
                height="136"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              ></filter>
              <linearGradient
                id="paint0_linear_597_303"
                x1="93"
                y1="76"
                x2="182.5"
                y2="-20"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00DAEA"></stop>
                <stop offset="0.49889" stopColor="#1D138B"></stop>
                <stop offset="1" stopColor="#C441F4"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="playInfo">
        <motion.span>
          <Image
            className="singerPhoto"
            src="https://i.pinimg.com/236x/55/17/28/551728771d95781f1b89395dd0949732.jpg"
            alt="YOUNHA.jpg"
            onClick={playerClick}
            width={50}
            height={50}
          />
        </motion.span>
        <div className="palyInfoBox">
          <div className="playInfoFrame">
            <div className="songInfoSection">
              <div className="songInfoFrame">
                <div>SongName</div>
                <div>SingerName</div>
              </div>
            </div>
            <motion.div className="playOptionSection">
              <motion.div
                whileHover={() => shackIcon()}
                whileTap={{ scale: 0.8 }}
                onClick={() => setSelected(!selected)}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  className="iconHeart"
                  type="button"
                  style={{ color: selected ? "#ffffff" : "transparent" }}
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.8 }}
              >
                <FontAwesomeIcon
                  icon={faBell}
                  className="iconBell"
                  onClick={soundClick}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PlayBar;
