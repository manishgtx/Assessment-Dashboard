import React from 'react'
import bars from '../assets/images/bars.svg'
const Header = () => {
  return (
    <div>
        <div className='flex items-center gap-2 px-4 py-2 text-primary-blue-1 font-semibold'>
            <img src={bars} alt="" />
            <h1>Assessment</h1>
        </div>
        <div className='flex text-center font-medium'>
            <h2 className='w-1/2 py-[10px] border-b-2 border-primary-blue-2 text-primary-blue-2'>My Assessments</h2>
            <h2 className='w-1/2 py-[10px] border-b-2 border-white text-primary-blue-5'>Unstop Assessments</h2>
        </div>
    </div>
  )
}

export default Header