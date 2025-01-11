import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { baseurl } from "../../api/api";
import Loading from "../../layouts/Loading";
import ActivCard from "../../components/mainCard/ActivCard";

const Activities = () => {
  const { i18n } = useTranslation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseurl}/category`, {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 5|1Q8vzifRZTUdzM51sJkxIOuQ0uCqoAcR31EaiC9Ea452fb53",
            // Authorization: `Bearer ${token}`,
            lang: i18n.language,
          },
        });
        setData(response.data.categories);
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
  // const data = [
  //   { id: 1, name: "جدول الدورات و الدبلومات " },
  //   { id: 2, name: "الدورات التدريبية " },
  //   { id: 3, name: "الدبلومات التدريبية" },
  //   { id: 4, name: "شبكات الحاسب" },
  //   { id: 5, name: "الماجستير المصغر" },
  //   { id: 6, name: "الاستشاري الدولي المعتمد" },
  //   { id: 7, name: "أستشاري تحكيم دولي" },
  //   { id: 8, name: "الإستشارات التعليمية" },
  // ];
  return (
    <div className="container mx-auto main-h-screen mt-28 md:mt-32 mb-10">
      <ActivCard data={data} />
    </div>
  );
};

export default Activities;
