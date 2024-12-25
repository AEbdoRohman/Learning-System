import { useEffect } from "react";
import BlogContent from "./component/BlogContent";
import TitleBlog from "./component/TitleBlog";
import TrendingBlogs from "./component/TrendingBlogs";
import Breadcrumb from "../../components/breadCrumb/Breadcrumb";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="mt-20">
      <Breadcrumb />
      <div className=' min-h-[100vh] bg-[url("/src/assets/images/background.png")] bg-cover bg-center '>
        <div className="py-[4.8rem] container ">
          {/* TitleBlog */}
          <TitleBlog />

          <div className="flex flex-col md:flex-row items-start justify-between">
            {/* BlogContent */}
            <BlogContent />

            {/* TrendingBlogs */}
            <TrendingBlogs />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
