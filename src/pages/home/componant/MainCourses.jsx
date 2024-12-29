import { Link } from "react-router-dom";
import { RiFileList3Line } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { FaCartShopping } from "react-icons/fa6";
// import { useDispatch } from "react-redux";
import MainTitle from "./MainTitle";
// import { addItem } from "../../../redux/cart/courseSlice";

const MainCourses = () => {
  const { t } = useTranslation();
  const testData = [
    {
      id: 5,
      name: "دورة علم البيانات و الذكاء الاصطناعي 5",
      desc: "يلعب الذكاء الاصطناعي دورا هاما ف تحويل العالم و شكل المستقبل .",
      img: "course.webp",
      price: 175,
    },
    {
      id: 6,
      name: " 6 كورس تعلم الذكاء الاصطناعي و التعليم العميق بالستخدام لغة البايثو",
      desc: "يلعب الذكاء الاصطناعي دورا هاما ف تحويل العالم و شكل المستقبل .",
      img: "course.webp",
      price: 120,
    },
    {
      id: 7,
      name: "7  كورس تعلم الذكاء الاصطناعي و التعليم العميق بالستخدام لغة البايثو",
      desc: "يلعب الذكاء الاصطناعي دورا هاما ف تحويل العالم و شكل المستقبل .",
      img: "course.webp",
      price: 200,
    },
    {
      id: 8,
      name: " 8 كورس تعلم الذكاء الاصطناعي و التعليم العميق بالستخدام لغة البايثون",
      desc: "يلعب الذكاء الاصطناعي دورا هاما ف تحويل العالم و شكل المستقبل .",
      img: "course.webp",
      price: 100,
    },
    {
      id: 9,
      name: " 9 كورس تعلم الذكاء الاصطناعي و التعليم العميق بالستخدام لغة البايثون",
      desc: "يلعب الذكاء الاصطناعي دورا هاما ف تحويل العالم و شكل المستقبل .",
      img: "course.webp",
      price: 400,
    },
    {
      id: 10,
      name: " 10 كورس تعلم الذكاء الاصطناعي و التعليم العميق بالستخدام لغة البايثون",
      desc: "يلعب الذكاء الاصطناعي دورا هاما ف تحويل العالم و شكل المستقبل .",
      img: "course.webp",
      price: 300,
    },
  ];

  // const dispatch = useDispatch();
  return (
    <section>
      <div className="container mx-auto">
        <div className="my-8">
          {/* main title */}
          <MainTitle
            title={t("maincourses.title")}
            description={t("maincourses.desc")}
          />
          {/* cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden gap-4 place-items-center">
            {testData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="CARD w-[350px] h-[450px] border-[1px] border-gray-500 rounded-md"
                >
                  <div className="relative ">
                    <div className="overflow-hidden">
                      <img
                        src="/src/assets/images/course-30.webp"
                        className="w-full h-[230px] rounded-t-md overflow-hidden"
                        alt="imageCourse"
                      />
                    </div>
                    {/* <FaHeart className="absolute top-[15px] right-[30px] cursor-pointer text-white text-[35px] border-[1px] border-gray-500 bg-gray-500 px-[5px] py-[5px] rounded-[50%] hover:text-red-600 transition-all duration-200" /> */}
                    <p className="absolute bottom-[-15px] left-[30px] pb-[5px] bg-mainColor text-white px-[30px] border-[2px] border-white">
                      type
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-around">
                      <div className="flex p-[20px] pt-[30px]">
                        <img
                          src="/src/assets/images/instructor.webp"
                          className="rounded-[50%] w-[30px]"
                          alt="instructor"
                        />
                        <span className="ms-[8px] text-[17px] font-semibold">
                          اسم المعلم{" "}
                        </span>
                      </div>
                      <div className="flex justify-center items-center mt-[8px] me-[20px]">
                        {" "}
                        <RiFileList3Line className="text-mainColor" /> درس 15
                      </div>
                    </div>

                    <div>
                      {" "}
                      <h1 className="text-xl font-semibold px-4 mb-4 ">
                        {item.name}
                      </h1>
                    </div>
                    <div className="w-[90%] h-[1px] bg-gray-300 mx-auto"></div>
                    <div className="flex items-center justify-between mt-4 px-4 ">
                      <div className="text-[20px] font-bold">
                        {item.price} {t("cart.currency")}
                      </div>
                      <div>
                        {[1, 2, 3].map((item) => {
                          return (
                            <FaStar
                              key={item}
                              className="inline my-[2px] mb-[5px] text-yellow-800"
                            />
                          );
                        })}
                        <span className="mx-[15px]">(5.4)</span>
                        <FaCartShopping
                          // onClick={() => dispatch(addItem(item))}
                          className="text-[27px] cursor-pointer hover:text-hoverColor transition-all duration-300 text-mainColor inline "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mx-auto flex justify-center items-center mt-[80px]">
          <button className="flex items-center justify-center text-mainColor px-[70px] h-[2.5rem] rounded-[.37rem] bg-white font-semibold border-[1.5px] border-mainColor ">
            <Link>{t("btn.btn")} </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainCourses;
