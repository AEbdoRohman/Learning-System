import { useTranslation } from "react-i18next";
import MainCard from "../../components/mainCard/MainCard";

const Accreditations = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      name: t("accreditation.local"),
      link: "/accreditations/local-accrebtions",
    },
    {
      id: 2,
      name: t("accreditation.international"),
      link: "/accreditations/international-accrebtions",
    },
  ];
  return (
    <div className="container mx-auto main-h-screen mt-28 md:mt-32 mb-10">
      {" "}
      <MainCard data={data} />
    </div>
  );
};

export default Accreditations;
