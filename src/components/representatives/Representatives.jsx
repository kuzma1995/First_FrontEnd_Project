import React from 'react';
import './representatives.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline  } from "react-icons/io5";
import SliderItemRep from './SliderItemRep';

const Representatives = () => {

      const sliderContainerStyle = {
        maxWidth: '80%',
        margin: '3rem auto',
        position: 'relative'
      }


  return (
    <div id='representatives' className='rep__container'>
        <div className="rep__header-container">
            <h4 className="rep-header">ZASTOPAMO</h4>
            <div className="b1__main-straight-line"></div>
        </div>

        <div className="slider__rep-parent">
            <div className="rep__slider-container" style={sliderContainerStyle}>
                <SliderComponent />
            </div>
        </div>

        <button className="rep-button">Vsa zastopstva</button>
    </div>
  )
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
                  <SliderItemRep repIndex={0}/>
                  <SliderItemRep repIndex={1}/>
                  <SliderItemRep repIndex={2}/>
                  <SliderItemRep repIndex={3}/>
                  <SliderItemRep repIndex={0}/>
                  <SliderItemRep repIndex={1}/>
                  <SliderItemRep repIndex={2}/>
                </Slider>
      )
}

export default Representatives