import React from 'react'
import './footer.css';
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import footer from '../assets/footer.png'
import humanfrog from '../assets/humanfrog.png';

const Footer = () => {
  return (
    <div id='about' className='footer__container'>
        <div className="footer__content-container">
            <div className="footer-contact">
                <h4>Fist d.o.o.</h4>
                <p className="address">Brodišče 4, 1236 Trzin<br></br>Slovenija</p>
                <div className="me">
                    <p className="m"><span>T</span> +386 1 562 11 53</p>
                    <p className="e"><span>E</span> info@fist.si</p>
                </div>
            </div>

            <div className="footer-sp">
                    <h4>PRODAJNI PROGRAM</h4>
                    <div className="footer__vertical-line"></div>
                <ul className="sp-ul">
                    <li className='sp-item'>Polietileni</li>
                    <li className='sp-item'>Folijski materiali</li>
                    <li className='sp-item'>Stireni</li>
                    <li className='sp-item'>Barvila in dodatki</li>
                    <li className='sp-item'>Polipropileni</li>
                    <li className='sp-item'>Tehnični granulati</li>
                </ul>
            </div>

            <div className="footer__follow-us">
                    <h4>SPREMLJAJTE NAS</h4>
                    <div className="footer__vertical-line"></div>
                    <div className="social__container">
                    <div className="social__container-content">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <CiLinkedin className='social-icon' />
              <p>LinkedIn</p>
            </a>
                    </div>
                    <div className="footer__vertical-line_fu"></div>
                    <div className="social__container-content">
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <CiYoutube className='social-icon' />
              <p>YouTube</p>
            </a>
                    </div>
                    <div className="footer__vertical-line_fu"></div>
                    </div>  
            </div>
        </div>

        <div className="footer__logo-container">
            <img src={footer} alt="footerLogo"/>
            <div className="footer__logo-vertical_line"></div>
        </div>

        <div className="footer__policy">
            <p className='policy-item copyright'>&#169;2023 Fist d.o.o.</p>
            <p className='policy-item'>Pravila in pogoji uporabe</p>
            <p className='policy-item'>Piškotki in zasebnost</p>
            <p className='policy-item'>Oblikovanje in razvoj spletnih strani: Humanfro<img src={humanfrog} alt='humanfrogIcon' className='humanfrog-logo'/></p>
        </div>
        
    </div>
  )
}

export default Footer