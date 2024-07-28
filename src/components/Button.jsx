import React from 'react';

const Button = ({ buttonText }) => {
  return (
    <button className='px-4 py-2 border border-gray-500 max-w-36 font-bold uppercase'>
      {buttonText}
    </button>
  );
};

export default Button;
