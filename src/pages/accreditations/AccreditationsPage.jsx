import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { baseurl } from "../../api/api";
import Loading from "../../layouts/Loading";

const AccreditationsPage = () => {
  const { i18n } = useTranslation();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const getDynamicKey = (path) => {
    if (path === "local-accrebtions") return "local_accreditation";
    if (path === "international-accrebtions")
      return "international_accreditation";

    return "default-key";
  };

  const dynamicKey = getDynamicKey(path);

  useEffect(() => {
    const feathdata = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseurl}/show/${path}/user`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 5|1Q8vzifRZTUdzM51sJkxIOuQ0uCqoAcR31EaiC9Ea452fb53`,
            lang: i18n.language,
          },
        });
        setData(response.data[dynamicKey]);

        console.log(response.data[dynamicKey]);
        console.log(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    feathdata();

    window.scrollTo(0, 0);
  }, [i18n.language, path]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto min-h-screen mt-28 md:mt-32 mb-10 px-4">
      {path === "local-accrebtions" && (
        <h1 className="text-lg md:text-4xl font-bold text-blue-400 text-center mb-8">
          الشركات و المؤسسات والمنظمات المعتمدين لديهم محليا{" "}
        </h1>
      )}
      {path === "international-accrebtions" && (
        <h1 className="text-lg md:text-4xl font-bold text-blue-400 text-center mb-8">
          الشركات و المؤسسات والمنظمات المعتمدين لديهم دوليا{" "}
        </h1>
      )}

      <div
        className="bg-gray-200 rounded-lg p-6 px-8"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>
      {path === "dr-saly-words" && (
        <div className="bg-gray-200 rounded-lg p-6 px-8">
          <h2 className="text-lg md:text-3xl font-semibold mb-4">
            دكتورة / سالي زكي محمد حسين
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            نائب رئيس مجلس إدارة الإبداع الدولية - جمهورية مصر العربية.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            نائب رئيس مجلس إدارة الإبداع الدولية - المملكة العربية السعودية.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            مستشارة دولية معتمدة من البورد الأمريكي في إدارة الجودة الشاملة
            والتنمية البشرية.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            نائب رئيس المجلس المصري الدولي لحقوق الإنسان والتنمية لشؤون الإعلام
            والتعليم.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            دكتوراه في الإعلام وتكنولوجيا الاتصال.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            دكتوراه في إدارة الأعمال.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            ماجستير في تكنولوجيا التعليم.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            دبلوم تكنولوجيا التعليم.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            دبلوم تعليم كبار.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            دبلوم برمجة لغوية عصبية.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            بكالوريوس تربية قسم تكنولوجيا التعليم.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            حاصلة على البورد الأمريكي في التفكير اللامحدود.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            مدربة معتمدة من شركة ميكروسوفت (MCP).
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            مدربة دولية معتمدة وعضوة في العديد من الأكاديميات مثل:
          </p>
          <ul className="text-gray-600 text-lg leading-relaxed mb-4 list-disc px-8">
            <li>الأكاديمية الكندية للتطوير والتدريب - CGA</li>
            <li>الأكاديمية البريطانية لإعادة الاتزان البشري - I-HRA</li>
            <li>أكاديمية العداقي للتدريب والاستشارات - AAMS</li>
          </ul>

          <h3 className="text-2xl font-semibold  mt-8 mb-4">
            أهم المؤلفات للدكتورة / سالي زكي محمد
          </h3>
          <p className="text-blue-400 text-lg leading-relaxed mb-4">
            كتب مرخصة من وزارة الإعلام السعودي:
          </p>
          <ul className="text-gray-600 text-lg leading-relaxed mb-4 list-disc px-8">
            <li>فن التدريب الإبداعي</li>
            <li>دبلوماسية الإعلام في ظل إدارة الأزمات والجودة الشاملة</li>
            <li>
              الإعلام وتكنولوجيا الاتصال ودورهما في القضاء على ظاهرة العنف في ظل
              تكنولوجيا العولمة
            </li>
            <li>
              توظيف تكنولوجيا التعليم في تنمية قدرات التفكير الإبداعي لدى
              المتدربين باستخدام برنامج سكامبر لتطوير الأفكار
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccreditationsPage;
