import React from 'react'
import addIcon from '../../assets/images/assessment/add.svg'
import { openModal } from '../../store'
import { useDispatch } from 'react-redux'
const NewAssessment = () => {
  const dispatch = useDispatch()
  const handleOpen = () => {
    dispatch(openModal())
  }
  return (
    <div className='bg-primary-blue-8 border border-primary-blackish-2 border-dashed rounded-xl py-[20px] px-[30px] flex flex-col items-center gap-2'>
        <div onClick={handleOpen} className='w-[50px] cursor-pointer sml:w-[70px] h-[50px] sml:h-[70px] flex items-center justify-center rounded-full bg-white'>
            <img src={addIcon} alt="" />
        </div>
        <h4 className='text-[14px] sml:text-[18px] font-semibold sml:font-medium text-primary-blue-1'>New Assessment</h4>
        <p className='text-xs font-medium text-primary-blue-1'>From here you can add questions of multiple<br/>types like MCQs, subjective (text or paragraph)!</p>
    </div>
  )
}

export default NewAssessment