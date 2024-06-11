import React from 'react';
import './customers.css';

const SliderItemCustomers = ({ customer }) => {

  return (
    <div key={customer.id} className='customers__img-container'>
      <div className="customers__item-container">
          <img src={customer.img} alt={customer.alt} />
      </div>
    </div>
  )
}

export default SliderItemCustomers;