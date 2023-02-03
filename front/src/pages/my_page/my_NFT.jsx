import React from 'react'
import PageNationFrame from '../../components/PageNationFrame'

const ownNftDate = [
    {
        id:"a",
        ownNftImgUrl:"https://i.pinimg.com/236x/9c/8f/f1/9c8ff1e1d708c24f4b5eb219aac3111d.jpg",
        ownNftName:"NFT Name",
        ownNftPrice:60,
        state:"NFT State",
        info:"NFT Information"
    },
    {
        id:"b",
        ownNftImgUrl:"https://i.pinimg.com/236x/3d/1c/da/3d1cdacb675553ecf505a9ed7c1b080a.jpg",
        ownNftName:"NFT Name",
        ownNftPrice:60,
        state:"NFT State",
        info:"NFT Information"
    },
    {
        id:"c",
        ownNftImgUrl:"https://i.pinimg.com/236x/c8/73/d7/c873d791b1c4fedbe51c388d960b8be8.jpg",
        ownNftName:"NFT Name",
        ownNftPrice:60,
        state:"NFT State",
        info:"NFT Information"
    },
    {
        id:"d",
        ownNftImgUrl:"https://i.pinimg.com/236x/79/47/31/7947319b02997aa302157e15fb11e9b0.jpg",
        ownNftName:"NFT Name",
        ownNftPrice:60,
        state:"NFT State",
        info:"NFT Information"
    },
    {
        id:"e",
        ownNftImgUrl:"https://i.pinimg.com/236x/89/a7/3f/89a73f6a8c6161e609e6e601b12632d4.jpg",
        ownNftName:"NFT Name",
        ownNftPrice:60,
        state:"NFT State",
        info:"NFT Information"
    },
    {
        id:"f",
        ownNftImgUrl:"https://i.pinimg.com/236x/eb/54/c1/eb54c12c8dab50cecf58eee04bf9b4c6.jpg",
        ownNftName:"NFT Name",
        ownNftPrice:60,
        state:"NFT State",
        info:"NFT Information"
    },
    {
        id:"g",
        ownNftImgUrl:"https://i.pinimg.com/236x/28/23/ed/2823ed71eec83bc0f8688ba3bee57778.jpg",
        ownNftName:"NFT Name",
        ownNftPrice:60,
        state:"NFT State",
        info:"NFT Information"
    },
    {
        id:"h",
        ownNftImgUrl:"https://i.pinimg.com/236x/d9/8b/3a/d98b3a7d200aedacdeab1712ef2b3ea9.jpg",
        ownNftName:"NFT Name",
        ownNftPrice:60,
        state:"NFT State",
        info:"NFT Information"
    },
    {
        id:"i",
        ownNftImgUrl:"https://i.pinimg.com/236x/b9/42/c1/b942c1e01161e4174368637444f368b6.jpg",
        ownNftName:"NFT Name",
        ownNftPrice:60,
        state:"NFT State",
        info:"NFT Information"
    },
]

const MyPageThirdContainer = () => {
  return (
    <div className='thirdMyPage'>
        <div className='MyPageThirdContainerFrame'>
            <div className='infoSection'>
                <div className='infoFrame'>
                    <div>소유한 NFT 총 갯수</div>
                    <div>24</div>
                </div>
                <div className='underLine'/>
            </div>
            <div className='fundingItemList'>
            {
                ownNftDate.map((item)=>(
                    <div className='ownedNftBox' key={item.id}>
                        <div className='ownedNftFrame'>
                            <img className="ownNftImg" src={item.ownNftImgUrl} alt="3dRender"/>
                            <div className='nftTitleSection'>
                                <div>{item.ownNftName}</div>
                                <div>{item.ownNftPrice} ETH</div>
                                <div>{item.state}</div>
                            </div>
                            <div className='middleLine'/>
                            <div className='infoSection'>{item.info}</div>
                        </div>
                    </div>

                ))
            }
            </div>
        </div>
        <div className='pageNationFrame'>
            <PageNationFrame/>
        </div>
    </div>
  )
}

export default MyPageThirdContainer