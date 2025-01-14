import { useState, useEffect } from "react";
import axios from "axios";
import { baseurl } from "../../api/api";
import Loading from "../../layouts/Loading";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";

const RouteVisits = () => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const routeLinks = {
    home: "/statistics/home",
    "news and trusted parteners": "/statistics/news",
    "members and consultant": "/statistics/members",
    "International Accreditations": "/statistics/accreditations",
    Questions: "/statistics/questions",
    "contactu-us": "/statistics/contact",

    "الرئيسيه ": "/statistics/home",
    "الاخبار وشركاء الثقه": "/statistics/news",
    "الاعضاء والاستشاريين": "/statistics/members",
    "الاعتمادات الدولية": "/statistics/accreditations",
    الأسئلة: "/statistics/questions",
    "تواصل معنا": "/statistics/contact",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseurl}/all-visit/get/static`, {
          headers: {
            "Content-Type": "application/json",
            lang: i18n.language,
          },
        });
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching route visits", error);
        setLoading(false);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, [i18n.language]);

  if (loading) {
    return <Loading />;
  }

  const handleCardClick = (routeKey) => {
    const routeLink = routeLinks[routeKey];
    if (routeLink) {
      navigate(routeLink);
    } else {
      console.error(`No route found for key: ${routeKey}`);
    }
  };

  return (
    <div className="container mx-auto h-full mb-28 mt-28 md:mt-36 px-4">
      <h1 className="text-4xl font-bold text-blue-400 text-center mb-14">
        {t("header.statistics")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
        {Object.entries(data).map(([key, value], index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 text-center transform hover:scale-105 transition duration-300"
            onClick={() => handleCardClick(key)}
          >
            <p className="text-4xl font-bold text-blue-500 mb-8">
              <CountUp start={0} end={value} duration={2.5} />
            </p>
            <h3 className="text-lg font-medium text-gray-700 mb-2">{key}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RouteVisits;
