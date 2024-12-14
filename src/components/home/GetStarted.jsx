import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const GetStarted = () => {
  return (
    <section className="">
      <div className='bg-[url("/src/assets/images/home-two-cta-2.jpg")] w-full h-[450px] md:h-[350px]'>
        <div className=" container ">
          <div className="flex flex-col-reverse md:flex-row items-center justify-around ">
            <div className="mt-[90px]  md:mt-[140px]">
              <button className="bg-white rounded-md py-[10px] px-[80px] text-[18px]  md:py-[12px] md:px-[90px] md:text-[23px]   font-bold text-mainColor ">
                <Link className="flex items-center justify-center">
                  ابدء الان{" "}
                  <FaLongArrowAltRight className="mt-[6px] ms-[15px]" />
                </Link>
              </button>
            </div>

            <div className="mt-[120px] ">
              <h1 className="text-right text-white font-bold text-[17px]  md:text-[20px]">
                دعنا نساعدك ف الحصول علي{" "}
              </h1>
              <h1 className="text-right text-white font-bold text-[25px]  md:text-[35px]">
                التدريبات و الكورسات المناسبة لك و لمجالك{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
