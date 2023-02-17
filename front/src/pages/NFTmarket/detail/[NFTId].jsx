import React, { useEffect, useRef, useState } from 'react'
import { motion} from "framer-motion"

// nft 상세 페이지
const nftData = [
    {
        infoName:"음원 정보",
        info:"정보 텍스트",
    },
    {
        infoName:"가수 프로필",
        info:"정보 텍스트",
    },
    {
        infoName:"작곡가 프로필",
        info:"정보 텍스트",
    },
    {
        infoName:"기타 등등",
        info:"정보 텍스트",
    },
]
const historyItem =[
    {
        nftTitle:"NFT TITLE",
        itemState:"미체결",
        paymentTime:"2022.02.11 / 23:14",
        itemPrice:0.2,
        theNumber:120,
    },
    {
        nftTitle:"NFT TITLE",
        itemState:"미체결",
        paymentTime:"2022.02.11 / 23:14",
        itemPrice:0.2,
        theNumber:120,
    },
    {
        nftTitle:"NFT TITLE",
        itemState:"미체결",
        paymentTime:"2022.02.11 / 23:14",
        itemPrice:0.2,
        theNumber:120,
    },
    {
        nftTitle:"NFT TITLE",
        itemState:"미체결",
        paymentTime:"2022.02.11 / 23:14",
        itemPrice:0.2,
        theNumber:120,
    },
    {
        nftTitle:"NFT TITLE",
        itemState:"미체결",
        paymentTime:"2022.02.11 / 23:14",
        itemPrice:0.2,
        theNumber:120,
    },
    {
        nftTitle:"NFT TITLE",
        itemState:"미체결",
        paymentTime:"2022.02.11 / 23:14",
        itemPrice:0.2,
        theNumber:120,
    },
    {
        nftTitle:"NFT TITLE",
        itemState:"미체결",
        paymentTime:"2022.02.11 / 23:14",
        itemPrice:0.2,
        theNumber:120,
    },
    {
        nftTitle:"NFT TITLE",
        itemState:"미체결",
        paymentTime:"2022.02.11 / 23:14",
        itemPrice:0.2,
        theNumber:120,
    },
    {
        nftTitle:"NFT TITLE",
        itemState:"미체결",
        paymentTime:"2022.02.11 / 23:14",
        itemPrice:0.2,
        theNumber:120,
    },
]

