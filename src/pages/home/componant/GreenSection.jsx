/* eslint-disable react/prop-types */

import { useTranslation } from "react-i18next";

const GreenSection = ({ messageData, ourVision }) => {
  const { t } = useTranslation();

  // const [vision, setVision] = useState("");
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   const fetchMessage = async () => {
  //     try {
  //       const response = await axios.get(`${baseurl}/show/message/user`, {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization:
  //             "Bearer " + "5|1Q8vzifRZTUdzM51sJkxIOuQ0uCqoAcR31EaiC9Ea452fb53",
  //           lang: i18n.language,
  //         },
  //       });
  //       setMessage(response.data.message);
  //       console.log(response.data.message);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   const fetchAbout = async () => {
  //     try {
  //       const response = await axios.get(`${baseurl}/show/our-vision/user`, {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization:
  //             "Bearer " + "5|1Q8vzifRZTUdzM51sJkxIOuQ0uCqoAcR31EaiC9Ea452fb53",
  //           lang: i18n.language,
  //         },
  //       });
  //       setVision(response.data.our_vision);
  //       console.log(response.data.our_vision);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchMessage();
  //   fetchAbout();
  // }, [i18n.language]);

  return (
    <section className="pt-[30px] bg-gray-200 px-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 mx-4   py-10">
        <div className="">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-4">
            {t("home.massage")}
          </h2>
          <p
            className=" text-sm md:text-lg font-bold text-center p-3"
            dangerouslySetInnerHTML={{ __html: messageData }}
          />
        </div>
        <div className="">
          <h2 className="text-xl md:text-3xl font-bold  text-center mb-4">
            {t("home.vision")}
          </h2>
          <p
            className="  text-sm md:text-lg font-bold text-center  p-3"
            dangerouslySetInnerHTML={{ __html: ourVision }}
          />
        </div>
      </div>
    </section>
  );
};

export default GreenSection;
