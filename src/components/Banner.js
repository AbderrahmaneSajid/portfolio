import React from 'react';
//images
import Image from '../assets/snapchat.png'
import Logo from '../assets/logoo.png'
//link
import { Link } from 'react-scroll'
//type animation
import {TypeAnimation} from 'react-type-animation'


const Banner = () => {
  return <section className=' w-screen h-screen pt-20 lg:pt-0  lg:-mt-20  flex items-center ' id='home'>
    <div  className='container mx-auto'>
      
      <div className='flex flex-col   lg:flex-row lg:items-center lg:gap-x-12'>
      
      {/* text */}
      <div className='flex-1 text-center font-secondary lg:text-left '>
        <h1 
        className='text-[45px] font-bold leading-[0.8] lg:text-[70px]'>
          ABDERRAHMANE <span>SAJID</span>
        </h1>
        <div 
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
        </div>
        <p 
        className='mb-4 max-w-lg mx-auto lg:mx-0 text-[20px]  leading-[0.8] lg:text-[35px]'>
        Welcome to my portfolio !
        </p>
        <div 
        className='flex max-w-max gap-x-6 items-center -mb-10
        mx-auto lg:mx-0'>
          <Link 
          to='contact'
          smooth={true}
          >
          <button className='btn btn-lg'>Contact me</button>
          </Link>
          <a href='https://drive.google.com/file/d/1yEs1AnxssbFvXhadc55PZzlAjOQhp9XZ/view?usp=drive_link' target="_blank" className='text-gradient btn-link' >View Resume</a>
        </div>
        
      </div>
      {/* image */}
      <div  
      className=" h-70 w-80  max-w-max mx-auto mt-10">
        <img src={Image} alt='' ></img>
      </div>
      </div>
    </div>
    </section>;
};

export default Banner;
