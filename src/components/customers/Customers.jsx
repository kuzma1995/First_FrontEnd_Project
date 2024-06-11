import React from 'react'
import './customers.css'; 
import SliderItemCustomers from './SliderItemCustomers';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline  } from "react-icons/io5";

const Customers = ({ customers }) => {

      const sliderContainerStyle = {
        maxWidth: '80%',
        height: '300px',
        margin: '5rem auto',
        position: 'relative'
      }



  return (
    <div className='customers__container'>
        <div className="customers__header-container">
            <h4 className="customers-header">NAŠE ZADOVOLJNE STRANKE</h4>
            <div className="b1__main-straight-line"></div>
        </div>

        <div className="slider__customers-parent">
            <div className="customers__slider-container" style={sliderContainerStyle}>
                <SliderComponent customers={customers}/>
            </div>
        </div>
    </div>
  )
}

const SliderComponent = ({ customers }) => {
    const sliderSettings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <IoArrowForwardCircleOutline to='next'/>,
        prevArrow: <IoArrowBackCircleOutline to='prev'/>,
        responsive: [
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
        <Slider {...sliderSettings} >
            {customers.map((customer, index) => (
                <SliderItemCustomers key={index} customer={customer} />
            ))}
        </Slider>
    )
}

export default Customers;