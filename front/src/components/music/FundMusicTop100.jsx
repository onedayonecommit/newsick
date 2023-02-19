// nft 인기차트
import { motion } from "framer-motion";
import { faHeart, faPlus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import parkImg from "../../../public/image/park.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const topChartItem = [
  {
    img: parkImg,
    rank: 1,
    musicName: "Music Name",
    singerName: "Singer Name",
    lapTime: "3:36",
  },
  {
    img: parkImg,
    rank: 2,
    musicName: "Music Name",
    singerName: "Singer Name",
    lapTime: "3:36",
  },
  {
    img: parkImg,
    rank: 3,
    musicName: "Music Name",
    singerName: "Singer Name",
    lapTime: "3:36",
  },
  {
    img: parkImg,
    rank: 4,
    musicName: "Music Name",
    singerName: "Singer Name",
    lapTime: "3:36",
  },
  {
    img: parkImg,
    rank: 5,
    musicName: "Music Name",
    singerName: "Singer Name",
    lapTime: "3:36",
  },
  {
    img: parkImg,
    rank: 6,
    musicName: "Music Name",
    singerName: "Singer Name",
    lapTime: "3:36",
  },
  {
    img: parkImg,
    rank: 7,
    musicName: "Music Name",
    singerName: "Singer Name",
    lapTime: "3:36",
  },
  {
    img: parkImg,
    rank: 8,
    musicName: "Music Name",
    singerName: "Singer Name",
    lapTime: "3:36",
  },
  {
    img: parkImg,
    rank: 9,
    musicName: "Music Name",
    singerName: "Singer Name",
    lapTime: "3:36",
  },
];
const FundMusicTop100 = () => {
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

export default FundMusicTop100;
