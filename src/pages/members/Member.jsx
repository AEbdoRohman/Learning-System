import { useTranslation } from "react-i18next";
import MainCard from "../../components/mainCard/MainCard";

const Member = () => {
  const { t } = useTranslation();
  const location = window.location.pathname.split("/")[2];

  const data =
    location === "member"
      ? [
          {
            id: 1,
            name: t("members.benefits"),
            link: "/members/member/benefits",
          },
          {
            id: 2,
            name: t("members.member"),
            link: "/members/member/approved",
          },
        ]
      : location === "consultants"
      ? [
          {
            id: 1,
            name: t("members.conditions"),
            link: "/members/consultants/conditions",
          },
          {
            id: 2,
            name: t("members.consultantsCon"),
            link: "/members/consultants/approved",
          },
        ]
      : [];
  return (
    <div className="container mx-auto h-full mb-20 mt-28 md:mt-32">
      <MainCard data={data} />
    </div>
  );
};

export default Member;
