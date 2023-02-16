import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState,useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
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
const fundItem = [
  {
      id:"a",
      imgUrl:"https://i.pinimg.com/564x/8d/b7/71/8db771767ba43627f7672933195a4deb.jpg",
      price:55,
      state:"On Sale",
      nftName:"NFT Name",
      creatorImgUrl:"https://i.pinimg.com/236x/ce/93/7e/ce937eb3c1a0cb0722066411249bfbb2.jpg",
      creatorName:"Creator Name",
  },
  {
      id:"b",
      imgUrl:"https://i.pinimg.com/236x/12/54/45/125445aeca8e66dbadc042efb01daa7a.jpg",
      price:66,
      state:"On Sale",
      nftName:"NFT Name",
      creatorImgUrl:"https://i.pinimg.com/236x/12/54/45/125445aeca8e66dbadc042efb01daa7a.jpg",
      creatorName:"Creator Name",
  },
  {
      id:"c",
      imgUrl:"https://i.pinimg.com/564x/bf/af/61/bfaf61ad1d35e6ae28773b14b0fc4232.jpg",
      price:77,
      state:"On Sale",
      nftName:"NFT Name",
      creatorImgUrl:"https://i.pinimg.com/564x/bf/af/61/bfaf61ad1d35e6ae28773b14b0fc4232.jpg",
      creatorName:"Creator Name",
  },
  {
      id:"d",
      imgUrl:"https://i.pinimg.com/236x/8b/4c/c1/8b4cc19001b73c05bf5351031496bbf0.jpg",
      price:88,
      state:"On Sale",
      nftName:"NFT Name",
      creatorImgUrl:"https://i.pinimg.com/236x/8b/4c/c1/8b4cc19001b73c05bf5351031496bbf0.jpg",
      creatorName:"Creator Name",
  },
  {
      id:"e",
      imgUrl:"https://i.pinimg.com/564x/d5/71/60/d5716045857579e8517d04d2cbe51535.jpg",
      price:99,
      state:"On Sale",
      nftName:"NFT Name",
      creatorImgUrl:"https://i.pinimg.com/564x/d5/71/60/d5716045857579e8517d04d2cbe51535.jpg",
      creatorName:"Creator Name",
  },
  {
      id:"f",
      imgUrl:"https://i.pinimg.com/474x/b4/76/23/b4762351d227fceeb3e13b989daf22a1.jpg",
      price:88,
      state:"On Sale",
      nftName:"NFT Name",
      creatorImgUrl:"https://i.pinimg.com/474x/b4/76/23/b4762351d227fceeb3e13b989daf22a1.jpg",
      creatorName:"Creator Name",
  },
  {
      id:"g",
      imgUrl:"https://i.pinimg.com/236x/f0/1e/45/f01e45c71541c040b8c807d9ee821d8b.jpg",
      price:77,
      state:"On Sale",
      nftName:"NFT Name",
      creatorImgUrl:"https://i.pinimg.com/236x/f0/1e/45/f01e45c71541c040b8c807d9ee821d8b.jpg",
      creatorName:"Creator Name",
  },
  {
      id:"h",
      imgUrl:"https://i.pinimg.com/236x/23/c8/de/23c8de238cb8cf5f7504756691323d34.jpg",
      price:66,
      state:"On Sale",
      nftName:"NFT Name",
      creatorImgUrl:"https://i.pinimg.com/236x/23/c8/de/23c8de238cb8cf5f7504756691323d34.jpg",
      creatorName:"Creator Name",
  },
  {
      id:"i",
      imgUrl:"https://i.pinimg.com/236x/71/78/45/717845e2818a50116cdc05961f584e01.jpg",
      price:55,
      state:"On Sale",
      nftName:"NFT Name",
      creatorImgUrl:"https://i.pinimg.com/236x/71/78/45/717845e2818a50116cdc05961f584e01.jpg",
      creatorName:"Creator Name",
  },
  {
      id:"j",
      imgUrl:"https://i.pinimg.com/236x/1e/a7/e2/1ea7e2fa301c529bee2a55d4b0be2f18.jpg",
      price:44,
      state:"On Sale",
      nftName:"NFT Name",
      creatorImgUrl:"https://i.pinimg.com/236x/1e/a7/e2/1ea7e2fa301c529bee2a55d4b0be2f18.jpg",
      creatorName:"Creator Name",
  },
  {
      id:"k",
      imgUrl:"https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20160727_163%2Ftjfxkd478_1469587133146lABHS_JPEG%2F20160727001201_0.jpg&type=a340",
      price:10000,
      state:"On Sale",
      nftName:"NFT Name",
      creatorImgUrl:"https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20160727_163%2Ftjfxkd478_1469587133146lABHS_JPEG%2F20160727001201_0.jpg&type=a340",
      creatorName:"Creator Name",
  },
  {
      id:"l",
      imgUrl:"https://i.pinimg.com/236x/cb/f4/d1/cbf4d1653c4dffc9d749855a2d4a2bd0.jpg",
      price:33,
      state:"On Sale",
      nftName:"NFT Name",
      creatorImgUrl:"https://i.pinimg.com/236x/cb/f4/d1/cbf4d1653c4dffc9d749855a2d4a2bd0.jpg",
      creatorName:"Creator Name",
  },
]

