import MainCard from "../../components/mainCard/MainCard";

const Activities = () => {
  const data = [
    { id: 1, name: "جدول الدورات و الدبلومات " },
    { id: 2, name: "الدورات التدريبية " },
    { id: 3, name: "الدبلومات التدريبية" },
    { id: 4, name: "شبكات الحاسب" },
    { id: 5, name: "الماجستير المصغر" },
    { id: 6, name: "الاستشاري الدولي المعتمد" },
    { id: 7, name: "أستشاري تحكيم دولي" },
    { id: 8, name: "الإستشارات التعليمية" },
  ];
  return (
    <div className="container mx-auto main-h-screen mt-28 md:mt-32 mb-10">
      <MainCard data={data} />
    </div>
  );
};

export default Activities;
