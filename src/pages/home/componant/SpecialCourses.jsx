import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";
import MainTitle from "./MainTitle";
import { baseurl } from "../../../api/api";
import { FaStar } from "react-icons/fa6";

const SpecialCourses = () => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseurl}/course/isSpecial`, {
          headers: {
            "Content-Type": "application/json",
            lang: i18n.language,
          },
        });
        setData(response.data.special_courses);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="container mx-auto ">
      <div className="my-8">
        {/* main title */}
        <MainTitle
          title={t("maincourses.title")}
          description={t("maincourses.desc")}
        />
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mx-10 rounded-lg">
          {data.map((item) => (
            <div key={item.id} className="bg-blue-gray-100 rounded-lg">
              <img
                src={item.image}
                className="w-full h-44 md:h-52 rounded-t-md"
                alt="imageCourse"
              />

              <div>
                <div className="flex items-center">
                  <h1 className="text-2xl font-bold mx-4 my-2 md:my-4">
                    {item.name}
                  </h1>
                  <p className="text-yellow-800 mt-2 rounded-lg w-fit ">
                    {item.is_special ? <FaStar size={26} /> : ""}
                  </p>
                </div>
                <div className="w-[90%] h-[1px] bg-gray-300 mx-auto"></div>
                <div className="flex flex-col gap-4 my-2 md:my-4">
                  <p className="mx-2">
                    <span className="font-bold mx-2">{t("home.cood")}:</span>{" "}
                    {item.code}
                  </p>

                  <p className="mx-2">
                    <span className="font-bold mx-2">{t("home.price")}:</span>
                    {item.credits}
                    <span className="font-bold mx-2">100$</span>
                  </p>
                  <Link
                    to={`/register/${item.id}`}
                    className="bg-blue-600 text-white w-fit mx-auto my-2 px-4 py-2 rounded-lg font-bold"
                  >
                    {t("enroll")}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialCourses;
