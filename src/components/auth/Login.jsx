import { Link } from "react-router-dom";
const Login = () => {
  return (
    <section className="fixed top-0 left-0  w-full h-[100vh]  bg-black bg-opacity-50 z-[100] mt-[0px] flex items-center justify-center">
      <div className="p-4 w-[500px] mx-[20px] h-[513px] bg-white rounded-[30px]">
        <div className="flex justify-between">
          <span className="text-[20px] font-bold">
            <Link to={"/home"}>x</Link>
          </span>
          <h1 className="text-[20px] font-bold">سجل الدخول لحسابك</h1>
        </div>
        <form action="">
          <div className="flex flex-col w-full mt-[20px]">
            <label htmlFor="email" className="block text-right mb-[8px] ">
              البريد الالكتروني
            </label>
            <input
              required
              type="email"
              className="px-[10px] text-right border-gray-400 border-[1px] w-full h-[40px] rounded-[10px] bg-gray-100 focus:border-[#525fe1] focus:outline-none"
              id="email"
            />
          </div>
          <div className="flex flex-col w-full mt-[5px]">
            <label htmlFor="password" className="block text-right mb-[8px] ">
              كلمة المرور
            </label>
            <input
              required
              type="password"
              placeholder="••••••••"
              className="border-gray-400 px-[10px] text-right border-[1px] w-full h-[40px] rounded-[10px] bg-gray-100 focus:border-[#525fe1] focus:outline-none"
              id="password"
            />
          </div>
          <div className="flex justify-between mt-[8px]">
            <div>
              <a href="/" className="text-[#525fe1] hover:underline">
                هل نسيت كلمة المرور؟
              </a>
            </div>
            <div>
              <label htmlFor="remember">تذكرني</label>
              <input type="checkbox" id="remember" className="mx-[5px]" />
            </div>
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              className="mx-auto  w-[75%] text-white rounded-[10px]  py-[8px] mt-[20px] bg-[#525fe1]"
            >
              تسجيل الدخول{" "}
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
        <div className="flex items-center justify-center mt-[18px]">
          <h1 className="font-semibold">
            ليس لديك حساب ؟{" "}
            <Link to="/register" className="text-[#525fe1] hover:underline">
              سجل الان{" "}
            </Link>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Login;
