import { useEffect } from "react";

const Cia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mx-auto min-h-screen mt-28 md:mt-32 mb-10 px-4">
      <h1 className="text-4xl font-bold text-blue-400 text-center mb-8">
        التعريف بالدكتورة / سالي زكي محمد
      </h1>
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
    </div>
  );
};

export default Cia;
