
// import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Article from './components/Article';
import Aboutus from './components/Aboutus';
import Services from './components/Services';
import Offers from './components/Offers';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Contactus from './components/Contactus';
import Footer from './components/Footer'

import React, {useState} from 'react';
import { Link } from 'react-scroll'
import { Bars3BottomRightIcon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
// import logo from './assets/logo.png';
import logo1 from './assets/1.png';
import logo2 from './assets/2.png';

const App = () => {

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
      
      <div className={!mode ? 'fixed flex justify-center w-full border-b shadow z-50 bg-white ' : 'fixed flex justify-center w-full border-b  border-[#222020] shadow z-50 bg-[#1D2226]'}>
      <div className='w-full max-w-[1581px]'>
        
        <div className={!mode ? 'h-[70px] lg:h-[100px] px-4 flex justify-between items-center w-full bg-white lg z-20 relative' : 'h-[70px] lg:h-[100px] px-4 flex justify-between items-center w-full bg-[#1D2226] lg z-20 relative'}>
            <div className='flex items-center justify-center '>
              <img onClick={handleClose2} to="/" smooth={true} duration={500} src={!mode ? logo2 : logo1} alt="/" className='w-[8rem] md:w-[9rem] cursor-pointer'></img>
            </div>
          <div className='flex items-center'>
            <ul className='hidden lg:flex font-bold'>
            <li className={!mode ? 'px-7 text-[#140E36] hover:text-[#7D5683] cursor-pointer' : 'px-7 text-white hover:text-[#7D5683] cursor-pointer'}><Link to="/" smooth={true} duration={500}>Home</Link></li>
            <li className={!mode ? 'px-7 text-[#140E36] hover:text-[#7D5683] cursor-pointer' : 'px-7 text-white hover:text-[#7D5683] cursor-pointer'}><Link to="aboutus" smooth={true} duration={500}>About Us</Link></li>
            <li className={!mode ? 'px-7 text-[#140E36] hover:text-[#7D5683] cursor-pointer' : 'px-7 text-white hover:text-[#7D5683] cursor-pointer'}><Link to="program" smooth={true} duration={500}>Services</Link></li>
            <li className={!mode ? 'px-7 text-[#140E36] hover:text-[#7D5683] cursor-pointer' : 'px-7 text-white hover:text-[#7D5683] cursor-pointer'}><Link to="fqa" smooth={true} duration={500}>Team</Link></li>
            <li className={!mode ? 'px-7 text-[#140E36] hover:text-[#7D5683] cursor-pointer' : 'px-7 text-white hover:text-[#7D5683] cursor-pointer'}><Link to="pricing" smooth={true}  duration={500}>Insights</Link></li>
            
            </ul>
          </div>
          <div className='hidden lg:flex pr-4 gap-5'>
            <button className='text-white px-11 py-3  font-medium bg-[#402158] rounded-[20px] hover:bg-[#7D5683] '>Contact Us</button>
            <div onClick={handleMode} className='flex justify-center'>
              {!mode ? <SunIcon  className={!mode ? 'w-6 sm:w-8 cursor-pointer hover:transform hover:rotate-180 ease-in-out duration-1000' : ''} /> : <MoonIcon className='w-6 sm:w-8 cursor-pointer hover:transform hover:rotate-[360deg] ease-in-out duration-1000 text-white ' /> }
            </div>
            
          </div>
          <div onClick={handleNav} className='block lg:hidden'>
              {!nav ? <Bars3BottomRightIcon  className={!mode ? 'w-6 sm:w-6 cursor-pointer' : 'w-6 sm:w-6 cursor-pointer text-white'} /> : <XMarkIcon className={!mode ? 'w-6 sm:w-6 cursor-pointer' : 'w-6 sm:w-6 cursor-pointer text-white'} /> }
            
          </div>
        </div>

        <ul className={(!nav && !mode) ? `p-5 mt-[71px] fixed top-[-200%] w-full ease-in-out duration-500 lg:hidden z-[1] font-medium shadow`
                    : (nav && !mode) ? `bg-white p-5 mt-[71px]  fixed top-[0] w-full ease-in-out duration-500 lg:hidden z-[1] font-medium ] shadow`
                    
                    : (!nav && mode) ? `p-5 mt-[71px] fixed top-[-200%] w-full ease-in-out duration-500 lg:hidden z-[1] font-medium shadow`
                    : (nav && mode) ? `bg-[#1D2226] p-5 mt-[70px]  fixed top-[0] w-full ease-in-out duration-500 lg:hidden z-[1] font-medium shadow`
                    : ''
            }>


            <li className={!mode ? 'hover:text-[#7D5683] border-b-2 border-zinc-300 w-full py-4 cursor-pointer' : 'text-white hover:text-[#7D5683] border-b-2 border-zinc-300 w-full py-4 cursor-pointer'}><Link onClick={handleClose} to="/" smooth={true} duration={500}>Home</Link></li>
            <li className={!mode ? 'hover:text-[#7D5683] border-b-2 border-zinc-300 w-full py-4 cursor-pointer' : 'text-white hover:text-[#7D5683] border-b-2 border-zinc-300 w-full py-4 cursor-pointer'}><Link onClick={handleClose} to="aboutus" smooth={true} offset={-60} duration={500}>About Us</Link></li>
            <li className={!mode ? 'hover:text-[#7D5683] border-b-2 border-zinc-300 w-full py-4 cursor-pointer' : 'text-white hover:text-[#7D5683] border-b-2 border-zinc-300 w-full py-4 cursor-pointer'}><Link onClick={handleClose} to="program" smooth={true}  duration={500}>Services</Link></li>
            <li className={!mode ? 'hover:text-[#7D5683] border-b-2 border-zinc-300 w-full py-4 cursor-pointer' : 'text-white hover:text-[#7D5683] border-b-2 border-zinc-300 w-full py-4 cursor-pointer'}><Link onClick={handleClose} to="fqa" smooth={true} duration={500}>Team</Link></li>
            <li className={!mode ? 'hover:text-[#7D5683] border-b-2 border-zinc-300 w-full py-4 cursor-pointer' : 'text-white hover:text-[#7D5683] border-b-2 border-zinc-300 w-full py-4 cursor-pointer'}><Link onClick={handleClose} to="pricing" smooth={true} offset={-60} duration={500}>Insights</Link></li>

          <div className='flex flex-col my-5'>
              <button className='px-8 py-3 font-semibold bg-[#402158] rounded-[20px] text-white hover:bg-[#7D5683]'>Contact Us</button>
          </div>
        </ul>


        
      </div>

    </div>

      <div className="flex flex-col">
        <Homepage mode={mode}/>
        <Article mode={mode}/>
        <Aboutus mode={mode}/>
        <Services mode={mode}/>
        <Offers mode={mode}/>
        <Team mode={mode}/>
        <Testimonial mode={mode}/>
        <Contactus mode={mode}/>
        <Footer mode={mode}/>
      </div>
    </>

    
  )
}

export default App;
