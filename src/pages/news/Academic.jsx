import { useEffect, useState } from "react";
import axios from "axios";
import { baseurl } from "../../api/api";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Loading from "../../layouts/Loading";

const Academic = () => {
  const { i18n } = useTranslation();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${baseurl}/blog`, {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 5|1Q8vzifRZTUdzM51sJkxIOuQ0uCqoAcR31EaiC9Ea452fb53",
            // Authorization: `Bearer ${token}`,
            lang: i18n.language,
          },
        });
        setBlogs(res.data.blogs);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to fetch blogs.");
        setLoading(false);
      }
    };

    fetchBlog();
    window.scrollTo(0, 0);
  }, [i18n.language]);

  if (loading) return <Loading />;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="container mx-auto h-full mt-28 md:mt-40 mb-28">
      {blogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {blogs.map((item) => (
            <Link
              to={`${item.id}`}
              key={item.id}
              className="shadow-lg rounded-lg group pb-4"
            >
              <div className="overflow-hidden rounded-t-lg ">
                <img
                  src="/logo.png"
                  className="w-full h-48 rounded-t-md group-hover:scale-105 duration-300 ease-in-out"
                  alt="image"
                />
              </div>

              <div className="flex flex-col p-4">
                <h1 className="text-2xl font-bold text-center my-2">
                  {item.title}
                </h1>
                {/* <p
                  className="line-clamp-2 overflow-hidden text-gray-700 mx-6"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></p> */}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>No blogs found.</p>
      )}
    </div>
  );
};

export default Academic;
