import { Routes, Route } from "react-router-dom";
import Header from "./shared/Header";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import WhatsAppIcon from "./components/home/WhatsAppIcon";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import Payment from "./components/payment/Payment";
import ViewCourse from "./components/courseDetails/viewCourse/ViewCourse";
import Footer from "./shared/Footer";
import BlogPage from "./pages/BlogPage";

function App() {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Trigger loading when the language changes
    setLoading(true);
    // Set document direction (RTL or LTR)
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
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
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/courses/details" element={<DetailsPage />} />
        <Route path="/course/view" element={<ViewCourse />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
      </Provider>
    </div>
  );
}

export default App;
