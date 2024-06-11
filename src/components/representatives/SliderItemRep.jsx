import React from 'react';
import './representatives.css';
import borealis from '../assets/borealis.png';
import synthos from '../assets/synthos.png';
import chemtrend from '../assets/chemtrend.png';
import viba from '../assets/viba.png';

const reps = [
    {
      id: 1,
      img: borealis,
      alt: 'borealis',
    },
    {
      id: 2,
      img: synthos,
      alt: 'synthos',
    },
    {
      id: 3,
      img: chemtrend,
      alt: 'chemtrend',
    },
    {
      id: 4,
      img: viba,
      alt: 'viba',
    }
];

const SliderItemRep = ({ repIndex }) => {
    const rep = reps[repIndex];

  return (
    <div key={rep.id} >
        <img src={rep.img} alt={rep.alt} />
    </div>
  )
}

export default SliderItemRep;