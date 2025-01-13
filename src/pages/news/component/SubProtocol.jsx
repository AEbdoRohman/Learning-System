import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../../layouts/Loading";
import { baseurl } from "../../../api/api";
import { useTranslation } from "react-i18next";

const SubProtocol = () => {
  const { i18n } = useTranslation();
  const { union } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(union);

  const getDynamicKey = (union) => {
    if (union === "ElNaser") return "al_naser_foundation";
    if (union === "Eco-Medical-Al-Dhabiya") return "Eco_Medical_Al_Dhabiya";
    if (union === "ImperialElectronics")
      return "Imperial_Electronic_Appliances";
    if (union === "The-International-Alliance-for-Egyptians_Abroad")
      return "The_International_Alliance_for_Egyptians_Abroad";
    if (union === "SpartCompany") return "spart_company_for_communications";
    if (union === "RotaryClup") return "rotary_club";

    if (union === "ConventionUnion")
      return "Conscious_Union_of_the_Deaf_and_Dumb";
  };

  const dynamicKey = getDynamicKey(union);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseurl}/show/${union}/user`, {
          headers: {
            "Content-Type": "application/json",
            lang: i18n.language,
          },
        });
        setData(response.data[dynamicKey]);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, [union, i18n.language]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto h-screen mt-28 md:mt-36 flex flex-col items-center ">
      <div
        className="mb-6"
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      ></div>

      {data.image && (
        <img
          src={data.image}
          alt="Protocol"
          style={{ width: "100%", maxWidth: "400px", marginTop: "20px" }}
        />
      )}
    </div>
  );
};

export default SubProtocol;
