import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loading from "../../layouts/Loading";
import axios from "axios";
import { baseurl } from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    name: {
      nameAr: "",
      nameEn: "",
    },
    nationality: "",
    qualification: "",
    job: "",
    phone: "",
    country: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const arabicNationalities = [
    "مصر",
    "السعودية",
    "الإمارات",
    "الكويت",
    "قطر",
    "عمان",
    "البحرين",
    "الأردن",
    "فلسطين",
    "لبنان",
    "المغرب",
    "الجزائر",
    "تونس",
    "ليبيا",
    "السودان",
    "اليمن",
    "موريتانيا",
    "جيبوتي",
    "الصومال",
    "سوريا",
    "العراق",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    // update formdata
    if (id === "nameAr" || id === "nameEn") {
      setFormdata({
        ...formdata,
        name: {
          ...formdata.name,
          [id]: value,
        },
      });
    } else {
      setFormdata({
        ...formdata,
        [id]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // check if all fields are filled
    if (
      !formdata.name.nameAr ||
      !formdata.name.nameEn ||
      !formdata.nationality ||
      !formdata.qualification ||
      !formdata.job ||
      !formdata.phone ||
      !formdata.country ||
      !formdata.email
    ) {
      setError(t("auth.fillAllFields"));
      return;
    }

    setError("");
    setLoading(true);

    // send data to the API
    const dataToSend = {
      name: {
        en: formdata.name.nameEn, // send name in English
        ar: formdata.name.nameAr, // send name in Arabic
      },
      nationality: formdata.nationality,
      country: formdata.country,
      email: formdata.email,
      phone: formdata.phone,
      work: formdata.job,
      degree: formdata.qualification,
    };

    try {
      // send data to the API
      await axios.post(`${baseurl}/subscripte/${id}`, dataToSend, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("تم التسجيل بنجاح!");
      navigate("/");
      console.log("Response");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handelEnroll = async (courseId) => {
    try {
      const response = await axios.post(
        `${baseurl}/subscripte/${courseId}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + "7|2Ht6CFZ4SrHd5D61YUdGMxyvZNY2DDofAWXBcAxFf136b392",
            lang: i18n.language,
          },
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) return <Loading />;

  return (
    <section className="mt-20 w-full h-full py-10 flex items-start justify-center">
      <div className="px-6 py-4 w-10/12 md:w-1/2 bg-gray-200 rounded-2xl">
        <form action="" onSubmit={handleSubmit}>
          {/* Name (Arabic) */}
          <div className="flex flex-col w-full">
            <label htmlFor="nameAr" className="block mb-3 px-2">
              {t("auth.nameAr")}
            </label>
            <input
              required
              type="text"
              id="nameAr"
              name="nameAr"
              value={formdata.name.nameAr}
              onChange={handleInputChange}
              className="p-2 border-[1px] border-gray-300 w-full rounded-lg bg-gray-50 focus:border-gray-500 focus:outline-none"
              placeholder={t("auth.nameAr")}
            />
          </div>

          {/* Name (English) */}
          <div className="flex flex-col w-full mt-2">
            <label htmlFor="nameEn" className="block mb-3 px-2">
              {t("auth.nameEn")}
            </label>
            <input
              required
              type="text"
              name="nameEn"
              id="nameEn"
              value={formdata.name.nameEn}
              onChange={handleInputChange}
              className="p-2 border-[1px] border-gray-300 w-full rounded-lg bg-gray-50 focus:border-gray-500 focus:outline-none"
              placeholder={t("auth.nameEn")}
            />
          </div>

          {/* Nationality */}
          <div className="flex flex-col w-full mt-2">
            <label htmlFor="nationality" className="block mb-3 px-2">
              {t("auth.nationality")}
            </label>
            <select
              required
              id="nationality"
              value={formdata.nationality}
              onChange={handleInputChange}
              className="p-2 border-[1px] border-gray-300 w-full rounded-lg bg-gray-50 focus:border-gray-500 focus:outline-none"
            >
              <option value="">{t("auth.choose")}</option>
              {arabicNationalities.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Qualification */}
          <div className="flex flex-col w-full mt-2">
            <label htmlFor="qualification" className="block mb-3 px-2">
              {t("auth.qualification")}
            </label>
            <input
              required
              type="text"
              id="qualification"
              value={formdata.qualification}
              onChange={handleInputChange}
              className="p-2 border-[1px] border-gray-300 w-full rounded-lg bg-gray-50 focus:border-gray-500 focus:outline-none"
              placeholder={t("auth.qualification")}
            />
          </div>

          {/* Job */}
          <div className="flex flex-col w-full mt-2">
            <label htmlFor="job" className="block mb-3 px-2">
              {t("auth.job")}
            </label>
            <input
              required
              type="text"
              id="job"
              value={formdata.job}
              onChange={handleInputChange}
              className="p-2 border-[1px] border-gray-300 w-full rounded-lg bg-gray-50 focus:border-gray-500 focus:outline-none"
              placeholder={t("auth.job")}
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col w-full mt-2">
            <label htmlFor="phone" className="block mb-3 px-2">
              {t("auth.phone")}
            </label>
            <input
              required
              type="text"
              id="phone"
              value={formdata.phone}
              onChange={handleInputChange}
              className="p-2 border-[1px] border-gray-300 w-full rounded-lg bg-gray-50 focus:border-gray-500 focus:outline-none"
              placeholder={t("auth.phone")}
            />
          </div>

          {/* Country */}
          <div className="flex flex-col w-full mt-2">
            <label htmlFor="country" className="block mb-3 px-2">
              {t("auth.country")}
            </label>
            <input
              required
              type="text"
              id="country"
              value={formdata.country}
              onChange={handleInputChange}
              className="p-2 border-[1px] border-gray-300 w-full rounded-lg bg-gray-50 focus:border-gray-500 focus:outline-none"
              placeholder={t("auth.country")}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col w-full mt-2">
            <label htmlFor="email" className="block mb-3 px-2">
              {t("auth.email")}
            </label>
            <input
              required
              type="email"
              id="email"
              value={formdata.email}
              onChange={handleInputChange}
              className="p-2 border-[1px] border-gray-300 w-full rounded-lg bg-gray-50 focus:border-gray-500 focus:outline-none"
              placeholder={t("auth.email")}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
              onClick={() => handelEnroll(id)}
            >
              {t("auth.register")}
            </button>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default Register;
