import MainCard from "../../components/mainCard/MainCard";

const SubNews = () => {
  const data = [
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
  ];

  return (
    <div className="container mx-auto main-h-screen mt-28 md:mt-32 mb-10">
      {" "}
      <MainCard data={data} />
    </div>
  );
};

export default SubNews;
