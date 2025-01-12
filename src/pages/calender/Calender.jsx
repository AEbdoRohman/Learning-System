import { useEffect, useState } from "react";
import axios from "axios";
import { baseurl } from "../../api/api";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import Loading from "../../layouts/Loading";
import { useTranslation } from "react-i18next";

const Calender = () => {
  const { t } = useTranslation();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const cookies = new Cookies();
  const token = cookies.get("authToken");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseurl}/get-calender`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEvents(response.data.calendars);
        setLoading(false);
        console.log(response.data.calendars);
      } catch (error) {
        setLoading(false);
        console.error("حدث خطأ أثناء جلب البيانات: ", error);
      }
    };

    fetchEvents();
  }, [token]);

  if (loading) {
    return <Loading />;
  }

  const handleZoomClick = (calenderData) => {
    navigate("/zoom-session", { state: { calender: calenderData } });
  };

  // const isButtonEnabled = (eventDate) => {
  //   const currentTime = new Date().getTime();
  //   const eventTime = new Date(eventDate).getTime();

  //   // get today's date
  //   const today = new Date();
  //   const todayDate = new Date(
  //     today.getFullYear(),
  //     today.getMonth(),
  //     today.getDate()
  //   ).getTime();

  //   // check if the event time is within 24 hours of the current time
  //   if (eventTime < todayDate || eventTime > todayDate + 24 * 60 * 60 * 1000) {
  //     return false; // disable the button
  //   }

  //   const tenMinutesBefore = eventTime - 10 * 60 * 1000; // allow 10 minutes before
  //   const oneHourAfter = eventTime + 60 * 60 * 1000; // allow 1 hour after

  //   return currentTime >= tenMinutesBefore && currentTime <= oneHourAfter;
  // };

  return (
    <div className="container mx-auto min-h-screen mt-28 md:mt-36 mb-10 px-4">
      <h1 className="text-4xl font-bold text-blue-400 text-center mb-8">
        {t("header.calendar")}
      </h1>
      <div className="space-y-4">
        {events.length > 0 ? (
          events.map((event) => (
            <div
              key={event.id}
              className="flex items-center justify-between text-lg font-medium mx-8 bg-gray-200 p-4 rounded-lg text-gray-700"
            >
              <p>{event.date}</p>
              <p>{event.time}</p>
              {event.is_joined === 0 && (
                <button
                  onClick={() => handleZoomClick(event)}
                  className={`px-4 py-2 rounded-md `}
                  // ${
                  //   isButtonEnabled(event.date)
                  //     ? "bg-blue-600 text-white cursor-pointer"
                  //     : "bg-gray-400 text-gray-600 cursor-not-allowed"
                  // }
                  // disabled={!isButtonEnabled(event.date)}
                >
                  {t("header.join")}
                </button>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-gray-500">
            لا توجد أحداث حالياً
          </p>
        )}
      </div>
    </div>
  );
};

export default Calender;
