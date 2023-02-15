import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PageNationFrame from "../../components/PageNationFrame";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyNftList } from "@/middleware/fetchMyPage";
const nftItem = [
  {
    id: "a",
    imgUrl: "https://i.pinimg.com/236x/ce/93/7e/ce937eb3c1a0cb0722066411249bfbb2.jpg",
    price: 55,
    state: "On Sale",
    nftName: "NFT Name",
    creatorImgUrl: "https://i.pinimg.com/236x/ce/93/7e/ce937eb3c1a0cb0722066411249bfbb2.jpg",
    creatorName: "Creator Name",
  },
  {
    id: "b",
    imgUrl: "https://i.pinimg.com/236x/12/54/45/125445aeca8e66dbadc042efb01daa7a.jpg",
    price: 66,
    state: "On Sale",
    nftName: "NFT Name",
    creatorImgUrl: "https://i.pinimg.com/236x/12/54/45/125445aeca8e66dbadc042efb01daa7a.jpg",
    creatorName: "Creator Name",
  },
  {
    id: "c",
    imgUrl: "https://i.pinimg.com/236x/4d/7f/49/4d7f4910370d3d4c2393a3be7470e78c.jpg",
    price: 77,
    state: "On Sale",
    nftName: "NFT Name",
    creatorImgUrl: "https://i.pinimg.com/236x/4d/7f/49/4d7f4910370d3d4c2393a3be7470e78c.jpg",
    creatorName: "Creator Name",
  },
  {
    id: "d",
    imgUrl: "https://i.pinimg.com/236x/8b/4c/c1/8b4cc19001b73c05bf5351031496bbf0.jpg",
    price: 88,
    state: "On Sale",
    nftName: "NFT Name",
    creatorImgUrl: "https://i.pinimg.com/236x/8b/4c/c1/8b4cc19001b73c05bf5351031496bbf0.jpg",
    creatorName: "Creator Name",
  },
  {
    id: "e",
    imgUrl: "https://i.pinimg.com/236x/57/18/16/571816184fcb5580e192354c59fcd029.jpg",
    price: 99,
    state: "On Sale",
    nftName: "NFT Name",
    creatorImgUrl: "https://i.pinimg.com/236x/57/18/16/571816184fcb5580e192354c59fcd029.jpg",
    creatorName: "Creator Name",
  },
  {
    id: "f",
    imgUrl: "https://i.pinimg.com/474x/b4/76/23/b4762351d227fceeb3e13b989daf22a1.jpg",
    price: 88,
    state: "On Sale",
    nftName: "NFT Name",
    creatorImgUrl: "https://i.pinimg.com/474x/b4/76/23/b4762351d227fceeb3e13b989daf22a1.jpg",
    creatorName: "Creator Name",
  },
  {
    id: "g",
    imgUrl: "https://i.pinimg.com/236x/f0/1e/45/f01e45c71541c040b8c807d9ee821d8b.jpg",
    price: 77,
    state: "On Sale",
    nftName: "NFT Name",
    creatorImgUrl: "https://i.pinimg.com/236x/f0/1e/45/f01e45c71541c040b8c807d9ee821d8b.jpg",
    creatorName: "Creator Name",
  },
  {
    id: "h",
    imgUrl: "https://i.pinimg.com/236x/23/c8/de/23c8de238cb8cf5f7504756691323d34.jpg",
    price: 66,
    state: "On Sale",
    nftName: "NFT Name",
    creatorImgUrl: "https://i.pinimg.com/236x/23/c8/de/23c8de238cb8cf5f7504756691323d34.jpg",
    creatorName: "Creator Name",
  },
  {
    id: "i",
    imgUrl: "https://i.pinimg.com/236x/71/78/45/717845e2818a50116cdc05961f584e01.jpg",
    price: 55,
    state: "On Sale",
    nftName: "NFT Name",
    creatorImgUrl: "https://i.pinimg.com/236x/71/78/45/717845e2818a50116cdc05961f584e01.jpg",
    creatorName: "Creator Name",
  },
  {
    id: "j",
    imgUrl: "https://i.pinimg.com/236x/1e/a7/e2/1ea7e2fa301c529bee2a55d4b0be2f18.jpg",
    price: 44,
    state: "On Sale",
    nftName: "NFT Name",
    creatorImgUrl: "https://i.pinimg.com/236x/1e/a7/e2/1ea7e2fa301c529bee2a55d4b0be2f18.jpg",
    creatorName: "Creator Name",
  },
  {
    id: "k",
    imgUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20160727_163%2Ftjfxkd478_1469587133146lABHS_JPEG%2F20160727001201_0.jpg&type=a340",
    price: 10000,
    state: "On Sale",
    nftName: "NFT Name",
    creatorImgUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20160727_163%2Ftjfxkd478_1469587133146lABHS_JPEG%2F20160727001201_0.jpg&type=a340",
    creatorName: "Creator Name",
  },
  {
    id: "l",
    imgUrl: "https://i.pinimg.com/236x/cb/f4/d1/cbf4d1653c4dffc9d749855a2d4a2bd0.jpg",
    price: 33,
    state: "On Sale",
    nftName: "NFT Name",
    creatorImgUrl: "https://i.pinimg.com/236x/cb/f4/d1/cbf4d1653c4dffc9d749855a2d4a2bd0.jpg",
    creatorName: "Creator Name",
  },
];
const MyPageSecondContainer = () => {
  const [isFilled, setIsFilled] = useState();
  const [selectedItem, setSelectedItem] = useState(null);

  const heartNftList = useSelector((state) => state.myPageInfo.heart_nft);
  const heartFundingList = useSelector((state) => state.myPageInfo.heart_funding);
  // const dispatch = useDispatch();
  const handleClick = (item) => {
    setSelectedItem(item.id);
  };
  // useEffect(() => {
  //   heartFundingList.map((e) => {
  //     console.log(e.heartFundingList.funding_nft_image);
  //   });
  // }, []);
  // const user_wallet_address = useSelector((state) => state.userInfo.address);
  // console.log("123123", user_wallet_address);
  // useEffect(() => {
  //   if (user_wallet_address) dispatch(fetchMyNftList({ user_wallet_address }));
  // }, [user_wallet_address]);
  return (
    <div className="secondMyPage">
      <div className="myPageSecondContainerFrame">
        <div className="topInfoSection">
          <div>마감 임박한 펀딩</div>
          <div className="slideSection">info</div>
        </div>
        <div className=""></div>
        <div className="nftItemList">
          {heartFundingList.map((item) => (
            <div className="nftWishItemBox" key={item.id}>
              <div className="topSection">
                <img className="nftImage" src={item.heartFundingList.funding_nft_image} alt="ironImage" />
                <motion.div key={item.id} style={{ color: isFilled && selectedItem === item.id ? "rgb(255, 255, 255)" : "rgba(0, 0, 0, 0.14)" }} transition={{ duration: 0.3 }} onClick={() => setIsFilled(!isFilled)} onClickCapture={() => handleClick(item)} className="wishButton">
                  <FontAwesomeIcon icon={faHeart} />
                </motion.div>
                <div className="infoStateFrame">
                  <div className="price">
                    <div>{item.heartFundingList.funding_price}</div>
                    <div>ETH</div>
                  </div>
                  <div className="state">
                    <div>{item.state}</div>
                  </div>
                </div>
              </div>
              <div className="middleSection">
                <div className="nftNameTag">{item.nftName}</div>
                <div className="creatorNameTag">
                  <img src={item.creatorImgUrl} alt="creatorImage" />
                  <div>{item.creatorName}</div>
                </div>
              </div>
              <div className="bottomSection">
                <div className="detailButton" typeof="button">
                  Detail
                </div>
                <div className="buyNowButton" typeof="button">
                  Buy Now
                </div>
              </div>
            </div>
          ))}
        </div>
        <PageNationFrame />
      </div>
    </div>
  );
};

export default MyPageSecondContainer;
