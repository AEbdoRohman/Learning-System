import { useState } from "react";
import Overview from "./tabsContent/Overview";
import Curriculum from "./tabsContent/Curriculum";
import Instructor from "./tabsContent/Instructor";
import Reviews from "./tabsContent/Reviews";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Function to render the content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "curriculum":
        return <Curriculum />;
      case "instructor":
        return <Instructor />;
      case "reviews":
        return <Reviews />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="container mx-auto px-1 md:px-4 pt-8 ">
      <div className="flex flex-col md:flex-row justify-between   mx-4 pb-2 px-1 md:px-4 mb-4 bg-blue-gray-50 rounded">
        <div className="flex justify-around md:flex-auto">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-2 text-lg font-medium ${
              activeTab === "overview"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("curriculum")}
            className={`py-2 text-lg font-medium ${
              activeTab === "curriculum"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            Curriculum
          </button>
        </div>
        <div className="flex justify-around md:flex-auto">
          <button
            onClick={() => setActiveTab("instructor")}
            className={`py-2 text-lg font-medium ${
              activeTab === "instructor"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            Instructor
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`py-2 text-lg font-medium ${
              activeTab === "reviews"
                ? "text-blue-500 border-b-2 border-blue-500 "
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            Reviews
          </button>
        </div>
      </div>

      <div className="mx-0 md:mx-4 mt-8">{renderContent()}</div>
    </div>
  );
};

export default Tabs;
