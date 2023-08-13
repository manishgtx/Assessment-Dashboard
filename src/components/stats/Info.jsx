import React from 'react'

const Info = ({info}) => {
  return (
    <div>
        <div className='flex items-center gap-1'>
            <h4 className='font-semibold lg:font-bold lg:text-[20px] text-primary-blue-1'>{info.count}</h4>
            {info.newAdded && <p className='text-[10px] lg:text-[12px] font-medium text-primary-green-1'>+{info.newAdded}</p>}
        </div>
        <p className='text-[10px] lg:text-[12px] font-medium text-primary-blue-1'>{info.title}</p>
    </div>
  )
}

export default Info