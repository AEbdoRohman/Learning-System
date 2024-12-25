import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "../../utils/utils";

const Breadcrumb = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment);

  // Check if the last segment is a number
  const isLastSegmentNumber =
    pathSegments.length > 0 &&
    !isNaN(Number(pathSegments[pathSegments.length - 1]));

  // Remove the last segment if it's a number
  const segmentsToShow = isLastSegmentNumber
    ? pathSegments.slice(0, -1)
    : pathSegments;

  // Translate the segments based on the current language
  const translateSegment = (segment) => {
    return t(`breadcrumb.${segment}`, segment); // Fallback to the segment itself if no translation is found
  };

  return (
    <div className="relative w-full mb-6">
      <div
        className="w-full h-48 bg-cover bg-center"
        style={{
          backgroundColor: "#a57e87",
          backgroundImage: `url("/breadcrumb.jpg")`,
          backgroundBlendMode: "overlay",
        }}
      ></div>

      <div className="absolute top-0 left-0 w-full h-40 flex items-end pb-2 px-8">
        <nav aria-label="breadcrumb">
          <h2 className="text-4xl font-bold text-black mb-4">
            {capitalizeFirstLetter(
              translateSegment(
                segmentsToShow[segmentsToShow.length - 1] || "home"
              )
            )}
          </h2>
          <ul className="list-none p-0 inline-flex space-x-2 text-2xl">
            <li className="flex items-center">
              <Link to="/" className="text-blue-500 hover:text-blue-800">
                {t("breadcrumb.home")}
              </Link>
              <span className="mx-2 text-black">/</span>
            </li>

            {pathSegments.map((segment, index) => {
              const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
              const isLast = index === pathSegments.length - 1;

              return (
                <li key={index} className="flex items-center">
                  {!isLast ? (
                    <Link
                      to={path}
                      className="text-blue-500 hover:text-blue-800"
                    >
                      {translateSegment(segment)}
                    </Link>
                  ) : (
                    <span className="text-black">
                      {translateSegment(segment)}
                    </span>
                  )}
                  {!isLast && <span className="mx-2 text-black">/</span>}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
