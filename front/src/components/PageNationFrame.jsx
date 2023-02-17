import { useState } from "react";
import { motion } from "framer-motion";

// 컴포넌트

const PageNationFrame = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const pageClick = (page) => {
    setSelectedPage(page);
  };
  return (
    <div className="pageNationFrame">
      {[1, 2, 3, 4, 5].map((page) => (
        <motion.div key={page} animate={{ color: selectedPage === page ? "#ffffff" : "rgba(255, 255, 255, 0.4)" }} onClick={() => pageClick(page)}>
          {page}
        </motion.div>
      ))}
    </div>
  );
};

export default PageNationFrame;
