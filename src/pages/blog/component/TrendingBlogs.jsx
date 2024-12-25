import { useTranslation } from "react-i18next";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TrendingBlogs = () => {
  const { i18n } = useTranslation();
  return (
    <div className="w-[99%] md:w-[25%] mt-[2%] mb-[8%] py-[1%] px-[2%] bg-[#f3f4f6] rounded-lg text-[1.25rem] text-center">
      <h1 className="block text-[1.7rem] font-[700] pb-[6%] mb-[10%] text-mainColor px-[1%] border-b-[2px] border-[#b4b4b4] text-center">
        المدونات الرائجة
      </h1>
      <div className="h-[70vh] overflow-auto px-[1%]">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-center text-xl  font-semibold py-2 cursor-pointer hover:text-mainColor  rounded-lg  transition-all duration-200"
          >
            <img
              src="/src/assets/images/modawana.jpg"
              className="w-[20%] mx-[3%] rounded-[10%]"
              alt=""
            />
            اسم المدونة
            {i18n.language === "ar" ? (
              <IoIosArrowBack className="mt-1 mr-1" />
            ) : (
              <IoIosArrowForward className="mt-1 ml-[2%]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingBlogs;
