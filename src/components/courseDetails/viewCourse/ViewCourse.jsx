import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import SideList from "./SideList";

const ViewCourse = () => {
  const [currentVideo, setCurrentVideo] = useState("video1.mp4");
  const [isModalOpen, setIsModalOpen] = useState(true); // Initially open the modal

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-[70px] flex md:gap-6">
      {/* Sidebar */}
      <SideList
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        currentVideo={currentVideo}
        setCurrentVideo={setCurrentVideo}
      />

      {!isModalOpen && (
        <div
          className="fixed top-1/2 ltr:left-1 rtl:right-1 bg-blue-gray-300 p-1 rounded-lg text-2xl text-white cursor-pointer"
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
          // transition: "all 0.3s ease-in-out",
        }}
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
