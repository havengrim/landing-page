import React from 'react';
import styles from '../style';
import { illustration1, visa, paypal, mastercard } from '../assets';
import { sectionText } from "./static.js"; // Correct import

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0`}>
        <div className='flex flex-col justify-between items-center sm:flex-row sm:gap-20'>
          <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-4`}>
            {sectionText.map(({ id, title, paragraph }) => (
              <React.Fragment key={id}>
                <h1 className='font-custom text-3xl sm:text-5xl mb-2'>
                  {title}
                </h1>
                <p className='text-base sm:text-lg mt-2'>
                  {paragraph}
                </p>
              </React.Fragment>
            ))}
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between w-full sm:w-[500px]  '>
              <input
                type='email'
                placeholder='Enter your email'
                className='font-custom border-gray-400 border sm:px-6 py-2 px-2 flex-grow'
              />
              <button className='p-2 bg-black text-white border-black border'>
                Get Started
              </button>
            </div>
            <div className='flex gap-3 mt-6'>
              <img src={visa} alt="visa" className='w-12 h-8 sm:w-18 sm:h-18'/>
              <img src={mastercard} alt="mastercard" className='w-18 h-18'/>
              <img src={paypal} alt="paypal" className='w-18 h-18'/>
            </div>
          </div>
          <img
            src={illustration1}
            alt="Illustration"
            className='h-[30vh] sm:h-[45vh] w-full sm:w-[30vw] hidden sm:block md:hidden lg:block'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
