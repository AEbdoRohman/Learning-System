import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loading from "../../layouts/Loading";
const Register = () => {
  const { t } = useTranslation();
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    nationality: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const arabicNationalites = [
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
    "فلسطين",
    "الأردن",
    "السعودية",
    "الكويت",
    "الجزائر",
    "لبنان",
    "الإمارات",
    "قطر",
    "البحرين",
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleInputChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform basic validation
    if (
      !formdata.name ||
      !formdata.email ||
      !formdata.phone ||
      !formdata.password ||
      !formdata.nationality
    ) {
      setError(t("auth.fillAllFields"));
      return;
    }

    console.log(formdata);
    setError("");
    setLoading(true);

    // try {
    //   const response = await axios.post("https://your-backend-url/register", {
    //     ...formdata,
    //     phone: `${selectedCountry.value}${phone}`,
    //     country: selectedCountry.label,
    //   });

    //   console.log("Registration successful:", response.data);
    //   navigator("/");
    // } catch (err) {
    //   setError(err.response?.data?.message || "Something went wrong");
    // } finally {
    //   setLoading(false);
    // }
  };

  if (loading) return <Loading />;
  return (
    <section className="mt-20 w-full  h-full py-10  flex items-start justify-center">
      <div className="px-6 py-4 w-10/12  md:w-1/2 bg-gray-200 rounded-2xl">
        <h1 className="text-xl font-bold mb-4 text-center">
          {t("auth.createyouraccount")}
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col w-full">
            <label htmlFor="name" className="block mb-3 px-2 ">
              {t("auth.name")}
            </label>
            <input
              required
              placeholder={t("auth.nameplceholder")}
              type="text"
              className="p-2 border-[1px] border-gray-300 w-full rounded-lg bg-gray-50 focus:border-gray-500 focus:outline-none"
              id="name"
              value={formdata.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col w-full mt-2">
            <label htmlFor="email" className="block mb-3 px-2 ">
              {t("auth.email")}
            </label>
            <input
              required
              type="email"
              id="email"
              value={formdata.email}
              onChange={handleInputChange}
              className="p-2 border-[1px] border-gray-300 w-full rounded-lg bg-gray-50 focus:border-gray-500 focus:outline-none"
              placeholder={t("auth.emailplceholder")}
            />
          </div>

          <div className="mt-2">
            <label htmlFor="phone" className="block    mb-2">
              {t("auth.phone")}
            </label>
            <div className="flex items-center gap-2 bg-gray-50 border-[1px] border-gray-300 rounded-lg focus-within:border-gray-500">
              <input
                type="text"
                id="phone"
                placeholder=" 20 100 123 4567"
                value={formdata.phone}
                onChange={handleInputChange}
                className="p-2 border-[1px] border-gray-300 w-full rounded-lg bg-gray-50 focus:border-gray-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col w-full ">
            <label htmlFor="password" className="block mb-3 px-2 ">
              {t("auth.password")}
            </label>
            <input
              required
              type="password"
              id="password"
              value={formdata.password}
              onChange={handleInputChange}
              className="p-2 border-[1px] border-gray-300 w-full rounded-lg bg-gray-50 focus:border-gray-500 focus:outline-none"
              placeholder="••••••••"
            />
          </div>
          <div className="flex flex-col w-full ">
            <label htmlFor="nationality" className="block    my-[8px] ">
              {t("auth.nationality")}
            </label>
            <select
              required
              type="text"
              id="nationality"
              value={formdata.nationality}
              onChange={handleInputChange}
              className="p-2 border-[1px] border-gray-300 w-full rounded-lg bg-gray-50 focus:border-gray-500 focus:outline-none"
            >
              <option value="">{t("auth.choose")} </option>
              {arabicNationalites.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex flex-row-reverse justify-between mt-[8px]">
            <div></div>
            <div className="mt-[1%] mb-[2%]">
              <input
                type="checkbox"
                id="remember"
                className="mx-[5px] mt-[10px]"
              />
              <label htmlFor="remember" className="text-[14px]">
                {t("auth.registermsg")}
              </label>
            </div>
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              className="mx-auto  w-[75%] text-white rounded-[10px]  py-[8px] mt-[10px] bg-[#525fe1]"
            >
              {t("auth.register")}
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center mt-2">
          <a href="">
            <img
              src="/src/assets/images/login-social.png"
              alt="login-social.png"
            />
          </a>
        </div>
        <div className="flex items-center justify-center pb-[10px]">
          <h1 className="font-semibold">
            {t("auth.noAccount")}
            <Link
              to="/login"
              className="text-[#525fe1] hover:underline  px-[5px]"
            >
              {t("auth.registerNow")}
            </Link>
          </h1>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </section>
  );
};

export default Register;
