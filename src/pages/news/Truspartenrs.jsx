import { useState, useEffect } from "react";
import axios from "axios";
import { baseurl } from "../../api/api";
import Loading from "../../layouts/Loading";
import { useTranslation } from "react-i18next";

const Truspartenrs = () => {
  const { t, i18n } = useTranslation();
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await axios.get(`${baseurl}/trus-partenrs`, {
          headers: {
            "Content-Type": "application/json",
            lang: i18n.language,
          },
        });
        setPartners(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching partners", error);
        setLoading(false);
      }
    };

    fetchPartners();
  }, [i18n.language]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto my-10 px-4 mt-32">
      <h1 className="text-3xl md:text-4xl text-center font-bold text-[#525fe1] mb-10">
        {t("news.partners")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={partner.image}
              alt={partner.title}
              className="w-full h-48 object-cover"
            />
            <h3 className="text-lg font-medium text-center mt-4 mb-4 px-2">
              {partner.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Truspartenrs;
