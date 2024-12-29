import {
  FaFacebookF,
  FaLanguage,
  FaLaptop,
  FaLinkedinIn,
  FaPercentage,
  FaRegClock,
  FaUser,
} from "react-icons/fa";
import {
  FaCalendarDays,
  FaChartSimple,
  FaRegFileLines,
  FaXTwitter,
} from "react-icons/fa6";
import { useState } from "react";
import ModalVideo from "./ModalVideo";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LuUsers } from "react-icons/lu";
import { PiCertificateThin } from "react-icons/pi";

const DetailsCard = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const data = [
    { id: 1, title: t("coursed.duration"), icon: <FaRegClock /> },
    { id: 2, title: t("coursed.students"), icon: <LuUsers /> },
    { id: 3, title: t("coursed.lessons"), icon: <FaRegFileLines /> },
    { id: 4, title: t("coursed.level"), icon: <FaChartSimple /> },
    { id: 5, title: t("coursed.language"), icon: <FaLanguage /> },
    { id: 6, title: t("coursed.quizz"), icon: <FaLaptop /> },
    { id: 7, title: t("coursed.certification"), icon: <PiCertificateThin /> },
    { id: 8, title: t("coursed.percentage"), icon: <FaPercentage /> },
    { id: 9, title: t("coursed.deadline"), icon: <FaCalendarDays /> },
    { id: 10, title: t("coursed.instructor"), icon: <FaUser /> },
  ];

  return (
    <div className="flex flex-col gap-3 bg-gray-50 mx-0 md:mx-2 rounded-lg">
      <div className="p-3 w-full md:w-11/12 h-[250px] mx-auto">
        <video
          src="src/assets/videos/sample-video.mp4"
          className="w-full h-full object-cover rounded-lg cursor-pointer"
          onClick={openModal}
          controls
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="my-4">
        {data.map((item) => (
          <div key={item.id} className="mx-4 py-2 border-b-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-blue-700 text-lg">{item.icon}</span>
                <span className="text-lg text-gray-700 ">{item.title}</span>
              </div>
              <span className="text-gray-900">17 Weeks</span>
            </div>
          </div>
        ))}
      </div>
      <button className="text-xl text-blue-900 hover:bg-blue-900 hover:text-white duration-700 ease-in-out  py-4 w-11/12 md:w-9/12 mx-auto border-[1px] border-blue-900  rounded-md">
        {t("price")} $: $49.00
      </button>
      <Link
        to="/courses/payment"
        className="text-xl bg-mainColor hover:bg-blue-900 transition-all duration-500 ease-in-out text-white text-center py-4 w-11/12 md:w-9/12 mx-auto border-2  rounded-md"
      >
        {t("enroll")}
      </Link>
      <div className="flex items-center justify-center gap-4 my-4">
        <span className="text-xl">{t("share")}: </span>
        <FaFacebookF className="text-xl hover:text-blue-900 duration-500 ease-in-out cursor-pointer" />
        <FaLinkedinIn className="text-xl hover:text-blue-900 duration-500 ease-in-out cursor-pointer" />
        <FaXTwitter className="text-xl hover:text-blue-900 duration-500 ease-in-out cursor-pointer" />
      </div>

      {/* Modal to display the video */}
      {isModalOpen && <ModalVideo closeModal={closeModal} />}
    </div>
  );
};

export default DetailsCard;
