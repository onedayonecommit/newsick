import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import ironImg from "../../../public/image/IRON.jpg";
import { faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSelector } from "react-redux";

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

const Classic100 = ({ isOpen, setIsOpen }) => {
  const song100Arr = useSelector((state) => state.musicInfo.musicGenreList);
  return (
    <div className="classicBackImg">
      <div className="rankBackDrop" />
      <div className="rankContainer">
        <div className="topInfoSection">
          <div className="infoFrame">
            <div>클래식 TOP 100</div>
            <div onClick={() => setIsOpen(!isOpen)}>X</div>
          </div>
          {/* <div className="infoText">매월 1일 오후 7시 업데이트</div>
          <div className="playButton">전체재생</div> */}
          <div className="lastLine" />
        </div>
        <div className="bottomRankList">
          {song100Arr.map((rank) => (
            <div className="rankItemBox">
              <div className="leftSide">
                <Image src={`https://newsic-userprofile-nft-metadata-bucket.s3.ap-northeast-2.amazonaws.com/${rank.music_cover_image}`} alt="iron" className="rankItemImg" />
                <div className="rankNum">{i+1}</div>
                <div className="rankInfoFrame">
                  <div className="musicName">{rank.music_name}</div>
                  <div className="singerName">{rank.singer_name}</div>
                </div>
              </div>
              <div className="rightSide">
                <div className="musicTime">{rank.lapTime}</div>
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

export default Classic100;
