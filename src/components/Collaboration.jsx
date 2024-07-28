
import React from 'react';
import styles, { layout } from '../style';
import { illustration3  } from '../assets';
import Button from './Button';
import { collaboration } from './static';

const Collaboration = () => {
  return (
    <section className={`${layout.sectionReverse} ${styles.paddingY}`}>
    <div className={`flex ${styles.flexStart}  md:flex-col sm:flex-row xl:px-0 sm:px-16 px-6 gap-0 flex-col lg:flex-row`}>
      <div className='flex flex-col gap-6'> 
         <Button buttonText="How it works"/>
         <span className={`${styles.sectionTitle}`} >Building the best space
         for collaboration.</span>
          {collaboration.map((text) => (
              <ul key={text.id} className=''>
                <li className='flex flex-col sm:flex-row gap-2'>
                    <img src={text.img} alt="icon" className='w-20 h-20'/>
                    <div className='flex flex-col  justify-between'>
                        <span className='font-semibold text-xl'>{text.colabTitle}</span>
                        <span className='text-[14px]'>{text.colabDes}</span>
                    </div>
                </li>
              </ul>
          ))}
      </div>
      <img
          src={illustration3}
          alt="Illustration"
          className='h-[30vh] sm:h-[60vh] w-full sm:w-[50vw] md:flex md:justify-center md:self-center'
      />

    </div>
</section>
  )
}

export default Collaboration