import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Instructor = () => {
  return (
    <div className="flex align-center flex-col md:flex-row gap-4">
      <div className="w-2/3 md:w-1/3 mx-auto h-full">
        <img
          src="/instructor.webp"
          alt="Instructor"
          className="w-full h-fullobject-cover rounded-lg"
        />
      </div>
      <div className="w-full md:w-2/3">
        <div className="mb-4">
          <h3 className="font-bold text-2xl">James Carlson </h3>
          <p className="text-blue-600 font-bold text-sm">Senior Designer </p>
        </div>
        <p className="mb-4 text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos dolore
          commodi recusandae obcaecati consectetur quas accusamus, perferendis
          cum laboriosam veritatis nihil similique consequuntur itaque nulla vel
          alias ad dolorem?
        </p>
        <ul className="flex justify-center gap-8">
          <li className="bg-gray-200 p-3 rounded-full  ease-out duration-300 hover:bg-blue-800 hover:text-white cursor-pointer">
            <a href="">
              <FaFacebookF />
            </a>
          </li>
          <li className="bg-gray-200 p-3 rounded-full  ease-out duration-300 hover:bg-blue-800 hover:text-white cursor-pointer">
            <a href="">
              <FaLinkedinIn />
            </a>
          </li>
          <li className="bg-gray-200 p-3 rounded-full  ease-out duration-300 hover:bg-blue-800 hover:text-white cursor-pointer">
            <a href="">
              <FaXTwitter />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Instructor;
