import React from 'react'
import searchIcon from '../../assets/images/assessment/search.svg'
import filterIcon from '../../assets/images/assessment/filter.svg'
import barsIcon from '../../assets/images/assessment/chart.svg'
const Filter = () => {
  return (
    <div className='flex items-center'>
            <div className='p-2'>
                <img src={searchIcon} alt="" />
            </div>
            <div className='p-2'>
                <img src={filterIcon} alt="" />
            </div>
            <div className='p-2'>
                <img src={barsIcon} alt="" />
            </div>
        </div>
  )
}

export default Filter