import Tabs from "./component/Tabs ";
import InstructorMain from "./component/InstructorMain";
import Breadcrumb from "../../components/breadCrumb/Breadcrumb";
import DetailsCard from "./component/details/DetailsCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../../layouts/Loading";
import Cookies from "universal-cookie";
import { useTranslation } from "react-i18next";

const DetailsPage = () => {
  const { i18n } = useTranslation();
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const cookies = new Cookies();
  const token = cookies.get("authToken");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`https://qourb.com/api/Course/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            lang: i18n.language,
          },
        });
        setCourses(response.data);
        console.log(response.data);
        console.log(courses);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <Loading />;
  }

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
          src={courses.image}
          alt="coming soon"
          className="rounded-2xl"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 mt-10">
        {/* ditails section */}
        <div className="col-span-12 md:col-span-8">
          {/* instructor */}
          <InstructorMain course={courses} />
          {/* tabs content */}
          <Tabs id={id} />
        </div>
        {/* right side */}
        <div className="col-span-12 md:col-span-4">
          <DetailsCard course={courses} />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
