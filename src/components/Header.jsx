import React from 'react'
import bars from '../assets/images/bars.svg'
import { useDispatch } from 'react-redux'
import { openSideBar } from '../store'
const Header = () => {
  const dispatch = useDispatch()
  const handleOpenSideBar = () => {
    dispatch(openSideBar())
  }
  return (
    <div className='sm:flex items-center bg-white'>
        <div className='flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-5 text-primary-blue-1 font-semibold'>
            <img src={bars} className='sm:hidden' alt="" onClick={handleOpenSideBar}/>
            <h1 className='sm:text-[20px]'>Assessment</h1>
        </div>
        <div className='flex text-center font-medium sm:font-semibold'>
            <h2 className='w-1/2 sm:w-full sm:px-5 py-[10px] sm:py-[10px] sm:my-[10px] sm:text-[14px] relative bar sm:border-l-[1px] sm:border-l-primary-blackish-2 text-primary-blue-2'>My Assessments</h2>
            <h2 className='w-1/2 py-[10px] border-b-2 border-white text-primary-blue-5 sm:hidden'>Unstop Assessments</h2>
        </div>
    </div>
  )
}

export default Header