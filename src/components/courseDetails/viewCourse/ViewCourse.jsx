import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import SideList from "./SideList";

const ViewCourse = () => {
  const [currentVideo, setCurrentVideo] = useState("video1.mp4");
  const [isModalOpen, setIsModalOpen] = useState(true); // Initially open the modal

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-24 bg-gray-100">
      {/* Main Content */}
      <div className="mx-auto grid lg:grid-cols-2 gap-6">
        {/* Lessons List Section */}
        <SideList
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          currentVideo={currentVideo}
          setCurrentVideo={setCurrentVideo}
        />

        {/*  Button to close the modal */}
        {!isModalOpen && (
          <div
            className="fixed top-1/2 left-1 bg-blue-gray-100 px-1 py-2 rounded-lg text-2xl cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <FaAngleRight />
          </div>
        )}

        {/* Video Player Section */}
        <div
          className={`lg:col-span-2 mt-8  rtl:ml-8 ltr:mr-8 duration-500 ease-in-out ${
            isModalOpen ? "md:ml-[320px] " : "ml-12"
          }`}
        >
          <div className="bg-black rounded-lg overflow-hidden">
            <video
              src={`src/assets/videos/${currentVideo}`}
              controls
              autoPlay
              className="w-full md:h-[400px] object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="m-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Lesson Title
            </h2>
            <p className="text-gray-600 mt-2">
              This is a description of the current video. Here you can explain
              the content, objectives, or any key points of this lesson.
            </p>
            <p className="text-gray-600 mt-2">
              This is a description of the current video. Here you can explain
              the content, objectives, or any key points of this lesson.
            </p>
            <p className="text-gray-600 mt-2">
              This is a description of the current video. Here you can explain
              the content, objectives, or any key points of this lesson.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCourse;
