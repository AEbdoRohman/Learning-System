import React, { Fragment } from 'react'
import Carsoul from './components/Carsoul'
import SocialIcons from './components/SocialIcons'
import WhyIACHome from './components/WhyIACHome'
import GreenSection from './components/GreenSection'
import OffersCoursesHome from './components/OffersCoursesHome'
import MainCourses from './components/MainCourses'
import GetStarted from './components/GetStarted'

const HomePage = () => {
  return (
  // <Fragment>
     <section>
     <div className='h-[95vh] flex bg-[url("/src/assets/images/background.png")] bg-cover bg-center'>
      <div className='w-[92%] md:w-[97.5%] pt-[40px] md:pt-[100px]'><Carsoul /></div>
      <div className='pt-[150px] w-[8%] md:w-[2.5%]'><SocialIcons /></div>
     </div>
     <div className='mb-[50px] md:mb-[100px]'><WhyIACHome /></div>
     <div className='mb-[50px] md:mb-[100px]'><MainCourses /></div>
     <div className='mb-[50px] md:mb-[100px]'><GreenSection /></div>
     <div className='mb-[50px] md:mb-[100px]'><OffersCoursesHome /></div>
     <div className='mb-[50px] md:mb-[100px]'><GetStarted /></div>
   </section>
   /* </Fragment> */
  )
}

export default HomePage