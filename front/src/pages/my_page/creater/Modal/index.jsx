import React from 'react'
import {motion} from "framer-motion"
import Backdrop from '../Backdrop'

const dropIn ={
    hidden:{
        y:"-100vh",
        opacity:0,
    },
    visible:{
        y:"0",
        opacity:1,
        transition:{
            duration:0.1,
            type:"spring",
            damping:25,
            stiffness:500,
        },
    },
    exit:{
        y:"100vh",
        opacity:0,
    },
}

const Modal = ({handleClose,text}) => {
  return (
    <Backdrop onClick={handleClose}>
        <motion.div
         onClick={(e)=>e.stopPropagation()}
         className="modal orangeGradient"
         variants={dropIn}
         initial="hidden"
         animate="visible"
         exit="exit"
        >
         <div className='nftRegistrationFrame'>
            <div className='topText'>NFT 펀딩용 음원동록</div>
            <div className='bottomFrame'>
                <div className='bottomList'>
                    <div>곡이름</div>
                    <input placeholder='곡이름'/>
                </div>
                <div className='bottomList'>
                    <div>가수 이름</div>
                    <input placeholder='가수 이름'/>
                </div>
                <div className='bottomList'>
                    <div>작곡가</div>
                    <input placeholder='작곡가'/>
                </div>
                <div className='bottomList'>
                    <div>작사가</div>
                    <input placeholder='작사가'/>
                </div>
                <div className='bottomList'>
                    <div>앨범명</div>
                    <input placeholder='앨범명'/>
                </div>
                <div className='bottomList'>
                    <div>장르</div>
                    <input placeholder='장르'/>
                </div>
                <div className='bottomList'>
                    <div>음원 파일</div>
                    <motion.label 
                     className='soundSource' for="soundSource"
                     whileHover={{
                         scale:0.9
                     }}
                     >
                        + 음원 파일 선택하기
                    </motion.label>
                    <input type="file" className='soundSource' id='soundSource' style={{display:"none"}}/>
                </div>
                <div className='bottomList'>
                    <div>앨범 커버사진</div>
                    <motion.label 
                     className='albumCover' for="albumCover"
                     whileHover={{
                         scale:0.9
                     }}
                     >
                        + 커버사진 선택하기
                    </motion.label>
                    <input type="file" className='albumCover' id='albumCover' style={{display:"none"}}/>
                </div>
                <div className='bottomList'>
                    <div>타이틀 여부</div>
                    <div className='switchBox'>
                        <div className='notTitle'>서브</div>
                        <div className='title'>타이틀</div>
                    </div>
                </div>
               
                <div className='bottomListButton'>
                    <motion.div className='cancelButton' onClick={handleClose}>취소하기</motion.div>
                    <motion.div className='registerButton'>등록하기</motion.div>
                </div>
            </div>
         </div>
        </motion.div>
    </Backdrop>
  )
}

export default Modal