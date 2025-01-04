import { useEffect, useState } from "react";
import BlogContent from "./component/BlogContent";
import TitleBlog from "./component/TitleBlog";
import TrendingBlogs from "./component/TrendingBlogs";
import Breadcrumb from "../../components/breadCrumb/Breadcrumb";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import Loading from "../../layouts/Loading";
import { useTranslation } from "react-i18next";

const BlogPage = () => {
  const { i18n } = useTranslation();
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const cookies = new Cookies();
  const token = cookies.get("authToken");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `https://qourb.com/api/blog/${id}/show`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
              lang: i18n.language,
            },
          }
        );
        setBlog(response.data);
        console.log(response.data);
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
      <div className=' min-h-[100vh] bg-[url("/src/assets/images/background.png")] bg-cover bg-center '>
        <div className="py-[4.8rem] container ">
          {/* TitleBlog */}
          <TitleBlog blog={blog} />

          <div className="flex flex-col md:flex-row items-start justify-between">
            {/* BlogContent */}
            <BlogContent blog={blog} />

            {/* TrendingBlogs */}
            <TrendingBlogs />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
