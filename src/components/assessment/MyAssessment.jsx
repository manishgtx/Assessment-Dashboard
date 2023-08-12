import React from 'react'
import MyAssessmentHeader from './MyAssessmentHeader'
import NewAssessment from './NewAssessment'
import Card from './card'
import Add from '../common/Add'
const MyAssessment = () => {
  return (
    <div className='px-[15px] py-[20px]'>
        <MyAssessmentHeader/>
        <div className='flex flex-col gap-4'>
          <NewAssessment/>
          <Card/>
          <Add className='fixed bottom-[20%] right-[15px]'/>
        </div>
    </div>
  )
}

export default MyAssessment