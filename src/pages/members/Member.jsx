import MainCard from "../../components/mainCard/MainCard";

const Member = () => {
  const location = window.location.pathname.split("/")[2];

  const data =
    location === "member"
      ? [
          { id: 1, name: "مميزات الاعضاء", link: "/members/member/benefits" },
          {
            id: 2,
            name: "الاعضاء المعتمدون",
            link: "/members/member/approved",
          },
        ]
      : location === "consultants"
      ? [
          {
            id: 1,
            name: "شروط الاستشاري",
            link: "/members/consultants/conditions",
          },
          {
            id: 2,
            name: "استشاريون معتمدون",
            link: "/members/consultants/approved",
          },
        ]
      : [];
  return (
    <div className="container mx-auto h-screen mt-28 md:mt-32">
      <MainCard data={data} />
    </div>
  );
};

export default Member;
