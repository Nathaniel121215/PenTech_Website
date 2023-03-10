import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";
import React, { useCallback } from 'react';
import landing from '../assets/landing.png';

const Homepage = ({mode}) => {

  const particlesInit = useCallback(async (main) => {
    console.log(main);
 
    await loadFull(main);
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  
  return (
    
    <div name="/" className={!mode ? 'w-full h-full pt-[70px]  lg:pt-[0px] lg:h-screen flex lg:justify-center lg:items-center' : 'w-full h-full pt-[70px]  lg:pt-[0px] lg:h-screen flex lg:justify-center lg:items-center bg-[#1E1E1E] '}>
    <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: { color: !mode ? '#ffffff' : '#1E1E1E', },
          fpsLimit: 40,
          interactivity: {
            events: {
              resize: true
            },
          },
          particles: {
            color: !mode ? '#1E1E1E' : '#ffff',
            number: {
              density: {
                enable: true,
                area: 1080
              },
              limit: 0,
              value: !mode ? 70 : 30,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.5,
                speed: 4,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 0.1,
              },
              value: 1,
            },
            // shape: {
            //   type: "character",
            //   options: {
            //     character: {
            //       value: ["</>"],
            //       font: "Verdana",
            //       style: "",
            //       weight: ""
            //     }
            //   }
            // },

            shape: {
              type: ["circle", "triangle"]	,

            },

            size: {
              random: {
                enable: true,
                minimumValue: 0.5
              },
              value: !mode ? 5 : 5,
            }
          }
        }}
      />
      

        <div className="grid md:grid-cols-2 max-w-[1581px] md:mt-[3rem]  w-full px-5 my-6 gap-[2rem] 2xl:gap-[6rem] z-20 ">
            <div className="border-solid">
                <div className={!mode ? 'text-[45px] sm:text-[50px] md:text-[40px] lg:text-[60px] 2xl:text-[70px] font-bold text-[#402158]' : 'text-[45px] sm:text-[50px] md:text-[40px] lg:text-[60px] 2xl:text-[70px] font-bold text-white'} >
                We Bring Your 
                Business To The 
                Path of Success.
                </div>
                
                <div className={!mode ? 'sm:text-[15px] md:text-[18px] font-medium mt-4 text-[#272626]' : 'sm:text-[15px] md:text-[18px] font-medium mt-4 text-white'} >
                We help visionary executives transform their ventures with
                technology to thrive in the digital era with more than 5 years
                of experience.
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-4 lg:flex">
                    <div className="py-4 px-8 sm:px-12   text-white font-medium bg-[#402158] rounded-[30px] hover:bg-[#7D5683] text-[15px] flex justify-center items-center">
                        View Projects
                    </div>
                    <div className="py-4 px-8 sm:px-12  text-white font-medium bg-[#402158] rounded-[30px] hover:bg-[#7D5683] text-[15px] flex justify-center items-center">
                        How it Works?
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <div className={!mode ? '' : ''} >
                  <img src={landing} alt="/" className='w-full h-full'></img>
                </div>
            </div>
        </div>
    </div>

    
  )
}

export default Homepage;
