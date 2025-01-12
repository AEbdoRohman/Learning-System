import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { baseurl } from "../../api/api";
import Loading from "../../layouts/Loading";

const AccreditationsPage = () => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const getDynamicKey = (path) => {
    if (path === "local-accrebtions") return "local_accreditation";
    if (path === "international-accrebtions")
      return "international_accreditation";
    if (path === "terms-conditions") return "terms_and_conditions";

    return "default-key";
  };

  const dynamicKey = getDynamicKey(path);

  useEffect(() => {
    const feathdata = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseurl}/show/${path}/user`, {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer 5|1Q8vzifRZTUdzM51sJkxIOuQ0uCqoAcR31EaiC9Ea452fb53`,
            lang: i18n.language,
          },
        });
        setData(response.data[dynamicKey]);

        console.log(response.data.terms_and_conditions);
        console.log(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    feathdata();

    window.scrollTo(0, 0);
  }, [i18n.language, path]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto min-h-screen mt-28 md:mt-32 mb-10 px-4">
      {path === "local-accrebtions" && (
        <h1 className="text-lg md:text-4xl font-bold text-blue-400 text-center mb-8">
          {t("accreditation.local")}{" "}
        </h1>
      )}
      {path === "international-accrebtions" && (
        <h1 className="text-lg md:text-4xl font-bold text-blue-400 text-center mb-8">
          {t("accreditation.international")}
        </h1>
      )}
      {path === "terms-conditions" && (
        <h1 className="text-lg md:text-4xl font-bold text-blue-400 text-center mb-8">
          {t("footer.tarms")}
        </h1>
      )}

      <div
        className="bg-gray-200 rounded-lg p-6 px-8"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>
    </div>
  );
};

export default AccreditationsPage;
