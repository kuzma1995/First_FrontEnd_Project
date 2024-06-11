import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../assets/logo.png';
import slo from '../assets/slo.png';
import { BsHouse } from 'react-icons/bs';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showLanguagesDropdown, setShowLanguagesDropdown] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const toggleLanguagesDropdown = () => {
    setShowLanguagesDropdown(!showLanguagesDropdown);
  };

  const handleLanguageSelect = () => {
    setShowLanguagesDropdown(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenu(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      <img src={logo} alt="logo" className="logo" />
      <nav>
        <ul className={`navbar ${mobileMenu ? 'mobile-menu open' : ''}`}>
          <div className="spacer">
            <li className="navbar-item navbar-house">
              <BsHouse />
            </li>
            <div className="item"></div>
          </div>
          <li className="navbar-item" onClick={() => scrollToSection('sales-program')}>
            Prodajni program
          </li>
          <li className="navbar-item" onClick={() => scrollToSection('representatives')}>
            Zastopamo
          </li>
          <li className="navbar-item" onClick={() => scrollToSection('360')}>
            Svet 360°
          </li>
          <li className="navbar-item" onClick={() => scrollToSection('knowledge-base')}>
            Baza znanja
          </li>
          <li className="navbar-item" onClick={() => scrollToSection('about')}>
            O nas
          </li>
          {mobileMenu && (
            <MdClose size={25} className="close-icon" onClick={toggleMobileMenu} />
          )}
        </ul>
      </nav>
      <GiHamburgerMenu
        size={25}
        className={`hamburger-icon ${mobileMenu ? 'hidden' : ''}`}
        onClick={toggleMobileMenu}
      />
      <div className="header__wrapper">
        <button className="header__btn">Povpraševanje</button>
        <div className="vertical" />
        <div className="lang">
          <img src={slo} alt="flag" />
          <MdOutlineKeyboardArrowDown
            size={22}
            className="lang__arrow-down"
            onClick={toggleLanguagesDropdown}
          />
          {showLanguagesDropdown && (
            <div className="languages-dropdown" onClick={handleLanguageSelect}>
              <img src={slo} alt="flag" />
              <img src={slo} alt="flag" />
              <img src={slo} alt="flag" />
              <img src={slo} alt="flag" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
