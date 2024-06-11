import React from 'react';
import './salesProgram.css';
import frame_1 from '../assets/frame_1.png';
import frame_2 from '../assets/frame_2.png';
import frame_3 from '../assets/frame_3.png';
import frame_4 from '../assets/frame_4.png';

const frames = [
  {
    id: 1,
    img: frame_1,
    alt: 'frame_1',
    imgHeader: 'POLIOLEFINI',
    className: 'img-poli',
    imgDesc: 'Polieten je najpogostejša plastika. Njegova osnovna uporaba je v embalaži.'
  },
  {
    id: 2,
    img: frame_2,
    alt: 'frame_2',
    imgHeader: 'TEHNIČNI MATERIALI',
    className: 'img-tm',
    imgDesc: 'Polieten je najpogostejša plastika. Njegova osnovna uporaba je v embalaži.'
  },
  {
    id: 3,
    img: frame_3,
    alt: 'frame_3',
    imgHeader: 'TRAJNOSTNI MATERIALI',
    className: 'img-trm',
    imgDesc: 'Polieten je najpogostejša plastika. Njegova osnovna uporaba je v embalaži.'
  },
  {
    id: 4,
    img: frame_4,
    alt: 'frame_4',
    imgHeader: 'BARVILA IN DODATKI',
    className: 'img-bid',
    imgDesc: 'Polieten je najpogostejša plastika. Njegova osnovna uporaba je v embalaži.'
  }

]

const SliderItem = ({ frameIndex }) => {
  const frame = frames[frameIndex];

  const imgClassName = frame.className ? `img-bg ${frame.className}` : 'img-bg';

  return (
    <div className="salesProgram__slider-content">
      <div key={frame.id} className='img-container'>
        <img src={frame.img} alt={frame.alt} className={imgClassName}/>
      </div>
      <div className="vertical-line"></div>
      <div className="text-container">
        <p className="img-header">{frame.imgHeader}</p>
        <p className="img-desc">{frame.imgDesc}</p>
      </div>
    </div>
  );
};

export default SliderItem;