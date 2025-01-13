import { useTranslation } from "react-i18next";
import MainCard from "../../../components/mainCard/MainCard";

const Protocols = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      name: t("news.union"),
      link: "/news/protocols/ConventionUnion",
    },
    {
      id: 2,
      name: t("news.alnasser"),
      link: "/news/protocols/ElNaser",
    },
    {
      id: 3,
      name: t("news.spark"),
      link: "/news/protocols/SpartCompany",
    },
    {
      id: 4,
      name: t("news.rotary"),
      link: "/news/protocols/RotaryClup",
    },
    {
      id: 5,
      name: t("news.aco"),
      link: "/news/protocols/Eco-Medical-Al-Dhabiya",
    },
    {
      id: 6,
      name: t("news.imperial"),
      link: "/news/protocols/ImperialElectronics",
    },
    {
      id: 7,
      name: t("news.iaea"),
      link: "/news/protocols/The-International-Alliance-for-Egyptians_Abroad",
    },
  ];
  return (
    <div className="container mx-auto main-h-screen mt-28 md:mt-32 mb-10">
      <MainCard data={data} />
    </div>
  );
};

export default Protocols;
