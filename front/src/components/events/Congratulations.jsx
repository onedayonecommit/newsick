import { AnimatePresence, motion, useAnimation, useCycle } from "framer-motion";
import { useEffect } from "react";
import { useState, useRef } from "react";

const Congratulations = () => {
  const ParentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showText, setShowText] = useState(false);

  const handleAnimationComplete = () => {
    setShowText(true);
  };

  useEffect(() => {
    // Show the element
    setIsVisible(true);

    // Hide the element after 2 seconds
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 6000);

    // Clear the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // type:"spring",delay:0.1*index}
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="congratulationsEventModal"
          ref={ParentRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          transitionEnd={{
            display: "none",
          }}
          onAnimationComplete={handleAnimationComplete}
        >
          <motion.div className="leftDiv" initial={{ y: "100%" }} animate={{ y: "0%" }} transition={{ duration: 3 }} />
          <motion.div className="rightDiv" initial={{ y: "-100%" }} animate={{ y: "0%" }} transition={{ duration: 3 }} />
          <motion.div
            className="text"
            initial={showText ? { opacity: 0 } : { opacity: 1 }}
            animate={showText ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              duration: 1,
              delay: 0.7,
            }}
          >
            크리에이터가 되신 것을 환영합니다 !
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Congratulations;
