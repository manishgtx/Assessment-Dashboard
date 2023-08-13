import React from 'react'
import Filters from './Filters'
const MyAssessmentHeader = () => {
  return (
    <div className='flex justify-between items-center mb-2'>
        <h3 className='font-semibold sm:font-medium sm:text-[18px] text-primary-blue-1'>My Assessment</h3>
        <Filters/>
    </div>
  )
}

export default MyAssessmentHeader