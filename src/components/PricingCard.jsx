import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../index.css';

const PricingCard = ({ price, period, licenseText, features, buttonText, className }) => {
  return (
    <div className={`flex flex-col justify-between items-start cursor-pointer px-8 py-4 border-slate-700 border-2 h-[450px] ${className}`}>
      <div className='flex flex-col'>
        <div className='flex gap-2 font-bold'>
          <span className='flex self-start'>$</span>
          <span className='font-custom text-5xl'>{price}</span>
          <span className='font-custom flex self-end'>{period}</span>
        </div>
        <span className='font-custom'>{licenseText}</span>
      </div>
      <ul className='square-bullet p-4 font-custom flex flex-col gap-5'>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <Button buttonText={buttonText} className="font-custom w-full" />
    </div>
  );
};

PricingCard.propTypes = {
  price: PropTypes.number.isRequired,
  period: PropTypes.string.isRequired,
  licenseText: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonText: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default PricingCard;
