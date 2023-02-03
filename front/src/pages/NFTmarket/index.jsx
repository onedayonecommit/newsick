// NFT 마켓 메인페이지
/*
- 성공된 펀딩 목록들을 다 띄워줌
 - 상세로 들어가면 판매하고 있는 NFT가 없을 수도 있고 있을 수도 있음

*/
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, wrap,motion} from "framer-motion"
import image1 from "../../../public/image/IRON.jpg"
import image2 from "../../../public/image/dddepth-343.jpg"
import PageNationFrame from '../../components/PageNationFrame';

// nft 메인페이지
const images = [
  image2,
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",

];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const data = Array.from({length:20},()=>({ nftName: 'NFT 1', price: '2.2wei', bottomImage: image1}))

const NftMarketContainer = () => {
  const [active, setActive] = useState(false);
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className='nftMarketContainerFrame'>
        <div className='nftTopSection'>
        <AnimatePresence initial={false} custom={direction}>
          <div className='nftTopFrame' >
            <motion.img 
            className='topSwiperSection' 
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
              opacity: { duration: 0.2 }
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
            <div className='topInfoSection'></div>
          </div>
          </AnimatePresence>
          <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
        </div>
        <div className='nftSellSection'>
          <div className='topBarSection'>
            <div className='topBar'>
              <div className='text'>Market Place</div>
              <select className='dropDownBar'>
                  <option value="popular">popular</option>
                  <option value="Close">Close</option>
                  <option value="Latest ">Latest </option>
              </select>
            </div>
          </div>
          <div className='sellMiddle'>
            <div className='nftItemList'>
            {data.map((item, index) => (
                  <div key={index} className='nftItemBox'>
                      <div className='topInfo'>
                          <div className='nftName'>{item.nftName}</div>
                          <div className='price'>
                              <div className='priceCenterFrame'>{item.price}</div>
                          </div>
                      </div>
                      <div className='bottomImageFrame'>
                              <img  className='bottomImage' src={item.bottomImage} alt={""} />
                              <div className='likeIconFrame'>
                                  <FontAwesomeIcon 
                                      icon={faHeart} 
                                      className={`likeIcon ${active[index] ? 'active' : ''}`}
                                      onClick={() => setActive({ ...active, [index]: !active[index] })} 
                                  />
                              </div>
                      </div>
                  </div>
              ))}

            </div>
        

            <div className='nftBuyInfoSection'>NFT 구매 관련 주의 사항 및 공지 사항</div>
          </div>
          <div className='bottomFrame'>
            <div className='bottomSection'>
              <PageNationFrame/>
            </div>
            </div>
          </div>
    </div>
  )
}

export default NftMarketContainer