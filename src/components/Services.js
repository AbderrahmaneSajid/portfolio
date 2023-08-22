import React from 'react';
//link
import { Link } from 'react-scroll'
//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'
import Image1 from '../assets/download.svg'
import Image2 from '../assets/mobile.svg'
import Image3 from '../assets/ux.svg'
//services date
const services = [
  {
    name:'Web Development',
    description:'Powerful and modern website solutions with a strong architecture.',
    image:Image1
  },
  {
    name:'Mobile Development',
    description:'Native mobile apps using the best tools and technologies available.',
   image:Image2
  },
  {
    name:'UI/UX Design',
    description:'Web and mobile apps with beautiful and smooth UI/UX designs .',
    image:Image3
  }
]
const Services = () => {
  return <div className='  py-16 pb-12 lg:pb-24 lg:pt-8' id='services'>
    <div className='container mx-auto '>
      <div className='flex flex-col lg:flex-row '>
      {/* text nd image */}
      <div 
      className='flex-1 lg:bg-services lg:bg-bottom lg:bg-no-repeat
      lg:mix-blend-lighten mb-12 lg:mb-0'>
        <h2 className='h2 text-accent mb-4'>What I Do.</h2>
        <h3 className='h3 text-[22px] mb-0'>As a Software Engineering Student.</h3>
        <h3 className='h3 text-[22px] mb-4'>As a Full Stack Developer.</h3>
        <Link to='work'
          smooth={true}>
            <button className='btn btn-sm'>See My Projects</button>
            </Link>
      </div>
      {/* services */}
      <div 
      className='flex flex-col justify-center items-center'>
        {/* services list */}
        <div>
          {services.map((service,index)=>{
            //destructure service
            const { name, description, image} = service;
              
            return (
              <div className='border-b border-white/20 h-[230px] mb-7 lg:h-[200px] lg:mb-0 flex'
              key={index}>
                <div className='max-w-[500px] '>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6
                  '>{name}</h4>
                  <p className='font-secondary leading-tight'>{description}</p>
                  <img src={image} alt=''className='max-w-max mx-auto h-40 w-20' ></img>

                </div>
                </div>
            )
          })}
        </div>
      </div>
      </div>
    </div>
  </div>;
};

export default Services;
