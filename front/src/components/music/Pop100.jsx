import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import ironImg from "../../../public/image/IRON.jpg";
import { faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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

const Pop100 = ({ isOpen, setIsOpen }) => {
  return (
    <div className="popBackImg">
      <div className="rankBackDrop" />
      <div className="rankContainer">
        <div className="topInfoSection">
          <div className="infoFrame">
            <div>팝 TOP 100</div>
            <div onClick={() => setIsOpen(!isOpen)}>X</div>
          </div>
          <div className="infoText">매월 1일 오후 7시 업데이트</div>
          <div className="playButton">전체재생</div>
          <div className="lastLine" />
        </div>
        <div className="bottomRankList">
          {topChartItem.map((rank) => (
            <div className="rankItemBox">
              <div className="leftSide">
                <Image src={rank.img} alt="iron" className="rankItemImg" />
                <div className="rankNum">{rank.rank}</div>
                <div className="rankInfoFrame">
                  <div className="musicName">{rank.musicName}</div>
                  <div className="singerName">{rank.singerName}</div>
                </div>
              </div>
              <div className="rightSide">
                <div className="musicTime">{rank.lapTime}</div>
                <div className="likeButton">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
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

export default Pop100;
