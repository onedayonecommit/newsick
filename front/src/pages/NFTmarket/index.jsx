import { useEffect, useState } from "react";
import useWeb3 from "@/hooks/useWeb3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, wrap, motion } from "framer-motion";
import image1 from "../../../public/image/IRON.jpg";
import image2 from "../../../public/image/dddepth-343.jpg";
import PageNationFrame from "../../components/PageNationFrame";
import Image from "next/image";
import { NEWSIC_FUND_CA } from "@/web3.config";
import { useDispatch, useSelector } from "react-redux";
import { marketNftList } from "@/middleware/fetchNft";
import { useRouter } from "next/router";

// nft 메인페이지
const images = ["https://i.pinimg.com/564x/26/2c/d9/262cd9e6cdf5ba0f922d36aeb8a3f3fa.jpg", "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png", "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const data = Array.from({ length: 20 }, () => ({
  nftName: "NFT 1",
  price: "2.2wei",
  bottomImage: image1,
}));

const NftMarketContainer = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const marketList = useSelector((state) => state.marketInfo.funding_list);
  const [active, setActive] = useState(false);
  const [[page, direction], setPage] = useState([0, 0]);
  const [place, setPlace] = useState("popular");
  const imageIndex = wrap(0, images.length, page);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    (async () => {
      dispatch(marketNftList());
      console.log(marketList, "마켓 진입");
    })();
  }, []);

  return (
    // 제일 상위에 구매 버튼이랑 제일 Hot 한 아이템 넣어주기
    <motion.div className="nftMarketContainerFrame" initial={{ opacity: 0, scale: 0, y: "-50vh" }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0, y: "-50vh" }} transition={{ duration: 0.3 }}>
      <div className="nftTopSection">
        <AnimatePresence initial={false} custom={direction}>
          <div className="nftTopFrame">
            <motion.img
              className="topSwiperSection"
              alt=""
              key={page}
              src={images[imageIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            />
            <div className="topInfoSection"></div>
          </div>
        </AnimatePresence>
        <div className="next" onClick={() => paginate(1)}>
          {"‣"}
        </div>
        <div className="prev" onClick={() => paginate(-1)}>
          {"‣"}
        </div>
      </div>
      <div className="nftSellSection">
        <div className="topBarSection">
          <div className="topBar">
            <div className="text">Market Place</div>
            <select
              className="dropDownBar"
              onChange={(e) => {
                setPlace(e.target.value);
              }}
            >
              <option value="popular">popular</option>
              <option value="Close">Close</option>
              <option value="Latest ">Latest </option>
            </select>
          </div>
        </div>
        <div className="sellMiddle">
          <div className="nftItemList">
            {marketList.map((item, index) => (
              <div key={index} className="nftItemBox">
                <div className="topInfo">
                  <div className="nftName">{item.nft_name}</div>
                  <div className="price">
                    <div className="priceCenterFrame">{item.id}</div>
                  </div>
                </div>
                <div
                  className="bottomImageFrame"
                  onClick={() => {
                    router.push(`NFTmarket/detail/${item.id}`);
                  }}
                >
                  <Image className="bottomImage" src={item.funding_nft_image} alt={""} width={119} height={119} />
                  <div className="likeIconFrame">
                    <FontAwesomeIcon icon={faHeart} className={`likeIcon ${active[index] ? "active" : ""}`} onClick={() => setActive({ ...active, [index]: !active[index] })} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="nftBuyInfoSection">
                <div className="mainText">본 고지는 회원님들이 가상자산을 거래하거나 보유할 때 발생할 수 있는 대표적인 위험을 안내하기 위함입니다.</div>
                <div className="text">[가상자산 투자 유의사항]</div>
                <div className="text">1) 가상자산은 법정화폐가 아니므로 특정주체가 가치를 보장하지 않습니다.</div>
                <div className="text">2) 가상자산은 365일 24시간 전 세계에서 거래되며, 시장의 수요 및 공급, 각 가상자산의 정책, 국가별 법령 및 제도, 네트워크 상황 등 다양한 요인으로 급격한 시세 변동이 발생할 수 있습니다.</div>
                <div className="text">3) 가상자산은 가격 변동폭에 제한이 없으므로, 원금손실 가능성이 있음을 특히 유의하시기 바랍니다.</div>
                <div className="text">4) 가상자산은 초고위험 상품으로 투자자 자기책임 원칙이 우선되는 만큼, 회원님이 투자하려는 가상자산의 정보를 백서 또는 평가보고서 등을 통해 충분히 확인한 후에 신중히 투자 결정하시기 바라오며, 과도한 투자를 지양하고 여유자금으로 분산투자 하는 것을 권유 드립니다.</div>
                <div className="text">5) 본 거래소도 회원님들에게 안전한 투자환경을 제공하기 위해 가상자산의 거래지원에 보다 유의하고, 회원님들께 최신의 정보를 제공하기 위해 노력하겠습니다.</div>
          </div>
        </div>
        <div className="bottomFrame">
          <div className="bottomSection">
            <PageNationFrame />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NftMarketContainer;
