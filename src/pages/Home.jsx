import {useState,useEffect} from 'react'
import Header from '../components/Header'
import SideNav from '../components/sideNav'
import MyAssessment from '../components/assessment/MyAssessment'
import Stats from '../components/stats'
import Form from '../components/form'
import { useDispatch,useSelector } from 'react-redux'
import { closeSideBar, openSideBar } from '../store'
import Add from '../components/common/Add'
const Home = () => {
  // Using this to handle menu visiblity on screen size bigger than 640
  const dispatch = useDispatch()
  const sideBar = useSelector((state) => state.assignment.sideBar)
  console.log(sideBar)
  const handleResize = () => {
    const windowWidth = window.innerWidth
    console.log(windowWidth,'check')
    if(windowWidth > 639) {
        dispatch(openSideBar())
    }
     if(windowWidth < 640){
      console.log(sideBar,'sidebar')
      
        dispatch(closeSideBar())
      
    }

    
  }
  useEffect(()=> {
    if(window.innerWidth > 639) {
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
              <h2 className='hidden lg:block mb-4 text-primary-blue-1 font-medium'>Assessments Overview</h2>
              <Stats/>
              <MyAssessment/>
              <Add className='fixed z-[40] bottom-[20%] right-[15px] sml:hidden'/>
            </div>
            <Form/>
        </div>
    </div>
  )
}

export default Home