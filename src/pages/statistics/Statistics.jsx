import { useEffect, useState } from "react";
import CountUp from "react-countup";
import axios from "axios";
import { baseurl } from "../../api/api";

const Statistics = () => {
  const [stats, setStats] = useState([]);

  const routeTitles = {
    subscripte: "الاشتراكات",
    category: "الفئات",
    // "media-logo": "الشعار الإعلامي",
    message: "الرسائل",
    privacy: "الخصوصية",
    "all-courses": "كل الدورات",
    "our-vision": "رؤيتنا",
    ebdaExpert: "خبراء إبداع",
    "our-goals": "أهدافنا",
    "working-style": "أسلوب العمل",
    course: "الدورات",
    blog: "الاخبار",
    categories: "التصنيفات",
    "contact-us": "اتصل بنا",
    "about-us": "من نحن",
    "terms-conditions": "الشروط و الاحكام",
    "privacy-policy": "سياسة الخصوصية",
    "terms-and-conditions": "الشروط و الاحكام",
  };

  // Fetch data using Axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseurl}/route-visits`);
        const data = response.data;

        const formattedData = data.data
          .map((item, index) => {
            const routeParts = item.route.split("/");
            const secondLastPart =
              routeParts[routeParts.length - 2] || "default";

            if (!routeTitles[secondLastPart]) {
              return null;
            }

            const title = routeTitles[secondLastPart]; // استخدم العنوان المناسب

            return {
              id: index + 1,
              title,
              value: item.count, // العدد
              icon: "/icons/statistics.png",
            };
          })
          .filter((item) => item !== null); // تصفية العناصر التي تحتوي على null

        setStats(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto min-h-screen mt-28 md:mt-32 mb-10 px-4">
      <h1 className="text-4xl font-bold text-blue-400 text-center mb-8">
        إحصائيات الموقع
      </h1>
      {stats.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-gray-100 rounded-lg p-8 text-center"
            >
              <img
                src={stat.icon}
                alt={stat.title}
                className="w-12 h-12 mx-auto mb-4"
              />
              <p className="text-5xl font-bold text-rose-800 mb-6">
                <CountUp end={stat.value} duration={2.5} />
              </p>
              <p className="text-blue-600 text-xl font-bold">{stat.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-gray-500">
          لا توجد إحصائيات لعرضها.
        </p>
      )}
    </div>
  );
};

export default Statistics;
