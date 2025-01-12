import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { baseurl } from "../../../api/api";
import Loading from "../../../layouts/Loading";

const Cia = () => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const getDynamicKey = (path) => {
    if (path === "about-us") return "about_us";
    if (path === "why-us") return "why_us";
    if (path === "dr-saly-words") return "dr_saly_words";

    return "default-key";
  };

  const dynamicKey = getDynamicKey(path);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseurl}/show/${path}/user`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 5|1Q8vzifRZTUdzM51sJkxIOuQ0uCqoAcR31EaiC9Ea452fb53`,
            lang: i18n.language,
          },
        });

        setData(response.data[dynamicKey] || {});
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, [i18n.language, path]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto min-h-screen mt-28 md:mt-32 mb-10 px-4">
      {path === "about-us" && (
        <h1 className="text-lg md:text-4xl font-bold text-blue-400 text-center mb-8">
          {t("why.why")}
        </h1>
      )}
      {path === "dr-saly-words" && (
        <h1 className="text-lg md:text-4xl font-bold text-blue-400 text-center mb-8">
          {t("d-sally")}
        </h1>
      )}
      {path === "why-us" && (
        <h1 className="text-lg md:text-4xl font-bold text-blue-400 text-center mb-8">
          {t("why.who")}
        </h1>
      )}

      <div className="bg-gray-200 rounded-lg p-6 px-8">
        {/* if data is string */}
        {typeof data === "string" && (
          <div dangerouslySetInnerHTML={{ __html: data }}></div>
        )}
        {/* if data is object */}
        {typeof data === "object" && data.content && (
          <>
            {data.image && (
              <img
                src={data.image}
                alt="Why Us"
                className="w-full h-32 object-cover rounded-lg mt-4"
              />
            )}
            <p
              className="text-gray-600 text-lg leading-relaxed mt-6 mb-4"
              dangerouslySetInnerHTML={{ __html: data.content }}
            >
              {/* {data.content} */}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Cia;
