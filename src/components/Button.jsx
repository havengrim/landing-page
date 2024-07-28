import React from 'react';

const Button = ({ buttonText,  className }) => {
  return (
    <button className={`px-4 py-2 border border-gray-500 font-bold uppercase w-auto self-start ${className}`}>
      {buttonText}
    </button>
  );
};

export default Button;
