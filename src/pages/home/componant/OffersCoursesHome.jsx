/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import MainTitle from "./MainTitle";
import axios from "axios";
import { baseurl } from "../../../api/api";

const OffersCoursesHome = ({ allCourses }) => {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // عرض بطاقتين للشاشات المتوسطة
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // عرض بطاقة واحدة للشاشات الصغيرة
          slidesToScroll: 1,
          arrows: true,
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
            {allCourses.map((item, index) => (
              <div key={index} className="px-3">
                <div className="flex flex-col rounded-lg shadow-lg pb-6 h-full">
                  <Link to={`/courses/${item.id}`}>
                    <div className="overflow-hidden rounded-t-lg group">
                      <img
                        src={`/course.webp`}
                        className="rounded-t-lg group-hover:scale-110 transition-transform duration-700 ease-out cursor-pointer"
                        style={{
                          height: "200px", // اضبط الارتفاع حسب التصميم
                          width: "100%",
                          objectFit: "cover",
                        }}
                        alt="course"
                      />
                    </div>
                  </Link>
                  <div
                    className="flex flex-col gap-3 mx-4 my-4"
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                    }}
                  >
                    <h1 className="text-xl font-bold hover:text-mainColor transition-all duration-500">
                      {item.name}
                    </h1>
                    {item.is_special && (
                      <p className="text-yellow-800 mt-2 rounded-lg w-fit">
                        <FaStar size={26} />
                      </p>
                    )}
                    <p className="text-gray-600">
                      <span className="font-bold">{t("home.cood")}:</span>{" "}
                      {item.code}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-bold">{t("home.price")}:</span>{" "}
                      {item.credits}
                      <span className="font-bold mx-2">${item.price}</span>
                    </p>
                  </div>
                  <button
                    className="w-3/4 mx-auto mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors"
                    onClick={() => handelEnroll(item.id)}
                  >
                    {i18n.language === "en" ? "Enroll" : "تسجيل"}
                  </button>
                </div>
              </div>
            ))}
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
