import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import ironImg from "../../../public/image/IRON.jpg";
import { faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const topChartItem = [
  {
    img: ironImg,
    rank: 1,
    musicName: "Music Name",
    singerName: "Singer Name",
  },
  {
    img: ironImg,
    rank: 2,
    musicName: "Music Name",
    singerName: "Singer Name",
  },
  {
    img: ironImg,
    rank: 3,
    musicName: "Music Name",
    singerName: "Singer Name",
  },
  {
    img: ironImg,
    rank: 4,
    musicName: "Music Name",
    singerName: "Singer Name",
  },
  {
    img: ironImg,
    rank: 5,
    musicName: "Music Name",
    singerName: "Singer Name",
  },
  {
    img: ironImg,
    rank: 6,
    musicName: "Music Name",
    singerName: "Singer Name",
  },
  {
    img: ironImg,
    rank: 7,
    musicName: "Music Name",
    singerName: "Singer Name",
  },
  {
    img: ironImg,
    rank: 8,
    musicName: "Music Name",
    singerName: "Singer Name",
  },
  {
    img: ironImg,
    rank: 9,
    musicName: "Music Name",
    singerName: "Singer Name",
  },
];

const Song100 = ({ isOpen, setIsOpen }) => {
  const song100Arr = useSelector((state) => state.musicInfo.musicGenreList);
  console.log("가요 리스트", song100Arr);
  const [song100, setSong100] = useState([]);

  const song100List = [...song100Arr];
  console.log("스프레드 연산 가요", song100List);
  const songList = song100List.sort((a, b) => {
    console.log(b);
    console.log(b.normal_music_player[0]);
    console.log(b.normal_music_player[0].player_count);

    // const aPlayerCount = a.normal_music_player[0]?.player_count || a.funding_music_player[0]?.player_count || 0;
    // const bPlayerCount = b.normal_music_player[0]?.player_count || b.funding_music_player[0]?.player_count || 0;
    // return bPlayerCount - aPlayerCount;
    return b.normal_music_player[0].player_count - a.normal_music_player[0].player_count;
  });

  return (
    <div className="publicBackImg">
      <div className="rankBackDrop" />
      <div className="rankContainer">
        <div className="topInfoSection">
          <div className="infoFrame">
            <div>가요 TOP 100</div>
            <div
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              X
            </div>
          </div>
          {/* <div className="infoText">매월 1일 오후 7시 업데이트</div>
          <div className="playButton">전체재생</div> */}
          <div className="lastLine" />
        </div>
        <div className="bottomRankList">
          {songList.map((rank, i) => (
            <div className="rankItemBox">
              <div className="leftSide">
                <Image src={`https://newsic-userprofile-nft-metadata-bucket.s3.ap-northeast-2.amazonaws.com/${rank.music_cover_image}`} alt="iron" className="rankItemImg" width={120} height={120} />
                <div className="rankNum">{i + 1}</div>
                <div className="rankInfoFrame">
                  <div className="musicName">{rank.music_name}</div>
                  <div className="singerName">{rank.singer}</div>
                </div>
              </div>
              <div className="rightSide">
                {/* <div className="musicTime">{rank.lapTime}</div> */}
                {/* <div className="likeButton">
                  <FontAwesomeIcon icon={faHeart} />
                </div> */}
                <div className="takeButton">
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Song100;
