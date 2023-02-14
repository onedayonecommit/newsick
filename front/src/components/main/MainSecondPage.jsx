import React, { useEffect, useReducer, useRef, useState } from "react";
import { motion, useCycle, useMotionValue, useTransform } from "framer-motion";
import ironImage from "../../../public/image/IRON2.jpg";
import leeImage from "../../../public/image/lee.jpg";
import ParkImage from "../../../public/image/park.jpg";
import YounImage from "../../../public/image/YOUNHA.jpg";
import ChangImage from "../../../public/image/chang.jpg";
const slides = [
  {
    singerName: "가수이름",
    songName: "Machu Picchu",
    fundingPrice: "Peru",
    image: ironImage,
  },
  {
    singerName: "가수이름",
    songName: "Chamonix",
    fundingPrice: "France",
    image: leeImage,
  },
  {
    singerName: "가수이름",
    songName: "Mimisa Rocks",
    fundingPrice: "Australia",
    image: ParkImage,
  },
  {
    singerName: "가수이름",
    songName: "Four",
    fundingPrice: "Australia",
    image: YounImage,
  },
  {
    singerName: "가수이름",
    songName: "Five",
    fundingPrice: "Australia",
    image: ChangImage,
  },
  {
    singerName: "가수이름",
    songName: "Machu Picchu",
    fundingPrice: "Peru",
    image: ironImage,
  },
  {
    singerName: "가수이름",
    songName: "Chamonix",
    fundingPrice: "France",
    image: leeImage,
  },
  {
    singerName: "가수이름",
    songName: "Mimisa Rocks",
    fundingPrice: "Australia",
    image: ParkImage,
  },
  {
    singerName: "가수이름",
    songName: "Four",
    fundingPrice: "Australia",
    image: YounImage,
  },
  {
    singerName: "가수이름",
    songName: "Five",
    fundingPrice: "Australia",
    image: ChangImage,
  },
];
const MainSecondPage = () => {
  const slidesNum = 5 * 2;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  const [position, setPosition] = useState(0);
  const Rotate = 360 / slidesNum;
  const RADIUS = 100;
  const [mouseDrag, setMouseDrag] = useState(0);

  // const rotate = useTransform(x, [-RADIUS, RADIUS], [-180, 180]);

  // const onRight = () => {
  //   if(position < slides.length -1){
  //     setPosition(position+1%slidesNum)
  //   }
  // }
  // const onLeft = () => {
  //   if(position>0){
  //     setPosition(position-1%slidesNum)
  //   }
  // }

  return (
    <div
      className="mainSecondFrame"
      style={{
        backgroundImage: `url('${slides[position].image.src}')`,
        backgroundSize: "cover",
      }}
    >
      <div className="sideFrame">
        <div className="hotTopicText">
          <div>Hot Topic</div>
          <div>Funding</div>
        </div>
        <div className="sideContentBox"></div>
      </div>
      <motion.div
        onClick={() => {
          setPosition(position + 1);
          setBackgroundCount(
            backgroundCount === 0 ? slides.length - 1 : backgroundCount - 1
          );
        }}
        className="switchHotList"
        initial={{ scale: 1 }}
        transition={{
          type: "spring",
          duration: 1.5,
        }}
        whileHover={{
          scale: 1.5,
        }}
      >
        right
      </motion.div>
      <motion.div
        className="slideHotTopicList"
        style={{ rotateZ: Rotate * position }}
      >
        {slides.map((slide, index) => {
          // setControll(index);
          const angle = (360 / slidesNum) * (index % slidesNum);
          const xPos = RADIUS * Math.cos((angle * Math.PI) / 180);
          const yPos = RADIUS * Math.sin((angle * Math.PI) / 180);
          return (
            <motion.div
              className="hotTopSlides"
              style={{
                transform: angle,
                x: xPos * 5,
                y: yPos * 5,
                rotateZ: -(Rotate * position),
              }}
            >
              <motion.div
                className="hotTopicSlide"
                key={index}
                style={{
                  x,
                  y,
                  z: 10,
                  opacity:
                    index === slidesNum - 1 - (position % slidesNum) + 1 ||
                    (position % slidesNum === 0 && index === 0)
                      ? 1
                      : 0.5,
                }}
                // drag="x"
                // dragElastic={0.16}
                // dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                // onDrag={(e,sc)=>{
                //   setMouseDrag(sc.velocity.x);
                // }}
                animate={{
                  // x: index === position ? 0 : (index < position ? -20 : 20),
                  scale:
                    index === slidesNum - 1 - (position % slidesNum) + 1 ||
                    (position % slidesNum === 0 && index === 0)
                      ? 1
                      : 0.8,
                }}
                // transition={{
                //   type:"spring",
                //   stiffness:260,
                //   damping:20,
                // }}
              >
                <motion.div
                  className="hotTopicSlideContent"
                  style={{
                    backgroundImage: `url('${slide.image.src}')`,
                  }}
                  whileTap={{ cursor: "grabbing" }}
                >
                  {index === slidesNum - 1 - (position % slidesNum) + 1 ||
                  (position % slidesNum === 0 && index === 0) ? (
                    <motion.div
                      className="hotTopicSlideContentInner"
                      style={{ x, y, rotateX, rotateY, z: 50 }}
                    >
                      <div className="singerName">
                        {slide.singerName}
                        {position}
                      </div>
                      <div className="songName">{slide.songName}</div>
                      <div className="fundingPrice">{slide.fundingPrice}</div>
                    </motion.div>
                  ) : null}
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default MainSecondPage;
