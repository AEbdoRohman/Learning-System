import BLogHome from "./componant/BLogHome";
// import Carsoul from "./componant/Carsoul";
import GetStarted from "./componant/GetStarted";
import GreenSection from "./componant/GreenSection";
import OffersCoursesHome from "./componant/OffersCoursesHome";
import SocialIcons from "./componant/SocialIcons";
import WhyIACHome from "./componant/WhyIACHome";
import SpecialCourses from "./componant/SpecialCourses";
import Goals from "./componant/Goals";

const HomePage = () => {
  return (
    <section>
      <div className="fixed right-[.2%] top-[30%]">
        <SocialIcons />
      </div>
      {/* <div className='h-[95vh] flex bg-[url("/src/assets/images/background.png")] bg-cover bg-center'>
        <div className="w-[92%] md:w-[97.5%] pt-[40px] md:pt-[100px]">
          <Carsoul />
        </div>
      </div> */}
      <div className="mb-10 md:mb-20">
        <WhyIACHome />
      </div>
      <div className="mb-10 md:mb-20">
        <SpecialCourses />
      </div>
      <div className="mb-10 md:mb-[100px]">
        <GreenSection />
      </div>
      <div className="mb-10 md:mb-20 ">
        <OffersCoursesHome />
      </div>
      <div className="mb-10 md:mb-20">
        <GetStarted />
      </div>
      <div className="mb-10 md:mb-20">
        <BLogHome />
      </div>
      <div className="mb-10 md:mb-20">
        <Goals />
      </div>
    </section>
  );
};

export default HomePage;
