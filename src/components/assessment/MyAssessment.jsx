import React from 'react'
import MyAssessmentHeader from './MyAssessmentHeader'
import NewAssessment from './NewAssessment'
import Card from './card'
import Add from '../common/Add'
import { UseSelector, useSelector } from 'react-redux'
const MyAssessment = () => {
  const list = useSelector((state) => state.assignment.list)
  return (
    <div>
        <MyAssessmentHeader/>
        <div className='grid grid-cols-1 sml:grid-cols-2 lgs:grid-cols-3 lgm:grid-cols-4 gap-4'>
          <NewAssessment/>
          {
            list.map((item) => <Card key={item.id} {...item}/>)
          }
        </div>
          <Add className='fixed z-10 bottom-[20%] right-[15px] sml:hidden'/>
    </div>
  )
}

export default MyAssessment