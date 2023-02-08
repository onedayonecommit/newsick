import React, { useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion"
import { MainFirstPage, MainSecondPage, MainThirdPage } from '@/components/main';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [result, setResult] = useState(0);
  // const [isSliding, setIsSliding] = useState(false);
  const y = useMotionValue(0);
  const opacity = useTransform(y, [-100, 0, 100], [0, 1, 0]);

  return (
    <motion.div className="mainSlider">
      <AnimatePresence>
      <motion.div 
        className="page" 
        style={{ opacity,y }}
        // drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragStart={(e)=>{
          setStart(e.clientY);
          console.log(e.clientY)
        }}
        
        onDragEnd={async (e) => {
              setEnd(e.clientY);
              await setResult(start-end);
              console.log(result);
                if(Math.abs(result) > 100 && result > 0) {
                  return setCurrentPage((currentPage + 1) % 3);
                }else if (Math.abs(result) > 100 && result < 0){
                  return setCurrentPage((currentPage - 1) % 3);
                }else {
                  return;
                }
        }}
       >
        {
              currentPage === 0
                ? <MainFirstPage />
                : currentPage === 1
                  ? <MainSecondPage />
                  : <MainThirdPage />
        }
       </motion.div>
       <div className="pageNav">
         {
           Array.from({ length: 3 }).map((_, index) => (
             <div
               className={`pageNavItem ${index === currentPage ? 'active' : ''}`}
               key={index}
               onClick={() => setCurrentPage(index)}
             />
           ))
         }
       </div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Home;
