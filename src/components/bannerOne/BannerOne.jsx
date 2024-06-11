import React from 'react';
import './bannerOne.css';
import video from '../assets/video.mp4';
import { MdOutlineSearch, MdArrowForwardIos } from "react-icons/md";
import { TbLineDotted } from "react-icons/tb";

const Banner_1 = () => {
  return (
    <div className='banner_1__container'>
        <div className="banner_1-video_container">
          <video autoPlay loop muted playsInline>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="banner_1-content_container">
          <div className="search-container">
            <MdOutlineSearch className='search-icon' />
            <input type="text" placeholder='Iskanje po prodajnem programu' />
          </div>
        </div>

        <div className="banner_1-main_content">
          <div className="b1__dark"></div>
          <div className="banner_1-main_content-container"> 
            <p className='b1__main-text'>Naši plastični granulati<br/>
            <span>Vaši trajnostno naravnani izdelki.</span></p>
            <div className="b1__main-straight-line"></div>
            <p className='b1__subtext'>
              Ukvarjamo se z distribucijo plastičnih granulatov sit amet consectetur. Aliquet mauris amet
              morbi tincidunt orci vitae commodo.
            </p>
            <div className="b1-btns">
              <button className=' b1__btn b1__sales-btn'>Prodajni program</button>
              <button className='b1__btn b1__q-btn'>Povpraševanje</button>
            </div>
            <div className="b1__arr-down">
              <TbLineDotted className='arr-line'/>
              <MdArrowForwardIos className='arr'/>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Banner_1;