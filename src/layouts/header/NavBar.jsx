import { Menubar } from "primereact/menubar";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // static items
  const items = [
    {
      label: t("header.home"),
      command: () => navigate("/"),
    },
    {
      label: t("header.news"),
      command: () => navigate("/news"),
    },
    {
      label: t("header.accreditations"),
      command: () => navigate("/accreditations"),
    },
    {
      label: t("header.activities"),
      command: () => navigate("/activities"),
    },
    {
      label: t("header.childrens"),
      command: () => navigate("/childrens"),
    },
    {
      label: t("header.members"),
      command: () => navigate("/members"),
    },
    {
      label: t("header.registration"),
      command: () => navigate("/registration"),
    },
    {
      label: t("header.statistics"),
      command: () => navigate("/statistics"),
    },
    {
      label: t("header.contact"),
      command: () => navigate("/contact"),
    },
  ];

  return (
    <div className="">
      <Menubar
        model={items}
        className=" bg-transparent w-full border-none text-[1.1rem] font-semibold py-1"
        p-cascadeselect-items
      />
    </div>
  );
}
