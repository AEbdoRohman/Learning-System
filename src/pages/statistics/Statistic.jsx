import { useState, useEffect } from "react";
import axios from "axios";
import { baseurl } from "../../api/api";
import Loading from "../../layouts/Loading";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import { useLocation } from "react-router-dom";

const Statistic = () => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const path = useLocation().pathname.split("/")[2];

  const getDynamicKey = (path) => {
    if (path === "news") return "turstd-partners";
    if (path === "members") return "membersAndConsultant";
    if (path === "accreditations") return "Internationalaccreditations";
    if (path === "questions") return "qustions";
    if (path === "contact") return "contact-us";

    return "default-key";
  };

  const dynamicKey = getDynamicKey(path);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseurl}/${dynamicKey}/get/static`,
          {
            headers: {
              "Content-Type": "application/json",
              lang: i18n.language,
            },
          }
        );
        setData(response.data.data);
        console.log(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching route visits", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [i18n.language]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto h-full mb-28 mt-28 md:mt-36 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-400 text-center mb-8 ">
        {t("header.statistics")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 cursor-pointer">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 shadow-md rounded-lg p-4 text-center transform hover:scale-105 transition duration-300"
          >
            <p className="text-4xl font-bold text-blue-500 mb-8">
              <CountUp start={0} end={item.count} duration={2.5} />
            </p>
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              {item.route}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistic;
