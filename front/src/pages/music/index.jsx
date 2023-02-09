// 음악 스트리밍 메인 페이지
/*
- Top100 인기차트
- NFT 인기차트
- 신규 앨범
- 장르별
*/
import Image from "next/image";
import ParkImage from "../../../public/image/park.jpg";
import IronImage from "../../../public/image/IRON.jpg";
import LeeImage from "../../../public/image/lee.jpg";
import GenreImage from "../../../public/image/GENRE.jpg";

// 뮤직 메인페이지

const subMusicItems = [
  { id: 1, img: ParkImage, songName: "야생화", singerName: "박효신" },
  { id: 2, img: ParkImage, songName: "야생화", singerName: "박효신" },
  { id: 3, img: ParkImage, songName: "야생화", singerName: "박효신" },
  { id: 4, img: ParkImage, songName: "야생화", singerName: "박효신" },
  { id: 5, img: ParkImage, songName: "야생화", singerName: "박효신" },
  { id: 6, img: ParkImage, songName: "야생화", singerName: "박효신" },
  { id: 7, img: ParkImage, songName: "야생화", singerName: "박효신" },
  { id: 8, img: ParkImage, songName: "야생화", singerName: "박효신" },
];
const topChartItems = [
  { id: 1, img: IronImage, songName: "ROCK BOTTOM", singerName: "아이언" },
  { id: 2, img: IronImage, songName: "ROCK BOTTOM", singerName: "아이언" },
  { id: 3, img: IronImage, songName: "ROCK BOTTOM", singerName: "아이언" },
  { id: 4, img: IronImage, songName: "ROCK BOTTOM", singerName: "아이언" },
  { id: 5, img: IronImage, songName: "ROCK BOTTOM", singerName: "아이언" },
  { id: 6, img: IronImage, songName: "ROCK BOTTOM", singerName: "아이언" },
];
const GenreItems = [
  { id: 1, img: GenreImage, genreName: "genreName" },
  { id: 2, img: GenreImage, genreName: "genreName" },
  { id: 3, img: GenreImage, genreName: "genreName" },
  { id: 4, img: GenreImage, genreName: "genreName" },
  { id: 5, img: GenreImage, genreName: "genreName" },
  { id: 6, img: GenreImage, genreName: "genreName" },
];
const NewAlbumItems = [
  { id: 1, img: LeeImage, songName: "사랑한다는 말은 아끼지 말아요", singerName: "이예준" },
  { id: 2, img: LeeImage, songName: "사랑한다는 말은 아끼지 말아요", singerName: "이예준" },
  { id: 3, img: LeeImage, songName: "사랑한다는 말은 아끼지 말아요", singerName: "이예준" },
  { id: 4, img: LeeImage, songName: "사랑한다는 말은 아끼지 말아요", singerName: "이예준" },
];

const MusicContainer = () => {
  return (
    <div className="musiccontainerFrame">
      <div className="topSection">
        <div className="titleMusicInfoFrame">
          <div className="musicInfoSection">
            <div className="musicName">Music Name</div>
            <div className="musicText">readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</div>
          </div>
          <div className="musicSellButtonSection">
            <div className="playButton" typeof="button">
              PLAY NOW
            </div>
            <div className="buyButton" typeof="button">
              BUY NOW
            </div>
          </div>
        </div>
        <div className="subTitleMusicinfoFram">
          <div className="subTitleText">Hot Albums</div>
          <div className="subInfoBoxList">
            {subMusicItems.map((item) => (
              <div className="musicBox">
                <Image className="musicImg" src={item.img} alt={item.songName} />
                <div className="musicInfo">
                  <div className="songName">{item.songName}</div>
                  <div className="singerName">{item.singerName}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bottomSection">
        <div className="leftSection">
          <div className="topChartText">Top Charts</div>
          <div className="topChartList">
            {topChartItems.map((item) => (
              <div className="topChartItemBox">
                <div className="musicFrontSection">
                  <Image className="musicImg" src={item.img} alt={item.singerName} />
                  <div className="musicInfo">
                    <div className="musicName">{item.songName}</div>
                    <div className="singerName">{item.singerName}</div>
                  </div>
                </div>
                <div className="musicInfoSection">
                  <div className="musicRapTime">{item.rapTime}</div>
                  <div className="iconSection">
                    <div className="iconFirst" />
                    <div className="iconSecond" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rightSection">
          <div className="genreSection">
            <div className="genreInfoSection">
              <div className="genreText">Genre List</div>
              <div className="genreShowAll">전체 보기</div>
            </div>
            <div className="genreButtonSection">
              <div className="genreButtonList">
                {GenreItems.map((item) => (
                  <div className="genreItemBox" style={{ backgroundImage: `url(${item.img.src})` }} aria-label={item.genreName}>
                    <div className="genreInfoSection">
                      <div className="genreText">{item.genreName}</div>
                      <div className="genreLine" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="newAlbumSection">
            <div className="newAlbumText">NEW ALBUM </div>
            <div className="newAlbumList">
              {NewAlbumItems.map((item) => (
                <div className="newAlbumItemBox">
                  <div className="musicFrontSection">
                    <Image className="musicImg" src={item.img} alt={item.singerName} />
                    <div className="musicInfo">
                      <div className="musicName">{item.songName}</div>
                      <div className="singerName">{item.singerName}</div>
                    </div>
                  </div>
                  <div className="musicInfoSection">
                    <div className="musicRapTime">{item.rapTime}</div>
                    <div className="iconSection">
                      <div className="iconFirst" />
                      <div className="iconSecond" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicContainer;
