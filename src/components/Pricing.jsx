
import React from 'react';
import styles, { layout } from '../style';
import { illustration4  } from '../assets';
import Button from './Button';
import PricingCard from './PricingCard';
import { description } from './static';

const features = [
    'The Map App',
    'Beautiful White_label',
    'One year of saving',
  ];

  const features2 = [
    'The Map App',
    'One year of Mac app',
    'A personal Cloud',
    'All tools, just for you',
  ];

  const features3 = [
    'Access to the Mac app',
    'Cloud workspace',
    'Free Cloud access',
    'Easy team management',
    'No license key required',
  ];


const Pricing = () => {
  return (
    <>
    <section className={`${layout.sectionReverse} ${styles.paddingY}`}>
    <div className={`flex ${styles.flexStart}  md:flex-col sm:flex-row xl:px-0 sm:px-16 px-6 gap-5 flex-col-reverse lg:flex-row sm:gap-40`}>
    <img
          src={illustration4}
          alt="Illustration"
          className='h-[30vh] sm:h-[45vh] w-full sm:w-[30vw] md:w-full'
      />

      <div className='flex flex-col gap-6'> 
         <Button buttonText="Pricing" className="flex sm:self-end "/>
         <span className={`${styles.sectionTitle} sm:text-right`} >Select a membership level the right price for you.</span>
         <span className={`${styles.sectionParagraph} sm:text-right`} >Prices listed in USD. Taxes may apply.
         By using program you agree to our terms and policies.
          </span>
      </div>
    </div>  
    </section>
    <section className={`${layout.sectionReverse} ${styles.paddingY}`}>
        <div className='grid  grid-cols-1 sm:grid-cols-3 w-full gap-8'>
                <PricingCard
                price={49}
                period="per/mo"
                licenseText="A pay-once license, just for you"
                features={features}
                buttonText="Join"
            />

        <PricingCard
                price={99}
                period="per/mo"
                licenseText="Pro account, just for you"
                features={features2}
                buttonText="Join"
                className="bg-black text-white border-white"
            />

        <PricingCard
                price={299}
                period="per/mo"
                licenseText="A subscription for the whole team"
                features={features3}
                buttonText="Join"
            />
        </div>


    </section>
    </>
  )
}

export default Pricing