import { faHeart, faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

// 메인페이지
  const hotItems =[
    {id:1, img: 1, songName:"눈꽃",singer:"거미" },
    {id:2, img: 1, songName:"눈꽃",singer:"거미" },
    {id:3, img: 1, songName:"눈꽃",singer:"거미" },
    {id:4, img: 1, songName:"눈꽃",singer:"거미" },
    {id:5, img: 1, songName:"눈꽃",singer:"거미" },
    {id:6, img: 1, songName:"눈꽃",singer:"거미" },
    {id:7, img: 1, songName:"눈꽃",singer:"거미" },
    {id:8, img: 1, songName:"눈꽃",singer:"거미" },
    {id:9, img: 1, songName:"눈꽃",singer:"거미" },
    {id:10, img: 1, songName:"눈꽃",singer:"거미" },
  ]
  const leftTime=[
    {id:1,time:"20:14:35",creater:"CREATER",title:"FundingTitle",text:"scrambled it to make a type specimen book. It has survived not only five centuries, but also the leapinto electronic typesetting, remaining essentially"},
    {id:2,time:"24:13:36",creater:"CREATER",title:"FundingTitle",text:"scrambled it to make a type specimen book. It has survived not only five centuries, but also the leapinto electronic typesetting, remaining essentially"},
    {id:3,time:"25:12:37",creater:"CREATER",title:"FundingTitle",text:"scrambled it to make a type specimen book. It has survived not only five centuries, but also the leapinto electronic typesetting, remaining essentially"},
    {id:4,time:"26:11:38",creater:"CREATER",title:"FundingTitle",text:"scrambled it to make a type specimen book. It has survived not only five centuries, but also the leapinto electronic typesetting, remaining essentially"},
  ]
const MainContainer = () => {
    const items = [
        { id: 1, img:1, singerName:"거미",follow:354 , playCount:24 },
        { id: 2, img:2, singerName:"나얼",follow:352 , playCount:25 },
        { id: 3, img:3, singerName:"이수",follow:351 , playCount:26 },
      ];
  return (
    <div className='mainContainerFrame'>
        <div className='mainSousialSection'>
            <div className='sousialInfo'></div>
        </div>
        <div className='rankingBoardSection'>
            <div className='rankingBoardFrame'>
                <div className='rankingText'>RANKING BOARD</div>
                <div className='rankingList'>
                   {items.map((item)=>(
                        <div className='rankingItem'>
                        <FontAwesomeIcon icon={faStar}/>
                        <div>{item.img}</div>
                        <div>{item.singerName}</div>
                        <FontAwesomeIcon icon={faHeart}/>
                        <div>{item.follow}</div>
                        <FontAwesomeIcon icon={faPlay}/>
                        <div>{item.playCount}K</div>
                    </div>
                   ))}
                </div>
            </div>
        </div>
        <div className='hotTopicSection'>
          <div className='hotTopicText'>HOT TOPIC</div>
          <div className='hotTopicList'>
                {hotItems.map((item)=>(
                     <div className='hotTopicItemFrame'>
                     <div className='hotTopicCheckBox'><FontAwesomeIcon icon={faStar} style={{width:"20px",height:"20px" ,color:"rgba(255, 255, 255, 0.3)"
               }} /></div>
                       <div className='hotTopicinfoBox'> 
                         <div>{item.img}</div>
                         <div>{item.songName}</div>
                         <div>{item.singer}</div>
                       </div>
                 </div>
                ))}
          </div>
        </div>
        <div className='almostOverSection'>
          <div className='alomostOverText'>IT'S ALMOST OVER! -FUNDING-</div>
          <div className='alomostOverList'>
              {leftTime.map((items)=>(
            <div key={items.id}className='alomostContentBox'>
                <div className='contentCreater'>{items.creater}</div>
              <div className='contentInfo'>
                <div className='fundingTitle'>{items.title}</div>
                <div className='fundingText'>{items.text}</div>
              </div>
             <div className='contentLeftTime'>
                {items.time}
              </div> 
            </div>
                ))}
          </div>
        </div>
    </div>
  )
}

export default MainContainer