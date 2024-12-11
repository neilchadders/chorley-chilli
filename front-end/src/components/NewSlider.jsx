import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import habanero from './habanero.jpg'
import greenchilli from './greenchilli.png'

import './newSlider.css'

import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className = "slider-div">
          <img src={habanero} alt="habanero" />
      </div>
      
      <div className = "slider-div">
          <img src={greenchilli} alt="greencgilli" />
      </div>
      
      <div className = "slider-div">
          <img src={habanero} alt="habanero" />
      </div>
      
      <div className = "slider-div">
          <img src={greenchilli} alt="greencgilli" />
      </div>
      
    </Slider>
  );
}