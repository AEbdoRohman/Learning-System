/* eslint-disable react/prop-types */

import { useTranslation } from "react-i18next";

const Goals = ({ ourGoalsData }) => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-200 py-4 ">
      <div className="  gap-8 mx-4 py-4">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-4">
          {t("home.goals")}
        </h2>
        <p
          className="md:text-xl font-bold text-center w-full md:w-2/3  md:mx-auto p-3"
          dangerouslySetInnerHTML={{ __html: ourGoalsData }}
        />
      </div>
    </section>
  );
};

export default Goals;

// <div className='bg-[url("/src/assets/images/home-two-cta-2.jpg")] w-full h-[450px] md:h-[350px]'>
