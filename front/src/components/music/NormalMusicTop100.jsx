// 일반음원 인기차트
import { motion } from "framer-motion";
import { faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";
import ironImg from "../../../public/image/IRON.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { fetchNormalMusicList } from "@/middleware/fetchMusic";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const NormalMusicTop100 = () => {
  const dispatch = useDispatch();
  const normalList = useSelector((state) => state.musicInfo.normalMusicList);
  console.log("노말뮤직 리스트", normalList);

  useEffect(() => {
    dispatch(fetchNormalMusicList());
  }, []);

  return (
    <div className="topChartSection">
      <motion.div className="topChartList">
        {normalList.map((item) => (
          <div className="musicTopItemBox">
            <div className="leftSection">
              <Image src={`https://newsic-userprofile-nft-metadata-bucket.s3.ap-northeast-2.amazonaws.com/${item.music_cover_image}`} alt="" className="musicTopItemImg" width={85} height={85} />
              <div className="musicInfoFrame">
                <div className="musicName">{item.music_name}</div>
                <div className="singerName">{item.singer}</div>
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

export default NormalMusicTop100;
