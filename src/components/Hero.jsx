import React from 'react';
import {discount, robot} from '../assets';
import styles from '../style';
import GetStarted from './GetStarted'

const Hero = () =>(
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:pl-16 sm:pr-0 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] md-2'>
        <img src={discount} alt="discount" className='w-[32px] h-[32px]'/>
        <p className={`${styles.paragraph} ml-2`}>
         <span className='text-white'>20%</span> Discount For {" "}
         <span className="text-white">1 Month</span> Account
        </p>
      </div>
      <div className='flex flex-row justify-between items-center w-full'>

        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text- [52px] text-white ss:leading-[100px] leading-[75px]'>The Next            <br  className='sm:block hidden'/>{" "}

         <span className='text-gradient'>Generation</span>{" "}
        </h1>
         <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted/>
         </div>
      </div>
        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>Payment Method.</h1>
        <p className={` ${styles.paragraph} font-poppins max-w-[470px] mt-5`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est aspernatur sed, in velit ipsa cupiditate! Reiciendis cumque minima culpa ex ipsa, dolores sequi magni porro ab labore, quas laboriosam eaque?</p>      
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt="billing" className='w-[100%] h-[100%] z-[5] relative'/>

      <div className='absolute z-0 w-[60%] h-[50%] pink__gradient top-28 left-20'></div>
      <div className='absolute rounded-full z-1 w-[80%] h-[50%]  white__gradient  bottom-40'></div>
      <div className='absolute z-0 w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted/>
    </div>
  </section>
)


export default Hero