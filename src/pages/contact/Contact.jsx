import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { baseurl } from "../../api/api";
import Loading from "../../layouts/Loading";
import { FaFacebookF, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const [contacts, setContacts] = useState([]);
  const [social, setSocial] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const feathdata = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseurl}/contact-us`, {
          headers: {
            "Content-Type": "application/json",

            lang: i18n.language,
          },
        });
        setContacts(response.data.contacts);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    const feathSitting = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseurl}/show/media-logo/user`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setSocial(response.data.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    feathdata();
    feathSitting();

    window.scrollTo(0, 0);
  }, [i18n.language]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto min-h-screen mt-28 md:mt-32 mb-10 px-4">
      <h1 className="text-4xl font-bold text-blue-400 text-center mb-8">
        {t("registration.contact")}
      </h1>
      <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-3">
        {/* Card Section */}
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="bg-gray-200 shadow-lg rounded-lg px-8 py-6"
          >
            <div className="text-center">
              <p className="text-blue-800 font-bold text-xl mx-4 mt-2">
                {contact.phone[0]}
              </p>
            </div>
            <div className=" text-center">
              <p className="text-blue-800 font-bold text-xl mx-4 mt-2">
                {contact.phone[1]}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Email Section */}
      <div className="flex items-center justify-center gap-8  md:gap-12 mt-8 bg-gray-100 rounded-lg p-2 md:p-6 text-center">
        <div className="text-2xl font-semibold text-rose-800">
          {t("registration.email")}:
          <span className="text-red-600 text-lg font-bold mx-4">
            {social.email}
          </span>
        </div>
        <div className="text-2xl font-semibold text-rose-800">
          {t("registration.whatapp")}:
          <span className="text-red-600 text-lg font-bold mx-4">
            {social.whatsapp}
          </span>
        </div>
      </div>

      <div>
        <div className="mt-4 flex items-center justify-center gap-4">
          <a href={social.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-2xl text-hoverColor hover:text-blue-400 transition-all duration-500 cursor-pointer" />
          </a>
          <a href={social.twitter} target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter className="text-2xl text-hoverColor hover:text-blue-400 transition-all duration-500 cursor-pointer" />
          </a>
          <a href={social.youtube} target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-2xl text-hoverColor hover:text-blue-400 transition-all duration-500 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
