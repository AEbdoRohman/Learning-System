import { useTranslation } from "react-i18next";
import MainCard from "../../components/mainCard/MainCard";
import { useEffect } from "react";

const Members = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      name: t("members.memberIbda"),
      link: "/members/memberIbda",
    },
    { id: 2, name: t("members.members"), link: "/members/member" },
    { id: 3, name: t("members.consultants"), link: "/members/consultants" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mx-auto h-full mb-20 mt-28 md:mt-40">
      <MainCard data={data} />
    </div>
  );
};

export default Members;
