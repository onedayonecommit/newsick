import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight, faList, faPause, faRepeat, faShuffle, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import VolumeBox from "../VolumeBox";
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
const volumBarVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};
const MusicPlayerListBar = ({ image, index, FilippedChoice }) => {
  const [isPlay, setIsPlay] = useState();
  const [clickVolum, setClickVolume] = useState();
  const ClickVolume = () => {
    setClickVolume(!clickVolum);
  };
  return (
    <div className="playBarSection">
      <div className="playBar">
        <div className="playBarFrame" onClick={() => setIsPlay(!isPlay)}>
          <motion.div className="nowPlayState" animate={isPlay ? "animate" : ""} variants={playBarState} />
          <motion.div className="playMotionWave" animate={isPlay ? "animate" : ""} variants={variantPlay}>
            <svg viewBox="0 0 248 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 17V19M4 16V20M8 14V22M12 10V26M16 6V30M20 0V36M24 8V28M28 9V27M32 12V24M36 15V21M40 17V19M44 17V19M48 17V19M52 17V19M56 13V23M60 8V28M64 10V26M68 6V30M72 0V36M76 3V33M80 9V27M84 12V24M88 15V21M92 17V19M96 17V19M100 17V19M104 17V19M108 16V20M112 14V22M116 10V26M120 6V30M124 0V36M128 8V28M132 8V28M136 3V33M140 0V36M144 8V28M148 14V22M152 14V22M156 14V22M160 13V23M164 8V28M168 0V36M172 3V33M176 0V36M180 3V33M184 0V36M188 8V28M192 14V22M196 17V19M200 17V19M204 13V23M208 8V28M212 13V23M216 3V33M220 0V36M224 3V33M228 0V36M232 8V28M236 8V28M240 13V23M244 15V21M248 17V19"
                stroke="url(#paint0_linear_597_368)"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <defs>
                <linearGradient id="paint0_linear_597_368" x1="14" y1="36" x2="248" y2="36" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00E9FF"></stop>
                  <stop offset="1" stopColor="#FF00D8"></stop>
                </linearGradient>
              </defs>
            </svg>
            <svg viewBox="0 0 248 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 17V19M4 16V20M8 14V22M12 10V26M16 6V30M20 0V36M24 8V28M28 9V27M32 12V24M36 15V21M40 17V19M44 17V19M48 17V19M52 17V19M56 13V23M60 8V28M64 10V26M68 6V30M72 0V36M76 3V33M80 9V27M84 12V24M88 15V21M92 17V19M96 17V19M100 17V19M104 17V19M108 16V20M112 14V22M116 10V26M120 6V30M124 0V36M128 8V28M132 8V28M136 3V33M140 0V36M144 8V28M148 14V22M152 14V22M156 14V22M160 13V23M164 8V28M168 0V36M172 3V33M176 0V36M180 3V33M184 0V36M188 8V28M192 14V22M196 17V19M200 17V19M204 13V23M208 8V28M212 13V23M216 3V33M220 0V36M224 3V33M228 0V36M232 8V28M236 8V28M240 13V23M244 15V21M248 17V19"
                stroke="url(#paint0_linear_597_368)"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <defs>
                <linearGradient id="paint0_linear_597_368" x1="14" y1="36" x2="248" y2="36" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00E9FF"></stop>
                  <stop offset="1" stopColor="#FF00D8"></stop>
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
          <svg viewBox="0 0 316 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="playBackGround">
            <g filter="url(#filter0_f_597_303)">
              <path d="M158 0L316 28L158 56L0 28L158 0Z" fill="url(#paint0_linear_597_303)"></path>
            </g>
            <defs>
              <filter id="filter0_f_597_303" x="-40" y="-40" width="396" height="136" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"></filter>
              <linearGradient id="paint0_linear_597_303" x1="93" y1="76" x2="182.5" y2="-20" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00DAEA"></stop>
                <stop offset="0.49889" stopColor="#1D138B"></stop>
                <stop offset="1" stopColor="#C441F4"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <motion.div className="controlBar">
        <motion.div className="volumeBoxFrame" variants={volumBarVariant} initial={clickVolum ? "initial" : "animate"} animate={clickVolum ? "animate" : "initial"}>
          <VolumeBox />
        </motion.div>
        <motion.span whileHover={{ scale: 1.2, transition: { duration: 0.2 } }} whileTap={{ scale: 0.9 }} onClick={ClickVolume}>
          <FontAwesomeIcon className="sideIcon" icon={faVolumeHigh} />
        </motion.span>
        <motion.span whileHover={{ scale: 1.2, transition: { duration: 0.2 } }} whileTap={{ scale: 0.9 }}>
          <FontAwesomeIcon className="sideIcon" icon={faShuffle} />
        </motion.span>
        <div className="playOrStop">
          <motion.span>
            <FontAwesomeIcon icon={faCaretLeft} className="leftMusic" whileHover={{ x: 5 }} />
          </motion.span>
          <motion.span>
            <FontAwesomeIcon icon={faPause} className="stopOrPlayButton" />
          </motion.span>
          <motion.span>
            <FontAwesomeIcon icon={faCaretRight} className="rightMusic" />
          </motion.span>
        </div>
        <motion.span whileHover={{ scale: 1.2, transition: { duration: 0.2 } }} whileTap={{ scale: 0.9 }}>
          <FontAwesomeIcon className="sideIcon" icon={faRepeat} />
        </motion.span>
        <motion.span whileHover={{ scale: 1.2, transition: { duration: 0.2 } }} whileTap={{ scale: 0.9 }}>
          <Image
            className="nowMusicImg"
            src={image}
            alt="nowPlayMusicImage"
            onClick={FilippedChoice}
            style={{
              cursor: "pointer",
              width: "50px",
              height: "50px",
              backgroundSize: "fill",
              borderRadius: "50px",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          />
        </motion.span>
      </motion.div>
    </div>
  );
};

export default MusicPlayerListBar;
