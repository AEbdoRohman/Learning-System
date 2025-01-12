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
  MemberIbda,
  Member,
  MemberCondition,
  Approved,
  Registration,
  Questions,
  Inquiries,
  Statistics,
  Contact,
  Header,
  Footer,
  Loading,
  WhatsAppIcon,
} from "./routes/Route";

import CoursePage from "./pages/course/CoursePage";
import CourseDetail from "./pages/course/CourseDitail";
import { HomeProvider } from "./context/HomeContext";
import NewDetails from "./pages/news/NewDetails";
import Cia from "./pages/home/componant/Cia";
import AccreditationsPage from "./pages/accreditations/AccreditationsPage";
import ZoomVideo from "./pages/ZoomVideo/ZoomVideo";
import Calender from "./pages/calender/Calender";
import { ToastContainer } from "react-toastify";
import RequireAuth from "./components/auth/RequireAuth";
import SubCategory from "./pages/activities/SubCategory";

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
        <ToastContainer />
        <Header />
        <WhatsAppIcon />
        <Routes>
          {/* Authentication */}
          <Route path="/login" element={<Login />} />

          {/* Pages */}
          <Route element={<RequireAuth />}>
            <Route path="/calender" element={<Calender />} />
            <Route path="/zoom-session" element={<ZoomVideo />} />
          </Route>
          {/* Home */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<Cia />} />
          <Route path="/dr-saly-words" element={<Cia />} />
          <Route path="/why-us" element={<Cia />} />

          <Route path="/courses" element={<CoursePage />} />
          <Route path="/courses/:id" element={<CourseDetail />} />

          {/* News */}
          <Route path="/news" element={<News />} />
          {/* <Route path="/news/:id" element={<SubNews />} /> */}
          <Route path="/news/:id" element={<NewDetails />} />

          {/* Accreditations */}
          <Route path="/accreditations" element={<Accreditations />} />
          <Route
            path="/accreditations/local-accrebtions"
            element={<AccreditationsPage />}
          />
          <Route
            path="/accreditations/international-accrebtions"
            element={<AccreditationsPage />}
          />

          {/* Activities */}
          <Route path="/activities" element={<Activities />} />
          <Route path="/activities/:id" element={<SubCategory />} />
          <Route path="/activities/:id/:id" element={<CourseDetail />} />
          <Route path="/register/:id" element={<Register />} />

          {/* Childrens */}
          <Route path="/childrens" element={<Childrens />} />
          <Route path="/register/:id" element={<Register />} />

          {/* Members */}
          <Route path="/members" element={<Members />} />
          <Route path="/members/memberIbda" element={<MemberIbda />} />
          <Route path="/members/member" element={<Member />} />
          <Route
            path="/members/member/benefits"
            element={<MemberCondition />}
          />
          <Route path="/members/member/approved" element={<Approved />} />
          <Route path="members/consultants" element={<Member />} />
          <Route
            path="/members/consultants/conditions"
            element={<MemberCondition />}
          />
          <Route path="/members/consultants/approved" element={<Approved />} />
          {/* Registration */}
          <Route path="/registration" element={<Registration />} />
          <Route path="/registration/courses" element={<Register />} />
          <Route path="/registration/degrees" element={<Register />} />
          <Route path="/registration/master" element={<Register />} />
          <Route path="/registration/questions" element={<Questions />} />
          <Route path="/registration/inquiries" element={<Inquiries />} />
          {/* Statistics */}
          <Route path="/statistics" element={<Statistics />} />
          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/terms/terms-conditions"
            element={<AccreditationsPage />}
          />
        </Routes>
        <Footer />
      </HomeProvider>
    </div>
  );
}

export default App;
