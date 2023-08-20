import React from 'react';
//images
import Image from '../assets/snapchat.png'
import Logo from '../assets/logoo.png'
//link
import { Link } from 'react-scroll'
//type animation
import {TypeAnimation} from 'react-type-animation'
//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'

const Banner = () => {
  return <section className=' lg:-mt-20 flex items-center ab:mt-100' id='home'>
    <div  className='container mx-auto'>
      
      <div className='flex flex-col   lg:flex-row lg:items-center lg:gap-x-12'>
      
      {/* text */}
      <div className='flex-1 text-center font-secondary lg:text-left '>
        <motion.h1 variants={fadeIn('right',0.3)} initial="hidden"
        whileInView={'show'} viewport={{once: false, amount:0.7}}
        className='text-[45px] font-bold leading-[0.8] lg:text-[70px]'>
          ABDERRAHMANE <span>SAJID</span>
        </motion.h1>
        <motion.div variants={fadeIn('right',0.4)} initial="hidden"
        whileInView={'show'} viewport={{once: false, amount:0.7}}
          className='mb-4 text-[28px]
         lg:text-[42px] font-secondary font-semibold 
         uppercase leading-[1]'>
          <span className='mr-4'>I am a </span>
          <TypeAnimation sequence={[
            'Software Engineering Student',
            2000 ,
            'Full Stack Developer',
            2000
            ]}
            speed={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
             />
        </motion.div>
        <motion.p variants={fadeIn('right',0.5)} initial="hidden"
        whileInView={'show'} viewport={{once: false, amount:0.7}}
        className='mb-4 max-w-lg mx-auto lg:mx-0 text-[20px]  leading-[0.8] lg:text-[35px]'>
        Welcome to my portfolio !
        </motion.p>
        <motion.div variants={fadeIn('right',0.6)} initial="hidden"
        whileInView={'show'} viewport={{once: false, amount:0.7}}
        className='flex max-w-max gap-x-6 items-center -mb-10
        mx-auto lg:mx-0'>
          <Link 
          to='contact'
          smooth={true}
          >
          <button className='btn btn-lg'>Contact me</button>
          </Link>
          <a href='https://drive.google.com/file/d/1yEs1AnxssbFvXhadc55PZzlAjOQhp9XZ/view?usp=drive_link' target="_blank" className='text-gradient btn-link' >View Resume</a>
        </motion.div>
        
      </div>
      {/* image */}
      <motion.div  variants={fadeIn('left',0.3)} initial="hidden"
        whileInView={'show'} viewport={{once: false, amount:0.7}}
      className=" h-70 w-80  max-w-max mx-auto mt-10">
        <img src={Image} alt='' ></img>
      </motion.div>
      </div>
    </div>
    </section>;
};

export default Banner;
