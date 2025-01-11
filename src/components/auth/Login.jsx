import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Loading from "../../layouts/Loading";
import axios from "axios";
import Cookies from "universal-cookie";
import { baseurl } from "../../api/api";
const Login = () => {
  const { t } = useTranslation();
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

    setLoading(true);
    try {
      // Send data to the API
      const response = await axios.post(`${baseurl}/auth/login`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Response:", response.data);
      if (response.status === 200) {
        const token = response.data.token;
        console.log("Token:", token);
        cookies.set("authToken", token);
        navigate("/");
      }

      setLoading(false);
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Invalid email or password");
      setLoading(false);
    }
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
              {t("auth.name")}
            </label>
            <input
              required
              type="text"
              className="p-2 border-[1px] border-gray-300 w-full rounded-lg bg-gray-50 focus:border-gray-500 focus:outline-none"
              id="name"
              name="name"
              value={formData.name}
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
              value={formData.password}
              onChange={handleChange}
            />
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

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </section>
  );
};

export default Login;
