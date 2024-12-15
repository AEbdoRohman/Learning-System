import { FaPhoneAlt } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <section>
      <div className="flex flex-col justify-around items-center pe-[15px]">
        <FaFacebookF className="text-[25px]  my-[.8rem] md:my-[1.2rem] cursor-pointer hover:text-mainColor transition-all duration-200" />
        <FaSquareXTwitter className="text-[25px]  my-[.8rem] md:my-[1.2rem] cursor-pointer hover:text-mainColor transition-all duration-200" />
        <FaInstagramSquare className="text-[25px]  my-[.8rem] md:my-[1.2rem] cursor-pointer hover:text-mainColor transition-all duration-200" />
        <FaTiktok className="text-[25px]  my-[.8rem] md:my-[1.2rem] cursor-pointer hover:text-mainColor transition-all duration-200" />
        <FaPhoneAlt className="text-[25px]  my-[.8rem] md:my-[1.2rem] cursor-pointer hover:text-mainColor transition-all duration-200" />
      </div>
    </section>
  );
};

export default SocialIcons;
