import { motion } from "framer-motion";

const SignUpBackDrop = ({ children, onClick }) => {
  return (
    <motion.div className="signUpBackDrop" onClick={onClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {children}
    </motion.div>
  );
};

export default SignUpBackDrop;
