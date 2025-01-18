/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { baseurl } from "../api/api";

const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const { i18n } = useTranslation();

  const [data, setData] = useState({
    privacyData: null,
    messageData: null,
    ourVision: null,
    ourGoalsData: null,
    ebdaExpert: null,
    workingData: null,
    allCourses: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lang = i18n.language;
        const headers = {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
          lang: lang,
        };

        // Fetch privacy and message data
        const [
          privacyResponse,
          messageResponse,
          visionResponse,
          goalsResponse,
          expertResponse,
          workingResponse,
          allCoursesResponse,
        ] = await Promise.all([
          axios.get(`${baseurl}/show/privacy/user`, { headers }),
          axios.get(`${baseurl}/show/message/user`, { headers }),
          axios.get(`${baseurl}/show/our-vision/user`, { headers }),
          axios.get(`${baseurl}/show/our-goals/user`, { headers }),
          axios.get(`${baseurl}/show/ebdaExpert/user`, { headers }),
          axios.get(`${baseurl}/show/working-style/user`, { headers }),
          axios.get(`${baseurl}/all-courses`, { headers }),
        ]);

        setData({
          privacyData: privacyResponse.data.privacy,
          messageData: messageResponse.data.message,
          ourVision: visionResponse.data.our_vision,
          ourGoalsData: goalsResponse.data.our_goal,
          ebdaExpert: expertResponse.data.ebda_expert,
          workingData: workingResponse.data.ebda_expert,
          allCourses: allCoursesResponse.data.all_courses,
          loading: false,
          error: null,
        });
      } catch (error) {
        setData({
          privacyData: null,
          messageData: null,
          ourVision: null,
          ourGoalsData: null,
          ebdaExpert: null,
          workingData: null,
          allCourses: null,
          loading: false,
          error: error.message,
        });
      }
    };

    fetchData();
  }, [i18n.language]);
  return <HomeContext.Provider value={data}>{children}</HomeContext.Provider>;
};

export const useHome = () => useContext(HomeContext);
