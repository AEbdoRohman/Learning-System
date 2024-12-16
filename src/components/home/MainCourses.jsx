import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { RiFileList3Line } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const MainCourses = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="my-[30px]">
          <div className="element-center flex-col my-[30px]">
            <h1 className="text-center font-bold sm:text-[2rem] text-[2.3rem] md:text-[2.9rem] mb-[15px] text-mainColor">
            {t("maincourses.title")}  
            </h1>
            <p className=" text-center w-75 md:w-[60%] font-semibold text-[1.1rem] md:text-[1.5rem] mb-[15px] ">
            {t("maincourses.desc")}  
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden gap-[30px] place-items-center">
            {[1, 2, 3, 4, 5, 6].map((index) => {
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
                    <FaHeart className="absolute top-[15px] right-[30px] cursor-pointer text-white text-[35px] border-[1px] border-gray-500 bg-gray-500 px-[5px] py-[5px] rounded-[50%] hover:text-red-600 transition-all duration-200" />
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
                      <h1 className="text-[20px] font-semibold px-[20px] pt-[0px] pb-[20px] text-right">
                        {" "}
                        كورس تعلم الذكاء الاصطناعي و التعليم العميق بالستخدام
                        لغة البايثون
                      </h1>
                    </div>
                    <div className="w-[90%] h-[2px] bg-gray-200 mx-auto"></div>
                    <div className="py-[10px]  flex items-center justify-around">
                      <div className="text-[20px] font-bold">123456$</div>
                      <div>
                        {[1, 2, 3, 4, 5].map((item) => {
                          return (
                            <FaStar
                              key={item}
                              className="inline my-[2px] mb-[5px] text-yellow-800"
                            />
                          );
                        })}
                        <span className="mx-[2px]">(5.4)</span>
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
            <Link>{t("btn.btn")}  </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainCourses;
