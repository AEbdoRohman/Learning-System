import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../../src/index.css";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/courseSlice";

const OffersCoursesHome = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  //data for testing 
  const testData = [
    {
      id:1,
      name:"دورة علم البيانات و الذكاء الاصطناعي 1",
      desc:"يلعب الذكاء الاصطناعي دورا هاما ف تحويل العالم و شكل المستقبل .",
      img:"course.webp",
      price:350
    },
    {
      id:2,
      name:"دورة علم البيانات و الذكاء الاصطناعي 2",
      desc:"يلعب الذكاء الاصطناعي دورا هاما ف تحويل العالم و شكل المستقبل .",
      img:"course.webp",
      price:250
    },
    {
      id:3,
      name:"دورة علم البيانات و الذكاء الاصطناعي 3",
      desc:"يلعب الذكاء الاصطناعي دورا هاما ف تحويل العالم و شكل المستقبل .",
      img:"course.webp",
      price:500
    },
    {
      id:4,
      name:"دورة علم البيانات و الذكاء الاصطناعي 4",
      desc:"يلعب الذكاء الاصطناعي دورا هاما ف تحويل العالم و شكل المستقبل .",
      img:"course.webp",
      price:800
    },
  ]


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides on large screens
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        arrows: true, // Medium screens
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
        },
      },
      {
        arrows: true,
        breakpoint: 768,
        // Small screens
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section>
      <div className="container mx-auto">
        <div className="my-[30px] px-[1rem]">
          <div className="element-center flex-col my-[30px]">
            <h1 className="text-center font-bold text-[2.3rem] md:text-[2.9rem] mb-[15px] text-mainColor">
            {t("offers.title")} 
            </h1>
            <p className=" text-center w-75 md:w-[50%] font-semibold text-[1.1rem] md:text-[1.5rem] mb-[15px] ">
            {t("offers.desc")} 
            </p>
          </div>

          <Slider {...settings}>
            {testData.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 h-full mb-[30px]"
              >
                <div className="flex flex-col items-center justify-center  min-h-[440px] rounded-lg mx-3 shadow-lg">
                  <Link
                    to="/course"
                    className="overflow-hidden rounded-tl-xl rounded-tr-xl"
                  >
                    <img
                      src={`/${item.img}`}
                      className="rounded-tl-[0.5rem] rounded-tr-[0.5rem] hover:scale-125 transition-all duration-500 ease-out  cursor-pointer"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                      alt="course"
                    />
                  </Link>
                  <h1 className=" my-3 font-bold text-center">
                    {item.name}
                  </h1>
                  <p className="px-[10px] text-[15px] text-center">
                      {item.desc}
                  </p>
                  {/* <div className="bg-gray-400 mb-[10px] mt-[5px] mx-auto h-[1px] w-[90%]"></div> */}
                  <div className="px-4 py-2 my-4 flex items-center justify-between w-full pb-[10px] border-t-2 mx-4">
                    <div>
                      <div
                        onClick={()=>dispatch(addItem(item))}
                        className="cursor-pointer hover:text-hoverColor transition-all duration-500 flex flex-row items-center justify-center font-bold text-mainColor"
                      >
                        <FaCartShopping className="mx-[5px]" />
                        {t("cart.addtocart")}
                      </div>
                    </div>
                    <p className="font-bold text-right flex flex-row-reverse gap-[4px]">
                      <span>{item.price}</span> {t("cart.currency")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
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

export default OffersCoursesHome;
