/* eslint-disable react/prop-types */
const MainTitle = ({ title }) => {
  return (
    <div className="element-center flex-col my-8">
      <h1 className="text-center text-2xl md:text-4xl font-bold  mb-[15px] text-mainColor">
        {title}
      </h1>

      {/* <p
        className="w-11/12 md:w-10/12 text-sm md:text-lg font-bold"
        dangerouslySetInnerHTML={{ __html: description }}
      /> */}
    </div>
  );
};

export default MainTitle;
