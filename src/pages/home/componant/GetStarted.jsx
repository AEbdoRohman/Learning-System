/* eslint-disable react/prop-types */

import { useTranslation } from "react-i18next";

const GetStarted = ({ workingData, ebdaExpert }) => {
  const { t } = useTranslation();
  console.log(workingData);

  // const [vision, setVision] = useState("");

  // useEffect(() => {
  //   const fetchAbout = async () => {
  //     try {
  //       const response = await axios.get(`${baseurl}/show/working-style/user`, {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization:
  //             "Bearer " + "5|1Q8vzifRZTUdzM51sJkxIOuQ0uCqoAcR31EaiC9Ea452fb53",
  //           lang: i18n.language,
  //         },
  //       });
  //       setVision(response.data.ebda_expert);
  //       console.log(response.data.ebda_expert);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchAbout();
  // }, [i18n.language]);

  return (
    <section className=" ">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-8 mx-10 py-8">
        <div className="">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-4">
            {t("home.work")}
          </h2>
          <p
            className=" text-sm md:text-lg font-bold text-center p-3"
            dangerouslySetInnerHTML={{ __html: workingData }}
          />
        </div>
        <div className="">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-4">
            {t("home.team")}
          </h2>
          <p
            className="  text-sm md:text-lg font-bold text-center p-3"
            dangerouslySetInnerHTML={{ __html: ebdaExpert }}
          />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
