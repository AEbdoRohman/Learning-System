import { useState } from "react";
import { toast } from "react-toastify";
import { baseurl } from "../../api/api";
import axios from "axios";

const Inquiries = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
    details: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Send data to API
      const response = await axios.post(`${baseurl}/ask`, formData);
      if (response.status === 200) {
        toast.success("تم إرسال الإستفسار بنجاح!"); // Show success message
        setFormData({
          subject: "",
          name: "",
          email: "",
          details: "",
        }); // Reset form data
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      toast.error("حدث خطأ أثناء إرسال الإستفسار. حاول مرة أخرى."); // Show error message
    }
  };

  return (
    <div className="container mx-auto mt-20 md:mt-32 mb-10">
      <h1 className="text-2xl font-bold mb-4">الإستفسارات</h1>
      <form className="w-1/2 mx-auto" onSubmit={handleSubmit}>
        {/* Subject */}
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-gray-700 font-bold mb-2"
          >
            الموضوع
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="أدخل الموضوع"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded outline-none focus:border-gray-500"
          />
        </div>

        {/* Name */}
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="name"
            style={{ display: "block", marginBottom: "5px" }}
          >
            الإســـــم
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="أدخل الإسم"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded outline-none focus:border-gray-500"
          />
        </div>

        {/* Email */}
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "5px" }}
          >
            البريد الإلكتروني
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="أدخل البريد الإلكتروني"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded outline-none focus:border-gray-500"
          />
        </div>

        {/* Details */}
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="details"
            style={{ display: "block", marginBottom: "5px" }}
          >
            التفاصيـــــل
          </label>
          <textarea
            id="details"
            name="details"
            placeholder="أدخل التفاصيل"
            rows="4"
            value={formData.details}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded outline-none focus:border-gray-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            إرسال
          </button>
        </div>
      </form>
    </div>
  );
};

export default Inquiries;
