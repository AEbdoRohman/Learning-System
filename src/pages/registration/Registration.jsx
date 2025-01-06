import MainCard from "../../components/mainCard/MainCard";

const Registration = () => {
  const data = [
    { id: 1, name: "التسجيل فى الدورات" },
    { id: 2, name: "التسجيل فى الدبلومات التدريبية" },
    { id: 3, name: "التسجيل فى الماجستير المصغر" },
    { id: 4, name: "أسئلة متكررة" },
    { id: 5, name: "الإستفسارات" },
  ];
  return (
    <div className="container mx-auto main-h-screen mt-28 md:mt-32 mb-10">
      {" "}
      <MainCard data={data} />
    </div>
  );
};

export default Registration;
