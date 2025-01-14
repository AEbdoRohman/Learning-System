import { useTranslation } from "react-i18next";
import MainCard from "../../../components/mainCard/MainCard";

const Certificates = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      name: t("news.esu"),
      link: "/news/certificates/soudi-egpypt",
    },
    {
      id: 2,
      name: t("news.gulf"),
      link: "/news/certificates/unoin",
    },
    {
      id: 3,
      name: t("news.various"),
      link: "/news/certificates/other-parts",
    },
  ];
  return (
    <div className="container mx-auto h-full mt-28 md:mt-40 mb-10">
      <MainCard data={data} />
    </div>
  );
};

export default Certificates;
