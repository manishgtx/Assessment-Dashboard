import React from 'react'

const Button = ({handleClick}) => {
  return (
    <div onClick={handleClick} className='bg-primary-blue-2 text-white font-semibold text-[14px] p-[10px] text-center rounded-lg'>Next</div>
  )
}

export default Button