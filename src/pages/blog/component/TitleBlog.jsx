/* eslint-disable react/prop-types */
const TitleBlog = ({ blog }) => {
  return (
    <div className="flex items-center flex-col justify-center  py-4">
      <h1 className="block text-xl md:text-3xl font-bold text-mainColor px-4 my-4 text-center">
        {blog.title}
      </h1>
      <div className="text-gray-600 font-semibold flex items-center mb-4">
        <p>{blog.created_at}</p>
      </div>
      <img
        src={blog.image}
        alt="image"
        className=" w-full md:w-11/12 h-40 object-cover rounded-lg"
      />
    </div>
  );
};

export default TitleBlog;
