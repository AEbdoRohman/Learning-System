import BLogHome from "./componant/BLogHome";
import GetStarted from "./componant/GetStarted";
import GreenSection from "./componant/GreenSection";
import OffersCoursesHome from "./componant/OffersCoursesHome";
import SocialIcons from "./componant/SocialIcons";
import WhyIACHome from "./componant/WhyIACHome";
import SpecialCourses from "./componant/SpecialCourses";
import Goals from "./componant/Goals";
import { useHome } from "../../context/HomeContext";
import Loading from "../../layouts/Loading";

const HomePage = () => {
  const { privacyData, messageData, ourVision, ourGoalsData, loading } =
    useHome();

  if (loading) return <Loading />;
  return (
    <section>
      <div className="fixed right-[.2%] top-[30%]">
        <SocialIcons />
      </div>
      <div className="mb-10 ">
        <WhyIACHome privacyData={privacyData} />
      </div>
      <div className="mb-10">
        <GreenSection messageData={messageData} ourVision={ourVision} />
      </div>
      <div className="mb-10 ">
        <GetStarted messageData={messageData} ourVision={ourVision} />
      </div>
      <div className="mb-10 md:mb-20">
        <Goals ourGoalsData={ourGoalsData} />
      </div>
      <div className="mb-10 md:mb-20">
        <SpecialCourses />
      </div>

      <div className="mb-10 md:mb-20 ">
        <OffersCoursesHome />
      </div>

      <div className="mb-10 md:mb-20">
        <BLogHome />
      </div>
    </section>
  );
};

export default HomePage;
