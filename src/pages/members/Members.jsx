import MainCard from "../../components/mainCard/MainCard";

const Members = () => {
  const data = [
    {
      id: 1,
      name: "عضوية الإبداع الدولية للتطوير والاستشارات",
      link: "/members/memberIbda",
    },
    { id: 2, name: "الأعضاء ", link: "/members/member" },
    { id: 3, name: "الاستشاريون", link: "/members/consultants" },
  ];
  return (
    <div className="container mx-auto h-screen mt-28 md:mt-32">
      <MainCard data={data} />
    </div>
  );
};

export default Members;
