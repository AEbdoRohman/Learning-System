/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const sliderData = [
  {
    image: "/src/assets/images/help.webp",
    titleKey: "slider.title1",
    descKey: "slider.desc1",
    buttonKey: "slider.button",
  },
  {
    image: "/src/assets/images/search.webp",
    titleKey: "slider.title2",
    descKey: "slider.desc2",
    buttonKey: "slider.button",
  },
  {
    image: "/src/assets/images/uniqu.webp",
    titleKey: "slider.title3",
    descKey: "slider.desc3",
    buttonKey: "slider.button",
  },
];

const CarouselSlide = ({ image, title, description, buttonText }) => (
  <div
    className="bg-transparent shadow-none"
    style={{ height: "calc(100vh - 75px)" }}
  >
    <div className="flex flex-col-reverse md:flex-row items-center justify-center h-full">
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/2 h-1/2 md:h-full object-contain"
      />
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 px-4 md:px-10 mt-12 text-center h-1/2 md:h-full">
        <h1 className="text-3xl md:text-4xl font-bold text-[#525fe1] mb-4">
          {title}
        </h1>
        <p className="text-sm md:text-xl font-semibold mb-2">{description}</p>
        <button className="mt-2 px-6 py-1  bg-[#525fe1] text-white font-bold rounded-lg text-lg md:text-xl flex items-center justify-center">
          <Link>{buttonText}</Link>
        </button>
      </div>
    </div>
  </div>
);

const Carousel = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: { arrows: false },
      },
    ],
  };

  return (
    <div className="w-full" style={{ height: "calc(100vh - 75px)" }}>
      <div className="h-full">
        <Slider {...settings}>
          {sliderData.map((slide, index) => (
            <CarouselSlide
              key={index}
              image={slide.image}
              title={t(slide.titleKey)}
              description={t(slide.descKey)}
              buttonText={t(slide.buttonKey)}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
