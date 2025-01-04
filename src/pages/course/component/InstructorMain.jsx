/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";

const InstructorMain = ({ course }) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="mb-5">
        <div className="flex items-center  gap-2 flex-row w-full md:w-4/6">
          <div>
            <img
              src="/instructor.webp"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div className="flex items-center md:justify-between md:flex-1 gap-0 md:gap-2 flex-col md:flex-row">
            <h3>James Carlson </h3>
            <div>
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <FaStar
                    key={item}
                    className="inline my-[2px] mb-[5px] text-yellow-800"
                  />
                );
              })}
              <span className="mx-[2px]">(1 {t("review")})</span>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-2xl md:text-4xl font-bold w-full md:w-4/5 text-hoverColor">
        {course.title}
      </h1>
    </div>
  );
};

export default InstructorMain;
