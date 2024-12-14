import { FaPhoneAlt } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <section>
      <div className="flex flex-col justify-around items-center pe-[15px]">
        <FaFacebookF className="text-[25px]  my-[40px] md:my-[50px]" />
        <FaSquareXTwitter className="text-[25px]  my-[40px] md:my-[30px]" />
        <FaInstagramSquare className="text-[25px]  my-[40px] md:my-[30px]" />
        <FaTiktok className="text-[25px]  my-[50px] md:my-[40px]" />
        <FaPhoneAlt className="text-[25px]  my-[50px] md:my-[40px]" />
      </div>
    </section>
  );
};

export default SocialIcons;
