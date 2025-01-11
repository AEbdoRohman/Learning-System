/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
// import { useDispatch } from "react-redux";
// import { addItem } from "../../../redux/cart/courseSlice";
import MainTitle from "./MainTitle";
import axios from "axios";
import { baseurl } from "../../../api/api";

const OffersCoursesHome = ({ allCourses }) => {
  // const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const handelEnroll = async (courseId) => {
    try {
      const response = await axios.post(
        `${baseurl}/subscripte/${courseId}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + "7|2Ht6CFZ4SrHd5D61YUdGMxyvZNY2DDofAWXBcAxFf136b392",
            lang: i18n.language,
          },
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  //data for testing
  // const testData = [
  //   {
  //     id: 1,
  //     name: "دورة علم البيانات و الذكاء الاصطناعي 1",
  //     desc: "يلعب الذكاء الاصطناعي دورا هاما ف تحويل العالم و شكل المستقبل .",
  //     img: "course.webp",
  //     price: 350,
  //   },
  //   {
  //     id: 2,
  //     name: "دورة علم البيانات و الذكاء الاصطناعي 2",
  //     desc: "يلعب الذكاء الاصطناعي دورا هاما ف تحويل العالم و شكل المستقبل .",
  //     img: "course.webp",
  //     price: 250,
  //   },
  //   {
  //     id: 3,
  //     name: "دورة علم البيانات و الذكاء الاصطناعي 3",
  //     desc: "يلعب الذكاء الاصطناعي دورا هاما ف تحويل العالم و شكل المستقبل .",
  //     img: "course.webp",
  //     price: 500,
  //   },
  //   {
  //     id: 4,
  //     name: "دورة علم البيانات و الذكاء الاصطناعي 4",
  //     desc: "يلعب الذكاء الاصطناعي دورا هاما ف تحويل العالم و شكل المستقبل .",
  //     img: "course.webp",
  //     price: 800,
  //   },
  // ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides on large screens
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        arrows: true, // Medium screens
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
        },
      },
      {
        arrows: true,
        breakpoint: 768,
        // Small screens
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section>
      <div className="container mx-auto">
        <div className="my-[30px] px-[1rem]">
          <MainTitle title={t("offers.title")} description={t("offers.desc")} />
          <Slider {...settings}>
            <div className="flex gap-2 h-full mb-8">
              {allCourses.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col  rounded-lg mx-3 pb-6 shadow-lg"
                >
                  <Link to="/courses/3">
                    <div className="overflow-hidden rounded-t-lg group">
                      <img
                        src={`/course.webp`}
                        className="rounded-t-lg group-[&:hover]:scale-110  transition-all duration-700 ease-out  cursor-pointer"
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        alt="course"
                      />
                    </div>
                  </Link>
                  <div
                    className="flex items-center gap-4 mx-4"
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                    }}
                  >
                    <h1 className="text-xl mt-6 mb-3 font-bold hover:text-mainColor transition-all duration-500">
                      {item.name}
                    </h1>
                    <p className="text-yellow-800 mt-2 rounded-lg w-fit  ">
                      {item.is_special ? <FaStar size={26} /> : ""}
                    </p>
                  </div>
                  <div
                    className="flex flex-col gap-3 mx-4 my-2"
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                    }}
                  >
                    <p className="mx-2">
                      <span className="font-bold mx-2">{t("home.cood")}:</span>{" "}
                      {item.code}
                    </p>
                    <p className="mx-2">
                      <span className="font-bold mx-2">{t("home.price")}:</span>
                      {item.credits}
                      <span className="font-bold mx-2">${item.price}</span>
                    </p>
                  </div>
                  <button
                    className="w-1/2 mx-auto mt-4 bg-blue-600 text-white px-4 py-1 rounded-md"
                    onClick={() => handelEnroll(item.id)}
                  >
                    {i18n.language === "en" ? "Enroll" : "تسجيل"}
                  </button>
                </div>
              ))}
            </div>
          </Slider>
        </div>
        <div className="mx-auto flex justify-center items-center mt-[80px]">
          <button className="flex items-center justify-center text-mainColor px-[70px] h-[2.5rem] rounded-[.37rem] bg-white font-semibold border-[1.5px] border-mainColor ">
            <Link to="/courses"> {t("more")} </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OffersCoursesHome;
