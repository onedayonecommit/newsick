import SignUpBackDrop from "./SignUpBackDrop";
import { motion } from "framer-motion";

const SuccessLog = ({ handleClose, text }) => {
  return (
    <SignUpBackDrop onClick={handleClose}>
      <motion.div
        className="infoSuccessfulLog"
        initial={{ scale: 0.5 }}
        animate={{ scale: [1.5, 1] }}
        exit={{ scale: 0.5 }}
        transition={{
          type: "spring",
          duration: 0.5,
        }}
      >
        Login Successful !!
      </motion.div>
    </SignUpBackDrop>
  );
};

export default SuccessLog;
