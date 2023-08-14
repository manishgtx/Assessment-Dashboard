import React from 'react'
import addIcon from '../../assets/images/addWhite.svg'
import { openModal } from '../../store'
import { useDispatch } from 'react-redux'
const Add = ({className}) => {
  const dispatch = useDispatch()
  return (
    <div className={`w-[50px] h-[50px] bg-primary-blue-2 flex items-center justify-center rounded-full ${className}`} onClick={() => dispatch(openModal())}>
        <img src={addIcon} alt="" />
    </div>
  )
}

export default Add