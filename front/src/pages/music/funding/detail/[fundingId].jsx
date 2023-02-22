// 곡(앨범) 상세페이지
import { useEffect } from "react";
import { motion } from "framer-motion";
import SongImag from "../../../../../public/image/chang.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { fetchSongDetailInfo } from "@/middleware/fetchMusic";

const FundingSongDetail = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    const fundingId = router.query.fundingId;
    dispatch(fetchSongDetailInfo(`?fmid=${fundingId}`));
  }, []);

  return (
    <motion.div className="songDetailContainer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="songInfoSection">
        <Image className="songImg" src={SongImag} alt="songImg" />
        <div className="songInfoBox">
          <div className="songTitleInfo">
            <div>범(feat.Chillin Homie, Kid Milli)</div>
            <div>라비 (RAVI)</div>
            <div />
          </div>
          <div className="songSubInfo">
            <div>
              <div>작사</div>
              <div>라비 (RAVI), Chillin Homie, 키드밀리 (Kid Milli)</div>
            </div>
            <div>
              <div>작곡</div>
              <div>라비 (RAVI), Chillin Homie, 키드밀리 (Kid Milli)</div>
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
          올곧게 기승을 부려 남쪽 기슭을 누벼 짖어라 짐생 범범범 뱀이 날아들다가 만 리 밖 범범범 기세가 남다르구나 워리렁 범범범 버버범범 범범범 범범범 범범범 범범범범 범 워리렁 범이 내려앉아 막걸리 Pour up 더 벌일 날이 많아 It's a 범 Take your 포로 네 새카맘을 뺏어 대도 위태로워도 짖어 버럭 Bark 안이든 밖이든 걷어 두 팔 릴리리 Pretty 빛이 비치는 귀인이 기승을 부리니 뒷짐이 짚이는 잡귀 이건 범들의
          잔치 까치발 해봐야 발바닥 봐 팔도를 들썩이는 가락 Whoo 구름 위를 달리고 태백을 누벼 수륙 가리지도 않고 발을 쭉 뻗어 지름 아래 갈리는 평들에 쭈그리지 않고 외쳐 더 쩌렁 Uh 범 내려온다 범 범 내려와 범 범 범 내려온다 범 범 내려와 범 우리가 누구? 범범범 뱀이 날아들다가 만 리 밖 범범범 기세가 남다르구나 워리렁 범범범 버버범범 범범범 범범범 범범범 범범범범 범 It's the 범, Cut off your head I'm
          a G stunna 빌어 모셔라 날 흔들며 Bandana I'm the big chaos 내 뿌리 From the ghetto Woah Woah Woah Woah 내 박자는 Hit the Coachella Uh Ye 움직여 어둠 속에서 Uh Ye 사냥해 이건 Thriller 이빨 드러낸 Killer 네 살가죽을 다 찢어 길바닥엔 피 튀고 내 발자국을 위에 찍어 Ye scene stealer 움직여 위로 Me = Problem I'm the villain Ye Murder Murder 난 직여 네 기를 Me = Problem 해라 기도 내 모습은 범인
          듯 Fuck the nonbelievers 넘었지 한철은 바쁜 듯 움직여도 들켜 넌 내게 해봤던 일위 See this 내 모습은 범인 Because I kill those track since 2017 Hit the club ain't pick up 길거리 출신 난 이제 Designer들과 Meet up 내 약속시간 미뤄 난 첨 보는 널 못 믿어 친구 Peace out 니들과 경쟁 안 해 빼 힘 좀 You ain't know bout it 해서 거기야 Rookies 삶은 딴 거 말고 Diamonds 봐 내 Chain bish Rap game 내
          Game 내 Aston Martin they gave me 돈 버는 거 말곤 없어 재미 You ain't it? 우리가 누구? 범범범 뱀이 날아들다가 만 리 밖 범범범 기세가 남다르구나 워리렁 범범범 버버범범 범범범 범범범 범범범 범범범범 범 범범범 뱀이 날아들다가 만 리 밖 범범범 기세가 남다르구나 워리렁 범범범 버버범범 범범범 범범범 범범범 범범범범 범
        </div>
      </div>
    </motion.div>
  );
};

export default FundingSongDetail;
