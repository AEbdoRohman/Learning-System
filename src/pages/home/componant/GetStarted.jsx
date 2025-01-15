/* eslint-disable react/prop-types */

import { useTranslation } from "react-i18next";

const GetStarted = ({ workingData, ebdaExpert }) => {
  const { t } = useTranslation();
  console.log(workingData);

  return (
    <section className=" ">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-8 mx-3 md:mx-10 py-8">
        <div className="">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-4">
            {t("home.work")}
          </h2>
          <p
            className="md:text-lg font-bold text-center mr-3 p-3"
            dangerouslySetInnerHTML={{ __html: workingData }}
          />
        </div>
        <div className="">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-4">
            {t("home.team")}
          </h2>
          <p
            className="md:text-lg font-bold text-center mr-3 p-3"
            dangerouslySetInnerHTML={{ __html: ebdaExpert }}
          />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
