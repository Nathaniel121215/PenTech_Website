import React from 'react'

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full  text-white py-9 z-20 bg-[#402158] '>
        <div className='max-w-[1581px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-5 gap-[2.5rem] '>
            <div className='px-4'>
                <h6 className='font-bold uppercase py-2'>Navigation</h6>
                <ul>
                    <li className='py-1'>Home</li>
                    <li className='py-1'>About Us</li>
                    <li className='py-1'>Services</li>
                    <li className='py-1'>Team</li>
                    <li className='py-1'>Insights</li>
                </ul>
            </div>
            <div className='px-4'>
                <h6 className='font-bold uppercase py-2'>Support</h6>
                <ul>
                    <li className='py-1'>Contact Us</li>
                    <li className='py-1'>Guides</li>
                    <li className='py-1'>Address</li>
                </ul>
            </div>
            <div className='px-4'>
                <h6 className='font-bold uppercase py-2'>Company</h6>
                <ul>
                    <li className='py-1'>Partners</li>
                    <li className='py-1'>Jobs</li>
                    <li className='py-1'>Personel</li>
                </ul>
            </div>
            <div className='px-4'>
                <h6 className='font-bold uppercase py-2'>Legal</h6>
                <ul>
                    <li className='py-1'>Claims</li>
                    <li className='py-1'>Privacy</li>
                    <li className='py-1'>Terms</li>
                    <li className='py-1'>Policies</li>
                    <li className='py-1'>Conditions</li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2 px-4'>
                <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='text-black font-medium border-2 border-[#424242] w-full p-3 mr-4 rounded-lg mb-4' type="email" placeholder='Enter email..'/>
                    <button className='h-[3rem] font-medium p-2 px-6 mb-4 bg-[#7D5683] rounded text-white'>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1581px] py-4 mx-auto justify-between sm:flex-row text-center px-5'>
        <p className='py-4 px-4'>2022 Workflow, LLC. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl px-4'>
            <FaFacebook className='hover:-translate-y-3 ease-in-out duration-500'/>
            <FaInstagram className='hover:-translate-y-3 ease-in-out duration-500'/>
            <FaTwitter className='hover:-translate-y-3 ease-in-out duration-500'/>
            <FaTwitch className='hover:-translate-y-3 ease-in-out duration-500'/>
            <FaGithub className='hover:-translate-y-3 ease-in-out duration-500'/>
        </div>
        </div>

        
    </div>
  )
}

export default Footer