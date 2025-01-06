import { useEffect } from "react";
import CountUp from "react-countup";

const Statistics = () => {
  const stats = [
    {
      id: 1,
      title: "الرئيسية",
      value: 306097,
      icon: "/icons/home.png",
    },
    {
      id: 2,
      title: "الأخبار و شركاء الثقة",
      value: 38617,
      icon: "/icons/news.png",
    },
    {
      id: 3,
      title: "الإعتمادات الدولية",
      value: 11320,
      icon: "/icons/globe.png",
    },
    {
      id: 4,
      title: "نشاطات الأكاديمية",
      value: 86734,
      icon: "/icons/training.png",
    },
    {
      id: 5,
      title: "الأعضاء و الاستشاريين",
      value: 51047,
      icon: "/icons/group.png",
    },
    {
      id: 6,
      title: "الاستفسار و التسجيل",
      value: 22032,
      icon: "/icons/user.png",
    },
    {
      id: 7,
      title: "إحصائيات الموقع",
      value: 11277,
      icon: "/icons/statistics.png",
    },
    {
      id: 8,
      title: "أتصل بنا",
      value: 11406,
      icon: "/icons/phone.png",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto min-h-screen mt-28 md:mt-32 mb-10 px-4">
      <h1 className="text-4xl font-bold text-blue-400 text-center mb-8">
        إحصائيات الموقع
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-gray-100 rounded-lg p-8 text-center "
          >
            <img
              src={stat.icon}
              alt={stat.title}
              className="w-12 h-12 mx-auto mb-4"
            />
            <p className="text-5xl font-bold text-rose-800 mb-6">
              <CountUp end={stat.value} duration={2.5} />
            </p>
            <p className="text-blue-600 text-xl font-bold ">{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
