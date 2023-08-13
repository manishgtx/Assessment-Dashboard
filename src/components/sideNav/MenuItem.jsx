import {useState} from 'react'

const MenuItem = ({icon,title,index,length,admin}) => {
    const [selected,isSelected] = useState(true)
  return (
    <li className={`flex sm:flex-col-reverse items-center justify-between text-[14px] sm:text-[12px] font-medium gap-2 p-[10px] sm:py-[20px] border-[1px] rounded-lg ${index === length? '' : 'mb-4'}`}>
        <div className='flex items-center sm:flex-col gap-2'>
          <img src={icon} alt="" />
          <p>{title}</p>
        </div>
        {admin && <div className='py-[4px] px-[8px] border border-[#D63500] bg-[#FBEBEA] text-[#D63500] rounded-3xl'>Admin</div>}
    </li>
  )
}

export default MenuItem