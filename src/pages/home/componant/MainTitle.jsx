/* eslint-disable react/prop-types */
const MainTitle = ({ title, description }) => {
  return (
    <div className="element-center flex-col my-8">
      <h1 className="text-center text-2xl md:text-4xl font-bold  mb-[15px] text-mainColor">
        {title}
      </h1>
      <p className="text-center w-11/12 md:w-10/12 text-md md:text-xl text-gray-800  ">
        {description}
      </p>
    </div>
  );
};

export default MainTitle;
