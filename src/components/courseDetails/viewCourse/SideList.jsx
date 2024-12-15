import { FaXmark } from "react-icons/fa6";

/* eslint-disable react/prop-types */
const lessons = [
  { id: 1, title: "Introduction", video: "video1.mp4" },
  { id: 2, title: "Lesson 1: Basics of React", video: "video2.mp4" },
  { id: 3, title: "Lesson 2: React Components", video: "video3.mp4" },
  { id: 4, title: "Lesson 3: State and Props", video: "video4.mp4" },
  { id: 5, title: "Lesson 3: State and Props", video: "video5.mp4" },
  { id: 6, title: "Lesson 3: State and Props", video: "video6.mp4" },
  { id: 7, title: "Lesson 3: State and Props", video: "video7.mp4" },
  { id: 8, title: "Lesson 3: State and Props", video: "video8.mp4" },
  { id: 9, title: "Lesson 3: State and Props", video: "video9.mp4" },
  { id: 10, title: "Lesson 3: State and Props", video: "video10.mp4" },
];

const SideList = ({
  isModalOpen,
  setIsModalOpen,
  currentVideo,
  setCurrentVideo,
}) => {
  return (
    <div
      className={`sticky top-[90px] bg-blue-gray-50 rounded-lg shadow-md px-4 py-6 mt-4 overflow-auto scrollbar-thin z-10 ${
        isModalOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{
        height: "calc(100vh - 110px)",
        width: "280px",
        transition: "transform 0.3s ease",
      }}
    >
      <span
        className="absolute top-1 py-2 text-2xl cursor-pointer"
        style={{ left: "230px" }}
        onClick={() => setIsModalOpen(false)}
      >
        <FaXmark />
      </span>
      <h3 className="text-lg font-bold mb-4">Lessons</h3>
      <ul className="space-y-4">
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            className={`p-3 rounded-lg cursor-pointer ${
              currentVideo === lesson.video
                ? "bg-blue-100 border-l-4 border-blue-500"
                : "hover:bg-gray-100"
            }`}
            onClick={() => {
              setCurrentVideo(lesson.video);
              // Close the modal only if on mobile devices
              if (window.innerWidth <= 768) {
                setIsModalOpen(false);
              }
            }}
          >
            <span className="font-medium text-gray-800">{lesson.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideList;
