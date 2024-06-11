import React from 'react';
import './section.css';
import roke from '../assets/roke.png'

const Section = () => {
  return (
    <div className='section__container'>
        <div className="section__container-content">
            <img src={roke} alt="roke" />
            <div className="section__container-content_text">
                <p className="section-text"><span>Fist.</span> Neomejene možnosti s plastičnimi granulati.</p>
                <ul className='section-list'>
                    <li className='section__list-item'>Ukvarjamo se z distribucijo plastičnih granulatov sit amet consectetur.</li>
                    <li className='section__list-item'>Aliquet mauris amet morbi tincidunt orci vitae commodo.</li>
                    <li className='section__list-item'>Eget tempor cras curabitur nec pellentesque scelerisque et in. Id turpis dictum egestas id enim at aliquam. </li>
                    <li className='section__list-item'>Eget tempor cras curabitur nec pellentesque scelerisque et in. Id turpis dictum egestas id enim at aliquam. </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Section