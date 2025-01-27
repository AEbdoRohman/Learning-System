import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { baseurl } from "../../api/api";
import Loading from "../../layouts/Loading";
import { useLocation } from "react-router-dom";

const Approved = () => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const path = useLocation().pathname.split("/")[2];

  useEffect(() => {
    const feathdata = async () => {
      setLoading(true);
      const url =
        path === "member" ? "Accredited-members" : "Accredited-consultant";
      try {
        const response = await axios.get(`${baseurl}/${url}`, {
          headers: {
            "Content-Type": "application/json",

            lang: i18n.language,
          },
        });
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
    <div className="container mx-auto h-full mt-28 md:mt-40 mb-10 px-4">
      {path === "member" ? (
        <h1 className="text-4xl font-bold text-blue-400 text-center mb-8">
          {t("members.member")}
        </h1>
      ) : (
        <h1 className="text-4xl font-bold text-blue-400 text-center mb-8">
          {t("members.consultantsCon")}
        </h1>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4  gap-y-10 md:gap-16">
        {data.map((item, index) => (
          <div
            key={index}
            className=" rounded-lg flex flex-col items-center cursor-pointer hover:-translate-y-3 duration-700 ease-in-out"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48  rounded-t-lg"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl text-blue-700 font-semibold px-2 mb-2 ">
                {item.name}
              </h2>
              <p className="text-gray-600 text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Approved;
