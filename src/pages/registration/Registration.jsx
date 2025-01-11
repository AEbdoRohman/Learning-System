import MainCard from "../../components/mainCard/MainCard";

const Registration = () => {
  const data = [
    { id: 1, name: "التسجيل فى الدورات", link: "/registration/courses" },
    {
      id: 2,
      name: "التسجيل فى الدبلومات التدريبية",
      link: "/registration/degrees",
    },
    {
      id: 3,
      name: "التسجيل فى الماجستير المصغر",
      link: "/registration/master",
    },
    { id: 4, name: "أسئلة متكررة", link: "/registration/questions" },
    { id: 5, name: "الإستفسارات", link: "/registration/inquiries" },
  ];
  return (
    <div className="container mx-auto main-h-screen mt-28 md:mt-32 mb-10">
      {" "}
      <MainCard data={data} />
    </div>
  );
};

export default Registration;
