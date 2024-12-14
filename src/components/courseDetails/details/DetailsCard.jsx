import { FaFacebookF, FaLinkedinIn, FaRegClock } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import ModalVideo from "./ModalVideo";

const DetailsCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col gap-3 bg-gray-50 mx-0 md:mx-2 rounded-lg">
      <div className="p-3 w-full md:w-11/12 h-[250px] mx-auto">
        <video
          src="src/assets/videos/sample-video.mp4" // مسار الفيديو
          className="w-full h-full object-cover rounded-lg cursor-pointer"
          onClick={openModal}
          controls
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="my-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <div key={item} className="mx-4 py-2 border-b-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaRegClock className="text-blue-900" />
                <span className="text-lg ">Duration</span>
              </div>
              <span className="text-gray-900">17 Weeks</span>
            </div>
          </div>
        ))}
      </div>
      <button className="text-xl text-blue-900 hover:bg-blue-900 hover:text-white duration-700 ease-in-out  py-4 w-11/12 md:w-9/12 mx-auto border-[1px] border-blue-900  rounded-md">
        Price: $49.00
      </button>
      <button className="text-xl bg-mainColor hover:bg-blue-900 transition-all duration-500 ease-in-out text-white py-4 w-11/12 md:w-9/12 mx-auto border-2  rounded-md">
        Buy Now
      </button>
      <div className="flex items-center justify-center gap-4 my-4">
        <span className="text-xl">Share:</span>
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
