import { useTranslation } from "react-i18next";
import MainCard from "../../components/mainCard/MainCard";
import { useEffect } from "react";

const Registration = () => {
  const { t } = useTranslation();
  const data = [
    { id: 1, name: t("registration.Courses"), link: "/registration/courses" },
    {
      id: 2,
      name: t("registration.Diplomas"),
      link: "/registration/degrees",
    },
    {
      id: 3,
      name: t("registration.Masters"),
      link: "/registration/master",
    },
    {
      id: 4,
      name: t("registration.repeatquestions"),
      link: "/registration/questions",
    },
    {
      id: 5,
      name: t("registration.inquiries"),
      link: "/registration/inquiries",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mx-auto main-h-screen mt-28 md:mt-40 mb-10">
      {" "}
      <MainCard data={data} />
    </div>
  );
};

export default Registration;
