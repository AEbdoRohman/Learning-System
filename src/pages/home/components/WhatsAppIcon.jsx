import React from "react";
import { Link } from "react-router-dom";

const WhatsAppIcon = () => {
  return (
    <div className="fixed  bottom-[30px] left-[30px] z-[100] w-[50px] h-[50px] md:bottom-[40px] md:left-[40px] md:z-[100] md:w-[65px] md:h-[65px] md: cursor-pointer">
      <Link
        to="https://wa.me/pnoneNumber?text=التواصل%20مع%20IAC."
        target="_blank">
        <img src="/src/assets/images/whatsapp-icon-seeklogo.svg" alt="" />
      </Link>
    </div>
  );
};

export default WhatsAppIcon;
