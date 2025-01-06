import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import "./App.css";
import {
  Login,
  Register,
  HomePage,
  News,
  Accreditations,
  Activities,
  Childrens,
  Members,
  Registration,
  Statistics,
  Contact,
  Header,
  Footer,
  Loading,
  WhatsAppIcon,
} from "./routes/Route";

import CoursePage from "./pages/course/CoursePage";
import CourseDetail from "./pages/course/CourseDitail";
import SubNews from "./pages/news/SubNews";
import { HomeProvider } from "./context/HomeContext";
import NewDetails from "./pages/news/NewDetails";
import Cia from "./pages/home/componant/Cia";

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
      <HomeProvider>
        <Header />
        <WhatsAppIcon />
        <Routes>
          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Pages */}
          {/* <Route element={<RequireAuth />}> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<Cia />} />

          <Route path="/courses" element={<CoursePage />} />
          <Route path="/courses/:id" element={<CourseDetail />} />

          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<SubNews />} />
          <Route path="/news/:id/:sub_id" element={<NewDetails />} />
          <Route path="/accreditations" element={<Accreditations />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/childrens" element={<Childrens />} />
          <Route path="/members" element={<Members />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/contact" element={<Contact />} />

          {/* </Route> */}
        </Routes>
        <Footer />
      </HomeProvider>
    </div>
  );
}

export default App;
