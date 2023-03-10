// nft 인기차트
import { motion } from "framer-motion";
import { faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";
import parkImg from "../../../public/image/park.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFundMusicList } from "@/middleware/fetchMusic";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const fundList = useSelector((state) => state.musicInfo.fundMusicList);
  const userAddress = useSelector((state) => state.userInfo.address);
  console.log("펀드뮤직 리스트", fundList);

  const addPlayListHandler = (id) => {
    console.log("펀드뮤직 리스트 아이디", id);
    dispatch(fetchAddSong({ user_wallet_address: userAddress, funding_music_id: id }));
    alert("내 재생목록에 추가 되었습니다!");
  };

  useEffect(() => {
    dispatch(fetchFundMusicList());
  }, []);

  return (
    <div className="topChartSection">
      <motion.div className="topChartList">
        {fundList.map((item) => (
          <div className="musicTopItemBox">
            <div
              className="leftSection"
              onClick={() => {
                router.push(`music/funding/detail/${item.id}`);
              }}
            >
              <Image src={`https://newsic-userprofile-nft-metadata-bucket.s3.ap-northeast-2.amazonaws.com/${item.music_cover_image}`} alt="" className="musicTopItemImg" width={85} height={85} />
              <div className="musicInfoFrame">
                <div className="musicName">{item.music_name}</div>
                <div className="singerName">{item.singer}</div>
              </div>
            </div>
            <div className="rightSection">
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

export default FundMusicTop100;
