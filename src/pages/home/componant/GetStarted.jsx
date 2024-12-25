import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const GetStarted = () => {
  const { t } = useTranslation();
  return (
    <section className="">
      <div className='bg-[url("/src/assets/images/home-two-cta-2.jpg")] w-full h-[450px] md:h-[350px]'>
        <div className=" container ">
          <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-around ">
            <div className="mt-[90px]  md:mt-[140px]">
              <button className="bg-white rounded-md py-[10px] px-[80px] text-[18px]  md:py-[12px] md:px-[90px] md:text-[23px]   font-bold text-mainColor ">
                <Link className="flex items-center justify-center">
                {t("getstarted.btn")} {" "}
                  <FaLongArrowAltRight className="mt-[6px] ms-[15px]" />
                </Link>
              </button>
            </div>

            <div className="mt-[120px] ">
              <h1 className="text-center text-white font-bold text-[17px]  md:text-[20px]">
              {t("getstarted.desc1")} 
              </h1>
              <h1 className="text-center text-white font-bold text-[25px]  md:text-[35px]">
              {t("getstarted.desc2")} 
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
