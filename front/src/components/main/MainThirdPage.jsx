import { AnimatePresence,motion } from 'framer-motion'
import React, { useState } from 'react'
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

const variantsdown = {
    animate: { 
        y: ["calc(-40px)","calc(255px)"] ,
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
        y: ["calc(40px)","calc(-255px)"] ,
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
const MainThirdPage = () => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <AnimatePresence> 
    <div className='mainThirdFrame'>
        <div className='leftSlideContent'> 
            <div className='slideListDownFrame'>
                <motion.div className='closeFundingList'animate="animate" variants={variantsdown} >
                    {
                        Data.map((item) => (
                            <motion.div
                                className="closeItem"
                                key={item.id}
                                whileHover={{ scale: isHovered ? 1.2: 0.5,}}
                                onHoverStart={() => setIsHovered(true)}
                                onHoverEnd={() => setIsHovered(false)}>
                                {item.name}
                            </motion.div>
                        ))
                    }
               </motion.div> 
               <motion.div className='closeFundingList'animate="animate" variants={variantsdown}>
                    {
                        Data.map((item) => (
                            <motion.div
                                className="closeItem"
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
            <div className='slideListUpFrame'>
            <motion.div className='closeFundingList'animate="animate" variants={variantsUp} >
                    {
                        Data.map((item) => (
                            <motion.div
                                className="closeItem"
                                key={item.id}
                                whileHover={{ scale: isHovered ? 1.2: 0.5,}}
                                onHoverStart={() => setIsHovered(true)}
                                onHoverEnd={() => setIsHovered(false)}>
                                {item.name}
                            </motion.div>
                        ))
                    }
               </motion.div> 
               <motion.div className='closeFundingList'animate="animate" variants={variantsUp}>
                    {
                        Data.map((item) => (
                            <motion.div
                                className="closeItem"
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
        <div className='rightContent'></div>
    </div>
    </AnimatePresence>
  )
}

export default MainThirdPage