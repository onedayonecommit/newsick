import React from 'react'
import {motion} from "framer-motion"
// 컴포넌트
const UserBar = ({ handleClick }) => {
  return (
    <div className='userBarSection'>
    <div className='optionSection'></div>
    <div className='userInfoSection'>
      <div className='userImage'onClick={handleClick}></div>
      <div className='userProfile'>
        <div className='userName'>UserName</div>
        <div className='userEmail'>User@Email.com</div>
      </div>
      <motion.div 
        className='metaConnectButton'
        whileHover={{
          scale:[1,1.1],
          color:"rgba(255, 255, 255, 1)"
        }}
        whileTap={{ scale: 0.9 }}

        >MetaMask Connect</motion.div>
    </div>
    <div className='stateInfoSection'></div>
    <div className='anotherInfoSection'></div>
  </div>
  )
}

export default UserBar