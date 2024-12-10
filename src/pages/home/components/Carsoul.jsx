import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Carsoul = () => {
  const settings = {
    dots: true, // Show dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: false, // Show next/prev arrows
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Delay between slides
    responsive: [
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          arrows: false, // Hide arrows on small screens
        },
      },
    ],
  };

  return (
    <div className="w-full md:w-[95%] mx-auto mt-10">
      <div className=" h-full mx-[15px] ">
        <Slider {...settings} >
          <div className="bg-transparent shadow-none">
            <div className="flex flex-col-reverse md:flex-row">
            <img
                src="/src/assets/images/help.webp"
                alt="Slide 1"
                className="w-full h-[500px]"
              />
                <div className="flex flex-col items-center justify-center py-[30px]">
                    <h1 className="text-[28px] md:text-[35px] font-bold text-[#525fe1] mb-[30px] text-center">ساعد طفلك علي التطور </h1>
                    <p className="text-[20px] md:text-[22px] font-semibold mb-[20px] px-[15px] text-center">لا تكن مثل الاخرين! من خلال تعلم اللغة الأنجليزية ستكون بارزا في مجال عملك لانها اصبحت 
                        مهارة اساسية يبحث عنها ارباب العمل في جميع المجالات
                    </p> 
                    <button className="w-[160px] md:w-[180px] mt-[20px] h-[35px] bg-[#525fe1]  text-white font-[500] pb-[6px] rounded-[10px] text-[20px] flex items-center justify-center "><Link>استفسر</Link></button>
                </div>
             
            </div>
          </div>


          <div className="bg-transparent shadow-none">
            <div className="flex flex-col-reverse md:flex-row">
            <img
                src="/src/assets/images/search.webp"
                alt="Slide 1"
                className="w-full h-[500px]"
              />
                <div className="flex flex-col items-center justify-center py-[30px]">
                    <h1 className="text-[28px] md:text-[35px]  font-bold text-[#525fe1] mb-[30px] text-center"> اختار مسارك المستقبلي </h1>
                    <p className="text-[17px] md:text-[22px] font-semibold mb-[20px] px-[15px] text-center"> التحقق بمجالات العمل الاكثر طلبا ف سوق العمل من خلاص دوراتنا 
                        الادارية و التي تجعلك قادرا علي بدء مستقبلك المهني بنجاح.
                    </p> 
                    <button className="w-[160px] md:w-[180px] mt-[20px] h-[35px] bg-[#525fe1]  text-white font-[500] pb-[6px] rounded-[10px] text-[20px] flex items-center justify-center "><Link>استفسر</Link></button>
                </div>
             
            </div>
          </div>
          


          <div className="bg-transparent shadow-none">
            <div className="flex flex-col-reverse md:flex-row">
            <img
                src="/src/assets/images/uniqu.webp"
                alt="Slide 1"
                className="w-full h-[500px]"
              />
                <div className="flex flex-col items-center justify-center py-[30px]">
                    <h1 className="text-[28px] md:text-[35px]  font-bold text-[#525fe1] mb-[30px] text-center">كن متميزا ف عملك </h1>
                    <p className="text-[17px] md:text-[22px] font-semibold mb-[20px] px-[15px] text-center"> يجب ان تكون بارزا و كتكيزا ف مجالك حتي تكون نسبة قبولك ف فرص العمل اكبر و ايضا هذا التميز يتيح لك فرصا كثرة للعمل.
                    </p> 
                    <button className="w-[160px] md:w-[180px] mt-[20px] h-[35px] bg-[#525fe1]  text-white font-[500] pb-[6px] rounded-[10px] text-[20px] flex items-center justify-center "><Link>استفسر</Link></button>
                </div>
             
            </div>
          </div>
          
          
          
        </Slider>
      </div>
    </div>
  );
};
export default Carsoul;
