import React from "react";
import Slider from "react-slick";
import styles from "./Slider.module.scss";

const SimpleSlider = ({ images }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 10000,
    pauseOnHover: true,
  };
  return (
    <Slider {...settings}>
      {images.map((image) => (
        <li className={styles.sliderList}>
          <img src={image} alt="hero" />
        </li>
      ))}
    </Slider>
  );
};
export default SimpleSlider;
