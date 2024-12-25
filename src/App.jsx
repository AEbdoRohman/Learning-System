import { Routes, Route } from "react-router-dom";
// import Header from "./layouts/Header";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import WhatsAppIcon from "./pages/home/componant/WhatsAppIcon";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import Payment from "./components/payment/Payment";
import ViewCourse from "./pages/course/component/viewCourse/ViewCourse";
import Footer from "./layouts/Footer";
import store from "./redux/store";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import Loading from "./layouts/Loading";
import QuizComponent from "./components/quiz/QuizComponent";
import CoursePage from "./pages/course/CoursePage";
import DetailsPage from "./pages/course/DetailsPage";
import BlogsPage from "./pages/blog/BlogsPage";
import BlogPage from "./pages/blog/BlogPage";
import Header from "./layouts/header/Header";

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
      {loading && <Loading />}
      <Provider store={store}>
        {/* <Header /> */}
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
          <Route path="/blog" element={<BlogsPage />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:cart?/payment" element={<Payment />} />

          <Route path="/quiz" element={<QuizComponent />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
