import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";

const Register = () => {
  const countries = [
    {
      label: "مصر (+20)",
      value: "+20",
      flag: "https://flagcdn.com/w40/eg.png",
    },
    {
      label: "السعودية (+966)",
      value: "+966",
      flag: "https://flagcdn.com/w40/sa.png",
    },
    {
      label: "الإمارات (+971)",
      value: "+971",
      flag: "https://flagcdn.com/w40/ae.png",
    },
    {
      label: "الكويت (+965)",
      value: "+965",
      flag: "https://flagcdn.com/w40/kw.png",
    },
    {
      label: "قطر (+974)",
      value: "+974",
      flag: "https://flagcdn.com/w40/qa.png",
    },
    {
      label: "عمان (+968)",
      value: "+968",
      flag: "https://flagcdn.com/w40/om.png",
    },
    {
      label: "البحرين (+973)",
      value: "+973",
      flag: "https://flagcdn.com/w40/bh.png",
    },
    {
      label: "الأردن (+962)",
      value: "+962",
      flag: "https://flagcdn.com/w40/jo.png",
    },
    {
      label: "فلسطين (+970)",
      value: "+970",
      flag: "https://flagcdn.com/w40/ps.png",
    },
    {
      label: "لبنان (+961)",
      value: "+961",
      flag: "https://flagcdn.com/w40/lb.png",
    },
    {
      label: "المغرب (+212)",
      value: "+212",
      flag: "https://flagcdn.com/w40/ma.png",
    },
    {
      label: "الجزائر (+213)",
      value: "+213",
      flag: "https://flagcdn.com/w40/dz.png",
    },
    {
      label: "تونس (+216)",
      value: "+216",
      flag: "https://flagcdn.com/w40/tn.png",
    },
    {
      label: "ليبيا (+218)",
      value: "+218",
      flag: "https://flagcdn.com/w40/ly.png",
    },
    {
      label: "السودان (+249)",
      value: "+249",
      flag: "https://flagcdn.com/w40/sd.png",
    },
    {
      label: "اليمن (+967)",
      value: "+967",
      flag: "https://flagcdn.com/w40/ye.png",
    },
    {
      label: "موريتانيا (+222)",
      value: "+222",
      flag: "https://flagcdn.com/w40/mr.png",
    },
    {
      label: "جيبوتي (+253)",
      value: "+253",
      flag: "https://flagcdn.com/w40/dj.png",
    },
    {
      label: "الصومال (+252)",
      value: "+252",
      flag: "https://flagcdn.com/w40/so.png",
    },
    {
      label: "الكويت (+965)",
      value: "+965",
      flag: "https://flagcdn.com/w40/kw.png",
    },
    {
      label: "سوريا (+963)",
      value: "+963",
      flag: "https://flagcdn.com/w40/sy.png",
    },
  ];
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phone, setPhone] = useState("");
  const arabicNationalites = [
    "مصر", "السعودية", "الإمارات", "الكويت", "قطر", 
    "عمان", "البحرين", "الأردن", "فلسطين", "لبنان", 
    "المغرب", "الجزائر", "تونس", "ليبيا", "السودان", 
    "اليمن", "موريتانيا", "جيبوتي", "الصومال", "سوريا", 
    "العراق", "فلسطين", "الأردن", "السعودية", "الكويت", 
    "الجزائر", "لبنان", "الإمارات", "قطر", "البحرين"
  ];
  return (
    <div className="mt-[100px]">
      <section className="fixed top-0 left-0 w-full  h-[110vh]  bg-black bg-opacity-50 z-[100] pt-[20px] overflow-auto  flex items-start justify-center">
        <div className="p-4 mx-[20px] w-[500px] h-[680px] bg-white rounded-[30px]">
          <div className="flex justify-between">
            <span className="text-[20px] font-bold">
              <Link to={"/home"}>x</Link>
            </span>
            <h1 className="text-[20px] font-bold"> أنشىء حسابك المجاني </h1>
          </div>
          <form action="">
            <div className="flex flex-col w-full mt-[10px]">
              <label htmlFor="name" className="block text-right mb-[8px] ">
                الاسم
              </label>
              <input
                required
                placeholder="اسم المستخدم"
                type="text"
                className=" px-[10px] text-right border-[1px] border-gray-400 w-full h-[40px] rounded-[10px] bg-gray-100 focus:border-[#525fe1] focus:outline-none"
                id="name"
              />
            </div>
            <div className="flex flex-col w-full mt-[5px]">
              <label htmlFor="email" className="block text-right mb-[8px] ">
                البريد الالكتروني
              </label>
              <input
                required
                type="email"
                className="px-[10px] text-right border-[1px]  border-gray-400  w-full h-[40px] rounded-[10px] bg-gray-100 focus:border-[#525fe1] focus:outline-none"
                id="email"
              />
            </div>

            <div>
              <div className="mt-[5px] text-right">
                <label htmlFor="phone" className="block text-right mb-2">
                  الهاتف
                </label>
                <div className="flex items-center gap-2 bg-gray-100 border-[1px] border-gray-400 rounded-[10px] focus-within:border-[#525fe1]">
                  <Select
                    options={countries}
                    getOptionLabel={(e) => (
                      <div className="flex items-center gap-2">
                        <img src={e.flag} alt={e.label} className="w-[50px] h-6" />
                        <span>{e.label}</span>
                      </div>
                    )}
                    value={selectedCountry}
                    onChange={setSelectedCountry}
                    className="w-[70%] border-none p-0"
                    
                  />
                  <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-2 text-right bg-transparent border-none focus:outline-none"
                    placeholder="100 123 4567"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full ">
              <label htmlFor="password" className="block text-right mb-[8px] ">
                كلمة المرور{" "}
              </label>
              <input
                required
                type="password"
                placeholder="••••••••"
                className="px-[10px] text-right border-[1px]  border-gray-400  w-full h-[40px] rounded-[10px] bg-gray-100 focus:border-[#525fe1] focus:outline-none"
                id="password"
              />


            </div>
            <div className="flex flex-col w-full ">
              <label htmlFor="nationality" className="block text-right mb-[8px] ">
                 الجنسية
              </label>
              <select 
                required
                type="text"
                className="px-[10px] text-right border-[1px]  border-gray-400  w-full h-[40px] rounded-[10px] bg-gray-100 focus:border-[#525fe1] focus:outline-none"
                id="nationality"
              >
                    <option value="">قم بأختيار جنسية</option>
                    {arabicNationalites.map((item)=>{
                        return <option value={item}>{item}</option>
                    })}
              </select>
            </div>
            <div className="flex justify-between mt-[8px]">
              <div>
                
              </div>
              <div >
                <label htmlFor="remember" className="text-[14px]">.بالضغط على التسجيل أنا أوافق على شروط الخدمة و سياسة الخصوصية</label>
                <input type="checkbox" id="remember" className="mx-[5px] mt-[10px]" />
              </div>
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className="mx-auto  w-[75%] text-white rounded-[10px]  py-[8px] mt-[10px] bg-[#525fe1]"
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
          <div className="flex items-center justify-center mt-[5px]">
            <a href="">
              <img
                src="/src/assets/images/login-social.png"
                alt="login-social.png"
              />
            </a>
          </div>
          <div className="flex items-center justify-center pb-[10px]">
            <h1 className="font-semibold">
              {" "}
              لديك حساب بالفعل ؟{" "}
              <Link to="/login" className="text-[#525fe1] hover:underline">
                سجل الان{" "}
              </Link>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
