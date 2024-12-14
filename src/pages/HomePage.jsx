import Blog from "../components/home/Blog";
import Carsoul from "../components/home/Carsoul";
import GetStarted from "../components/home/GetStarted";
import GreenSection from "../components/home/GreenSection";
import MainCourses from "../components/home/MainCourses";
import OffersCoursesHome from "../components/home/OffersCoursesHome";
import SocialIcons from "../components/home/SocialIcons";
import WhyIACHome from "../components/home/WhyIACHome";

const HomePage = () => {
  return (
    // <Fragment>
    <section>
      <div className='h-[95vh] flex bg-[url("/src/assets/images/background.png")] bg-cover bg-center'>
        <div className="w-[92%] md:w-[97.5%] pt-[40px] md:pt-[100px]">
          <Carsoul />
        </div>
        <div className="pt-[150px] w-[8%] md:w-[2.5%]">
          <SocialIcons />
        </div>
      </div>
      <div className="mb-[50px] md:mb-[100px]">
        <WhyIACHome />
      </div>
      <div className="mb-[50px] md:mb-[100px]">
        <MainCourses />
      </div>
      <div className="mb-[50px] md:mb-[100px]">
        <GreenSection />
      </div>
      <div className="mb-[50px] md:mb-[100px]">
        <OffersCoursesHome />
      </div>
      <div className="mb-[50px] md:mb-[100px]">
        <GetStarted />
      </div>
      <div className="mb-[50px] md:mb-[100px]">
        <Blog />
      </div>
    </section>
    /* </Fragment> */
  );
};

export default HomePage;
