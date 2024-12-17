/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

/* البيانات */
const sections = [
  {
    id: 1,
    title: "Introduction to the Course",
    subTitles: ["Course Overview", "Objectives", "Requirements"],
    video: "video1.mp4",
  },
  {
    id: 2,
    title: "Basic Concepts",
    subTitles: ["What is React?", "JSX Basics", "Components"],
    video: "video2.mp4",
  },
  {
    id: 3,
    title: "Advanced Topics",
    subTitles: ["State Management", "Lifecycle Methods", "Hooks"],
    video: "video3.mp4",
  },
];

const SideList = ({ isModalOpen, setIsModalOpen, setCurrentVideo }) => {
  const [openSections, setOpenSections] = useState([]); // مصفوفة للأقسام المفتوحة
  const [activeSubTitle, setActiveSubTitle] = useState(null); // للحالة النشطة

  // toggle section
  const toggleSection = (id) => {
    setOpenSections(
      (prevSections) =>
        prevSections.includes(id)
          ? prevSections.filter((sectionId) => sectionId !== id) // close section
          : [...prevSections, id] // add section
    );
  };

  return (
    <div
      className={`bg-blue-gray-50 rounded-lg shadow-md px-4 py-6 overflow-y-auto scrollbar-thin z-10 sticky duration-500 ease-in-out ${
        isModalOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{
        transform: isModalOpen ? "translateX(0)" : "translateX(-100%)",
        opacity: isModalOpen ? "1" : "0",
        width: isModalOpen ? "300px" : "0",
        height: "calc(100vh - 85px)",
        top: "75px",
        transition: "transform 0.3s ease, opacity 0.3s ease",
      }}
    >
      <span
        className="absolute top-2 py-2 text-2xl cursor-pointer rtl:right-[230px] ltr:left-[230px]"
        onClick={() => setIsModalOpen(false)}
      >
        <FaXmark />
      </span>
      <h3 className="text-lg font-bold mb-4">Lessons</h3>
      <div className="space-y-4">
        {sections.map((lesson) => (
          <div key={lesson.id}>
            <div
              className="flex justify-between items-center py-2 border-b-2 border-gray-300 cursor-pointer duration-300 ease-in-out"
              onClick={() => toggleSection(lesson.id)}
            >
              <span className="font-medium text-gray-800">{lesson.title}</span>
              <span
                className={`transform transition-transform ${
                  openSections.includes(lesson.id) ? "rotate-180" : "rotate-0"
                }`}
              >
                <IoIosArrowDown />
              </span>
            </div>
            {openSections.includes(lesson.id) && ( // تحقق إذا كان القسم مفتوحًا
              <ul className=" p-0 md:pl-2">
                {lesson.subTitles.map((subTitle, index) => (
                  <li
                    key={index}
                    className={`flex items-center text-gray-900 hover:text-blue-500 cursor-pointer border-b-[1px] border-gray-300 pb-2 last:border-b-0`}
                    onClick={() => {
                      setCurrentVideo(lesson.video);
                      setActiveSubTitle(subTitle);
                    }}
                  >
                    <div
                      className={`flex items-center py-2 text-ms md:text-lg w-full duration-300 ease-in-out ${
                        activeSubTitle === subTitle
                          ? "bg-blue-100 border-l-4 px-2 mt-2 border-blue-500 rounded-lg"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {subTitle}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideList;
