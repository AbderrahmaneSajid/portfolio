import React from 'react';
//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'
//images
import Img1 from '../assets/mooodle.png'
import Img2 from '../assets/inef.png'
import Img3 from '../assets/piatoo.png'
import Img4 from '../assets/Website Mockup 1.png'
import Img5 from '../assets/Lab.png'


const Work = () => {
  return <section className=' py-16 lg:pb-24 lg:pt-8' id='work'>
    <div className='container mx-auto'> 
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div 
        className='flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0'>
          {/* text */}
          <div>
            <h2 className='h2 leading-tight text-accent'>My Latest <br />
            Projects.</h2>
            <p className='max-w-sm mb-[57px]'>I have been able to make my skills into application while making several projects on Web Devolopment /
            Mobile Devolopment and UX/UI Design using generally React / React Native / Tailwind / NodeJS and Firebase .
            </p>
            
          </div>
          {/* image */}
          <div className=' group relative overflow-hidden border-2 border-white/50 lg:h-[320px] lg:w-[570px]
          rounded-xl '>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
             z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500 ' 
            src={Img5} alt=''></img>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Web Devolopment</span>
              </div>
            {/* title */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-14 transition-all duration-700 z-50'> 
              <span className='text-3xl text-white'>VLab</span>
            </div>
          </div>
         {/* image */}
        <div className='group relative overflow-hidden border-2 border-white/50 lg:h-[320px] lg:w-[570px]
          rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
             z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500 lg:h-[340px] lg:w-[570px]' 
            src={Img1} alt=''></img>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>UI/UX Design</span>
              </div>
            {/* title */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-14 transition-all duration-700 z-50'> 
              <span className='text-3xl text-white'>MoodleINPT v2.0</span>
            </div>
          </div>
        </div>
        <div 
        className='flex-1 flex flex-col gap-y-10'>
          {/* image */}
        <div className='group relative overflow-hidden border-2 border-white/50 lg:h-[320px] lg:w-[570px]
          rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
             z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500 lg:h-[340px] lg:w-[590px]' 
            src={Img4} alt=''></img>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Web Devolopment</span>
              </div>
            {/* title */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-14 transition-all duration-700 z-50'> 
              <span className='text-3xl text-white'>My Portfolio</span>
            </div>
          </div>
          {/* image */}
        <div className='group relative overflow-hidden border-2 border-white/50 lg:h-[320px] lg:w-[570px]
          rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
             z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500  ' 
            src={Img3} alt=''></img>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Mobile Devolopment</span>
              </div>
            {/* title */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-14 transition-all duration-700 z-50'> 
              <span className='text-3xl text-white'>Piato.</span>
            </div>
          </div>
          
          {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 lg:h-[320px] lg:w-[570px]
          rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
             z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500 ' 
            src={Img2} alt=''></img>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Web Devolopment</span>
              </div>
            {/* title */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-14 transition-all duration-700 z-50'> 
              <span className='text-3xl text-white'>INE Food</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Work;
