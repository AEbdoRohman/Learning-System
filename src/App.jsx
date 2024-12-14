import { Routes, Route } from "react-router-dom";
import Header from "./shared/Header";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import WhatsAppIcon from "./components/home/WhatsAppIcon";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import Footer from "./shared/Footer";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set document direction (RTL or LTR)
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);
  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <Header />
      <WhatsAppIcon />
      <Routes>
        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/course" element={<CoursePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
