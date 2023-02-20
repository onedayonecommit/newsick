// 음악 스트리밍 메인 페이지
/*
- Top100 인기차트
- NFT 인기차트
- 신규 앨범
- 장르별
*/
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FundMusicTop100, NormalMusicTop100, NewSong, Song100, Pop100, Trot100, Classic100 } from "@/components";

// 뮤직 메인페이지

const variantModal = {
  initial: {
    opacity: 0,
    scaleY: 0,
    transformOrigin: "50% 50%",
  },
  animate: {
    opacity: 1,
    scaleY: 1,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    scaleY: 0,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
};

const MusicContainer = () => {
  //============================================================20230215 추가 start
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const handleGenreClick = (genre) => {
    setIsOpen(true);
    setSelectedGenre(genre);
  };
  const ModalContent = () => {
    switch (selectedGenre) {
      case "public":
        // 가요
        return <Song100 isOpen={isOpen} setIsOpen={setIsOpen} />;
      case "pop":
        return <Pop100 isOpen={isOpen} setIsOpen={setIsOpen} />;
      case "trot":
        return <Trot100 isOpen={isOpen} setIsOpen={setIsOpen} />;
      case "classic":
        return <Classic100 isOpen={isOpen} setIsOpen={setIsOpen} />;
      default:
        return null;
    }
  };
  //============================================================20230215 추가 done
  const togglePointRef = useRef(null);
  const [toggle, setToggle] = useState(false);
  const [togglePointWidth, setTogglePointWidth] = useState(0);

  useEffect(() => {
    const width = togglePointRef.current.offsetWidth;
    setTogglePointWidth(width);
  }, []);

  return (
    <div className="MusicContainerFrame">
      <NewSong />
      <div className="bottomFrame">
        <div className="topChartSection">
          <div className="topChartTextFrame">
            <div className="leftSide">
              <div className="text">Top Chart</div>
              <motion.div className="topRankToggle">
                <motion.div className="togglePoint" ref={togglePointRef} animate={{ x: toggle ? togglePointWidth : 0 }} whileHover={{ scale: 0.9 }} onClick={() => setToggle(!toggle)}>
                  <div>{toggle ? "NFT" : "MUSIC"}</div>
                </motion.div>
              </motion.div>
            </div>
            {!toggle ? <NormalMusicTop100 /> : <FundMusicTop100 />}
          </div>
        </div>

        <div className="genreListSection">
          <div className="genreText">Genre List</div>
          <div className="genreList">
            <motion.div className="publicGenreFrame" onClick={() => handleGenreClick("public")}>
              <div className="publicSongSection">
                <div className="text">가요</div>
              </div>
            </motion.div>
            <motion.div className="popGenreFrame" onClick={() => handleGenreClick("pop")}>
              <div className="popSection">
                <div className="text">팝</div>
              </div>
            </motion.div>
            <motion.div className="tortGenreFrame" onClick={() => handleGenreClick("trot")}>
              <div className="tortSection">
                <div className="text">트로트</div>
              </div>
            </motion.div>
            <motion.div className="classicGenreFrame" onClick={() => handleGenreClick("classic")}>
              <div className="classicSection">
                <div className="text">클래식</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="genreModal"
          variants={variantModal}
          initial="initial"
          animate="animate"
          exit="exit"
          // onClick={() => setIsOpen(false)} 닫는 버튼
        >
          <ModalContent />
        </motion.div>
      )}
    </div>
  );
};

export default MusicContainer;
