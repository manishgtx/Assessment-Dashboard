import React from 'react'

const ProfileLogo = ({className}) => {
  return (
    <div className={`flex items-center justify-center rounded-full border border-white text-xs font-bold text-white w-8 h-8 ${className ? className : 'bg-primary-purple-1'}`}>LP</div>
  )
}

export default ProfileLogo