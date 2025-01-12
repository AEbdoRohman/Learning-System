import { useTranslation } from "react-i18next";
import MainCard from "../../components/mainCard/MainCard";

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
  return (
    <div className="container mx-auto h-screen mt-28 md:mt-32">
      <MainCard data={data} />
    </div>
  );
};

export default Members;
