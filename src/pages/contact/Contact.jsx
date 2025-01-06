import { useEffect } from "react";

const Contact = () => {
  const contacts = [
    {
      name: "دكتور / سيد المنير",
      title: "رئيس مجلس الإدارة",
      phones: ["جمهورية مصر العربية: 01006611222 002"],
    },
    {
      name: "دكتورة / سالي زكى",
      title: "نائب رئيس مجلس الإدارة والمدير العام",
      phones: [
        "جمهورية مصر العربية: 01006085683 002",
        "المملكة العربية السعودية: 535074210 00966",
      ],
    },
    {
      name: "مهندسة / سها زكي",
      title: "المديرة التنفيذية",
      phones: ["جمهورية مصر العربية: 01003572300 002"],
    },
    {
      name: "مهندس / أيمن قاسم",
      title: "المدير التنفيذي",
      phones: ["المملكة العربية السعودية: 568498820 00966"],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto min-h-screen mt-28 md:mt-32 mb-10 px-4">
      <h1 className="text-4xl font-bold text-blue-400 text-center mb-8 ">
        اتصل بنا
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {/* Card Section */}
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="bg-gray-200 shadow-lg rounded-lg px-8 py-6"
          >
            <h2 className="text-2xl font-semibold text-rose-800 mb-2">
              {contact.name}
            </h2>
            <p className="text-gray-600 mx-4 mb-2">{contact.title}</p>
            <div>
              <p className="text-lg md:text-xl font-bold">موبايل:</p>
              {contact.phones.map((phone, phoneIndex) => (
                <div key={phoneIndex}>
                  <p className="text-sm md:text-lg text-gray-800 mx-4 mt-2">
                    {phone}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Email Section */}
      <div className="flex items-center justify-center gap-6  md:gap-8 mt-8 bg-gray-100 rounded-lg p-2 md:p-6 text-center">
        <h2 className="text-2xl font-semibold text-rose-800">
          بريد إلكتروني :
        </h2>
        <p className="text-red-600 text-lg font-bold">Info@cia-cd.com</p>
      </div>
    </div>
  );
};

export default Contact;
