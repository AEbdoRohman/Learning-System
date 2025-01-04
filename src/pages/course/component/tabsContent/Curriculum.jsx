/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Loading from "../../../../layouts/Loading";
import axios from "axios";
import Cookies from "universal-cookie";

const Curriculum = ({ id }) => {
  const [openSections, setOpenSections] = useState([]);
  const [sections, setSections] = useState([]);
  const [lectures, setLectures] = useState({});
  const [loading, setLoading] = useState(true);

  const cookies = new Cookies();
  const token = cookies.get("authToken");
  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await axios.get(`https://qourb.com/api/Section`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setSections(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    const fetchLecture = async () => {
      try {
        const response = await axios.get(
          `https://qourb.com/api/Lecture/${id}/get`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setLectures(response.data["lectures"]);
        console.log(response.data["lectures"]);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSections();
    fetchLecture();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const toggleSection = (id) => {
    setOpenSections((prev) =>
      prev.includes(id)
        ? prev.filter((sectionId) => sectionId !== id)
        : [...prev, id]
    );
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
              className={`w-full text-left flex justify-between items-center py-2 text-xl font-bold text-gray-900 hover:text-blue-500 pb-2 border-b-[1px] border-gray-200 ${
                openSections.includes(section.id) ? "border-gray-300" : ""
              }`}
            >
              {section.name}
              <span
                className={`transform transition-transform ${
                  openSections.includes(section.id) ? "rotate-180" : "rotate-0"
                }`}
              >
                <IoIosArrowDown />
              </span>
            </button>

            {/* Add animation */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openSections.includes(section.id) ? "max-h-screen" : "max-h-0"
              }`}
            >
              <ul className="mt-4 space-y-3 p-0 md:pl-4">
                {lectures.map((subTitle, index) => (
                  <Link
                    to={"/course/view"}
                    key={index}
                    className="flex justify-between items-center text-gray-900 hover:text-blue-500 cursor-pointer border-b-[1px] border-gray-300 pb-2 last:border-b-0"
                  >
                    <div className="flex items-center gap-2 text-ms md:text-lg">
                      <FaRegEdit />
                      {subTitle.title} {/* عرض اسم العنوان الفرعي */}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-blue-700 px-2 py-1 text-white text-xs md:text-sm rounded">
                        7 minutes
                      </span>
                      <MdLockOutline className="text-gray-400 size-5" />
                    </div>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div
          className={`w-full py-2 text-xl font-bold text-gray-900 hover:text-blue-500 pb-2 border-b-[1px] border-gray-200`}
        >
          <Link
            to={`/courses/${id}/quiz`}
            className="w-full flex justify-center  py-2 mb-4 px-0 md:px-4 shadow bg-gray-100 rounded-lg"
          >
            Start Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
