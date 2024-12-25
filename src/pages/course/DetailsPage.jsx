import Tabs from "./component/Tabs ";
import InstructorMain from "./component/InstructorMain";
import Breadcrumb from "../../components/breadCrumb/Breadcrumb";
import DetailsCard from "./component/details/DetailsCard";

const DetailsPage = () => {
  const breadcrumbItems = [
    { label: "Home", to: "/" },
    { label: "Courses", to: "/courses" },
    { label: "Course Details" },
  ];
  return (
    <div className="mt-20 md:mt-24 mb-[100px]">
      <Breadcrumb items={breadcrumbItems} />
      <div className=" mx-6  h-[calc(100vh-200px)]">
        <img
          src="/course.webp"
          alt="coming soon"
          className="rounded-2xl"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 mt-10">
        {/* ditails section */}
        <div className="col-span-12 md:col-span-8">
          {/* instructor */}
          <InstructorMain />
          {/* tabs content */}
          <Tabs />
        </div>
        {/* right side */}
        <div className="col-span-12 md:col-span-4">
          <DetailsCard />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
