import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ironImage from "../../../public/image/IRON2.jpg";
import leeImage from "../../../public/image/lee.jpg";
import ParkImage from "../../../public/image/park.jpg";
import YounImage from "../../../public/image/YOUNHA.jpg";
import ChangImage from "../../../public/image/chang.jpg";
const Data = [
  {
    id: 1,
    name: "item1",
    image: ParkImage,
  },
  {
    id: 2,
    name: "item2",
    image: ParkImage,
  },
  {
    id: 3,
    name: "item3",
    image: ParkImage,
  },
  {
    id: 4,
    name: "item4",
    image: ParkImage,
  },
  {
    id: 5,
    name: "item5",
    image: ParkImage,
  },
];

const variantsdown = {
  animate: {
    y: ["calc(-2.064vw )", "calc(13.158vw)"],
    transition: {
      y: {
        ease: "linear",
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  },
};
const variantsUp = {
  animate: {
    y: ["calc(2.064vw)", "calc(-13.158vw)"],
    transition: {
      y: {
        ease: "linear",
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  },
};
const MainThirdPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <AnimatePresence>
      <motion.div className="mainThirdFrame" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
        <div className="leftSlideContent">
          <div className="slideListDownFrame">
            <motion.div className="closeFundingList" animate="animate" variants={variantsdown}>
              {Data.map((item) => (
                <motion.div className="closeItem" key={item.id} whileHover={{ scale: isHovered ? 1.2 : 0.5 }} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>
                  
                  <Image className="itemImg" src={item.image} alt="sampleImage"/>
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="closeFundingList" animate="animate" variants={variantsdown}>
              {Data.map((item) => (
                <motion.div className="closeItem" key={item.id} whileHover={{ scale: isHovered ? 1.2 : 0.5 }} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>
       
                  <Image className="itemImg" src={item.image} alt="sampleImage"/>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="slideListUpFrame">
            <motion.div className="closeFundingList" animate="animate" variants={variantsUp}>
              {Data.map((item) => (
                <motion.div className="closeItem" key={item.id} whileHover={{ scale: isHovered ? 1.2 : 0.5 }} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>
                  
                  <Image className="itemImg" src={item.image} alt="sampleImage"/>
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="closeFundingList" animate="animate" variants={variantsUp}>
              {Data.map((item) => (
                <motion.div className="closeItem" key={item.id} whileHover={{ scale: isHovered ? 1.2 : 0.5 }} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>
                  
                  <Image className="itemImg" src={item.image} alt="sampleImage"/>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="slideListDownFrame">
            <motion.div className="closeFundingList" animate="animate" variants={variantsdown}>
              {Data.map((item) => (
                <motion.div className="closeItem" key={item.id} whileHover={{ scale: isHovered ? 1.2 : 0.5 }} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>
                  
                  <Image className="itemImg" src={item.image} alt="sampleImage"/>
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="closeFundingList" animate="animate" variants={variantsdown}>
              {Data.map((item) => (
                <motion.div className="closeItem" key={item.id} whileHover={{ scale: isHovered ? 1.2 : 0.5 }} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>
                  
                  <Image className="itemImg" src={item.image} alt="sampleImage"/>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MainThirdPage;
