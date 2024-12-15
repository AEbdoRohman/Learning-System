import React from "react";
import { IoIosArrowForward } from "react-icons/io";


const BlogPage = () => {
  return (
    <section>
      <div className='min-h-[100vh] bg-[url("/src/assets/images/background.png")] bg-cover bg-center '>
        <div className="py-[4.8rem] container ">
          <div className=" flex items-center flex-col justify-center px-[5%] py-[3%]">
            <h1 className="block text-[2rem] font-[700] text-mainColor px-[5%] mt-[2%] text-center">
              بعض النصائح التي سوف تفيدك و تطور من مهاراتك الدراسية و الفنية و
              العملية{" "}
            </h1>
            <div className=" mt-[1%] text-gray-600 font-semibold flex">
              <p>2024</p>
              <p className="px-[5px]">يونيه</p>
              <p>13</p>
            </div>
            <img
              src="/src/assets/images/modawana.jpg"
              alt="image"
              className="shadow-lg mt-[3%] w-[75%] rounded-lg"
            />
          </div>

          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="w-[99%] md:w-[70%]">
              <div className=" mt-[2%] mb-[8%] py-[3%] px-[5%] shadow-lg  bg-[#f3f4f6] rounded-lg text-[1.25rem] text-center">
                <h1 className="block text-[2rem] font-[700] mb-[3%] text-mainColor px-[5%] mt-[2%] text-center">
                  {" "}
                  محتوي المدونة{" "}
                </h1>
                <div className="text-center">
                  <h1 className="block my-[1rem] font-semibold">عنوان</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus laboriosam quo reprehenderit nisi libero deserunt
                    magni. Doloremque fugiat, aliquam, quo eos officia neque
                    nisi, quos voluptate atque voluptatem sint dolor.
                  </p>
                </div>
                <div className="text-center">
                  <h1 className="block my-[1rem] font-semibold">عنوان</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus laboriosam quo reprehenderit nisi libero deserunt
                    magni. Doloremque fugiat, aliquam, quo eos officia neque
                    nisi, quos voluptate atque voluptatem sint dolor.
                  </p>
                </div>
                <div className="text-center">
                  <h1 className="block my-[1rem] font-semibold">عنوان</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus laboriosam quo reprehenderit nisi libero deserunt
                    magni. Doloremque fugiat, aliquam, quo eos officia neque
                    nisi, quos voluptate atque voluptatem sint dolor.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[99%] md:w-[25%] mt-[2%] mb-[8%] py-[1%] px-[2%] shadow-lg  bg-[#f3f4f6] rounded-lg text-[1.25rem] text-center">
                <h1 className="block text-[1.7rem] font-[700] pb-[6%] mb-[10%] text-mainColor px-[1%] border-b-[2px] border-[#b4b4b4] text-center">المدونات الرائجة</h1>
                <div className="h-[70vh] overflow-auto px-[1%]">
                <div className="flex items-center justify-center my-[5%] text-[1.2rem] mx-[3%] py-[5%] bg-[#dedee0] font-semibold cursor-pointer hover:text-mainColor hover:border-[1px] hover:border-mainColor rounded-lg border-[1px] border-inherit  transition-all duration-200"> <img src="/src/assets/images/modawana.jpg" className="w-[20%] mx-[3%] rounded-[10%]" alt="" /> اسم المدونة  <IoIosArrowForward className="mt-[1.5%] mx-[2%]"/></div>
                <div className="flex items-center justify-center my-[5%] text-[1.2rem] mx-[3%] py-[5%] bg-[#dedee0] font-semibold cursor-pointer hover:text-mainColor hover:border-[1px] hover:border-mainColor rounded-lg border-[1px] border-inherit transition-all duration-200"> <img src="/src/assets/images/modawana.jpg" className="w-[20%] mx-[3%] rounded-[10%]" alt="" /> اسم المدونة  <IoIosArrowForward className="mt-[1.5%] mx-[2%]"/></div>
                <div className="flex items-center justify-center my-[5%] text-[1.2rem] mx-[3%] py-[5%] bg-[#dedee0] font-semibold cursor-pointer hover:text-mainColor hover:border-[1px] hover:border-mainColor rounded-lg border-[1px] border-inherit transition-all duration-200"> <img src="/src/assets/images/modawana.jpg" className="w-[20%] mx-[3%] rounded-[10%]" alt="" /> اسم المدونة  <IoIosArrowForward className="mt-[1.5%] mx-[2%]"/></div>
                <div className="flex items-center justify-center my-[5%] text-[1.2rem] mx-[3%] py-[5%] bg-[#dedee0] font-semibold cursor-pointer hover:text-mainColor hover:border-[1px] hover:border-mainColor rounded-lg border-[1px] border-inherit transition-all duration-200"> <img src="/src/assets/images/modawana.jpg" className="w-[20%] mx-[3%] rounded-[10%]" alt="" /> اسم المدونة  <IoIosArrowForward className="mt-[1.5%] mx-[2%]"/></div>
                <div className="flex items-center justify-center my-[5%] text-[1.2rem] mx-[3%] py-[5%] bg-[#dedee0] font-semibold cursor-pointer hover:text-mainColor hover:border-[1px] hover:border-mainColor rounded-lg border-[1px] border-inherit transition-all duration-200"> <img src="/src/assets/images/modawana.jpg" className="w-[20%] mx-[3%] rounded-[10%]" alt="" /> اسم المدونة  <IoIosArrowForward className="mt-[1.5%] mx-[2%]"/></div>
                <div className="flex items-center justify-center my-[5%] text-[1.2rem] mx-[3%] py-[5%] bg-[#dedee0] font-semibold cursor-pointer hover:text-mainColor hover:border-[1px] hover:border-mainColor rounded-lg border-[1px] border-inherit transition-all duration-200"> <img src="/src/assets/images/modawana.jpg" className="w-[20%] mx-[3%] rounded-[10%]" alt="" /> اسم المدونة  <IoIosArrowForward className="mt-[1.5%] mx-[2%]"/></div>
                <div className="flex items-center justify-center my-[5%] text-[1.2rem] mx-[3%] py-[5%] bg-[#dedee0] font-semibold cursor-pointer hover:text-mainColor hover:border-[1px] hover:border-mainColor rounded-lg border-[1px] border-inherit transition-all duration-200"> <img src="/src/assets/images/modawana.jpg" className="w-[20%] mx-[3%] rounded-[10%]" alt="" /> اسم المدونة  <IoIosArrowForward className="mt-[1.5%] mx-[2%]"/></div>
                <div className="flex items-center justify-center my-[5%] text-[1.2rem] mx-[3%] py-[5%] bg-[#dedee0] font-semibold cursor-pointer hover:text-mainColor hover:border-[1px] hover:border-mainColor rounded-lg border-[1px] border-inherit transition-all duration-200"> <img src="/src/assets/images/modawana.jpg" className="w-[20%] mx-[3%] rounded-[10%]" alt="" /> اسم المدونة  <IoIosArrowForward className="mt-[1.5%] mx-[2%]"/></div>
                <div className="flex items-center justify-center my-[5%] text-[1.2rem] mx-[3%] py-[5%] bg-[#dedee0] font-semibold cursor-pointer hover:text-mainColor hover:border-[1px] hover:border-mainColor rounded-lg border-[1px] border-inherit transition-all duration-200"> <img src="/src/assets/images/modawana.jpg" className="w-[20%] mx-[3%] rounded-[10%]" alt="" /> اسم المدونة  <IoIosArrowForward className="mt-[1.5%] mx-[2%]"/></div>
                <div className="flex items-center justify-center my-[5%] text-[1.2rem] mx-[3%] py-[5%] bg-[#dedee0] font-semibold cursor-pointer hover:text-mainColor hover:border-[1px] hover:border-mainColor rounded-lg border-[1px] border-inherit transition-all duration-200"> <img src="/src/assets/images/modawana.jpg" className="w-[20%] mx-[3%] rounded-[10%]" alt="" /> اسم المدونة  <IoIosArrowForward className="mt-[1.5%] mx-[2%]"/></div>
                <div className="flex items-center justify-center my-[5%] text-[1.2rem] mx-[3%] py-[5%] bg-[#dedee0] font-semibold cursor-pointer hover:text-mainColor hover:border-[1px] hover:border-mainColor rounded-lg border-[1px] border-inherit transition-all duration-200"> <img src="/src/assets/images/modawana.jpg" className="w-[20%] mx-[3%] rounded-[10%]" alt="" /> اسم المدونة  <IoIosArrowForward className="mt-[1.5%] mx-[2%]"/></div>
                </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogPage;
