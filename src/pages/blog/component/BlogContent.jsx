/* eslint-disable react/prop-types */
// مكون محتوى المدونة
const BlogContent = ({ blog }) => {
  return (
    <div className="w-[99%] md:w-[70%]">
      <div className="mt-[2%] mb-[8%] py-[3%] px-[5%] rounded-lg">
        {[1, 2, 3].map((index) => (
          <div className="" key={index}>
            <h1 className="block mb-2 mt-4 font-semibold text-xl">
              {blog.title}
            </h1>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogContent;
