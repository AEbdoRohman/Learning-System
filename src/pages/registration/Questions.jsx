import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { baseurl } from "../../api/api";
import Loading from "../../layouts/Loading";

const Questions = () => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const feathdata = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${baseurl}/show/showRepetedQuestion/user`,
          {
            headers: {
              "Content-Type": "application/json",

              lang: i18n.language,
            },
          }
        );
        setData(response.data.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    feathdata();

    window.scrollTo(0, 0);
  }, [i18n.language]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto min-h-screen mt-28 md:mt-32 mb-10 px-4">
      <h1 className="text-lg md:text-4xl font-bold text-blue-400 text-center mb-8">
        {t("registration.repeatquestions")}
      </h1>
      <div
        className="bg-gray-200 rounded-lg p-6 px-8"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>
    </div>
  );
};

export default Questions;
