import React from 'react'
import cross from '../../assets/images/close.svg'
import MenuItemsContainer from './MenuItemsContainer'
const index = () => {
  return (
    <div className='fixed min-h-full min-w-full bg-black bg-opacity-50'>
      <div className='px-[20px] pt-[40px] pb-[10px] bg-primary-blue-10 absolute bottom-0 min-w-[80%] min-h-[100%]'>
        <div className='flex justify-between mb-4'>
          <h2 className='text-[14px] font-medium text-primary-blue-1'>Menu</h2>
          <img src={cross} alt="" />
        </div>
        <MenuItemsContainer/>
      </div>
    </div>
    
  )
}

export default index