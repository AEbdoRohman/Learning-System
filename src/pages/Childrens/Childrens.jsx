import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../../layouts/Loading";
import { useTranslation } from "react-i18next";
import { baseurl } from "../../api/api";
import { FaStar } from "react-icons/fa6";

const Childrens = () => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseurl}/course/isForChildren`, {
          headers: {
            "Content-Type": "application/json",

            lang: i18n.language,
          },
        });
        setData(response.data.is_for_children_courses);
        console.log(response.data.is_for_children_courses);
        setLoading(false);
      } catch (err) {
        setError("Error fetching data");
        setLoading(false);
        console.log(err);
      }
    };

    fetchData();

    window.scrollTo(0, 0);
  }, [i18n.language]);

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4 h-screen mt-28 md:mt-32 ">
      <div>
        <h1 className="text-4xl font-bold text-blue-400 text-center mb-8">
          {t("header.childrens")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item) => (
            <div key={item.id} className="bg-blue-gray-100 rounded-lg">
              <div className="overflow-hidden group ">
                <img
                  src={item.image}
                  className="w-full h-52 rounded-t-md group:hover:scale-110 duration-300 ease-in-out"
                  alt="imageCourse"
                />
              </div>

              <div>
                <div className="flex items-center">
                  <h1 className="text-2xl font-bold m-4">{item.name}</h1>
                  <p className="text-yellow-800 mt-2 rounded-lg w-fit  ">
                    {item.is_special ? <FaStar size={26} /> : ""}
                  </p>
                </div>
                <div className="w-[90%] h-[1px] bg-gray-300 mx-auto"></div>
                <div className="flex flex-col gap-4 my-4">
                  <p className="mx-2">
                    <span className="font-bold mx-2">{t("home.cood")}:</span>{" "}
                    {item.code}
                  </p>
                  <p className="mx-2">
                    <span className="font-bold mx-2">{t("home.price")}:</span>
                    {item.credits}
                    <span className="font-bold mx-2">${item.price}</span>
                  </p>
                  <Link
                    to={`/register/${item.id}`}
                    className="w-fit mx-auto mt-4 bg-blue-600 text-white px-4 py-1 rounded-md"
                    // onClick={() => handelEnroll(item.id)}
                  >
                    {i18n.language === "en" ? "Enroll" : "تسجيل"}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Childrens;
