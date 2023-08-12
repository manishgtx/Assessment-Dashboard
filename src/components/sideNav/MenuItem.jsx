import {useState} from 'react'

const MenuItem = ({icon,title,index,length}) => {
    const [selected,isSelected] = useState(true)
  return (
    <li className={`flex items-center font-medium gap-2 p-[10px] border-[1px] rounded-lg ${selected ? 'border-primary-blue-2 text-primary-blue-2' : 'text-primary-blue-1 border-transparent'} ${index === length? '' : 'mb-4'}`}>
        <img src={icon} alt="" />
        <p>{title}</p>
    </li>
  )
}

export default MenuItem