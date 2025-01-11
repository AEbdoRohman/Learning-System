import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { baseurl } from "../../api/api";
import Loading from "../../layouts/Loading";

const MemberIbda = () => {
  const { i18n } = useTranslation();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const feathdata = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${baseurl}/show/showAllQuestions/user`,
          {
            headers: {
              "Content-Type": "application/json",

              lang: i18n.language,
            },
          }
        );
        setData(response.data.data);

        console.log(response.data.data);
        console.log(data);
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
      <h1 className="text-2xl font-bold mb-4">الاسئلة الشائعة</h1>
      <div
        className="bg-gray-200 rounded-lg p-6 px-8"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>
    </div>
  );
};

export default MemberIbda;
