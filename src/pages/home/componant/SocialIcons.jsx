import { FaPhoneAlt } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <section className="fixed right-2">
      <div className="flex flex-col ">
        <FaFacebookF className="text-xl my-4 cursor-pointer hover:text-mainColor transition-all duration-200" />
        <FaSquareXTwitter className="text-xl my-4 cursor-pointer hover:text-mainColor transition-all duration-200" />
        <FaInstagramSquare className="text-xl my-4 cursor-pointer hover:text-mainColor transition-all duration-200" />
        <FaTiktok className="text-xl my-4 cursor-pointer hover:text-mainColor transition-all duration-200" />
        <FaPhoneAlt className="text-xl my-4 cursor-pointer hover:text-mainColor transition-all duration-200" />
      </div>
    </section>
  );
};

export default SocialIcons;
