import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import { baseurl } from "../../api/api";
import { useTranslation } from "react-i18next";
import Loading from "../../layouts/Loading";

const SayAboutUs = () => {
  const { t, i18n } = useTranslation();
  const { certificate } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseurl}/SayAboutUs`, {
          headers: {
            "Content-Type": "application/json",
            lang: i18n.language,
          },
        });
        setData(response.data.data);

        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, [certificate, i18n.language]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto h-full mb-28 mt-28 md:mt-36 flex flex-col items-center ">
      <h1 className="text-3xl md:text-4xl font-bold text-[#525fe1] mb-6">
        {t("news.about")}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 ">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={item.image}
              alt={`Image ${item.id}`}
              className="w-full h-40 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SayAboutUs;
