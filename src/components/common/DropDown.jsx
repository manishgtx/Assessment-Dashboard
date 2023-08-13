import {useState} from 'react'
import Label from './Label'
import downIcon from '../../assets/images/downArrow.svg'
const DropDown = ({label,options,optionSelected,selectOption,zindex}) => {
    const [isOpen,setIsOpen] = useState(false)
    const handleOpen = () => {
      setIsOpen((isOpen) => !isOpen)
    }
    const handleSelect = (option) => {
      selectOption(option)
      setIsOpen(false)
    }
  return (
    <div className='flex flex-col gap-[10px] relative'>
        <Label>{label}</Label>
        <div onClick={handleOpen} className='flex items-center justify-between cursor-pointer p-[15px] border border-primary-blackish-2 rounded-lg'>
          <p className={`font-medium text-[12px] ${optionSelected ? 'text-primary-blackish-3' : 'text-primary-blue-1'}`}>{optionSelected || 'Select'}</p>
          <img src={downIcon} alt="" />
        </div>
        {/* Options available to select */}
        {isOpen && <ul className='absolute bottom-[2px] border border-primary-blackish-2 translate-y-full bg-white min-w-full'>
          {options.map((option) => {
            return <li onClick={()=> handleSelect(option.title)} className='text-xs py-2 px-4 font-medium text-primary-blue-1 hover:bg-primary-blue-2 hover:text-white' key={option.id}>{option.title}</li>
          })}
        </ul>}
    </div>
  )
}

export default DropDown