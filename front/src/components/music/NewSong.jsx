// 신규 곡
import { useRef, useEffect } from "react";
import parkImg from "../../../public/image/park.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewMusicList } from "@/middleware/fetchMusic";

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
  const dispatch = useDispatch();
  const newSongList = useSelector((state) => state.musicInfo.newMusicList);
  console.log("뉴 송 리스트", newSongList);

  useEffect(() => {
    dispatch(fetchNewMusicList());
  }, []);

  const nuwSongListRef = useRef();
  return (
    <div className="newSongSection" ref={nuwSongListRef}>
      <div className="text">New Song</div>
      <motion.div className="newSongList" drag="x" dragConstraints={nuwSongListRef}>
        {newSongList.map((item, index) => (
          <motion.div
            className="newSongCard"
            variants={newSongVariant}
            key={index}
            initial="initial"
            animate="animate"
            // 차례대로 delay 하는 로직
            transition={{ duration: 0.3, type: "spring", delay: 0.1 * index }}
          >
            <Image src={`https://newsic-userprofile-nft-metadata-bucket.s3.ap-northeast-2.amazonaws.com/${item.music_cover_image}`} alt="Park.jpg" className="newSongImg" style={{ webkitUserDrag: " none" }} width={120} height={120} />
            <div className="newSongTagFrame">
              <div>{item.music_name}</div>
              <div>{item.singer}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default NewSong;
