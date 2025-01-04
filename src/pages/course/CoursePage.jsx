/* eslint-disable no-constant-condition */
import { CiViewList } from "react-icons/ci";
import { FaRegClock, FaRegUser, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumb from "../../components/breadCrumb/Breadcrumb";
import Cookies from "universal-cookie";
import Loading from "../../layouts/Loading";
import { useTranslation } from "react-i18next";

const CoursePage = () => {
  const { t, i18n } = useTranslation();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cookies = new Cookies();
  const token = cookies.get("authToken");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("https://qourb.com/api/Course", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            lang: i18n.language,
          },
        });
        setCourses(response.data["all_courses"]);
        console.log(response.data["all_courses"]);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch courses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="h-screentext-center text-xl my-10 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen mx-auto mt-24 mb-10 px-4">
      <Breadcrumb />
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-blue-gray-50 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Course Image */}
            <Link to={`/courses/details/${course.id}`}>
              <div className="w-full overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover cursor-pointer hover:scale-110 transition-transform duration-300"
                />
              </div>
            </Link>
            {/* Course Content */}
            <div className="px-4 py-2">
              {/* Lessons and Hours */}
              <div className="flex justify-between w-4/5 text-gray-600 text-lg mb-2">
                <p className="flex items-center gap-1">
                  <CiViewList size={18} />
                  <span className="font-bold">
                    {course.number_of_lectures}
                  </span>{" "}
                  {t("course.lessons")}
                </p>
                <p className="flex items-center gap-1">
                  <FaRegClock size={15} />
                  <span className="font-bold">{course.hours}</span>{" "}
                  {t("course.hours")}
                </p>
              </div>
              <p className="text-gray-600 text-sm mb-2">{course.level}</p>
              {/* Title */}
              <Link to={`/courses/details/${course.id}`}>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2 duration-300 ease-in-out hover:text-blue-500">
                  {course.title}
                </h2>
              </Link>

              {/* Reviews */}
              <div className="flex items-center gap-2">
                <div>
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`inline my-[2px] mb-[5px] ${
                        index < course.rating || 5
                          ? "text-yellow-800"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="mx-[2px]">
                  ({course.reviews || 5} {t("course.reviews")})
                </span>
              </div>
              {/* Price & Students */}
              <div className="flex justify-between items-center my-4">
                <p className="text-blue-500 text-xl font-bold">
                  ${course.price}
                </p>
                <p className="flex items-center gap-1 text-gray-600 text-sm">
                  <FaRegUser size={14} />
                  <span className="font-bold">
                    {course.number_of_students}
                  </span>{" "}
                  {t("course.students")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
