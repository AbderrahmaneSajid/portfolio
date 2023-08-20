import React from 'react';
//images
import img1 from '../assets/react.svg'
import img2 from '../assets/javascript.svg'
import img3 from '../assets/typescript.svg'
import img4 from '../assets/nodejs.svg'
import img5 from '../assets/tailwind.svg'
import img6 from '../assets/mysql.svg'
import img7 from '../assets/reactnative.svg'
import img8 from '../assets/framermotion.svg'
import img9 from '../assets/expogo.svg'
import img10 from '../assets/bitbucket.svg'
import img11 from '../assets/jira.svg'
import img12  from '../assets/git.svg'
import img13 from '../assets/redux.svg'
import img14 from '../assets/figma.svg'
import img15 from '../assets/firebase.svg'
//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'



const Skills = () => {
  return <div className='py-16 lg:pb-24 lg:pt-8' id='skills'>
    <div className='container mx-auto'>
      <div>
        {/* text */}
        <motion.div variants={fadeIn('right',0.3)} initial="hidden"
        whileInView={'show'} viewport={{once: false, amount:0.3}}>
        <h2 className='h2 leading-tight text-accent mb-4'>SKILLS.</h2>
        <h3 className='h3 text-[22px] mb-4'>I have worked with.</h3>
        </motion.div>
        {/* images */} 
        <div className='flex  flex-wrap gap-6 lg:gap-10'>
        <motion.div variants={fadeIn('left',0.5)} initial="hidden"
        whileInView={'show'} viewport={{once: false, amount:0.3}}
        className='flex flex-wrap gap-6 lg:gap-10 mx-auto '>
        <div className=' group relative overflow-hidden border-2 border-white/50
          rounded-xl flex items-center justify-center h-[102px] w-[102px] lg:h-[160px] lg:w-[160px] '>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
             z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500  h-[85px] w-[85px] lg:h-[125px] lg:w-[125px]' 
            src={img2} alt=''></img>
            {/* pretitle */}
            <div className='absolute -bottom-full text-[13px] left-[5px] lg:left-4 lg:text-[19px]
            group-hover:bottom-[35px] lg:group-hover:bottom-16 transition-all duration-500 z-50 '>
              <span className='text-gradient'>Java Script</span>
              </div>
              {/* title */}
            <div className=' hidden lg:block  absolute -bottom-full left-
            group-hover:bottom-10 transition-all duration-700 z-50'> 
              <span className=' lg:text-xl text-white '>Prg Language</span>
            </div>
              </div>
              <div className=' group relative overflow-hidden border-2 border-white/50
          rounded-xl flex items-center justify-center h-[102px] w-[102px] lg:h-[160px] lg:w-[160px] '>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full  absolute
             z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500  h-[65px] w-[65px] lg:h-[90px] lg:w-[90px]' 
            src={img3} alt=''></img>
            {/* pretitle */}
            <div className=' absolute -bottom-full text-[13px] left-[5px] lg:left-4 lg:text-[19px]
            group-hover:bottom-[35px] lg:group-hover:bottom-16 transition-all duration-500 z-50'>
              <span className='text-gradient'>Type Script</span>
              </div>
              {/* title */}
            <div className=' hidden lg:block  absolute -bottom-full left-
            group-hover:bottom-10 transition-all duration-700 z-50'> 
              <span className='text-xl text-white'>Prg Language</span>
            </div>
              </div>
              <div className=' group relative overflow-hidden border-2 border-white/50
          rounded-xl flex items-center justify-center h-[102px] w-[102px] lg:h-[160px] lg:w-[160px] '>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full  absolute
             z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500  h-[80px] w-[80px] lg:h-[120px] lg:w-[120px]' 
            src={img1} alt=''></img>
            {/* pretitle */}
            <div className=' absolute -bottom-full text-[16px] left-[22px] lg:left-12 lg:text-[20px]
            group-hover:bottom-[35px] lg:group-hover:bottom-16 transition-all duration-500 z-50'>
              <span className='text-gradient'>React</span>
              </div>
              {/* title */}
            <div className=' hidden lg:block absolute -bottom-full left-
            group-hover:bottom-10 transition-all duration-700 z-50'> 
              <span className='text-xl text-white'>Framework JS</span>
            </div>
              </div>
              <div className=' group relative overflow-hidden border-2 border-white/50
          rounded-xl flex items-center justify-center h-[102px] w-[102px] lg:h-[160px] lg:w-[160px] '>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
             z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500  h-[80px] w-[80px] lg:h-[120px] lg:w-[120px]' 
            src={img4} alt=''></img>
            {/* pretitle */}
            <div className='absolute -bottom-full text-[16px] left-[14px] lg:left-8 lg:text-[20px]
            group-hover:bottom-[35px] lg:group-hover:bottom-16 transition-all duration-500 z-50'>
              <span className='text-gradient'>Node JS</span>
              </div>
              {/* title */}
            <div className=' hidden lg:block absolute -bottom-full left-
            group-hover:bottom-10 transition-all duration-700 z-50'> 
              <span className='text-xl text-white'>Framework JS</span>
            </div>
              </div>
              <div className=' group relative overflow-hidden border-2 border-white/50
          rounded-xl flex items-center justify-center h-[102px] w-[102px] lg:h-[160px] lg:w-[160px] '>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
             z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500  h-[80px] w-[80px] lg:h-[120px] lg:w-[120px]' 
            src={img5} alt=''></img>
            {/* pretitle */}
            <div className='absolute -bottom-full text-[16px] left-[14px] lg:left-8 lg:text-[20px]
            group-hover:bottom-[35px] lg:group-hover:bottom-16 transition-all duration-500 z-50'>
              <span className='text-gradient'>Tailwind</span>
              </div>
              {/* title */}
            <div className=' hidden lg:block absolute -bottom-full left-
            group-hover:bottom-10 transition-all duration-700 z-50'> 
              <span className='text-xl text-white'>Framework CSS</span>
            </div>
              </div>
              <div className=' group relative overflow-hidden border-2 border-white/50
          rounded-xl flex items-center justify-center h-[102px] w-[102px] lg:h-[160px] lg:w-[160px] '>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
             z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500  h-[75px] w-[75px] lg:h-[110px] lg:w-[110px]' 
            src={img8} alt=''></img>
            {/* pretitle */}
            <div className='absolute -bottom-full text-[11px] left-[5px] lg:left-2 lg:text-[17px]
            group-hover:bottom-[35px] lg:group-hover:bottom-16 transition-all duration-500 z-50'>
              <span className='text-gradient'>Framer Motion</span>
              </div>
              {/* title */}
            <div className=' hidden lg:block lg:absolute lg:-bottom-full lg:left-
            lg:group-hover:bottom-10 lg:transition-all lg:duration-700 z-50'> 
              <span className='text-xl text-white'>React Library</span>
            </div>
              </div>
              </motion.div>
              <motion.div variants={fadeIn('right',0.5)} initial="hidden"
        whileInView={'show'} viewport={{once: false, amount:0.3}}
        className='flex flex-wrap gap-6 lg:gap-10 mx-auto '>
              <div className=' group relative overflow-hidden border-2 border-white/50
          rounded-xl flex items-center justify-center h-[102px] w-[102px] lg:h-[160px] lg:w-[160px] '>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
             z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500  h-[80px] w-[80px] lg:h-[120px] lg:w-[120px]' 
            src={img6} alt=''></img>
            {/* pretitle */}
            <div className='absolute -bottom-full text-[16px] left-[18px] lg:left-10 lg:text-[20px]
            group-hover:bottom-[35px] lg:group-hover:bottom-16 transition-all duration-500 z-50'>
              <span className='text-gradient'>MySQL</span>
              </div>
              {/* title */}
            <div className=' hidden lg:block lg:absolute lg:-bottom-full lg:left-
            lg:group-hover:bottom-10 lg:transition-all lg:duration-700 z-50'> 
              <span className='text-xl text-white'>Database</span>
            </div>
              </div>
              <div className=' group relative overflow-hidden border-2 border-white/50
          rounded-xl flex items-center justify-center h-[102px] w-[102px] lg:h-[160px] lg:w-[160px] '>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
             z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500  h-[80px] w-[80px] lg:h-[120px] lg:w-[120px]' 
            src={img15} alt=''></img>
            {/* pretitle */}
            <div className='absolute -bottom-full text-[16px] left-[14px] lg:left-6 lg:text-[23px]
            group-hover:bottom-[35px] lg:group-hover:bottom-16 transition-all duration-500 z-50 '>
              <span className='text-gradient'>Firebase</span>
              </div>
              {/* title */}
            <div className=' hidden lg:block  absolute -bottom-full  left-
            group-hover:bottom-10 transition-all duration-700 z-50'> 
              <span className=' lg:text-xl text-white '>Database</span>
            </div>
              </div>
              <div className=' group relative overflow-hidden border-2 border-white/50
          rounded-xl flex items-center justify-center h-[102px] w-[102px] lg:h-[160px] lg:w-[160px] '>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full  absolute
             z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500  h-[80px] w-[80px] lg:h-[125px] lg:w-[125px]' 
            src={img13} alt=''></img>
            {/* pretitle */}
            <div className=' absolute -bottom-full text-[16px] left-[22px] lg:left-10 lg:text-[22px]
            group-hover:bottom-[35px] lg:group-hover:bottom-16 transition-all duration-500 z-50'>
              <span className='text-gradient'>Redux</span>
              </div>
              {/* title */}
            <div className=' hidden lg:block  absolute -bottom-full left-
            group-hover:bottom-10 transition-all duration-700 z-50'> 
              <span className='text-xl text-white'>JS Library</span>
            </div>
              </div>
              <div className=' group relative overflow-hidden border-2 border-white/50
          rounded-xl flex items-center justify-center h-[102px] w-[102px] lg:h-[160px] lg:w-[160px] '>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full  absolute
             z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500  h-[80px] w-[80px] lg:h-[120px] lg:w-[120px]' 
            src={img7} alt=''></img>
            {/* pretitle */}
            <div className=' absolute -bottom-full text-[12px] left-[5px] lg:left-[11px] lg:text-[19px]
            group-hover:bottom-[35px] lg:group-hover:bottom-16 transition-all duration-500 z-50'>
              <span className='text-gradient'>React Native</span>
              </div>
              {/* title */}
            <div className=' hidden lg:block absolute -bottom-full left-
            group-hover:bottom-10 transition-all duration-700 z-50'> 
              <span className='text-xl text-white'>Js Framework</span>
            </div>
              </div>
              <div className=' group relative overflow-hidden border-2 border-white/50
          rounded-xl flex items-center justify-center h-[102px] w-[102px] lg:h-[160px] lg:w-[160px] '>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
             z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500 h-[80px] w-[80px] lg:h-[100px] lg:w-[100px]' 
            src={img9} alt=''></img>
            {/* pretitle */}
            <div className='absolute -bottom-full text-[16px] left-[14px] lg:left-8 lg:text-[21px]
            group-hover:bottom-[35px] lg:group-hover:bottom-16 transition-all duration-500 z-50'>
              <span className='text-gradient'>Expo go</span>
              </div>
              {/* title */}
            <div className=' hidden lg:block absolute -bottom-full left-
            group-hover:bottom-10 transition-all duration-700 z-50'> 
              <span className='text-xl text-white'>Mobile Dev</span>
            </div>
              </div>
              <div className=' group relative overflow-hidden border-2 border-white/50
          rounded-xl flex items-center justify-center h-[102px] w-[102px] lg:h-[160px] lg:w-[160px] '>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
             z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500  h-[80px] w-[80px] lg:h-[120px] lg:w-[120px]' 
            src={img14} alt=''></img>
            {/* pretitle */}
            <div className='absolute -bottom-full text-[16px] left-[22px] lg:left-10 lg:text-[23px]
            group-hover:bottom-[35px] lg:group-hover:bottom-16 transition-all duration-500 z-50'>
              <span className='text-gradient'>Figma</span>
              </div>
              {/* title */}
            <div className=' hidden lg:block absolute -bottom-full left-
            group-hover:bottom-10 transition-all duration-700 z-50'> 
              <span className='text-xl text-white'>UI/UX Design</span>
            </div>
              </div>
              </motion.div>
              <motion.div variants={fadeIn('left',0.6)} initial="hidden"
        whileInView={'show'} viewport={{once: false, amount:0.3}}
               className='flex flex-wrap gap-6 lg:gap-10 mx-auto '>
              <div className=' group relative overflow-hidden border-2 border-white/50
          rounded-xl flex items-center justify-center h-[102px] w-[102px] lg:h-[160px] lg:w-[160px] '>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
             z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500  h-[80px] w-[80px] lg:h-[120px] lg:w-[120px]' 
            src={img12} alt=''></img>
            {/* pretitle */}
            <div className='absolute -bottom-full text-[22px] left-[32px] lg:left-16
            group-hover:bottom-[35px] lg:group-hover:bottom-16 transition-all duration-500 z-50'>
              <span className='text-gradient'>Git</span>
              </div>
              {/* title */}
            <div className=' hidden lg:block absolute -bottom-full left-[4px]
            group-hover:bottom-10 transition-all duration-700 z-50'> 
              <span className='text-xl text-white'>Agile Methodology</span>
            </div>
              </div>
              <div className=' group relative overflow-hidden border-2 border-white/50
          rounded-xl flex items-center justify-center h-[102px] w-[102px] lg:h-[160px] lg:w-[160px] '>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
             z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500  h-[80px] w-[80px] lg:h-[120px] lg:w-[120px]' 
            src={img11} alt=''></img>
            {/* pretitle */}
            <div className='absolute -bottom-full text-[20px] left-[26px] lg:left-14
            group-hover:bottom-[35px] lg:group-hover:bottom-16 transition-all duration-500 z-50'>
              <span className='text-gradient'>Jira</span>
              </div>
              {/* title */}
            <div className=' hidden lg:block absolute -bottom-full left-
            group-hover:bottom-10 transition-all duration-700 z-50'> 
              <span className='text-xl text-white'>Agile Methodology</span>
            </div>
              </div>
              <div className=' group relative overflow-hidden border-2 border-white/50
          rounded-xl flex items-center justify-center h-[102px] w-[102px] lg:h-[160px] lg:w-[160px] '>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
             z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500  h-[80px] w-[80px] lg:h-[120px] lg:w-[120px]' 
            src={img10} alt=''></img>
            {/* pretitle */}
            <div className='absolute -bottom-full text-[16px] left-[8px] lg:left-6 lg:text-[20px]
            group-hover:bottom-[35px] lg:group-hover:bottom-16 transition-all duration-500 z-50'>
              <span className='text-gradient'>Bitbucket</span>
              </div>
              {/* title */}
            <div className=' hidden lg:block absolute -bottom-full left-
            group-hover:bottom-10 transition-all duration-700 z-50'> 
              <span className='text-xl text-white'>Agile Methodology</span>
            </div>
              </div>
              </motion.div>
              </div>
              
      </div>
    </div>
  </div>;
};
export default Skills;
