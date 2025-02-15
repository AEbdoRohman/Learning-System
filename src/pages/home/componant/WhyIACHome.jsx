/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import MainTitle from "./MainTitle";
import { Link } from "react-router-dom";

const WhyIACHome = ({ privacyData }) => {
  const { t } = useTranslation();

  const items = [
    {
      id: 1,
      image: "/logo.png",
      textKey: t("why.why"),
      link: "/about-us",
    },
    {
      id: 2,
      image: "/logo.png",
      textKey: t("why.who"),
      link: "/why-us",
    },
    {
      id: 3,
      image: "/logo.png",
      textKey: t("why.word-saly"),
      link: "/dr-saly-words",
    },
  ];

  return (
    <section className="container mx-auto px-4 mt-14 xl:py-16 flex flex-col items-center">
      <MainTitle title={t("why.title")} description={privacyData} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {items.map((item, index) => (
          <Link
            to={`${item.link}`}
            key={index}
            className="flex flex-col items-center text-center  border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div className="w-full h-48 group overflow-hidden cursor-pointer rounded-t-lg">
              <img
                src={item.image}
                alt={t(item.textKey)}
                className="w-full h-full  object-cover rounded-t-lg group-[:hover]:scale-110 group-[:hover]:rotate-3 transition-transform duration-700 ease-in-out"
              />
            </div>
            <p className="my-4 px-4 text-lg font-semibold text-gray-800">
              {t(item.textKey)}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WhyIACHome;
