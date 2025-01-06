import { useEffect } from "react";
import MainCard from "../../components/mainCard/MainCard";

const News = () => {
  const data = [
    { id: 1, name: "أخبار الأكاديمية" },
    {
      id: 2,
      name: "بروتوكولات تعاون",
      sub_category: [
        {
          id: 1,
          name: "الاتحاد النوعي للصم وضعاف السمع",
        },
        {
          id: 2,
          name: "مؤسسة ال ناصــــــر",
        },
        {
          id: 3,
          name: "نادي روتاري مصر",
        },
        {
          id: 4,
          name: "شركة سبارك للإتصالات",
        },
        {
          id: 5,
          name: "اكو ميديكال الطبية",
        },
        {
          id: 6,
          name: "إمبيريال للأجهزة الكهربائية",
        },
        {
          id: 7,
          name: "التحالف الدولي للمصريين في الخارج",
        },
      ],
    },
    { id: 3, name: "شهادات التقدير " },
    { id: 4, name: "جهات تم التعامل معها" },
    { id: 5, name: "شركاء الثقــــة" },
    { id: 6, name: "قالـو عنا" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto main-h-screen mt-28 md:mt-32 mb-10">
      {" "}
      <MainCard data={data} />
    </div>
  );
};

export default News;
