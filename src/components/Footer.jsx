import React from 'react'
import styles, {layout} from '../style'
import { logoWhite } from '../assets'

const Footer = () => {
  return (
    <section className={`${layout.sectionReverse} ${styles.paddingY} bg-black text-white`}>
        <div className={` ${styles.flexCenter} container sm:px-28 px-16 py-4 mx-auto grid sm:grid-cols-3 grid-cols-1 justify-between w-full gap-8`}>
            <div className='flex flex-col gap-10'>
                <img src={logoWhite} alt="" width={40} />
                <span className={`${styles.sectionTitle}`}>Want to receive our awesome stories?</span>
                <div className='flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between w-full sm:w-[500px]  '>
                    <input
                        type='email'
                        placeholder='Enter your email'
                        className='font-custom border-gray-400 border sm:px-6 py-2 px-2 flex-grow'
                    />
                    <button className='p-2 bg-black text-white border-white border'>
                        Subscribe
                    </button>
                </div>
            </div>
            <div className='flex flex-col gap-5 justify-center sm:items-end'>
                <span>About Us</span>
                <span>How it works</span>
                <span>Pricing</span>
                <span>FAQs</span>
            </div>
            <div className='flex flex-col gap-5 justify-center sm:items-end'>
                <span>Lead Generation</span>
                <span>Customer engagement</span>
                <span>Customer support</span>
                <span>Help Center Articles</span>
            </div>
        </div>
    </section>
  )
}

export default Footer