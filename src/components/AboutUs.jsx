import React from 'react';
import styles, { layout } from '../style';
import { illustration2  } from '../assets';
import Button from './Button';
import { description } from './static';


const AboutUs = () => {
  return (
    <section className={`${layout.sectionReverse} ${styles.paddingY}`}>
          <div className={`flex ${styles.flexStart}  md:flex-col sm:flex-row xl:px-0 sm:px-16 px-6 gap-5 flex-col-reverse lg:flex-row`}>
          <img
                src={illustration2}
                alt="Illustration"
                className='h-[30vh] sm:h-[45vh] w-full sm:w-[30vw] md:w-full'
            />

            <div className='flex flex-col gap-6'> 
               <Button buttonText="About Us"/>
               <span className={`${styles.sectionTitle}`} >Faster, friendlier feedback loops make life easier.</span>
               <span className={`${styles.sectionParagraph}`} >Add a Viewer to your team so they can see everything you share, or invite 
                    people to individual documents. It’s up to you. Stakeholders can check 
                    out designs in their web browser, test prototypes and leave feedback for free.
                </span>
                {description.map((text) => (
                    <ul key={text.id} className='square-bullet sm:px-10 px-8'>
                        <li>{text.paragraph}</li>
                    </ul>
                ))}
            </div>
          </div>
    </section>
  )
}

export default AboutUs