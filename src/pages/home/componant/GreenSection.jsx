/* eslint-disable react/prop-types */

import { useTranslation } from "react-i18next";

const GreenSection = ({ messageData, ourVision }) => {
  const { t } = useTranslation();

  return (
    <section className="pt-[30px] bg-gray-200 px-3 md:px-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 mx-4   py-10">
        <div className="">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-4">
            {t("home.massage")}
          </h2>
          <p
            className="md:text-lg font-bold text-center md:p-3"
            dangerouslySetInnerHTML={{ __html: messageData }}
          />
        </div>
        <div className="">
          <h2 className="text-xl md:text-3xl font-bold  text-center mb-4">
            {t("home.vision")}
          </h2>
          <p
            className="md:text-lg font-bold text-center md:p-3"
            dangerouslySetInnerHTML={{ __html: ourVision }}
          />
        </div>
      </div>
    </section>
  );
};

export default GreenSection;
