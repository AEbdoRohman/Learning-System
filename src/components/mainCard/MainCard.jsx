/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MainCard = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-10 rounded-lg">
      {data.map((item) => (
        <Link
          to={`${item.id}`}
          key={item.id}
          className="bg-blue-gray-100 rounded-lg group"
        >
          <div className="overflow-hidden rounded-t-lg ">
            <img
              src="/images/course-30.webp"
              className="w-full h-auto rounded-t-md group-hover:scale-105 duration-300 ease-in-out"
              alt="image"
            />
          </div>

          <div className="flex items-center justify-center py-2">
            <h1 className="text-2xl font-bold m-4">{item.name}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MainCard;
