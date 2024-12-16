/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Breadcrumb = ({ items }) => {
  return (
    <nav
      className="container text-gray-600 text-sm mb-6 "
      aria-label="breadcrumb"
    >
      <ul className="list-none p-0 inline-flex space-x-2 text-lg">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.to ? (
              <Link to={item.to} className="text-blue-500 hover:text-blue-700">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-500">{item.label}</span>
            )}
            {index < items.length - 1 && <span className="mx-2">/</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
