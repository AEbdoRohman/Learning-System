import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between p-3 border-[1px] border-blue-400 border-dashed">
        <Link to="/blog" className="flex items-center text-[1.2rem]">
          <IoIosArrowBack size={22} className="text-blue-700 mt-1" />
          عرض الكل
        </Link>
        <h3 className="text-[1.2rem] font-bold">اقرأ في المدونة</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] place-items-center my-[20px]">
        {/* <div
        style={{backgroundImage : URL"../assets/images/blog1.jpg"}}
        >

        </div> */}
      </div>
    </div>
  );
};

export default Blog;
