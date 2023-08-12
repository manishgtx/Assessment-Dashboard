import React from 'react'
import addIcon from '../../assets/images/addWhite.svg'
const Add = ({className}) => {
  return (
    <div className={`w-[50px] h-[50px] bg-primary-blue-2 flex items-center justify-center rounded-full ${className}`}>
        <img src={addIcon} alt="" />
    </div>
  )
}

export default Add