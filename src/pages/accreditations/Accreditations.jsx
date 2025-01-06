import MainCard from "../../components/mainCard/MainCard";

const Accreditations = () => {
  const data = [
    { id: 1, name: "الإعتمادات المحلية" },
    { id: 2, name: "الإعتمادات الدولية" },
  ];
  return (
    <div className="container mx-auto main-h-screen mt-28 md:mt-32 mb-10">
      {" "}
      <MainCard data={data} />
    </div>
  );
};

export default Accreditations;
