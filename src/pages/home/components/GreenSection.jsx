import React from 'react'
import { Link } from 'react-router-dom'

const GreenSection = () => {
  return (
   <section className='pt-[30px] '>
    <div className='bg-[url("/src/assets/images/phoneBG.jpeg")]  md:bg-[url("/src/assets/images/DeskBG.jpeg")]  bg-no-repeat md:bg-contain bg-cover md:h-[28vw] h-[115vw] text-center flex flex-col items-center justify-center'>
        <p className='w-[80%] lg:w-[50%] mb-[15px] text-white text-[16px] pt-[70px]  md:pt-[5px]  xl:pt-[5px] xl:text-[20px] font-semibold'>
        نحن هنا من أجلك.. نوفر لك دورات في المجالات الأكثر طلباً في سوق العمل، ونخطو معك خطوة بخطوة في طريقك للنجاح. إذا كنت تبحث عن معهد انجليزي بجدة أو بالرياض أو أفضل برامج الدراسة فمرحباً بك في أفضل معهد انجليزي في المملكة السعودية، وذلك لأننا نوفر دورات لغة انجليزية احترافية
        </p>
        <button className='flex items-center justify-center text-mainColor px-10 h-[2.5rem] rounded-[.37rem] bg-white font-semibold border-[1.5px] border-mainColor'><Link>عرض المزيد</Link></button>
    </div>
   </section>
  )
}

export default GreenSection
