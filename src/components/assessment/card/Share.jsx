import React from 'react'
import pinIcon from '../../../assets/images/assessment/card/pin.svg'
const Share = () => {
  return (
    <div className='flex items-center gap-1 border border-primary-blue-1 py-[6px] px-2 rounded-full'>
        <img src={pinIcon} alt="" />
        <p className='text-xs font-medium text-primary-blue-1'>Share</p>
    </div>
  )
}

export default Share