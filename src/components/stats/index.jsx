import React from 'react'
import SingleStat from './SingleStat'
import { statsData } from '../../meta/stats'
const index = () => {
  return (
    <div className='mb-2 statsGrid border border-primary-blackish-2 rounded-xl'>
      {
        statsData.map((stat) => {
          return <SingleStat key={stat.id} {...stat}/>
        })
      }
    </div>
  )
}

export default index