import React from 'react';
//icons
import { FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
//image
import Image from '../assets/moi.png'
//intersection observer
import {useInView} from 'react-intersection-observer'
//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'
const About = () => {
  const [ref, inView] = useInView({
    threshold : 0.5,
  })
  return <section className='lg:pb-24 lg:pt-2 py-12 ' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
      lg:gap-x-20 lg:gap-y-0'>
        {/* img */}
        <motion.div variants={fadeIn('right',0.3)} initial="hidden"
        whileInView={'show'} viewport={{once: false, amount:0.3}}>
        <img src={Image} alt=''className=" max-w-max mx-auto h-[420px] lg:flex lg:h-[560px] " ></img>
      </motion.div>
        {/* text */}
        <motion.div variants={fadeIn('left',0.5)} initial="hidden"
        whileInView={'show'} viewport={{once: false, amount:0.3}}
        className='flex-1'
        >
          <h2 className='h2 text-[30px] text-accent mt-8'>About me.</h2>
          <h3 className='h3 text-[22px] mb-4'>I am currently a Software engineering student  at the National 
            Institute of Posts and Telecommunications.</h3>
            <p className='mb-1'>
            I am passionate about coding and solving problems through code.
           
            </p>
            <p className='mb-6'>
            I spend most of my time designing and developing web and mobile applications
            with good-looking UIs and a strong infrastructure.
            </p>
            <h3 className='h3 text-[20px] mb-4'>You can find me on :</h3>
            {/* socials */}
            <div 
            className='flex text-[30px] gap-x-6 max-w-max mx-auto '>
              <a href='https://github.com/AbderrahmaneSajid' target="_blank">
                <FaGithub />
              </a>
              <a href='https://www.linkedin.com/in/abderrahmane-sajid-a6154b273/' target="_blank">
                <FaLinkedin />
              </a>
              <a href='https://www.instagram.com/saaaaajiiiid/' target="_blank">
                <FaInstagram />
              </a>
            </div>
        </motion.div>
      </div>
    </div>
    </section>;
};

export default About;
