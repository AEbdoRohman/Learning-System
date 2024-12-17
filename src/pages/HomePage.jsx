import BLogHome from "../components/home/BLogHome";
import Carsoul from "../components/home/Carsoul";
import GetStarted from "../components/home/GetStarted";
import GreenSection from "../components/home/GreenSection";
import MainCourses from "../components/home/MainCourses";
import OffersCoursesHome from "../components/home/OffersCoursesHome";
import SocialIcons from "../components/home/SocialIcons";
import WhyIACHome from "../components/home/WhyIACHome";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  return (
    <section>
      <div className="fixed right-[.2%] top-[30%]">
        <SocialIcons />
      </div>
      <div className='h-[95vh] flex bg-[url("/src/assets/images/background.png")] bg-cover bg-center'>
        <div className="w-[92%] md:w-[97.5%] pt-[40px] md:pt-[100px]">
          <Carsoul />
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
      <div className="mb-[50px] md:mb-[100px] ">
        <OffersCoursesHome />
      </div>
      <div className="mb-[50px] md:mb-[100px]">
        <GetStarted />
      </div>
      <div className="mb-[50px] md:mb-[100px]">
        <BLogHome />
      </div>
    </section>
  );
};

export default HomePage;
