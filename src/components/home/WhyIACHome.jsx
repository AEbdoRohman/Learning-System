import { useTranslation } from "react-i18next";

const WhyIACHome = () => {
  const { t } = useTranslation();
  return (
    <section className="container element-center flex-col pt-[250px] xl:pt-[30px]">
      <h1 className="text-center font-bold text-[38px] md:text-[45px] text-mainColor">
        {" "}
        {t("why.title")}
      </h1>
      <p className="text-gray-800 w-[75%] md:w-[65%] mt-[15px] mb-[35px] text-center text-[18px] md:text-[25px] font-[500]">
      {t("why.desc")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
        <div className="flex flex-col text-center items-center justify-center">
          <img
            src="/src/assets/images/pro1-instu-1712561490.webp"
            alt="image"
            className=" rounded-xl "
           
          />
          <p className="mt-[10px] text-[18px] font-semibold ">
          {t("why.image1")}
        </p>
        </div>
        <div className="flex flex-col text-center items-center justify-center">
          <img
            src="/src/assets/images/newbestnew2-1712561469.webp"
            alt="image"
            className="dropShadow rounded-xl"
           
          />
          <p className="mt-[10px] text-[18px] font-semibold ">
          {t("why.image2")}
          </p>
        </div>
        <div className="flex flex-col text-center items-center justify-center">
          <img
            src="/src/assets/images/tech3-1712561435.webp"
            alt="image"
            className="dropShadow rounded-xl "

          />
          <p className="mt-[10px] text-[18px] font-semibold text-gray-800">
            {" "}
            {t("why.image3")}  
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyIACHome;
