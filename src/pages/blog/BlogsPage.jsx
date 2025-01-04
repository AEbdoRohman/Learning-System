import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Breadcrumb from "../../components/breadCrumb/Breadcrumb";
import axios from "axios";
import Cookies from "universal-cookie";
import Loading from "../../layouts/Loading";
import { useTranslation } from "react-i18next";

const BlogsPage = () => {
  const { i18n } = useTranslation();
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  const cookies = new Cookies();
  const token = cookies.get("authToken");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("https://qourb.com/api/blog", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            lang: i18n.language,
          },
        });
        setBlog(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <section className="mt-20">
      <Breadcrumb />
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blog.map((blog) => (
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
                <p className="text-gray-600 text-sm">{blog.created_at}</p>
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