const itemVariant ={
  initial:{
      y: 100, opacity: 0 , rotateY:-100,
  },
  animate:{
      y: 0, opacity: 1 ,rotateY:0,
  }
}
const MyPageSecondContainer = () => {
  const [isFilled, setIsFilled] = useState();
  const [selectedItem, setSelectedItem] = useState(null);

  const [isNftView, setIsNftView] = useState(true);
  const handleSwitchView = () => {
      setIsNftView(!isNftView); 
    };

  const container = useRef(null)
  const ref = useRef(null)
  const isInView = useInView({ root: container })

  const [] = useState();
  const dispatch = useDispatch();
  const handleClick = (item) => {
    setSelectedItem(item.id);
  };
  const user_wallet_address = useSelector((state) => state.userInfo.address);
  console.log("123123", user_wallet_address);
  useEffect(() => {
    if (user_wallet_address) dispatch(fetchMyNftList({ user_wallet_address }));
  }, [user_wallet_address]);
  return (
    <div className='secondMyPage' ref={container}>
        {
           isNftView ? 
            (
                <div className='myPageSecondContainerFrame'
                    style={isNftView?{display:"flex"}:{display:"none"}}
                >
                    <div className='topInfoSection'>
                        <motion.div
                            initial={{x:20,y:-20,opacity:0}}
                            animate={{x:0,y:0,opacity:1}}
                            transition={{duration:0.7}}
                        >관심 있는 NFT </motion.div>
                        <div className='slideSection'>
                            <div className='infoSection'>info</div>
                            <div className='switchButton'  onClick={handleSwitchView}>펀딩 보기</div>
                        </div>
                    </div>
                    <div className='nftItemList'>
                    {
                        nftItem.map((item,index)=>(
                            <motion.div className='nftWishItemBox' 
                            key={item.id} 
                            ref={ref}
                            variants={itemVariant}
                            initial={!isInView?"initial":"animate"}
                            animate={!isInView?"animate":"initial"}
                            transition={{duration:0.5,type:"spring",delay:0.1*index}}
                            >
                                <div className='topSection'>
                                    <img className='nftImage' src={item.imgUrl} alt="ironImage"/>
                                    <motion.div
                                        key={item.id}
                                        style={{ color: isFilled && selectedItem === item.id ? "rgb(255, 255, 255)" : "rgba(0, 0, 0, 0.14)" }}
                                        transition={{ duration: 0.3 }}
                                        onClick={() => setIsFilled(!isFilled)}
                                        onClickCapture={() => handleClick(item)}
                                        className='wishButton'>
                                        <FontAwesomeIcon 
                                        icon={faHeart}
                                        />
                                    </motion.div>
                                    <div className='infoStateFrame'>
                                        <div className='state'>
                                            <div>
                                                {item.state}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='middleSection'>
                                    <div className='nftNameTag'>
                                        {item.nftName}
                                    </div>
                                    <div className='creatorNameTag'>
                                        <img src={item.creatorImgUrl} alt="creatorImage"/>
                                        <div>{item.creatorName}</div>
                                    </div>
                                </div>
                                <div className='bottomSection'>
                                    <div className='detailButton' typeof='button'>Detail</div>
                                    <div className='buyNowButton' typeof='button'>Buy Now</div>
                                </div>
                            </motion.div>

                        ))
                    }
                        <PageNationFrame/>
                    </div>
                </div>
            ) : (
                <div className='myPageSecondContainerFrameNFT'
                    style={!isNftView?{display:"flex"}:{display:"none"}}
                >
                    <div className='topInfoSection'>
                        <motion.div
                            initial={{x:20,y:-20,opacity:0}}
                            animate={{x:0,y:0,opacity:1}}
                            transition={{duration:0.7}}
                        >관심 있는 펀딩 </motion.div>
                        <div className='slideSection'>
                            <div className='infoSection'>info</div>
                            <div className='switchButton'  onClick={handleSwitchView}>NFT 보기</div>
                        </div>
                    </div>
                    <div className='fundItemList'>
                            {
                                fundItem.map((item,index)=>(
                                    <motion.div className='fundWishItemBox' 
                                    key={item.id} 
                                    ref={ref}
                                    variants={itemVariant}
                                    initial={!isInView?"initial":"animate"}
                                    animate={!isInView?"animate":"initial"}
                                    transition={{duration:0.5,type:"spring",delay:0.1*index}}
                                    >
                                        <div className='topSection'>
                                            <img className='nftImage' src={item.imgUrl} alt="ironImage"/>
                                            <motion.div
                                                key={item.id}
                                                style={{ color: isFilled && selectedItem === item.id ? "rgb(255, 255, 255)" : "rgba(0, 0, 0, 0.14)" }}
                                                transition={{ duration: 0.3 }}
                                                onClick={() => setIsFilled(!isFilled)}
                                                onClickCapture={() => handleClick(item)}
                                                className='wishButton'>
                                                <FontAwesomeIcon 
                                                icon={faHeart}
                                                />
                                            </motion.div>
                                            <div className='infoStateFrame'>
                                                <div className='state'>
                                                    <div>
                                                        {item.state}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='middleSection'>
                                            <div className='nftNameTag'>
                                                {item.nftName}
                                            </div>
                                            <div className='creatorNameTag'>
                                                <img src={item.creatorImgUrl} alt="creatorImage"/>
                                                <div>{item.creatorName}</div>
                                            </div>
                                        </div>
                                        <div className='bottomSection'>
                                            <div className='detailButton' typeof='button'>Detail</div>
                                            <div className='buyNowButton' typeof='button'>Buy Now</div>
                                        </div>
                                    </motion.div>

                                ))
                            }
                        <PageNationFrame/>
                    </div>
                </div>
           )
        }


    </div>
  )
};

export default MyPageSecondContainer;
