/* eslint-disable react/prop-types */

import { useTranslation } from "react-i18next";

const Goals = ({ ourGoalsData }) => {
  const { t } = useTranslation();

  // const [goals, setGoals] = useState("");

  // useEffect(() => {
  //   const fetchGoals = async () => {
  //     try {
  //       const response = await axios.get(`${baseurl}/show/our-goals/user`, {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization:
  //             "Bearer " + "5|1Q8vzifRZTUdzM51sJkxIOuQ0uCqoAcR31EaiC9Ea452fb53",
  //           lang: i18n.language,
  //         },
  //       });
  //       setGoals(response.data.our_goal);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchGoals();
  // }, [i18n.language]);

  return (
    <section className="bg-gray-200 py-4 ">
      <div className="  gap-8 mx-4 py-4">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-4">
          {t("home.goals")}
        </h2>
        <p
          className=" text-sm md:text-xl font-bold text-center w-full md:w-2/3 mx-3 md:mx-auto p-3"
          dangerouslySetInnerHTML={{ __html: ourGoalsData }}
        />
      </div>
    </section>
  );
};

export default Goals;

// <div className='bg-[url("/src/assets/images/home-two-cta-2.jpg")] w-full h-[450px] md:h-[350px]'>
