import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './my-slider-styles.css';

const Team = ({mode}) => {

    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // in milliseconds
        responsive: [
            {
              breakpoint: 1300, // apply these settings when screen width is less than 1024px
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 2,
              },
            },
            {
              breakpoint: 1100, // apply these settings when screen width is less than 768px
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 800, // apply these settings when screen width is less than 480px
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        };

 
    return (
        <div name='team' className={!mode ? 'z-20 py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] flex justify-center items-center bg-[#402158]' : 'z-20 py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] flex justify-center items-center bg-[#1D2226]'}>
            <div className="max-w-[1581px] w-full">
                <div className="text-white flex flex-col justify-center items-center text-center px-5">
                    <div className="text-[45px] sm:text-[50px] lg:text-[60px] 2xl:text-[50px] font-bold">
                        Our Developers and Designers
                    </div>
                    <div className="sm:text-[15px] md:text-[18px] mt-3 font-medium">
                        We are technology solutions providing company all over the world variety of IT solution services.
                    </div>
                </div>

                <div className="mt-[6rem] md:mt-[8rem]">
                <Slider className="my-slider z-50" {...settings}>
                <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center flex-col">
                            <div className="w-[20rem] h-[20rem] aspect-w-1 aspect-h-1 bg-[#ffff]">

                            </div>

                            <div className="w-[20rem] text-white">
                                <div className="text-[22px] md:text-[24px] font-bold mt-4">
                                    Nathaniel Peñaranda
                                </div>
                                <div className="text-[18px] md:text-[20px]">
                                    Software Developer
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center flex-col">
                            <div className="w-[20rem] h-[20rem] aspect-w-1 aspect-h-1 bg-[#ffff]">

                            </div>

                            <div className="w-[20rem] text-white">
                                <div className="text-[22px] md:text-[24px] font-bold mt-4">
                                    Nathaniel Peñaranda
                                </div>
                                <div className="text-[18px] md:text-[20px]">
                                    Software Developer
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center flex-col">
                            <div className="w-[20rem] h-[20rem] aspect-w-1 aspect-h-1 bg-[#ffff]">

                            </div>

                            <div className="w-[20rem] text-white">
                                <div className="text-[22px] md:text-[24px] font-bold mt-4">
                                    Nathaniel Peñaranda
                                </div>
                                <div className="text-[18px] md:text-[20px]">
                                    Software Developer
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center flex-col">
                            <div className="w-[20rem] h-[20rem] aspect-w-1 aspect-h-1 bg-[#ffff]">

                            </div>

                            <div className="w-[20rem] text-white">
                                <div className="text-[22px] md:text-[24px] font-bold mt-4">
                                    Nathaniel Peñaranda
                                </div>
                                <div className="text-[18px] md:text-[20px]">
                                    Software Developer
                                </div>
                            </div>
                        </div>
                    </div>

                    


                    
                    
                    </Slider>
                </div>
                
            </div>

        </div>
      
    )
  }
  
  export default Team;