const NftDetailContainer = () => {
    const [selectedDiv, setSelectedDiv] = useState("div1")
    const [selectedTab, setSelectedTab] = useState("buy");
    const handleTabClick = (tab) => {
      setSelectedTab(tab);
    };

    const block = Array.from({length:5},()=>(<div></div>))

    const handleClick = (id) => {
        setSelectedDiv(id)
    }
  return (
    <div className='nftDetailContainerFrame'>
        <div className='topSection'>
            <div className='statisticsSection'>
                <div className='statisticsSectionFrame'>
                    <div className='chartInfoSection'>
                        <div className='transactionStatistics'>Transaction Statistics</div>
                        <div className='monthLayoutSection'>
                            <motion.div 
                                animate={{ color: selectedDiv === "div1" ? "#ffffff" : "rgba(255, 255, 255, 0.4)" }}
                                onClick={() => handleClick("div1")}
                            >
                                1 Month
                            </motion.div>
                            <motion.div 
                                animate={{ color: selectedDiv === "div2" ? "#ffffff" : "rgba(255, 255, 255, 0.4)" }}
                                onClick={() => handleClick("div2")}
                            >
                                3 Month
                            </motion.div>
                            <motion.div 
                                animate={{ color: selectedDiv === "div3" ? "#ffffff" : "rgba(255, 255, 255, 0.4)" }}
                                onClick={() => handleClick("div3")}
                            >
                                6 Month
                            </motion.div>
                        </div>
                    </div>
                    <div className='chartSection'></div>
                </div>
            </div>
            <div className='infoSwiperSection'>
                <motion.div drag="x" dragConstraints={{right:0,left:-510}} className='frameBox'>
                {
                    nftData.map((item)=>(
                            <div className='nftInfoBox'>
                            <div className='infoName'>{item.infoName}</div>
                            <div className='infoText'>{item.info}</div>
                        </div>
                    ))
                }
                </motion.div>
            </div>
        </div>
        <div className='bottomSection'>
            <div className='askingPriceSection'>
                <div className='topPriceSection'>
                    <div className='accrueList'>{block}</div>
                    <div className='priceList'>{block}</div>
                    <div className='infoList'></div>
                </div>
                <div className='middleLine'/>
                <div className='bottomPriceSection'>
                    <div className='infoList'></div>
                    <div className='priceList'>{block}</div>
                    <div className='accrueList'>{block}</div>
                </div>
            </div>
            <div className='orderSection'>
                <div className='categorySection'>
                        <div
                        className={`tab ${selectedTab === "buy" ? "selected" : "unSelected"}`}
                        onClick={() => handleTabClick("buy")}
                        >매수
                        {selectedTab === "buy" && (
                          <motion.div
                            className="underline"
                            layoutId="underline"
                            transition={{ duration: 0.2, type:"spring" }}
                          />
                        )}
                    </div>
                    <div 
                        className={`tab ${selectedTab === "sell" ? "selected" : "unSelected"}`}
                        onClick={() => handleTabClick("sell")}
                        >매도
                        {selectedTab === "sell" && (
                          <motion.div
                            className="underline"
                            layoutId="underline"
                            transition={{ duration: 0.2 ,type:"spring"}}
                          />
                        )}    
                    </div>
                    <div 
                        className={`tab ${selectedTab === "history" ? "selected" : "unSelected"}`}
                        onClick={() => handleTabClick("history")}
                        >거래내역
                        {selectedTab === "history" && (
                          <motion.div
                            className="underline"
                            layoutId="underline"
                            transition={{ duration: 0.2 ,type:"spring"}}
                          />
                        )}
                    </div>
                </div>
                {selectedTab === "buy" && 
                            <motion.div 
                                className='inputSection'
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                transition={{duration:0.2}}     
                            >
                                <div className='inputList'>
                                    <motion.div className='canOrderPriceSection'
                                        initial={{opacity:0}}
                                        animate={{opacity:1}}
                                        transition={{duration:0.2,delay:0.1}}
                                    >
                                        <div className='leftSection'>
                                            <div className='text'>주문 가능</div>
                                        </div>
                                        <div className='RightSection'>
                                            <div className='inputSection'>
                                                <div></div>
                                                <div>ETH</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div className='buyPriceSection'
                                        initial={{opacity:0}}
                                        animate={{opacity:1}}
                                        transition={{duration:0.2,delay:0.2}}
                                    >
                                        <div className='leftSection'>
                                            <div className='text'>매수 가격</div>
                                        </div>
                                        <div className='rightSection'>
                                            <input/>
                                        </div>
                                    </motion.div>
                                    <motion.div className='orderQuantitySection'
                                        initial={{opacity:0}}
                                        animate={{opacity:1}}
                                        transition={{duration:0.2,delay:0.3}}
                                    >
                                    <div className='leftSection'>
                                            <div className='text'>주문 수량</div>
                                        </div>
                                        <div className='rightSection'>
                                            <input/>
                                        </div>
                                    </motion.div>
                                    <motion.div className='orderPriceSection'
                                        initial={{opacity:0}}
                                        animate={{opacity:1}}
                                        transition={{duration:0.2,delay:0.4}}
                                    >
                                    <div className='leftSection'>
                                            <div className='text'>주문 총액</div>
                                        </div>
                                        <div className='RightSection'>
                                            <div className='inputSection'>
                                                <div></div>
                                                <div>ETH</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className='loginButtonSection'>
                                    <div className='loginButton'>LOGIN</div>
                                </div>
                            </motion.div>
                }
                {selectedTab === "sell" && 
                            <motion.div 
                                className='inputSection'
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                transition={{duration:0.2}}     
                            >
                                <div className='inputList'>
                                    <motion.div className='canOrderPriceSection'
                                        initial={{opacity:0}}
                                        animate={{opacity:1}}
                                        transition={{duration:0.2,delay:0.1}}
                                    >
                                        <div className='leftSection'>
                                            <div className='text'>주문 가능</div>
                                        </div>
                                        <div className='RightSection'>
                                            <div className='inputSection'>
                                                <div></div>
                                                <div>ETH</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div className='buyPriceSection'
                                        initial={{opacity:0}}
                                        animate={{opacity:1}}
                                        transition={{duration:0.2,delay:0.2}}
                                    >
                                        <div className='leftSection'>
                                            <div className='text'>매도 가격</div>
                                        </div>
                                        <div className='rightSection'>
                                            <input/>
                                        </div>
                                    </motion.div>
                                    <motion.div className='orderQuantitySection'
                                        initial={{opacity:0}}
                                        animate={{opacity:1}}
                                        transition={{duration:0.2,delay:0.3}}
                                    >
                                    <div className='leftSection'>
                                            <div className='text'>주문 수량</div>
                                        </div>
                                        <div className='rightSection'>
                                            <input/>
                                        </div>
                                    </motion.div>
                                    <motion.div className='orderPriceSection'
                                        initial={{opacity:0}}
                                        animate={{opacity:1}}
                                        transition={{duration:0.2,delay:0.4}}
                                    >
                                    <div className='leftSection'>
                                            <div className='text'>주문 총액</div>
                                        </div>
                                        <div className='RightSection'>
                                            <div className='inputSection'>
                                                <div></div>
                                                <div>ETH</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className='loginButtonSection'>
                                    <div className='loginButton'>LOGIN</div>
                                </div>
                            </motion.div>
                }
                {selectedTab === "history" && 
                            <motion.div 
                            className='scrollSection'
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{duration:0.2}}     
                            >
                        {
                            historyItem.map((history,index)=>(
                                <motion.div className='historyItemBox'
                                    initial={{x:100,opacity:0}}
                                    animate={{x:0,opacity:1}}
                                    transition={{duration:0.3,type:"spring",delay:0.1*index}}
                                >
                                        <div className='nftTitle'>{history.nftTitle}</div>
                                        <div className='rightInfoSection'>
                                            <div className='itemState'>{history.itemState}</div>
                                            <div className='paymentTime'>{history.paymentTime}</div>
                                            <div className='itemPrice'>{history.itemPrice} ETH</div>
                                            <div className='itemNumber'>{history.theNumber} 개</div>
                                            <div className='deleteButton'>X</div>
                                        </div>
                                </motion.div>    
                            ))
                        }    
                            </motion.div>
                }
            </div>
        </div>
    </div>
  )
}

export default NftDetailContainer