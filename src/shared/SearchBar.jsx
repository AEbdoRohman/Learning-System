/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

export default function SearchBar({ onClose }) {
  const searchRef = useRef(null);

  // Close the search bar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Add event listener for detecting clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  // Disable scrolling when the search bar is open
  useEffect(() => {
    if (searchRef.current) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      // Reset scroll behavior on cleanup
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex justify-center items-center duration-300 ease-in-out z-50">
      <div
        ref={searchRef}
        className="w-3/4 lg:w-2/3 bg-white text-black p-4 rounded-lg shadow-lg relative"
      >
        <input
          type="text"
          placeholder="ابحث هنا..."
          className="w-full p-3 border rounded-lg bg-gray-300 focus:outline-none "
        />
      </div>
      {/* Close button at the top of the screen */}
      <button
        className="absolute top-4 right-4 bg-white text-black w-10 h-10 rounded-full text-lg font-bold duration-300 hover:text-red-500"
        onClick={onClose}
      >
        &#10005;
      </button>
    </div>
  );
}
