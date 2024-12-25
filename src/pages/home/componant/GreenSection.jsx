import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const GreenSection = () => {
  const { t } = useTranslation();
  return (
    <section className="pt-[30px] ">
      <div className='bg-[url("/src/assets/images/phoneBG.jpeg")]  md:bg-[url("/src/assets/images/DeskBG.jpeg")]  bg-no-repeat md:bg-contain bg-cover md:h-[28vw] h-[115vw] text-center flex flex-col items-center justify-center'>
        <p className="w-[80%] lg:w-[50%] mb-[15px] text-white text-[16px] pt-[70px]  md:pt-[5px]  xl:pt-[5px] xl:text-[20px] font-semibold">
        {t("colorsection.desc")}  
        </p>
        <button className="flex items-center justify-center text-mainColor px-10 h-[2.5rem] rounded-[.37rem] bg-white font-semibold border-[1.5px] border-mainColor">
          <Link> {t("btn.btn")}  </Link>
        </button>
      </div>
    </section>
  );
};

export default GreenSection;
