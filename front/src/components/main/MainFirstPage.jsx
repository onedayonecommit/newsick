import React, { useRef, useState } from "react";
import { motion, transform, useMotionValue } from "framer-motion";
const itemData = [
  {
    id: 1,
    title: "Title 1",
    subTitle: "SubTitle 1",
    text: "Item 1 text. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    id: 2,
    title: "Title 2",
    subTitle: "SubTitle 2",
    text: "Item 2 text. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    id: 3,
    title: "Title 3",
    subTitle: "SubTitle 3",
    text: "Item 3 text. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
];
const MainFirstPage = () => {
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState({ offset: { x: 0 } });
  const [dragged, setDragged] = useState(false);
  const initialPosition = useRef({
    x: 0,
    y: 0,
    z: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    opacity: 1,
  });
  return (
    <motion.div className="mainFirstFrame">
      {itemData.map((item, index) => {
        if (index === count) {
          return (
            <>
              <motion.div className="rankingInfoSection">
                <div className="infoFrame">
                  <div className="titleSection">
                    <div className="title">{item.title}</div>
                    <div className="subTitle">{item.subTitle}</div>
                  </div>
                  <div className="textSection">{item.text}</div>
                </div>
              </motion.div>
              <motion.div
                className="rankingCard"
                drag="x"
                dragConstraints={{ top: 0, right: 0, bottom: 0 }}
                whileHover={{ scale: 1.05, y: -10 }}
                animate={
                  dragged
                    ? {
                        x: -700,
                        y: -150,
                        z: 100,
                        rotateX: 30,
                        rotateY: -30,
                        scale: 2,
                        opacity: 0,
                        transition: { duration: 0.5 },
                      }
                    : ""
                }
                onDragEnd={(event, info) => {
                  if (info.offset.x < 300) {
                    setCount((count + 1 + itemData.length) % itemData.length);
                  }
                  setDragged(true);
                }}
              ></motion.div>
            </>
          );
        }
      })}
    </motion.div>
  );
};

export default MainFirstPage;
