import React from 'react'
import { motion } from 'framer-motion';

const FundingDetailModal = ({ isOpen, onClose, children }) => {
  return (
    <motion.div
    className='fundingModal'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className='fundingDetailFrame'
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
    >
      {children}
      <motion.div className='fundingModalCloseButton' onClick={onClose} whileTap={{scale:0.9}}>CLOSE</motion.div>
    </motion.div>
  </motion.div>
  )
}

export default FundingDetailModal