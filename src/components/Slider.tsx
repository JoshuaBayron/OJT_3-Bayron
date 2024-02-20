import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Slide {
  image: string;
  caption: string;
}

interface SliderProps {
  slides: Slide[];
}

const MySlider: React.FC<SliderProps> = ({ slides }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <div className="slider-item">
            <img src={slide.image} alt={slide.caption} className="slider-image" />
            <div className="slider-caption">{slide.caption}</div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default MySlider;
