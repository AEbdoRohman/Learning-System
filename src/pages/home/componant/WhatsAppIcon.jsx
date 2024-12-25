import { Link } from "react-router-dom";

const WhatsAppIcon = () => {
  return (
    <div className="fixed  bottom-[30px] left-[30px] z-[100] w-[35px] h-[35px] md:bottom-[40px] md:left-[40px] md:z-[100] md:w-[45px] md:h-[45px] md: cursor-pointer">
      <Link
        to="https://wa.me/pnoneNumber?text=التواصل%20مع%20IAC."
        target="_blank"
      >
        <img src="/src/assets/images/whatsapp-icon-seeklogo.svg" alt="" />
      </Link>
    </div>
  );
};

export default WhatsAppIcon;
