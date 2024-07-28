import React from 'react';
import styles, { layout } from '../style';
import { illustration5 } from '../assets';
import Button from './Button';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const Faqs = () => {
  return (
    <section className={`${layout.sectionReverse} ${styles.paddingY}`}>
      <div className={`flex ${styles.flexStart} md:flex-col sm:flex-row xl:px-0 sm:px-16 px-6 gap-0 flex-col lg:flex-row sm:gap-40`}>
        <div className='flex flex-col gap-6'>
          <Button buttonText="FAQS" />
          <span className={`${styles.sectionTitle}`}>Common Questions.</span>
          <span className={`${styles.sectionParagraph}`}>
            Here are some frequently asked questions and answers related to our product and services. These should help clarify common queries.
          </span>

          <Accordion>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Do I still need to purchase licenses for the Mac app?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Yes, you will need to purchase licenses for the Mac app separately. This ensures that you have access to the full range of features and updates available.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  What are the differences between Contributors and Viewers?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Contributors are team members who can create and edit documents within the app. Viewers, on the other hand, can only view the documents without making any changes. This distinction helps in managing permissions and access control effectively.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  How long does the free Teams subscription trial last?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  The free Teams subscription trial lasts for 30 days. During this period, you can explore all the features and decide if the subscription meets your needs before committing to a paid plan.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Will the program for Teams replace volume licensing?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  The program for Teams is designed to offer a flexible subscription model that might eventually replace traditional volume licensing. This change aims to provide more scalable and manageable solutions for businesses of all sizes.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <img
          src={illustration5}
          alt="Illustration"
          className='h-[30vh] sm:h-[60vh] w-full sm:w-[50vw] md:flex md:justify-center md:self-center'
        />
      </div>
    </section>
  );
}

export default Faqs;
