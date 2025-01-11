/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [data, setData] = useState({
    categoryData: null,
    messageData: null,
    ourVision: null,
    ourGoalsData: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseurl = "https://cia-cd.native-digitalsolutions.com/api";
        const token = "5|1Q8vzifRZTUdzM51sJkxIOuQ0uCqoAcR31EaiC9Ea452fb53";
        const lang = i18n.language;

        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          lang: lang,
        };

        // Fetch privacy and message data
        const [
          messageResponse,
          visionResponse,
          goalsResponse,
          categoryResponse,
        ] = await Promise.all([
          axios.get(`${baseurl}/category`, { headers }),
          axios.get(`${baseurl}/show/message/user`, { headers }),
          axios.get(`${baseurl}/show/our-vision/user`, { headers }),
          axios.get(`${baseurl}/show/our-goals/user`, { headers }),
        ]);

        setData({
          categoryData: categoryResponse.data.categories,
          messageData: messageResponse.data.message,
          ourVision: visionResponse.data.our_vision,
          ourGoalsData: goalsResponse.data.our_goal,
          loading: false,
          error: null,
        });
      } catch (error) {
        setData({
          privacyData: null,
          messageData: null,
          ourVision: null,
          ourGoalsData: null,
          categoryData: null,
          loading: false,
          error: error.message,
        });
      }
    };

    fetchData();
  }, [i18n.language]);
  return (
    <ActivitiesContext.Provider value={data}>
      {children}
    </ActivitiesContext.Provider>
  );
};

export const useActivities = () => useContext(ActivitiesContext);
