import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { baseurl } from "../../api/api";
import Loading from "../../layouts/Loading";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const [contacts, setContacts] = useState([]);

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

    feathdata();

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
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {/* Card Section */}
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="bg-gray-200 shadow-lg rounded-lg px-8 py-6"
          >
            <h2 className="text-2xl font-semibold text-rose-800 mb-1">
              {contact.name}
            </h2>
            <p className="text-gray-600 mx-4 mb-2">{contact.description}</p>
            <div>
              <p className="text-lg md:text-xl font-bold">
                {t("registration.phone")}:
              </p>
              <p className="text-gray-800 mx-4 mt-2">{contact.phone[0]}</p>
              <p className="text-gray-800 mx-4 mt-2">{contact.phone[1]}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Email Section */}
      <div className="flex items-center justify-center gap-6  md:gap-8 mt-8 bg-gray-100 rounded-lg p-2 md:p-6 text-center">
        <h2 className="text-2xl font-semibold text-rose-800">
          {t("registration.email")}:
        </h2>
        <p className="text-red-600 text-lg font-bold">Info@cia-cd.com</p>
      </div>
    </div>
  );
};

export default Contact;
