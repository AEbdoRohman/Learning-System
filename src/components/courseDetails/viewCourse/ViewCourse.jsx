// import { useEffect, useState } from "react";
// import { FaAngleRight } from "react-icons/fa";
// import SideList from "./SideList";

import { useEffect, useState } from "react";
import { FaAngleRight, FaXmark } from "react-icons/fa6";

// const ViewCourse = () => {
//   const [currentVideo, setCurrentVideo] = useState("video1.mp4");
//   const [isModalOpen, setIsModalOpen] = useState(true); // Initially open the modal

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <div className="mt-[70px] bg-gray-100  relative">
//       {/* Main Content */}

//       {/* Lessons List Section */}
//       <SideList
//         isModalOpen={isModalOpen}
//         setIsModalOpen={setIsModalOpen}
//         currentVideo={currentVideo}
//         setCurrentVideo={setCurrentVideo}
//       />

//       {/* X Button to close the modal */}
//       {!isModalOpen && (
//         <div
//           className="fixed top-1/2 left-1 bg-blue-gray-300 p-1 rounded-lg text-2xl text-white cursor-pointer"
//           onClick={() => setIsModalOpen(true)}
//         >
//           <FaAngleRight />
//         </div>
//       )}

//       {/* Video Player Section */}
//       <div
//         className={` mt-8 rtl:ml-8 ltr:mr-8 duration-500 ease-in-out ${
//           isModalOpen ? "md:ml-[20px] " : "ml-0"
//         }`}
//       >
//         <div className="bg-black rounded-lg overflow-hidden">
//           <video
//             src={`src/assets/videos/${currentVideo}`}
//             controls
//             autoPlay
//             className="w-full md:h-[400px] object-cover"
//           >
//             Your browser does not support the video tag.
//           </video>
//         </div>
//         <div className="m-4">
//           <h2 className="text-2xl font-semibold text-gray-800">Lesson Title</h2>
//           <p className="text-gray-600 mt-4 text-xl">
//             This is a description of the current video. Here you can explain the
//             content, objectives, or any key points of this lesson.
//           </p>
//           <p className="text-gray-600 mt-4 text-xl">
//             This is a description of the current video. Here you can explain the
//             content, objectives, or any key points of this lesson.
//           </p>
//           <p className="text-gray-600 mt-4 text-xl">
//             This is a description of the current video. Here you can explain the
//             content, objectives, or any key points of this lesson.
//           </p>
//           <p className="text-gray-600 mt-2">
//             This is a description of the current video. Here you can explain the
//             content, objectives, or any key points of this lesson.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewCourse;

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

const ViewCourse = () => {
  const [currentVideo, setCurrentVideo] = useState("video1.mp4");
  const [isModalOpen, setIsModalOpen] = useState(true); // Initially open the modal

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-[70px] flex md:gap-6">
      {/* Sidebar */}
      <div
        className={`bg-blue-gray-50 rounded-lg shadow-md px-4 py-6 overflow-y-auto scrollbar-thin z-10 sticky duration-500 ease-in-out ${
          isModalOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          transform: isModalOpen ? "translateX(0)" : "translateX(-100%)", // تحريك العنصر للخارج
          opacity: isModalOpen ? "1" : "0", // تغيير الشفافية لجعل العنصر غير مرئي
          width: isModalOpen ? "300px" : "0", // الحفاظ على عرض ثابت عند الفتح
          height: "calc(100vh - 85px)",
          top: "75px",
          transition: "transform 0.3s ease, opacity 0.3s ease", // تأثير سلس عند الفتح/الإغلاق
        }}
        // style={{
        //   width: "300px",
        //   height: "calc(100vh - 85px)",
        //   top: "75px",
        // }}
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
              className={`p-3 rounded-lg cursor-pointer duration-300 ease-in-out ${
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

      {!isModalOpen && (
        <div
          className="fixed top-1/2 left-1 bg-blue-gray-300 p-1 rounded-lg text-2xl text-white cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <FaAngleRight />
        </div>
      )}

      {/* Main Content */}
      <div
        className={`my-8 rtl:ml-8 ltr:mr-8`}
        style={{
          width: isModalOpen ? "calc(100% - 300px)" : "100%",
          transition: "width 0.3s ease-in-out",
        }}
        // style={{ width: "calc(100% - 300px)" }}
      >
        <video
          src={`src/assets/videos/${currentVideo}`}
          controls
          autoPlay
          className="w-full md:h-[500px] object-cover"
        >
          Your browser does not support the video tag.
        </video>
        <div>
          <p className="text-gray-600 mt-2 text-2xl">
            This is a description of the current video. Here you can explain the
            content, objectives, or any key points of this lesson.
          </p>
          {/* Additional paragraphs */}
          {[...Array(7)].map((_, index) => (
            <p key={index} className="text-gray-600 mt-4 text-xl">
              This is a description of the current video. Here you can explain
              the content, objectives, or any key points of this lesson.
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewCourse;
