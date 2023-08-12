import React from 'react'
import Share from './Share'
import jobIcon from '../../../assets/images/assessment/card/job.svg'
import dotIcon from '../../../assets/images/assessment/card/dots.svg'
import Count from './Count'
const index = () => {
  return (
    <div className='p-[14px] border border-primary-blackish-2 rounded-xl'>
        <div className='flex justify-between items-start mb-[10px]'>
            <div className='flex gap-[10px]'>
                <img src={jobIcon} alt="" />
                <div>
                    <h4 className='text-[14px] font-semibold text-primary-blue-1'>Math Assessment</h4>
                    <p className='text-[12px] font-medium text-primary-blue-1'>Job <span className='text-primary-blackish-2'>|</span> <span className='text-primary-blackish-3'>20 Apr 23</span></p>
                </div>
            </div>
            <img src={dotIcon} alt="" />
        </div>
        <hr className='border border-dashed border-x-primary-blackish-2 mb-[10px]'/>
        <div className='flex justify-between items-center'>
            <div className='flex gap-[10px]'>
                <div>
                    <h5 className='text-xs font-semibold text-primary-blue-1'>00</h5>
                    <p className='text-[10px] font-medium text-primary-blue-1'>Duration</p>
                </div>
                <div>
                    <h5 className='text-xs font-semibold text-primary-blue-1'>00</h5>
                    <p className='text-[10px] font-medium text-primary-blue-1'>Questions</p>
                </div>
            </div>
            <div className='flex gap-[10px]'>
                <Share/>
                <Count/>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default index