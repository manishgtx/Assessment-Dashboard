import React from 'react'
import Info from './Info'
const SingleStat = ({title,icon,statData}) => {
  return (
    <div>
        <h4 className='mb-2 font-medium lg:font-bold text-[14px] text-primary-blue-1'>{title}</h4>
        <div className='flex items-center gap-[14px]'>
            <img src={icon} alt={title} />
            <div className='flex extraInfo'>
              {
                statData.map((infoData) => {
                  return <Info key={infoData.id} info={infoData}/>
                })
              }
            </div>
        </div>
    </div>
  )
}

export default SingleStat