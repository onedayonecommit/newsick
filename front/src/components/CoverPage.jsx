import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useAnimation } from "framer-motion"

// 컴포넌트 페이지
const variantsdown = {
    animate: { 
        y: ["calc(-40px)","calc(267px)"] ,
          transition: {
            y:{
                ease: "linear",
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                
            },
          },
    },
  }
const variantsUp = {
    animate: { 
        y: ["calc(40px)","calc(-267px)"] ,
          transition: {
            y:{
                ease: "linear",
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                
            },
          },
    },
  }

const Data =[
    {
        id:1,
        name:"item1"

    },
    {
        id:2,
        name:"item2"
    },
    {
        id:3,
        name:"item3"
    },
    {
        id:4,
        name:"item4"
    },
    {
        id:5,
        name:"item5"
    },
]

const CoverPage = ({handleSwitch,switchState,coverScrollControll}) => {
const [isHovered, setIsHovered] = useState(false);
  return (
    <AnimatePresence>
        <motion.div className='coverPageBackGround'
            initial={{ opacity: 1 }}
            animate={{
              opacity: !switchState && coverScrollControll > 100 ? 0 : 1,
            }}
            onAnimationComplete={handleSwitch}
        >
            <div className='coverPageFrame'>
                <div className='infoSection'>
                    <div className='infoBox'>
                        <div className='infoList'>
                            <div className='infoIcon'>NEWGIC</div>
                            <div className='infoTextSection'>
                                <div className='infoTitle'>Meet new NFTs and music sources at NEWGIC !</div>
                                <div className='infoSubTitle'>Increase Amet minim mollit non deserunt  ullamco est sit aliqua dolor do amet  your business performance and take it to the next level to achieve goals</div>
                            </div>
                            <div className='infoButton'>BUTTON</div>
                        </div>
                    </div>
                </div>
           <div className="animationSection">
          <div className="animationFrame">
            <div className="nftTrackUp">
               <motion.div className='nftTrackUpList'animate="animate" variants={variantsUp} >
                    {
                        Data.map((item) => (
                            <motion.div
                                className="nftItem"
                                key={item.id}
                                whileHover={{ scale: isHovered ? 1.2: 0.5,}}
                                onHoverStart={() => setIsHovered(true)}
                                onHoverEnd={() => setIsHovered(false)}>
                                {item.name}
                            </motion.div>
                        ))
                    }
               </motion.div> 
               <motion.div className='nftTrackUpList'animate="animate" variants={variantsUp}>
                    {
                        Data.map((item) => (
                            <motion.div
                                className="nftItem"
                                key={item.id}
                                whileHover={{ scale: isHovered ? 1.2: 0.5,}}
                                onHoverStart={() => setIsHovered(true)}
                                onHoverEnd={() => setIsHovered(false)}>
                                {item.name}
                            </motion.div>
                        ))
                    }
               </motion.div>   
            </div>
            <div className="nftTrackDown">
               <motion.div className='nftTrackDownList' animate="animate" variants={variantsdown}>
                    {
                        Data.map((item) => (
                            <motion.div
                                className="nftItem"
                                key={item.id}
                                whileHover={{ scale: isHovered ? 1.2: 0.5,}}
                                onHoverStart={() => setIsHovered(true)}
                                onHoverEnd={() => setIsHovered(false)}>
                                {item.name}
                            </motion.div>
                        ))
                    }
               </motion.div> 
               <motion.div className='nftTrackDownList' animate="animate" variants={variantsdown}>
                    {
                        Data.map((item) => (
                            <motion.div
                                className="nftItem"
                                key={item.id}
                                whileHover={{ scale: isHovered ? 1.2: 0.5,}}
                                onHoverStart={() => setIsHovered(true)}
                                onHoverEnd={() => setIsHovered(false)}>
                                {item.name}
                            </motion.div>
                        ))
                    }
               </motion.div>   
            </div>
            <div className="nftTrackUp">
               <motion.div className='nftTrackUpList'animate="animate" variants={variantsUp}>
                    {
                        Data.map((item) => (
                            <motion.div
                                className="nftItem"
                                key={item.id}
                                whileHover={{ scale: isHovered ? 1.2: 0.5,}}
                                onHoverStart={() => setIsHovered(true)}
                                onHoverEnd={() => setIsHovered(false)}>
                                {item.name}
                            </motion.div>
                        ))
                    }
               </motion.div> 
               <motion.div className='nftTrackUpList'animate="animate" variants={variantsUp}>
                    {
                        Data.map((item) => (
                            <motion.div
                                className="nftItem"
                                key={item.id}
                                whileHover={{ scale: isHovered ? 1.2: 0.5,}}
                                onHoverStart={() => setIsHovered(true)}
                                onHoverEnd={() => setIsHovered(false)}>
                                {item.name}
                            </motion.div>
                        ))
                    }
               </motion.div>   
            </div>
          </div>
        </div>
            </div>
        </motion.div>
    </AnimatePresence>
  )
}

export default CoverPage