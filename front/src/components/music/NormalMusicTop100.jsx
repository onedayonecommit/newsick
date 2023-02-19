// 일반음원 인기차트
import { motion } from "framer-motion";
import { faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";
import ironImg from "../../../public/image/IRON.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { fetchNormalMusicList } from "@/middleware/fetchMusic";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const topChartItem = [
  {
    img: ironImg,
    rank: 1,
    musicName: "Music Name",
    singerName: "Singer Name",
    lapTime: "3:36",
  },
  {
    img: ironImg,
    rank: 2,
    musicName: "Music Name",
    singerName: "Singer Name",
    lapTime: "3:36",
  },
  {
    img: ironImg,
    rank: 3,
    musicName: "Music Name",
    singerName: "Singer Name",
    lapTime: "3:36",
  },
  {
    img: ironImg,
    rank: 4,
    musicName: "Music Name",
    singerName: "Singer Name",
    lapTime: "3:36",
  },
  {
    img: ironImg,
    rank: 5,
    musicName: "Music Name",
    singerName: "Singer Name",
    lapTime: "3:36",
  },
  {
    img: ironImg,
    rank: 6,
    musicName: "Music Name",
    singerName: "Singer Name",
    lapTime: "3:36",
  },
  {
    img: ironImg,
    rank: 7,
    musicName: "Music Name",
    singerName: "Singer Name",
    lapTime: "3:36",
  },
  {
    img: ironImg,
    rank: 8,
    musicName: "Music Name",
    singerName: "Singer Name",
    lapTime: "3:36",
  },
  {
    img: ironImg,
    rank: 9,
    musicName: "Music Name",
    singerName: "Singer Name",
    lapTime: "3:36",
  },
];

const NormalMusicTop100 = () => {
  const dispatch = useDispatch();
  const normalList = useSelector((state) => state.musicList.normalMusicList);
  console.log("노말뮤직 리스트", normalList);

  useEffect(() => {
    dispatch(fetchNormalMusicList());
  }, []);

  return (
    <div className="topChartSection">
      <motion.div className="topChartList">
        {topChartItem.map((item) => (
          <div className="musicTopItemBox">
            <div className="leftSection">
              <Image src={item.img} alt="" className="musicTopItemImg" />
              <div className="musicInfoFrame">
                <div className="musicName">{item.musicName}</div>
                <div className="singerName">{item.singerName}</div>
              </div>
            </div>
            <div className="rightSection">
              <div className="lapTime">{item.lapTime}</div>
              <div className="likeButton">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <div className="takeListButton">
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default NormalMusicTop100;
