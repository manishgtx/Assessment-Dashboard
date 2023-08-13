import React from 'react'
import ProfileLogo from '../../common/ProfileLogo'
const Count = ({numCount}) => {
  if(!numCount) {
    const number = Math.floor(Math.random() * 1000000)
    numCount = number
  }
  if(numCount > 100002) {
    return (
      <div className='ml-4 flex items-center gap-1'>
        <div className='relative flex'>
            <ProfileLogo className='absolute top-0 translate-x-[-50%] z-20 bg-primary-blue-2'/>
            <ProfileLogo className='relative z-30 bg-primary-accent-1'/>
        </div>
        <p className='text-xs font-semibold text-primary-blue-1'>+{numCount - 2}</p>
      </div>
    )
  }
  if(numCount > 3) {
    return (
      <div className='flex items-center gap-1'>
        <div className='relative flex'>
            <ProfileLogo className='relative z-[1] bg-primary-purple-1'/>
            <ProfileLogo className='absolute top-0 translate-x-[50%] z-[2] bg-primary-blue-2'/>
            <ProfileLogo className='relative z-[3] bg-primary-accent-1'/>
        </div>
        <p className='text-xs font-semibold text-primary-blue-1'>+{numCount - 2}</p>
      </div>
    )
  }
  return <ProfileLogo/>
}

export default Count