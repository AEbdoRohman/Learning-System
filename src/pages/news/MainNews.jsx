import { useTranslation } from "react-i18next";
import MainCard from "../../components/mainCard/MainCard";

const MainNews = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      name: t("news.academic"),
      link: "/news/academic",
    },
    {
      id: 2,
      name: t("news.protocols"),
      link: "/news/protocols",
    },
    {
      id: 3,
      name: t("news.certificates"),
      link: "/news/certificates",
    },
    {
      id: 4,
      name: t("news.entities"),
      link: "/news/entities",
    },
    {
      id: 5,
      name: t("news.partners"),
      link: "/news/partners",
    },
    {
      id: 6,
      name: t("news.about"),
      link: "/news/aboutUs",
    },
  ];
  return (
    <div className="container mx-auto h-full mb-28 mt-28 md:mt-32 ">
      <MainCard data={data} />
    </div>
  );
};

export default MainNews;
