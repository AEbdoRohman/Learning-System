import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Loading from "../../layouts/Loading";
const Login = () => {
  const { t } = useTranslation();
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);
    setLoading(true);
    setError("");

    // try {
    //   const response = await axios.post(
    //     "https://your-api-endpoint.com/login",
    //     formdata,
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );

    //   console.log("Login successful:", response.data);
    //   navigator("/");
    // } catch (err) {
    //   const errorMessage =
    //     err.response?.data?.message ||
    //     "Failed to login. Please check your credentials.";
    //   setError(errorMessage);
    // } finally {
    //   setLoading(false);
    // }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="w-full h-screen mt-10 flex items-center justify-center">
      <div className="p-8 w-10/12 md:w-1/2 bg-gray-200 rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">
          {t("auth.login")}
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="block  mb-[8px] ">
              {t("auth.email")}
            </label>
            <input
              required
              type="email"
              className="p-2 border-[1px] border-gray-300 w-full rounded-lg bg-gray-50 focus:border-gray-500 focus:outline-none"
              id="email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full mt-[5px] ">
            <label htmlFor="password" className="block  mb-[8px] ">
              {t("auth.password")}
            </label>
            <input
              required
              type="password"
              placeholder="••••••••"
              className="p-2 border-[1px] border-gray-300 w-full rounded-lg bg-gray-50 focus:border-gray-500 focus:outline-none"
              id="password"
              name="password"
              value={formdata.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between mt-[8px]">
            <div>
              <a href="/" className="text-[#525fe1] hover:underline">
                {t("auth.forget")}
              </a>
            </div>
            <div>
              <label htmlFor="remember">{t("auth.remember")}</label>
              <input type="checkbox" id="remember" className="mx-[5px]" />
            </div>
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              className="mx-auto  w-[75%] text-white rounded-[10px]  py-[8px] mt-[20px] bg-[#525fe1]"
            >
              {t("auth.login")}
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center mt-4">
          <a href="">
            <img
              src="/src/assets/images/login-social.png"
              alt="login-social.png"
              className="w-[30px] h-[30px] cursor-pointer"
            />
          </a>
        </div>
        <div className="flex items-center justify-center gap-1 mt-3">
          <h1 className="font-semibold">{t("auth.noAccount")}</h1>
          <Link to="/register" className="text-[#525fe1] hover:underline">
            {t("auth.registerNow")}
          </Link>
        </div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </section>
  );
};

export default Login;
