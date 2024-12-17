import { CiViewList } from "react-icons/ci";
import { FaRegClock, FaRegUser, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Breadcrumb from "../shared/Breadcrumb";
import { useEffect } from "react";

const CoursePage = () => {
  const courses = [
    {
      id: 1,
      image: "/course.webp", // ضع رابط الصورة هنا
      title: "React for Beginners",
      lessons: 12,
      hours: 8,
      price: 49.99,
      students: 150,
    },
    {
      id: 2,
      image: "/course.webp",
      title: "Advanced JavaScript",
      lessons: 20,
      hours: 15,
      price: 79.99,
      students: 200,
    },
    {
      id: 3,
      image: "/course.webp",
      title: "UI/UX Design Basics",
      lessons: 10,
      hours: 6,
      price: 39.99,
      students: 100,
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" min-h-screen mx-auto mt-24 mb-10 px-4">
      <Breadcrumb />
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-blue-gray-50 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Course Image */}
            <Link to={`/courses/details`}>
              <div className="w-full  overflow-hidden">
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
                <p className="flex items-center gap-1 ">
                  <CiViewList size={18} />
                  <span className="font-bold">{course.lessons}</span> lessons ·
                </p>
                <p className="flex items-center gap-1 ">
                  <FaRegClock size={15} />
                  <span className="font-bold">{course.hours}</span> hours
                </p>
              </div>

              {/* Title */}
              <Link to={`/course/details`}>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2 duration-300 ease-in-out hover:text-blue-500">
                  {course.title}
                </h2>
              </Link>

              {/* Reviews */}
              <div className="flex items-center gap-2">
                <div>
                  {[1, 2, 3, 4, 5].map((item) => {
                    return (
                      <FaStar
                        key={item}
                        className="inline my-[2px] mb-[5px] text-yellow-800"
                      />
                    );
                  })}
                </div>
                <span className="mx-[2px]">(1 Review)</span>
              </div>
              {/* Price & Students*/}
              <div className="flex justify-between items-center my-4">
                <p className="text-blue-500 text-xl font-bold">
                  ${course.price.toFixed(2)}
                </p>
                <p className="flex items-center gap-1 text-gray-600 text-sm">
                  <FaRegUser size={14} />
                  <span className="font-bold">{course.students}</span> students
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
