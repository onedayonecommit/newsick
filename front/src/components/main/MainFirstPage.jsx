import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
const cardVariant = {
  initial: {
    x: 700,
    y: -350,
    z: -100,
    rotateX: -30,
    rotateY: 30,
    scale: 0,
    opacity: 1.5,
    transition: {
      duration: 1,
    },
  },
  animate: {
    x: 0,
    y: 0,
    z: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    x: -700,
    y: -150,
    z: 100,
    rotateX: 30,
    rotateY: -30,
    scale: 2,
    opacity: 1.5,
  },
};
const MainFirstPage = () => {
  const [start, setStart] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [result, setResult] = useState(0);
  const rendergood = () => {
    if (Math.abs(result) > 200 && result > 0) {
      setCurrentPage((currentPage + 1) % 3);
    } else if (Math.abs(result) > 200 && result < 0) {
      setCurrentPage((currentPage - 1) % 3);
    } else {
    }
  };
  useEffect(() => {
    rendergood();
  }, [result]);

  return (
    <motion.div className="mainFirstFrame"
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration:0.3}}
    >
      {itemData.map((item, index) => {
        if (index === currentPage) {
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
                variants={cardVariant}
                initial={currentPage ? "initial" : ""}
                drag="x"
                dragConstraints={{ right: 0,}}
                animate={currentPage ? "animate" : ""}
                exit="exit"
                onDragStart={(e) => {
                  setStart(e.clientX);
                  console.log(e.clientX);
                }}
                onDragEnd={(e) => {
                  setResult(start - e.clientX);

                  console.log(e.clientX);
                  // setEnd(e.clientY);
                  // setResult(start-end);
                  // console.log(result);
                  //   if(Math.abs(result) > 100 && result > 0) {
                  //     return setCurrentPage((currentPage + 1) % 3);
                  //   }else if (Math.abs(result) > 100 && result < 0){
                  //     return setCurrentPage((currentPage - 1) % 3);
                  //   }else {
                  //     return;
                  //   }
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
