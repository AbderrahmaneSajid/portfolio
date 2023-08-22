import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7sci0f4', 'template_u2qk80f', form.current, '3aEUv7-Pi3jZrg3qf')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
    }
  return <div className='py-16   ' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <div 
        className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium 
            mb-2 tracking-wide'>
              Get in touch
            </h4>
            <h2 className='text-[45px] lg:text-[70px] leading-none mb-12'>Let's work <br /> together!</h2>
          </div>
        </div>
        {/* form */}
        <form 
        className='flex-1 border rounded-2xl flex flex-col gap-y-6
        pb-24 p-6 items-start'
        ref={form} onSubmit={sendEmail}>
          <input className='bg-transparent border-b py-3 outline-none w-full
          placeholder:text-white focus:border-accent transition-all
          ' 
          type='text'
          placeholder='Your name'
          name="user_name" />
          <input className='bg-transparent border-b py-3 outline-none w-full
          placeholder:text-white focus:border-accent transition-all
          ' 
          type='text'
          placeholder='Your email'
          name="user_email" />
          <textarea className='bg-transparent border-b py-10 outline-none w-full
          placeholder:text-white focus:border-accent transition-all
          resize-none mb-12'
          placeholder='Your message'
          name="message"></textarea>
          <button className='btn btn-lg'>Send message</button>
        </form>
      </div>
    </div>
  </div>;
};

export default Contact;
