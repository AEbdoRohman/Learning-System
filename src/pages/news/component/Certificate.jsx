import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../../layouts/Loading";
import { baseurl } from "../../../api/api";
import { useTranslation } from "react-i18next";

const Certificate = () => {
  const { t, i18n } = useTranslation();
  const { certificate } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(certificate);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseurl}/${certificate}/get`, {
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
      {certificate === "soudi-egpypt" && (
        <h1 className="text-3xl md:text-4xl font-bold text-[#525fe1] mb-4">
          {t("news.esu")}
        </h1>
      )}
      {certificate === "unoin" && (
        <h1 className="text-3xl md:text-4xl font-bold text-[#525fe1] mb-4">
          {t("news.gulf")}
        </h1>
      )}
      {certificate === "other-parts" && (
        <h1 className="text-3xl md:text-4xl font-bold text-[#525fe1] mb-4">
          {t("news.various")}
        </h1>
      )}

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
        {data.map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt="Protocol"
            className="w-40 h-60 object-cover mb-4"
          />
        ))}
      </div>
    </div>
  );
};

export default Certificate;
