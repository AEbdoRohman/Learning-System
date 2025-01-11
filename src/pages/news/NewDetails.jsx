import { useTranslation } from "react-i18next";
import Loading from "../../layouts/Loading";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseurl } from "../../api/api";
import { useParams } from "react-router-dom";

const NewDetails = () => {
  const { i18n } = useTranslation();
  const [blogs, setBlogs] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${baseurl}/blog/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 5|1Q8vzifRZTUdzM51sJkxIOuQ0uCqoAcR31EaiC9Ea452fb53",
            // Authorization: `Bearer ${token}`,
            lang: i18n.language,
          },
        });
        setBlogs(res.data.data);
        console.log(res.data.data);
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
    <div className="container mx-auto min-h-screen mt-28 md:mt-32 mb-10 px-4">
      <h1 className="text-4xl font-bold text-blue-400 text-center mb-8">
        بروتوكول تعاون
      </h1>

      <div className="flex flex-col py-2">
        <h1 className="text-2xl font-bold text-center m-4">{blogs.title}</h1>
        <p
          className="overflow-hidden text-gray-700 mx-6"
          dangerouslySetInnerHTML={{ __html: blogs.content }}
        ></p>
      </div>
    </div>
  );
};

export default NewDetails;
