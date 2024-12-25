// مكون محتوى المدونة
const BlogContent = () => {
  return (
    <div className="w-[99%] md:w-[70%]">
      <div className="mt-[2%] mb-[8%] py-[3%] px-[5%] rounded-lg">
        {["Title", "Title", "Title"].map((title, index) => (
          <div className="" key={index}>
            <h1 className="block mb-2 mt-4 font-semibold text-xl">{title}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus laboriosam quo reprehenderit nisi libero deserunt
              magni. Doloremque fugiat, aliquam, quo eos officia neque nisi,
              quos voluptate atque voluptatem sint dolor.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogContent;
