/* eslint-disable react/prop-types */
const ModalVideo = ({ closeModal }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={closeModal}
    >
      <div
        className="bg-white w-[80%] rounded-lg shadow-lg relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
      >
        <video
          src="src/assets/videos/sample-video.mp4"
          controls
          autoPlay
          className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Close Button at the top */}
      <button
        onClick={closeModal}
        className="fixed top-4 right-4 text-white text-5xl font-bold hover:text-red-600 duration-300 ease-in-out z-50"
      >
        &times;
      </button>
    </div>
  );
};

export default ModalVideo;
