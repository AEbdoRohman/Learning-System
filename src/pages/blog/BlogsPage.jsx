import { Link } from "react-router-dom";
import { useEffect } from "react";
import Breadcrumb from "../../components/breadCrumb/Breadcrumb";

const blogData = [
  {
    id: 1,
    title: "أهمية تطوير المهارات التقنية",
    date: "2024-06-13",
    image: "/src/assets/images/blog1.jpg",
    description:
      "تعرف على كيفية تحسين مهاراتك التقنية لمواكبة سوق العمل والتكنولوجيا الحديثة.",
  },
  {
    id: 2,
    title: "نصائح لإدارة الوقت بفعالية",
    date: "2024-05-22",
    image: "/src/assets/images/blog1.jpg",
    description:
      "إدارة الوقت يمكن أن تكون المفتاح لتحقيق أهدافك اليومية والمهنية بسهولة.",
  },
  {
    id: 3,
    title: "تعلم البرمجة من الصفر",
    date: "2024-04-15",
    image: "/src/assets/images/blog1.jpg",
    description: "دليل شامل للبدء في تعلم البرمجة وخطوات تحسين مستواك كمبرمج.",
  },
];
const BlogsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="mt-20">
      <Breadcrumb />
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-100 shadow-lg rounded-lg overflow-hidden"
            >
              <Link to={`/blog/${blog.id}`}>
                <div className="group overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-48 object-cover w-full transform transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>
              </Link>
              <div className="p-4">
                <Link
                  to={`/blog/${blog.id}`}
                  className="block text-lg font-semibold text-mainColor mb-2"
                >
                  {blog.title}
                </Link>
                <p className="text-gray-600 text-sm">{blog.date}</p>
                <p className="text-gray-700 mt-4">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
