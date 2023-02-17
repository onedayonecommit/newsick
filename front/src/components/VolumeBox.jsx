import { useRef } from "react";
import { motion, useDragControls, useMotionValue, useTransform } from "framer-motion";

const VolumeBox = () => {
  const constraintsRef = useRef();
  const handleRef = useRef();

  const handleX = useMotionValue(0);
  const progressScaleX = useTransform(handleX, [0, 150], [0, 1]);
  const dragControls = useDragControls();

  return (
    <motion.div className="volumeBox" onMouseDown={(e) => dragControls.start(e, { snapToCursor: true })}>
      <motion.div className="volumeBar" ref={constraintsRef}>
        <motion.div className="fill" style={{ width: progressScaleX }} />
        <motion.div ref={handleRef} whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.4 }} drag="x" dragConstraints={constraintsRef} dragElastic={0} dragMomentum={false} style={{ x: handleX }} className="volumeHandle" />
      </motion.div>
    </motion.div>
  );
};

export default VolumeBox;
