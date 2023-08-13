import React from 'react'
import Label from '../common/Label'
import Input from '../common/Input'
const InputText = ({label,placeholder,value,onChange}) => {
  return (
    <div className='flex flex-col gap-[10px]'>
                <Label>{label}</Label>
                <Input value={value} onChange={onChange} placeholder={placeholder}></Input>
    </div>
  )
}

export default InputText