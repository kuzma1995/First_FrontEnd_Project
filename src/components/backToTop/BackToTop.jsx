import React from 'react';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './backToTop.css';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
  
    return (
      <div className={`back-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
        <FaArrowUp />
      </div>
    );
  };
  
  export default BackToTop;