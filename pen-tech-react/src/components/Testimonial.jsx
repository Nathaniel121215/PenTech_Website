
const Testimonial = ({mode}) => {



  return (
    <div name="insights" className={!mode ? 'z-20 py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] flex justify-center items-center' : 'z-20 py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] flex justify-center items-center'}>
        <div className="max-w-[1581px]">
            <div className="text-white flex flex-col justify-center items-center text-center px-5">
                <div className={!mode ? 'text-[#402158] text-[45px] sm:text-[50px] lg:text-[60px] 2xl:text-[50px] font-bold' : 'text-[#ffff] text-[45px] sm:text-[50px] lg:text-[60px] 2xl:text-[50px] font-bold'}>
                    Best Word’s From Our Clients
                </div>
                <div className={!mode ? 'sm:text-[15px] md:text-[18px] mt-3 font-medium text-[#272626]' : 'sm:text-[15px] md:text-[18px] mt-3 font-medium text-[#ffff]'}>
                    Read what our past clients have to say about our services. They come from diverse industries and have
                    different needs, but they all share their positive experience working with us.
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 px-5 gap-[2rem] 2xl:gap-[6rem] mt-[4rem]">

                <div className="text-white bg-[#7D5683] rounded-l-2xl p-[2rem] pb-[3rem] pt-[3rem] drop-shadow-2xl">

                    <div className="sm:text-[15px] md:text-[16.5px] lg:text-[18px] leading-8">
                    “Working with this IT company was 
                    a great experience. They provided 
                    excellent customer service, quick 
                    response times, and delivered the 
                    project on time and within budget. 
                    I would definitely work with them 
                    again in the future project for my company.“

                    </div>
                    <div className="flex mt-[2rem]">
                        <div className="w-full max-w-[5rem] h-[5rem] bg-[#D9D9D9] rounded-full">

                        </div>

                        <div className="flex flex-col justify-center ml-8">
                            <div className="text-[18px] font-bold">Nathaniel Peñaranda</div>
                            <div className="text-[16px]">We Support Inc.</div>

                        </div>

                    </div>

                </div>


                <div className="bg-[#C9BFB5] rounded-2xl p-[2rem] pb-[3rem] pt-[3rem] drop-shadow-2xl">

                    <div className="sm:text-[15px] md:text-[16.5px] lg:text-[18px] leading-8">
                        "I have been using the services of 
                        this IT company for several years 
                        and have always been impressed 
                        with their professionalism and 
                        expertise. Their team is reliable and 
                        trustworthy, and they have helped 
                        me improve the efficiency of my 
                        business operations.”

                    </div>
                    <div className="flex mt-[2rem]">
                        <div className="w-full max-w-[5rem] h-[5rem] bg-[#D9D9D9] rounded-full">

                        </div>

                        <div className="flex flex-col justify-center ml-8">
                            <div className="text-[#402158] text-[18px] font-bold">Arcee Tupakin</div>
                            <div className="text-[16px]">We Support Inc.</div>

                        </div>

                    </div>

                </div>


                <div className="bg-[#E2E9FF] rounded-r-2xl p-[2rem] pb-[3rem] pt-[3rem] drop-shadow-2xl">

                    <div className="sm:text-[15px] md:text-[16.5px] lg:text-[18px] leading-8">
                        “They took the time to understand 
                        our unique needs and created
                        solutions that helped us streamline 
                        our operations and improve 
                        productivity. Their team is 
                        knowledgeable and always goes 
                        above and beyond to ensure 
                        customer satisfaction.”

                    </div>
                    <div className="flex mt-[2rem]">
                        <div className="w-full max-w-[5rem] h-[5rem] bg-[#D9D9D9] rounded-full">

                        </div>

                        <div className="flex flex-col justify-center ml-8">
                            <div className="text-[#402158] text-[18px] font-bold">Ryan Decena</div>
                            <div className="text-[16px]">We Support Inc.</div>

                        </div>

                    </div>

                </div>





                
                

            </div>

            

        </div>
        

  
      </div>

    
  )
}

export default Testimonial;