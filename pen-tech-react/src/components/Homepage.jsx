import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";
import logo from '../assets/logo.png';


const Homepage = () => {

  const particlesInit = async (main) => {
    console.log(main);
 
    await loadFull(main);
  };
 
  const particlesLoaded = (container) => {
    console.log(container);
  };


  return (
    
    <div className="w-full h-full pt-[70px]  lg:pt-[0px] lg:h-screen flex lg:justify-center lg:items-center">
    <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
              options={{
            background: {
              color: '#f1f1f1',
            },
            fpsLimit: 40,
            interactivity: {
              detectsOn: 'canvas',
              events: {
                resize: true
              },
            },
            particles: {
              color: {
                value: "#162747"
              },
              number: {
                density: {
                  enable: true,
                  area: 1080
                },
                limit: 0,
                value: 70,
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.5,
                  speed: 2,
                  sync: false,
                },
                random: {
                  enable: true,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              // "shape": {
              //   "type": "character",
              //   "options": {
              //     "character": {
              //       "value": ["</>"],
              //       "font": "Verdana",
              //       "style": "",
              //       "weight": ""
              //     }
              //   }
              // },


            // "shape": {
            //     "type": "image",
            //     "image": {
            //         "src": arcee,
            //         "width": 100,
            //         "height": 100
            //     }
            // },
              
          
              
              shape: {
                type: ["circle", "triangle"]	,
       
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: 0.5
                },
                value: 3.5
              }
              
            }
          }}
      />  

        <div className="grid md:grid-cols-2 max-w-[1581px] md:mt-[3rem]  w-full px-5 my-6 gap-6 z-20">
            <div className="border-solid">
                <div className="text-[45px] sm:text-[50px] md:text-[40px] lg:text-[60px] 2xl:text-[70px] font-bold text-[#402158]">
                We Bring Your 
                Business To The 
                Path of Success.
                </div>
                
                <div className="sm:text-[15px] md:text-[18px] font-medium mt-4">
                We help visionary executives transform their ventures with
                technology to thrive in the digital era with more than 5 years
                of experience.
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-4 lg:flex">
                    <div className="py-3 px-8 md:py-4 sm:px-12 sm:text-[12px] md:text-[15px] text-white font-medium bg-[#402158] rounded-[30px] hover:bg-[#7D5683] text-[15px] flex justify-center items-center">
                        View Projects
                    </div>
                    <div className="py-3 px-8 md:py-4 sm:px-12 sm:text-[12px] md:text-[15px] text-white font-medium bg-[#402158] rounded-[30px] hover:bg-[#7D5683] text-[15px] flex justify-center items-center">
                        How it Works?
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="relative max-w-[737px] bg-[#402158] rounded-[10px] h-[450px] w-full">

                </div>
            </div>
        </div>
    </div>

    
  )
}

export default Homepage;
