import React, {useState, useEffect } from 'react'
import MyAssessmentHeader from './MyAssessmentHeader'
import NewAssessment from './NewAssessment'
import Card from './card'
import Add from '../common/Add'
import {motion} from 'framer-motion'
import { useSelector,useDispatch } from 'react-redux'
import { openStats } from '../../store'
const MyAssessment = () => {
  const [width,setWidth] = useState(window.innerWidth)
  const dispatch = useDispatch()
  const {list,stats} = useSelector((state) => state.assignment)
  const handleResize = () => {
      setWidth(window.innerWidth)
  }

  const calculateSpace = () => {
    console.log(width)
    if(stats) {
      if(width > 1304) {
        dispatch(openStats())
        return '0px'
      }
      if(width > 889){
        return '-200px'
      } else {
        return '-280px'
      }

    } else {
      return '0px'
    }
    
  }
  useEffect(() => {
    window.addEventListener('resize',handleResize)
  },[])
  return (
      <motion.div className='bg-white min-h-screen' initial={{y:0}} animate={{y: calculateSpace()}} transition={{ duration: 0.5, delay: 0.3 }} exit={{ y: "0px"}}>
        <>
          <MyAssessmentHeader/>
        <div className='grid grid-cols-1 sml:grid-cols-2 lgs:grid-cols-3 lgm:grid-cols-4 gap-4'>
          <NewAssessment/>
          {
            list.map((item) => <Card key={item.id} {...item}/>)
          }
        </div>
        </>
    </motion.div>
  )
}

export default MyAssessment