import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdLockOutline } from "react-icons/md";

const Curriculum = () => {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    {
      id: 1,
      title: "Introduction to the Course",
      subTitles: ["Course Overview", "Objectives", "Requirements"],
    },
    {
      id: 2,
      title: "Basic Concepts",
      subTitles: ["What is React?", "JSX Basics", "Components"],
    },
    {
      id: 3,
      title: "Advanced Topics",
      subTitles: ["State Management", "Lifecycle Methods", "Hooks"],
    },
  ];

  const toggleSection = (id) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mx-auto py-6">
      <div className="space-y-4">
        {sections.map((section) => (
          <div
            key={section.id}
            className="border-b py-2 mb-4 px-0 md:px-4 shadow bg-gray-100 rounded-lg"
          >
            <button
              onClick={() => toggleSection(section.id)}
              className={`w-full text-left flex justify-between items-center py-2 text-xl font-bold text-gray-900 hover:text-blue-500 pb-2  ${
                openSection === section.id
                  ? "border-b-[1px] border-gray-300 text-blue-800 mb-6"
                  : ""
              }`}
            >
              {section.title}
              <span
                className={`transform transition-transform ${
                  openSection === section.id ? "rotate-180" : "rotate-0"
                }`}
              >
                <IoIosArrowDown />
              </span>
            </button>

            {openSection === section.id && (
              <ul className="mt-2 space-y-3 p-0 md:pl-4">
                {section.subTitles.map((subTitle, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center text-gray-900 hover:text-blue-500 cursor-pointer border-b-[1px] border-gray-300 pb-2 last:border-b-0"
                  >
                    <div className="flex items-center gap-2 text-ms md:text-lg">
                      <FaRegEdit />
                      {subTitle}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-blue-700 px-2 py-1 text-white text-xs md:text-sm  rounded">
                        7 minutes
                      </span>
                      <MdLockOutline className="text-gray-400 size-5" />
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

export default Curriculum;
