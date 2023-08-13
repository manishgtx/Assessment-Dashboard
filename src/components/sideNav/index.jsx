import React, { useEffect,useState } from 'react'
import cross from '../../assets/images/close.svg'
import MenuItemsContainer from './MenuItemsContainer'
import {motion,AnimatePresence} from 'framer-motion'
import { useSelector,useDispatch } from 'react-redux'
import { closeSideBar } from '../../store'
const SideNav = () => {
  const sideBar = useSelector((state) => state.assignment.sideBar)
  
  const dispatch = useDispatch()
  const handleCloseSideBar = () => {
    dispatch(closeSideBar())
  }
  const backdrop = {
    visible: {opacity:1},
    hidden: {opacity: 0}
}
// Using Framer Motion to Handle Animations
  return (
    <AnimatePresence>
      {sideBar && <motion.div className='fixed sm:static min-h-full min-w-full sm:min-w-[140px] z-50 bg-black bg-opacity-50 flex-none' variants={backdrop} initial="hidden" animate="visible" transition={{ duration: 0.2, delay: 0.3 }} exit={{ opacity: 0}}>
      <motion.div className='px-[20px] pt-[40px] sm:pt-4 pb-[10px] bg-primary-blue-10 sm:bg-white absolute sm:static bottom-0 min-w-[80%] min-h-[100%]' initial={{x:'-100%'}} animate={{x:0}} transition={{ duration: 0.5, delay: 0.3 }} exit={{ x: "-100%"}}>
        <div className='flex justify-between mb-4 sm:hidden'>
          <h2 className='text-[14px] font-medium text-primary-blue-1'>Menu</h2>
          <img src={cross} alt="" onClick={handleCloseSideBar}/>
        </div>
        <MenuItemsContainer/>
      </motion.div>
    </motion.div>}
      
    </AnimatePresence>
    
  )
}

export default SideNav