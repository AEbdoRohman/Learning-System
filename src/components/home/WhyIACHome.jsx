const WhyIACHome = () => {
  return (
    <section className="container element-center flex-col pt-[250px] xl:pt-[30px]">
      <h1 className="text-center font-bold text-[38px] md:text-[45px] text-mainColor">
        {" "}
        IAC لماذا تختار
      </h1>
      <p className="text-gray-800 w-[75%] md:w-[65%] mt-[15px] mb-[35px] text-center text-[18px] md:text-[25px] font-[500]">
        إذا كنت تبحث عن معهد انجليزي بجدة أو معهد انجليزي بالرياض أوأفضل برامج
        الدراسة فمرحباً بك في أفضل معهد انجليزي في المملكة السعودية، وذلك لأننا
        نوفر دورات لغة انجليزية احترافية من خلال
      </p>

      <div className="grid md:grid-cols-3 gap-[50px] md:gap-[110px]">
        <div className="cent flex-col text-center ">
          <img
            src="/src/assets/images/pro1-instu-1712561490.webp"
            alt="image"
            className="dropShadow rounded-xl lg:max-w-[330px] max-h-[210px]"
            height={"210px"}
            width={"330px"}
          />
          <p className="mt-[10px] text-[18px] font-semibold ">
            اختيار مدربين محترفين في كل مجال
          </p>
        </div>
        <div className="cent flex-col text-center ">
          <img
            src="/src/assets/images/newbestnew2-1712561469.webp"
            alt="image"
            className="dropShadow rounded-xl lg:max-w-[330px] max-h-[210px]"
            height={"210px"}
            width={"330px"}
          />
          <p className="mt-[10px] text-[18px] font-semibold ">
            أعلى جودة في المناهج التعليمية
          </p>
        </div>
        <div className="cent flex-col text-center">
          <img
            src="/src/assets/images/tech3-1712561435.webp"
            alt="image"
            className="dropShadow rounded-xl lg:max-w-[330px] max-h-[210px]"
            height={"210px"}
            width={"330px"}
          />
          <p className="mt-[10px] text-[18px] font-semibold text-gray-800">
            {" "}
            الإعتماد على أحدث التقنيات والتطورات
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyIACHome;
