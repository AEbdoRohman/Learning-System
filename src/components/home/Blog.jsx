import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { RiPriceTag3Line } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between p-3 border-[1px] border-blue-400 border-dashed">
        <Link to="/blog" className="flex items-center text-[1.2rem]">
          <IoIosArrowBack size={22} className="text-blue-700 mt-1" />
          عرض الكل
        </Link>
        <h3 className="text-[1.2rem] font-bold">اقرأ في المدونة</h3>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] place-items-center my-[20px]">
      <div className="mx-[15px] w-[350px] h-[520px] border-[1px] border-gray-500 rounded-md overflow-hidden group">
          <div className="relative overflow-hidden">
            <img
              src="/src/assets/images/articale1.webp"
              className="w-full h-[330px] cursor-pointer rounded-t-md transform transition-transform duration-300 group-hover:scale-110"
              alt="imageCourse"
            />
          </div>
          <div>
            <div className="flex justify-end">
              <div className="flex justify-center items-center mt-[10px] me-[20px]">
                <span className="font-semibold text-gray-700">
                  {" "}
                  العلامة التجارية{" "}
                </span>
                <RiPriceTag3Line className="text-mainColor mx-[10px]" />
              </div>
            </div>
            <div>
              <h1 className="text-[20px] font-semibold px-[25px] pt-[12px] pb-[20px] text-right">
                كيفية تطوير العلامة التجارية لنفسك و عملك
              </h1>
            </div>
            <div className="flex items-center justify-around">
              <div className="flex items-center justify-center ">
                <SlCalender className="px-[2px]" />
                17 Feb, 2023
              </div>
              <div className="group relative">
                <button className="pb-[5px] flex items-center justify-center text-mainColor font-semibold text-[20px]">
                  قراءة المزيد <FaArrowRight className="ms-2 mt-[5px]" />
                </button>
                <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-mainColor transition-all duration-500 group-hover:w-full"></span>
              </div>
            </div>
          </div>
        </div>

        <div className=" mx-[15px] w-[350px] h-[520px] border-[1px] border-gray-500 rounded-md overflow-hidden group">
          <div className="relative overflow-hidden">
            <img
              src="/src/assets/images/articale1.webp"
              className="w-full h-[330px] cursor-pointer rounded-t-md transform transition-transform duration-300 group-hover:scale-110"
              alt="imageCourse"
            />
          </div>
          <div>
            <div className="flex justify-end">
              <div className="flex justify-center items-center mt-[10px] me-[20px]">
                <span className="font-semibold text-gray-700">
                  {" "}
                  العلامة التجارية{" "}
                </span>
                <RiPriceTag3Line className="text-mainColor mx-[10px]" />
              </div>
            </div>
            <div>
              <h1 className="text-[20px] font-semibold px-[25px] pt-[12px] pb-[20px] text-right">
                كيفية تطوير العلامة التجارية لنفسك و عملك
              </h1>
            </div>
            <div className="flex items-center justify-around">
              <div className="flex items-center justify-center ">
                <SlCalender className="px-[2px]" />
                17 Feb, 2023
              </div>
              <div className="group relative">
                <button className="pb-[5px] flex items-center justify-center text-mainColor font-semibold text-[20px]">
                  قراءة المزيد <FaArrowRight className="ms-2 mt-[5px]" />
                </button>
                <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-mainColor transition-all duration-500 group-hover:w-full"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-[15px] w-[350px] h-[520px] border-[1px] border-gray-500 rounded-md overflow-hidden group">
          <div className="relative overflow-hidden">
            <img
              src="/src/assets/images/articale1.webp"
              className="w-full h-[330px] cursor-pointer rounded-t-md transform transition-transform duration-300 group-hover:scale-110"
              alt="imageCourse"
            />
          </div>
          <div>
            <div className="flex justify-end">
              <div className="flex justify-center items-center mt-[10px] me-[20px]">
                <span className="font-semibold text-gray-700">
                  {" "}
                  العلامة التجارية{" "}
                </span>
                <RiPriceTag3Line className="text-mainColor mx-[10px]" />
              </div>
            </div>
            <div>
              <h1 className="text-[20px] font-semibold px-[25px] pt-[12px] pb-[20px] text-right">
                كيفية تطوير العلامة التجارية لنفسك و عملك
              </h1>
            </div>
            <div className="flex items-center justify-around">
              <div className="flex items-center justify-center ">
                <SlCalender className="px-[2px]" />
                17 Feb, 2023
              </div>
              <div className="group relative">
                <button className="pb-[5px] flex items-center justify-center text-mainColor font-semibold text-[20px]">
                  قراءة المزيد <FaArrowRight className="ms-2 mt-[5px]" />
                </button>
                <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-mainColor transition-all duration-500 group-hover:w-full"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
