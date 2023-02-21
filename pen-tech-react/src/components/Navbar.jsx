import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'
import { Bars3BottomRightIcon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';

import logo from '../assets/logo.png';

const Navbar = () => {


  const [nav,setNav] = useState(false)
  const [mode,setMode] = useState(false)

  const handleNav =() =>
  {
      setNav(!nav)
  }

  const handleMode =() =>
  {
    setMode(!mode)
  }

  const handleClose =()=> setNav(!nav)
  const handleClose2 = () => setNav(false);


  return (
    <>
    <div className='fixed flex justify-center w-full border-b shadow z-50 bg-white '>
      <div className='w-full max-w-[1581px]'>
        
        <div className='h-[70px] lg:h-[100px] px-4 flex justify-between items-center w-full bg-white lg z-20 relative '>
            <div className='flex items-center justify-center '>
              <img onClick={handleClose2} to="/" smooth={true} duration={500} src={logo} alt="/" className='w-[8rem] md:w-[9rem] cursor-pointer'></img>
            </div>
          <div className='flex items-center'>
            <ul className='hidden lg:flex font-bold'>
            <li className='px-7 text-[#140E36] hover:text-[#7D5683] cursor-pointer'><Link to="/" smooth={true} duration={500}>Home</Link></li>
            <li className='px-7 text-[#140E36] hover:text-[#7D5683] cursor-pointer'><Link to="aboutus" smooth={true} duration={500}>About Us</Link></li>
            <li className='px-7 text-[#140E36] hover:text-[#7D5683] cursor-pointer'><Link to="program" smooth={true} duration={500}>Services</Link></li>
            <li className='px-7 text-[#140E36] hover:text-[#7D5683] cursor-pointer'><Link to="fqa" smooth={true} duration={500}>Team</Link></li>
            <li className='px-7 text-[#140E36] hover:text-[#7D5683] cursor-pointer'><Link to="pricing" smooth={true}  duration={500}>Insights</Link></li>
            
            </ul>
          </div>
          <div className='hidden lg:flex pr-4 gap-5'>
            <button className='text-white px-11 py-3  font-medium bg-[#402158] rounded-[20px] hover:bg-[#7D5683] '>Contact Us</button>
            <div onClick={handleMode} className='flex justify-center'>
              {!mode ? <SunIcon  className='w-6 sm:w-8 cursor-pointer hover:transform hover:rotate-180 ease-in-out duration-1000  ' /> : <MoonIcon className='w-6 sm:w-8 cursor-pointer hover:transform hover:rotate-[360deg] ease-in-out duration-1000 ' /> }
            </div>
            
          </div>
          <div onClick={handleNav} className='block lg:hidden'>
              {!nav ? <Bars3BottomRightIcon  className='w-6 sm:w-6 cursor-pointer' /> : <XMarkIcon className='w-6 sm:w-6 cursor-pointer' /> }
            
          </div>
        </div>

        <ul className={!nav ? 'p-5 mt-[71px] fixed top-[-200%] w-full ease-in-out duration-500 lg:hidden z-[1] bg-[#ffff] font-medium' : 'p-5 mt-[71px]  fixed top-[0] w-full ease-in-out duration-500 lg:hidden z-[1] bg-[#ffff] font-medium border-b-[1px] shadow'}>
            <li className='hover:text-[#7D5683] border-b-2 border-zinc-300 w-full py-4 cursor-pointer'><Link onClick={handleClose} to="/" smooth={true} duration={500}>Home</Link></li>
            <li className='hover:text-[#7D5683] border-b-2 border-zinc-300 w-full py-4 cursor-pointer'><Link onClick={handleClose} to="aboutus" smooth={true} offset={-60} duration={500}>About Us</Link></li>
            <li className='hover:text-[#7D5683] border-b-2 border-zinc-300 w-full py-4 cursor-pointer'><Link onClick={handleClose} to="program" smooth={true}  duration={500}>Services</Link></li>
            <li className='hover:text-[#7D5683] border-b-2 border-zinc-300 w-full py-4 cursor-pointer'><Link onClick={handleClose} to="fqa" smooth={true} duration={500}>Team</Link></li>
            <li className='hover:text-[#7D5683] border-b-2 border-zinc-300 w-full py-4 cursor-pointer'><Link onClick={handleClose} to="pricing" smooth={true} offset={-60} duration={500}>Insights</Link></li>

          <div className='flex flex-col my-5'>
              <button className='px-8 py-3 font-semibold bg-[#402158] rounded-[20px] text-white hover:bg-[#7D5683]'>Contact Us</button>
          </div>
        </ul>


        
      </div>

    </div>
    
    

    
    
    </>

    
  )
}

export default Navbar;