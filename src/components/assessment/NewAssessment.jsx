import React from 'react'
import addIcon from '../../assets/images/assessment/add.svg'
const NewAssessment = () => {
  return (
    <div className='bg-primary-blue-8 border border-primary-blackish-2 border-dashed rounded-xl py-[20px] px-[30px] flex flex-col items-center gap-2'>
        <div className='w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white'>
            <img src={addIcon} alt="" />
        </div>
        <h4 className='text-[14px] font-semibold text-primary-blue-1'>New Assessment</h4>
        <p className='text-xs font-medium text-primary-blue-1'>From here you can add questions of multiple<br/>types like MCQs, subjective (text or paragraph)!</p>
    </div>
  )
}

export default NewAssessment