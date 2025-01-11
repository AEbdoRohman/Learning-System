import axios from "axios";
import { baseurl } from "../../api/api";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../layouts/Loading";
import ActivCard from "../../components/mainCard/ActivCard";

const SubCategory = () => {
  const { i18n } = useTranslation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${baseurl}/categories/${id}/subcategories`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer 5|1Q8vzifRZTUdzM51sJkxIOuQ0uCqoAcR31EaiC9Ea452fb53",
              // Authorization: `Bearer ${token}`,
              lang: i18n.language,
            },
          }
        );
        setData(response.data.subcategories);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [i18n.language]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto main-h-screen mt-28 md:mt-32 mb-10">
      <ActivCard data={data} />
    </div>
  );
};

export default SubCategory;
