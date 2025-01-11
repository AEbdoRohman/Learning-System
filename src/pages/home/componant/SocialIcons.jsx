import axios from "axios";
import { useEffect, useState } from "react";

import { FaFacebookF, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import { baseurl } from "../../../api/api";

const SocialIcons = () => {
  const [social, setSocial] = useState({});

  useEffect(() => {
    const fetchSocial = async () => {
      try {
        const response = await axios.get(`${baseurl}/show/media-logo/user`, {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 5|1Q8vzifRZTUdzM51sJkxIOuQ0uCqoAcR31EaiC9Ea452fb53",
          },
        });
        setSocial(response.data.data);
        console.log(social);
        console.log(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSocial();
  }, []);

  return (
    <section className="fixed right-2 -z-50">
      <div className="flex flex-col ">
        <a href={social.facebook} target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="text-xl my-4 cursor-pointer hover:text-mainColor transition-all duration-200" />
        </a>
        <a href={social.twitter} target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter className="text-xl my-4 cursor-pointer hover:text-mainColor transition-all duration-200" />
        </a>
        <a href={social.youtube} target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-xl my-4 cursor-pointer hover:text-mainColor transition-all duration-200" />
        </a>
      </div>

      {/* <FaTiktok className="text-xl my-4 cursor-pointer hover:text-mainColor transition-all duration-200" />
          <FaPhoneAlt className="text-xl my-4 cursor-pointer hover:text-mainColor transition-all duration-200" /> */}
    </section>
  );
};

export default SocialIcons;
