import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
const BLogHome = () => {
  return (
    <section>
        <div className='container mx-auto' >
        <div className="flex items-center justify-between p-3 border-[1px] border-mainColor border-dashed">
        <Link to="/blog" className="flex items-center text-[1.2rem]">
          <IoIosArrowBack size={22} className="text-blue-700 mt-1" />
          عرض الكل
        </Link>
        <h3 className="text-[1.2rem] font-bold">اقرأ في المدونة</h3>
      </div>
            <div className='mt-[2.5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-[1.5rem]'>
                <div className='rounded-lg cursor-pointer w-[85%] relative transition-all duration-300 group'>
                    <img src="/src/assets/images/modawana.jpg" className='rounded-lg w-100' alt="" />
                    <div className='absolute bg-black bg-opacity-50 w-[100%] h-[100%] top-0 left-0 rounded-lg flex items-center justify-center text-white text-center p-[5%] opacity-0 transition-all duration-300 group-hover:opacity-100'>
                        <div className='border-[1px] border-white w-[100%] h-[100%] font-semibold flex items-center justify-center rounded-lg'>بعض النصائح التي سوف تفيدك و تطور من مهاراتك الدراسية و الفنية و العملية </div>
                    </div>
                </div>

                <div className='rounded-lg cursor-pointer w-[85%] relative transition-all duration-300 group'>
                    <img src="/src/assets/images/modawana.jpg" className='rounded-lg w-100' alt="" />
                    <div className='absolute bg-black bg-opacity-50 w-[100%] h-[100%] top-0 left-0 rounded-lg flex items-center justify-center text-white text-center p-[5%] opacity-0 transition-all duration-300 group-hover:opacity-100'>
                    <div className='border-[1px] border-white w-[100%] h-[100%] font-semibold flex items-center justify-center rounded-lg'>بعض النصائح التي سوف تفيدك و تطور من مهاراتك الدراسية و الفنية و العملية </div>
                    </div>
                </div>

                <div className='rounded-lg cursor-pointer w-[85%] relative transition-all duration-300 group'>
                    <img src="/src/assets/images/modawana.jpg" className='rounded-lg w-100' alt="" />
                    <div className=' absolute bg-black bg-opacity-50 w-[100%] h-[100%] top-0 left-0 rounded-lg flex items-center justify-center text-white text-center p-[5%] opacity-0 transition-all duration-300 group-hover:opacity-100'>
                    <div className='border-[1px] border-white w-[100%] h-[100%] font-semibold flex items-center justify-center rounded-lg'>بعض النصائح التي سوف تفيدك و تطور من مهاراتك الدراسية و الفنية و العملية </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BLogHome