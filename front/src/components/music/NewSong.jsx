// 신규 곡
import { useRef } from "react";
import parkImg from "../../../public/image/park.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

const newSongItem = [
  { img: parkImg, musicName: "Music Name", singerName: "Signer Name" },
  { img: parkImg, musicName: "Music Name", singerName: "Signer Name" },
  { img: parkImg, musicName: "Music Name", singerName: "Signer Name" },
  { img: parkImg, musicName: "Music Name", singerName: "Signer Name" },
  { img: parkImg, musicName: "Music Name", singerName: "Signer Name" },
  { img: parkImg, musicName: "Music Name", singerName: "Signer Name" },
  { img: parkImg, musicName: "Music Name", singerName: "Signer Name" },
  { img: parkImg, musicName: "Music Name", singerName: "Signer Name" },
  { img: parkImg, musicName: "Music Name", singerName: "Signer Name" },
  { img: parkImg, musicName: "Music Name", singerName: "Signer Name" },
  { img: parkImg, musicName: "Music Name", singerName: "Signer Name" },
  { img: parkImg, musicName: "Music Name", singerName: "Signer Name" },
  { img: parkImg, musicName: "Music Name", singerName: "Signer Name" },
  { img: parkImg, musicName: "Music Name", singerName: "Signer Name" },
  { img: parkImg, musicName: "Music Name", singerName: "Signer Name" },
  { img: parkImg, musicName: "Music Name", singerName: "Signer Name" },
];

const newSongVariant = {
  initial: {
    x: "100vh",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

const NewSong = () => {
  const nuwSongListRef = useRef();
  return (
    <div className="newSongSection" ref={nuwSongListRef}>
      <div className="text">New Song</div>
      <motion.div className="newSongList" drag="x" dragConstraints={nuwSongListRef}>
        {newSongItem.map((item, index) => (
          <motion.div
            className="newSongCard"
            variants={newSongVariant}
            key={index}
            initial="initial"
            animate="animate"
            // 차례대로 delay 하는 로직
            transition={{ duration: 0.3, type: "spring", delay: 0.1 * index }}
          >
            <Image src={item.img} alt="Park.jpg" className="newSongImg" style={{ webkitUserDrag: " none" }} />
            <div className="newSongTagFrame">
              <div>{item.musicName}</div>
              <div>{item.singerName}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default NewSong;
