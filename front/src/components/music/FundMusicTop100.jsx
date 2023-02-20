// nft 인기차트
import { motion } from "framer-motion";
import { faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";
import parkImg from "../../../public/image/park.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFundMusicList } from "@/middleware/fetchMusic";

const topChartItem = [
  {
    img: parkImg,
    rank: 1,
    musicName: "Music Name",
    singerName: "Singer Name",
  },
  {
    img: parkImg,
    rank: 2,
    musicName: "Music Name",
    singerName: "Singer Name",
  },
  {
    img: parkImg,
    rank: 3,
    musicName: "Music Name",
    singerName: "Singer Name",
  },
  {
    img: parkImg,
    rank: 4,
    musicName: "Music Name",
    singerName: "Singer Name",
  },
  {
    img: parkImg,
    rank: 5,
    musicName: "Music Name",
    singerName: "Singer Name",
  },
  {
    img: parkImg,
    rank: 6,
    musicName: "Music Name",
    singerName: "Singer Name",
  },
  {
    img: parkImg,
    rank: 7,
    musicName: "Music Name",
    singerName: "Singer Name",
  },
  {
    img: parkImg,
    rank: 8,
    musicName: "Music Name",
    singerName: "Singer Name",
  },
  {
    img: parkImg,
    rank: 9,
    musicName: "Music Name",
    singerName: "Singer Name",
  },
];
const FundMusicTop100 = () => {
  const dispatch = useDispatch();
  const fundList = useSelector((state) => state.musicList.fundMusicList);
  console.log("펀드뮤직 리스트", fundList);

  useEffect(() => {
    dispatch(fetchFundMusicList());
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
