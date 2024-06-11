import React from 'react';
import SliderItem from './SliderItem';
import './salesProgram.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline  } from "react-icons/io5";


const SalesProgram = () => {

          const sliderContainerStyle = {
            maxWidth: '80%',
            margin: '0 auto',
            position: 'relative',
          }

          return (
            <div id="sales-program" className="salesProgram__container">
                <div className="salesProgram__header-container">
                    <h4 className="salesProgram-header">NAŠ PRODAJNI PROGRAM</h4>
                    <div className="b1__main-straight-line"></div>
                </div>
    
                <div className="slider-parent">
                    <div className="salesProgram__slider-container" style={sliderContainerStyle}>
                        <SliderComponent />
                    </div>
                </div>
    
                <button className="salesProgram-button">Celotni program</button>
            </div>
        );


}

const SliderComponent = () => {
  const sliderSettings = {
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <IoArrowForwardCircleOutline />,
      prevArrow: <IoArrowBackCircleOutline />,
      responsive: [
          {
            breakpoint: 1350,
            settings: {
                slidesToShow: 4
            }
          },
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3
              }
          },
          {
              breakpoint: 820,
              settings: {
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 665,
              settings: {
                  slidesToShow: 1
              }
          }
      ]
  };

  return (
      <Slider {...sliderSettings}>
          <SliderItem frameIndex={0} />
          <SliderItem frameIndex={1} />
          <SliderItem frameIndex={2} />
          <SliderItem frameIndex={3} />
          <SliderItem frameIndex={0} />
          <SliderItem frameIndex={1} />
          <SliderItem frameIndex={2} />
      </Slider>
  );
}

export default SalesProgram;