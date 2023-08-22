import React from 'react';
//images
import Logo from '../assets/logosaj44.png'
//link
import { Link } from 'react-scroll'
const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href='#'>
          <img src={Logo} alt='' className=' h-[40px] lg:h-[80px] -mt-[21px] lg:-mt-[35px] pl-10  -mb-20 '/>
        </a>
        {/* button */}
        <Link to='contact'
          smooth={true}>
        <button className='btn btn-sm h-[30px] text-[12px] lg:h-[48px]  lg:text-sm'>Work with me</button>
        </Link>
      </div>  
    </div>

  </header>;
};

export default Header;
