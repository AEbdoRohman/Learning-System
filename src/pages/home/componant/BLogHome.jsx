import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Loading from "../../../layouts/Loading";
import axios from "axios";
import { baseurl } from "../../../api/api";

const BLogHome = () => {
  const { t, i18n } = useTranslation();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${baseurl}/blog`, {
          headers: {
            "Content-Type": "application/json",
            lang: i18n.language,
          },
        });
        setBlogs(res.data.blogs);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      }
    };

    fetchBlog();
    window.scrollTo(0, 0);
  }, [i18n.language]);

  if (loading) return <Loading />;

  // Display only the first 3 blogs
  const displayedBlogs = blogs.slice(0, 3);

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-row-reverse items-center justify-between p-3 border-[1px] border-mainColor border-dashed">
          <Link
            to={"/news"}
            className="text-xl font-bold hover:text-blue-500 duration-500 ease-in-out"
          >
            {" "}
            {t("modawanabox.all")}{" "}
          </Link>
          <p className="flex items-center text-lg font-bold">
            {t("modawanabox.read")}
            {i18n.language === "ar" ? (
              <IoIosArrowBack size={22} className="text-blue-700 mt-1" />
            ) : (
              <IoIosArrowForward size={22} className="text-blue-700 mt-1" />
            )}
          </p>
        </div>
        <div className="mt-10 mr-4 md:mx-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 md:gap-4 shadow-lg py-2 bg-gray-100">
          {displayedBlogs.map((item) => (
            <Link
              to={`/news/academic/${item.id}`}
              key={item.id}
              className="rounded-md cursor-pointer w-full relative transition-all duration-1000 group overflow-hidden"
            >
              <img
                src="/logo.jpeg"
                className="rounded-md w-full transform transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-3"
                alt=""
              />
              <div className="absolute bg-black bg-opacity-50 w-full h-full top-0 left-0 rounded-md flex items-center justify-center text-center p-3 opacity-0 transform transition-all duration-700 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0">
                <p className="text-lg md:text-2xl text-white px-2 border-[1px] border-white w-full h-full font-bold flex items-center justify-center rounded-lg transform scale-90 group-hover:scale-100 transition-transform duration-700">
                  {item.title}{" "}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BLogHome;
