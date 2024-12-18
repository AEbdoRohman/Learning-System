import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Login = () => {
  const { t } = useTranslation();
  return (
    <section className="fixed top-0 left-0  w-full h-[100vh]  bg-black bg-opacity-50 z-[100] mt-[0px] flex items-center justify-center">
      <div className="p-4 w-[500px] mx-[20px] h-[513px] bg-white rounded-[30px]">
        <div className="flex  justify-between">
          <h1 className="text-[20px] font-bold">{t("auth.login")}</h1>
          <span className="text-[20px] font-bold">
            <Link to={"/"}>x</Link>
          </span>
        </div>
        <form action="">
          <div className="flex flex-col w-full mt-[20px]">
            <label htmlFor="email" className="block  mb-[8px] ">
              {t("auth.email")}
            </label>
            <input
              required
              type="email"
              className="px-[10px]  border-gray-400 border-[1px] w-full h-[40px] rounded-[10px] bg-gray-100 focus:border-[#525fe1] focus:outline-none"
              id="email"
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
              className="border-gray-400 px-[10px]  border-[1px] w-full h-[40px] rounded-[10px] bg-gray-100 focus:border-[#525fe1] focus:outline-none"
              id="password"
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
        <div className="flex justify-between items-center mt-[30px]">
          <div className="w-[46%] h-[3px] bg-gray-200"></div>
          <span className="ms-[2px] ">أو</span>
          <div className="w-[46%] h-[3px] bg-gray-200"></div>
        </div>
        <div className="flex items-center justify-center mt-[18px]">
          <a href="">
            <img
              src="/src/assets/images/login-social.png"
              alt="login-social.png"
            />
          </a>
        </div>
        <div className="flex items-center justify-center gap-1 mt-[18px]">
          <h1 className="font-semibold">{t("auth.noAccount")}</h1>
          <Link to="/register" className="text-[#525fe1] hover:underline">
            {t("auth.registerNow")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
