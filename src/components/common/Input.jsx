import React from 'react'

const Input = ({placeholder,value,onChange}) => {
  return (
    <input className='inputBox w-full p-[15px] border border-primary-blackish-2 rounded-lg text-primary-blue-1 focus:outline-none' placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)}/>
  )
}

export default Input