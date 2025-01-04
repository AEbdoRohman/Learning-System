import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";
import MainTitle from "./MainTitle";
import { baseurl } from "../../../api/api";

const SpecialCourses = () => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseurl}/course/isSpecial`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 5|1Q8vzifRZTUdzM51sJkxIOuQ0uCqoAcR31EaiC9Ea452fb53`,
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
      {/* <div className="container mx-auto"> */}
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
              <Link
                to={`/courses/${item.sub_category_id}`}
                className="overflow-hidden"
              >
                <img
                  src="/src/assets/images/course-30.webp"
                  className="w-full h-auto rounded-t-md"
                  alt="imageCourse"
                />
              </Link>

              <div>
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold m-4">{item.name}</h1>
                  <p className="m-4 bg-blue-700 text-white px-2 py-1 rounded-lg w-fit  ">
                    {item.is_special ? "Special" : "Normal"}
                  </p>
                </div>
                <div className="w-[90%] h-[1px] bg-gray-300 mx-auto"></div>
                <div className="flex items-center my-4">
                  <p className="mx-2"> code: {item.code}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto flex justify-center items-center mt-[80px]">
        <button className="flex items-center justify-center text-mainColor px-[70px] h-[2.5rem] rounded-[.37rem] bg-white font-semibold border-[1.5px] border-mainColor ">
          <Link>{t("btn.btn")} </Link>
        </button>
      </div>
      {/* </div> */}
    </section>
  );
};

export default SpecialCourses;
