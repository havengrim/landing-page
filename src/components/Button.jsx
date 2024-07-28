import React from 'react';

const Button = ({ buttonText }) => {
  return (
    <button className='px-4 py-2 border border-gray-500 font-bold uppercase w-auto self-start'>
      {buttonText}
    </button>
  );
};

export default Button;
