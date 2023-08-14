import React from 'react'
import searchIcon from '../../assets/images/assessment/search.svg'
import filterIcon from '../../assets/images/assessment/filter.svg'
import barsIcon from '../../assets/images/assessment/chart.svg'
import { useDispatch } from 'react-redux'
import { handleStats } from '../../store'
const Filter = () => {
    const dispatch = useDispatch()
  return (
    <div className='flex items-center lg:hidden'>
            <div className='p-2 cursor-pointer'>
                <img src={searchIcon} alt="" />
            </div>
            <div className='p-2 cursor-pointer'>
                <img src={filterIcon} alt="" />
            </div>
            <div className='p-2 cursor-pointer' onClick={()=> dispatch(handleStats())}>
                <img src={barsIcon} alt="" />
            </div>
        </div>
  )
}

export default Filter