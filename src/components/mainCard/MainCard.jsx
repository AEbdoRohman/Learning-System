/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MainCard = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  md:mx-10 rounded-lg">
      {data.map((item) => (
        <Link
          to={`${item.link}`}
          key={item.id}
          className="shadow-lg rounded-lg group"
        >
          <div className="overflow-hidden h-48 rounded-t-lg ">
            <img
              src="/logo.png"
              className="w-full h-48 rounded-t-md group-hover:scale-105 duration-300 ease-in-out"
              alt="image"
            />
          </div>

          <div className="flex items-center justify-center py-4">
            <h1 className="text-2xl font-bold mx-4 my-2">{item.name}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MainCard;
