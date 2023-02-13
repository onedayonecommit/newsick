import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion";
import { MainFirstPage, MainSecondPage, MainThirdPage } from "@/components";

const pageData = [
  {
    pageName: "RANK",
    pageNum: 0,
  },
  {
    pageName: "HOT",
    pageNum: 1,
  },
  {
    pageName: "CLOSE",
    pageNum: 2,
  },
];

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [start, setStart] = useState(0);
  const [result, setResult] = useState(0);
  const [setNav, isSetNav] = useState(false);
  // const [isSliding, setIsSliding] = useState(false);
  const y = useMotionValue(0);
  const opacity = useTransform(y, [-100, 0, 100], [0, 1, 0]);
  const rendergood = () => {
    if (Math.abs(result) > 200 && result > 0) {
      setCurrentPage((currentPage + 1) % 3);
    } else if (Math.abs(result) > 200 && result < 0) {
      setCurrentPage((currentPage - 1) % 3);
    } else {
    }
  };
  useEffect(() => {
    rendergood();
  }, [result]);

  return (
    <motion.div className="mainSlider">
      <AnimatePresence>
        <motion.div
          className="page"
          style={{ opacity, y }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragStart={(e) => {
            setStart(e.clientY);
            console.log(e.clientY);
          }}
          onDragEnd={(e) => {
            setResult(start - e.clientY);

            console.log(e.clientY);
            // setEnd(e.clientY);
            // setResult(start-end);
            // console.log(result);
            //   if(Math.abs(result) > 100 && result > 0) {
            //     return setCurrentPage((currentPage + 1) % 3);
            //   }else if (Math.abs(result) > 100 && result < 0){
            //     return setCurrentPage((currentPage - 1) % 3);
            //   }else {
            //     return;
            //   }
          }}
        >
          {currentPage === 0 ? <MainFirstPage /> : currentPage === 1 ? <MainSecondPage /> : <MainThirdPage />}
        </motion.div>
        <div className="pageNav">
          {pageData.map((page) => (
            <motion.div
              className={`pageNavItem ${page.pageNum === currentPage ? "active" : ""}`}
              key={page.pageNum}
              onClick={() => {
                setCurrentPage(page.pageNum);
              }}
              whileHover={{
                scale: 1.5,
                opacity: 1,
              }}
              whileTap={{
                scale: 1,
              }}
              style={currentPage === page.pageNum ? { scale: 1.4, opacity: 1 } : null}
            >
              <div />
              <div>{page.pageName}</div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Home;
