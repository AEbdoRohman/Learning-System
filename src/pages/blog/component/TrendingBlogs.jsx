import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Cookies from "universal-cookie";

const TrendingBlogs = () => {
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
    return <div className="h-screen text-center text-xl my-10">Loading...</div>;
  }
  return (
    <div className="w-[99%] md:w-[25%] mt-[2%] mb-[8%] py-[1%] px-[2%] bg-[#f3f4f6] rounded-lg text-[1.25rem] text-center">
      <h1 className="block text-[1.7rem] font-[700] pb-[6%] mb-[10%] text-mainColor px-[1%] border-b-[2px] border-[#b4b4b4] text-center">
        المدونات الرائجة
      </h1>
      <div className="h-[70vh] overflow-auto px-[1%]">
        {blog.map((blog) => (
          <div
            key={blog.id}
            className="flex items-center justify-between text-xl  font-semibold py-2 cursor-pointer hover:text-mainColor  rounded-lg  transition-all duration-200"
          >
            <img
              src={blog.image}
              className="w-[20%] mx-[3%] rounded-[10%]"
              alt=""
            />
            <p className="text-sm">{blog.title}</p>
            {i18n.language === "ar" ? (
              <IoIosArrowBack className="mt-1 mr-1" />
            ) : (
              <IoIosArrowForward className="mt-1 ml-[2%]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingBlogs;
