// 일반음원 인기차트
import { motion } from "framer-motion";
import { faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";
import ironImg from "../../../public/image/IRON.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { fetchNormalMusicList } from "@/middleware/fetchMusic";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { fetchAddSong } from "@/middleware/fetchMusic";

const NormalMusicTop100 = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userAddress = useSelector((state) => state.userInfo.address);
  const normalList = useSelector((state) => state.musicInfo.normalMusicList);
  console.log("노말뮤직 리스트", normalList);

  const addPlayListHandler = (id) => {
    console.log("노말뮤직 리스트 아이디", id);
    dispatch(fetchAddSong({ user_wallet_address: userAddress, normal_music_id: id }));
    alert("내 재생목록에 추가 되었습니다!");
  };

  useEffect(() => {
    dispatch(fetchNormalMusicList());
  }, []);

  return (
    <div className="topChartSection">
      <motion.div className="topChartList">
        {normalList.map((item) => (
          <div className="musicTopItemBox">
            <div
              className="leftSection"
              onClick={() => {
                router.push(`music/normal/detail/${item.id}`);
              }}
            >
              <Image src={`https://newsic-userprofile-nft-metadata-bucket.s3.ap-northeast-2.amazonaws.com/${item.music_cover_image}`} alt="" className="musicTopItemImg" width={85} height={85} />
              <div className="musicInfoFrame">
                <div className="musicName">{item.music_name}</div>
                <div className="singerName">{item.singer}</div>
              </div>
            </div>
            <div className="rightSection">
              {/* 내 플레이리스트에 추가하기 버튼 */}
              <div className="takeListButton" onClick={() => addPlayListHandler(item.id)}>
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
