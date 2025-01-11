import MainCard from "../../components/mainCard/MainCard";

const Accreditations = () => {
  const data = [
    {
      id: 1,
      name: "الإعتمادات المحلية",
      link: "/accreditations/local-accrebtions",
    },
    {
      id: 2,
      name: "الإعتمادات الدولية",
      link: "/accreditations/international-accrebtions",
    },
  ];
  return (
    <div className="container mx-auto main-h-screen mt-28 md:mt-32 mb-10">
      {" "}
      <MainCard data={data} />
    </div>
  );
};

export default Accreditations;
