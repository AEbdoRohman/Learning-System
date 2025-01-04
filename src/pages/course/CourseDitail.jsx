import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loading from "../../layouts/Loading";
import { useTranslation } from "react-i18next";
import { baseurl } from "../../api/api";

const CourseDetail = () => {
  const { i18n } = useTranslation();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [subcategory, setSubcategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseurl}/course/${id}/get`, {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + "7|2Ht6CFZ4SrHd5D61YUdGMxyvZNY2DDofAWXBcAxFf136b392",
            lang: i18n.language,
          },
        });
        setData(response.data.all_courses);
        setSubcategory(response.data.subcategory);
        setLoading(false);
      } catch (err) {
        setError("Error fetching data");
        setLoading(false);
        console.log(err);
      }
    };

    fetchData();

    window.scrollTo(0, 0);
  }, []);

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4 h-screen mt-32">
      <div>
        <h2 className="text-2xl font-bold text-center mt-4 mb-6">
          {subcategory}
        </h2>
        {data.map((course) => (
          <div
            key={course.id}
            className="border px-8 py-4 mb-4 rounded-md shadow-md bg-white"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-between flex-1">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">
                  {course.name}
                </h3>
                <p className="bg-gray-300 px-2 py-1 rounded-md">
                  {course.is_special ? "Special" : "Normal"}
                </p>
              </div>
              <p className="mx-4 bg-blue-gray-400 text-white px-3 py-1 rounded-md ">
                {course.code}
              </p>
              <Link
                to={`/course/${course.id}`}
                className="bg-blue-600 text-white px-4 py-1 rounded-md"
              >
                {i18n.language === "en" ? "Enroll" : "تسجيل"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetail;
