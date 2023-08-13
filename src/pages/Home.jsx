import {useState,useEffect} from 'react'
import Header from '../components/Header'
import SideNav from '../components/sideNav'
import MyAssessment from '../components/assessment/MyAssessment'
import Stats from '../components/stats'
import Form from '../components/form'
import { useDispatch,useSelector } from 'react-redux'
import { openSideBar } from '../store'
const Home = () => {
  // Using this to handle menu visiblity on screen size bigger than 640
  const dispatch = useDispatch()
  const sideBar = useSelector((state) => state.assignment.sideBar)
  console.log(sideBar)
  const handleResize = () => {
    const windowWidth = window.innerWidth
    if(windowWidth > 640) {
      if(sideBar === false){
        dispatch(openSideBar())
      }
    }

    
  }
  useEffect(()=> {
    if(window.innerWidth > 640) {
      if(sideBar === false){
        dispatch(openSideBar())
      }
    }
    window.addEventListener('resize', handleResize);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
  },[])
  return (
    <div className='flex min-h-screen max-h-screen'>
         <SideNav/>
        <div className='flex-grow sm:pl-[20px] bg-primary-blue-8 overflow-y-auto'>
            <Header/>
            <div className='px-[15px] py-[20px] bg-white min-h-full'>
              <Stats/>
              <MyAssessment/>
            </div>
            <Form/>
        </div>
    </div>
  )
}

export default Home