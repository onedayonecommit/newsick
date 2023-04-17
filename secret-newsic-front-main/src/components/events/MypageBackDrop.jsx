import { motion } from "framer-motion";

const MypageBackDrop = ({ children, onClick }) => {
  return (
    <motion.div className="backDrop" onClick={onClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {children}
    </motion.div>
  );
};

export default MypageBackDrop;
