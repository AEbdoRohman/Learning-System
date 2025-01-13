import { useTranslation } from "react-i18next";
import Loading from "../../layouts/Loading";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseurl } from "../../api/api";

const Entities = () => {
  const { t, i18n } = useTranslation();
  const [entities, setEntities] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${baseurl}/show/Entities/user`, {
          headers: {
            "Content-Type": "application/json",

            lang: i18n.language,
          },
        });
        setEntities(res.data["Entities dealt with"]);
        console.log(res.data["Entities dealt with"]);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to fetch blogs.");
        setLoading(false);
      }
    };

    fetchBlog();
    window.scrollTo(0, 0);
  }, [i18n.language]);

  if (loading) return <Loading />;
  if (error) return <p className="text-red-500">{error}</p>;
  return (
    <div className="container mx-auto min-h-screen mt-28 md:mt-32 mb-10 px-4">
      <h1 className="text-4xl font-bold text-blue-400 text-center mb-8">
        {t("news.entities")}
      </h1>

      <div className="flex flex-col py-2">
        <p
          className="overflow-hidden text-gray-700 mx-6"
          dangerouslySetInnerHTML={{ __html: entities }}
        ></p>
      </div>
    </div>
  );
};

export default Entities;
