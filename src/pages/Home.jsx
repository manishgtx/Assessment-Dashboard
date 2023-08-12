import React from 'react'
import Header from '../components/Header'
import SideNav from '../components/sideNav'
import MyAssessment from '../components/assessment/MyAssessment'
const Home = () => {
  return (
    <div>
        <div>
         {/* <SideNav/> */}
        </div>
        <div>
            <Header/>
            <MyAssessment/>
        </div>
    </div>
  )
}

export default Home