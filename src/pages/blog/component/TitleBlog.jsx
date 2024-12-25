const TitleBlog = () => {
  return (
    <div className="flex items-center flex-col justify-center  py-4">
      <h1 className="block text-xl md:text-3xl font-bold text-mainColor px-4 my-4 text-center">
        بعض النصائح التي سوف تفيدك و تطور من مهاراتك الدراسية و الفنية و العملية
      </h1>
      <div className="text-gray-600 font-semibold flex items-center mb-4">
        <p>2024</p>
        <p className="px-1">يونيه</p>
        <p>13</p>
      </div>
      <img
        src="/src/assets/images/modawana.jpg"
        alt="image"
        className=" w-full md:w-11/12 h-40 object-cover rounded-lg"
      />
    </div>
  );
};

export default TitleBlog;
