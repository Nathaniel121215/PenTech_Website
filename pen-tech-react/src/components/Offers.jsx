

const Offers = ({mode}) => {

 
    return (
        <div className={!mode ? 'z-20 py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] flex justify-center items-center' : 'z-20 py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] flex justify-center items-center'}>
            <div className="max-w-[1581px] w-full flex justify-center items-center">

                <div className="grid grid-cols-1 lg:grid-cols-2 px-5 gap-[2rem] 2xl:gap-[6rem]">

                    <div className={!mode ? 'text-[#272626]' : 'text-white'}>
                        <div className={!mode ? 'text-[45px] sm:text-[50px] lg:text-[60px] font-bold text-[#402158]' : 'text-[45px] sm:text-[50px] lg:text-[60px] font-bold '}>
                            What Makes Us The Best From Others?
                        </div>
                        <div className="sm:text-[15px] md:text-[18px] font-medium mt-[1rem]">
                            Welcome to PEN Tech Solution! We are a premier
                            IT company that specializes in developing custom
                            websites and software solutions for a diverse range
                            of clients. 
                        </div>
                    </div>
                    <div className="sm:py-[1rem] md:py-[2rem]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white">
                        <div className="flex sm:max-w-[20rem] w-full gap-3">
                            <div className="px-2">
                                <div className="bg-[#F86554] w-[3rem] h-[3rem] rounded-full">
                                    
                                </div>
                            </div>
                            <div className={!mode ? 'text-[#272626]' : 'text-white'}>
                                <div className="text-[20px] font-bold">
                                    5 Years Of Experience
                                </div>
                                <div className="text-[15px]">
                                    lorem ipsum is sumply dummy text of
                                    the printing and typesetting industry
                                    Loream iphas.
                                </div>
                            </div>
                        </div>

                        <div className="flex sm:max-w-[20rem] w-full gap-3">
                            <div className="px-2">
                                <div className="bg-[#95B864] w-[3rem] h-[3rem] rounded-full">
                                    
                                </div>
                            </div>
                            <div className={!mode ? 'text-[#272626]' : 'text-white'}>
                                <div className="text-[20px] font-bold">
                                    5 Years Of Experience
                                </div>
                                <div className="text-[15px]">
                                    lorem ipsum is sumply dummy text of
                                    the printing and typesetting industry
                                    Loream iphas.
                                </div>
                            </div>
                        </div> 


                        <div className="flex sm:max-w-[20rem] w-full gap-3">
                            <div className="px-2">
                                <div className="bg-[#F8C546] w-[3rem] h-[3rem] rounded-full">
                                    
                                </div>
                            </div>
                            <div className={!mode ? 'text-[#272626]' : 'text-white'}>
                                <div className="text-[20px] font-bold">
                                    5 Years Of Experience
                                </div>
                                <div className="text-[15px]">
                                    lorem ipsum is sumply dummy text of
                                    the printing and typesetting industry
                                    Loream iphas.
                                </div>
                            </div>
                        </div> 

                        <div className="flex sm:max-w-[20rem] w-full gap-3">
                            <div className="px-2">
                                <div className="bg-[#78C6E2] w-[3rem] h-[3rem] rounded-full">
                                    
                                </div>
                            </div>
                            <div className={!mode ? 'text-[#272626]' : 'text-white'}>
                                <div className="text-[20px] font-bold">
                                    5 Years Of Experience
                                </div>
                                <div className="text-[15px]">
                                    lorem ipsum is sumply dummy text of
                                    the printing and typesetting industry
                                    Loream iphas.
                                </div>
                            </div>
                        </div>  

                        



                    </div>

                    </div>
                    

                    



                </div>
                



            </div>


  
        </div>
  
      
    )
  }
  
  export default Offers;