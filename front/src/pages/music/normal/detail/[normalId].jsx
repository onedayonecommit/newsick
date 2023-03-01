// 곡(앨범) 상세페이지
import { useEffect } from "react";
import { motion } from "framer-motion";
import SongImag from "../../../../../public/image/rabi.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { fetchSongDetailInfo } from "@/middleware/fetchMusic";

const NormalSongDetail = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const detailMusicInfo = useSelector((state)=>state.detailInfo.nmfmDetailInfo)
  useEffect(() => {
    const songId = router.query.normalId;
    if (songId) dispatch(fetchSongDetailInfo(`?nmid=${songId}`));
  }, [router.query.normalId]);

  useEffect(() => {
    console.log(detailMusicInfo,'디텔뮤직인포')
  },[detailMusicInfo])
  return (
    <motion.div className="songDetailContainer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="songInfoSection">
        <Image className="songImg" src={`https://newsic-userprofile-nft-metadata-bucket.s3.ap-northeast-2.amazonaws.com/${detailMusicInfo.music_cover_image}`} alt="songImg" />
        <div className="songInfoBox">
          <div className="songTitleInfo">
            <div>{detailMusicInfo.music_name }</div>
            <div>{detailMusicInfo.singer }</div>
            <div />
          </div>
          <div className="songSubInfo">
            <div>
              <div>작사</div>
              <div>{detailMusicInfo.lyrics_maker }</div>
            </div>
            <div>
              <div>작곡</div>
              <div>{detailMusicInfo.music_maker }</div>
            </div>
          </div>
          <div className="songPlayButtonFrame">
            <div className="playButton">
              <FontAwesomeIcon className="playIcon" icon={faPlay} />
              <div className="playText">재생</div>
            </div>
            <div className="buyButton">MP3 구매</div>
          </div>
        </div>
      </div>
      <div className="songTextSection">
        <div className="infoTextSection">
          <div>가사</div>
          <div />
        </div>
        <div className="textSection">
          {detailMusicInfo.music_lyrics }
        </div>
      </div>
    </motion.div>
  );
};

export default NormalSongDetail;
