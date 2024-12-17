import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const BLogHome = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-row-reverse items-center justify-between p-3 border-[1px] border-mainColor border-dashed">
          <Link to="/blog" className="flex items-center text-[1.2rem]">
            <IoIosArrowBack size={22} className="text-blue-700 mt-1" />
            {t("modawanabox.read")} 
          </Link>
          <h3 className="text-[1.2rem] font-bold">  {t("modawanabox.all")}  </h3>
        </div>
        <div className="mt-[2.5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-[1rem]">
          <Link
            to={"/blog"}
            className="rounded-lg cursor-pointer w-[90%] relative transition-all duration-700 group overflow-hidden"
          >
            <img
              src="/src/assets/images/modawana.jpg"
              className="rounded-lg w-full transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
              alt=""
            />
            <div className="absolute bg-black bg-opacity-50 w-[100%] h-[100%] top-0 left-0 rounded-lg flex items-center justify-center text-white text-center p-[5%] opacity-0 transform transition-all duration-700 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0">
              <div className="border-[1px] border-white w-[100%] h-[100%] font-semibold flex items-center justify-center rounded-lg transform scale-90 group-hover:scale-100 transition-transform duration-700">
                بعض النصائح التي سوف تفيدك و تطور من مهاراتك الدراسية و الفنية و
                العملية
              </div>
            </div>
          </Link>

          <Link
            to={"/blog"}
            className="rounded-lg cursor-pointer w-[90%] relative transition-all duration-1000 group overflow-hidden"
          >
            <img
              src="/src/assets/images/modawana.jpg"
              className="rounded-lg w-full transform transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-3"
              alt=""
            />
            <div className="absolute bg-black bg-opacity-50 w-[100%] h-[100%] top-0 left-0 rounded-lg flex items-center justify-center text-white text-center p-[5%] opacity-0 transform transition-all duration-700 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0">
              <div className="border-[1px] border-white w-[100%] h-[100%] font-semibold flex items-center justify-center rounded-lg transform scale-90 group-hover:scale-100 transition-transform duration-700">
                بعض النصائح التي سوف تفيدك و تطور من مهاراتك الدراسية و الفنية و
                العملية
              </div>
            </div>
          </Link>
          <Link
            to={"/blog"}
            className="rounded-lg cursor-pointer w-[90%] relative transition-all duration-1000 group overflow-hidden"
          >
            <img
              src="/src/assets/images/modawana.jpg"
              className="rounded-lg w-full transform transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-3"
              alt=""
            />
            <div className="absolute bg-black bg-opacity-50 w-[100%] h-[100%] top-0 left-0 rounded-lg flex items-center justify-center text-white text-center p-[5%] opacity-0 transform transition-all duration-700 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0">
              <div className="border-[1px] border-white w-[100%] h-[100%] font-semibold flex items-center justify-center rounded-lg transform scale-90 group-hover:scale-100 transition-transform duration-700">
                بعض النصائح التي سوف تفيدك و تطور من مهاراتك الدراسية و الفنية و
                العملية
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BLogHome;
