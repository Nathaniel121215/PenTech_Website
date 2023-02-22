

const Aboutus = () => {

 
    return (
      <div className="z-20 bg-[#402158] py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] flex justify-center items-center">
        <div className="max-w-[1581px]">
            <div className="text-white flex flex-col justify-center items-center text-center">
                <div className="text-[45px] sm:text-[50px] lg:text-[60px] 2xl:text-[50px] font-bold">
                    Company’s Mission and Vision
                </div>
                <div className="sm:text-[15px] md:text-[18px] mt-3 font-medium">
                    Our Commitment to Excellence and Customer Satisfaction
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 px-5 gap-[2rem] 2xl:gap-[6rem] mt-[4rem]">
                <div className="text-white">
                    <div className="text-[22px] md:text-[24px] font-medium">
                        Vision
                    </div>
                    <div className="sm:text-[15px] md:text-[18px] mt-3">
                    Pen Tech Solutions aims to be a renowned provider of IT services and to compete with the leading companies nationwide. 
                    To become an established technology partner by distributing services and solutions that deliver valuable business results.
                    </div>
                </div>


                <div className="text-white">
                    <div className="text-[22px] md:text-[24px] font-medium">
                        Mission
                    </div>
                    <div className="sm:text-[15px] md:text-[18px] mt-3">
                    Pen Tech Solutions aims to help businesses by making their operations more efficient and automated, allowing them to focus on growing their company.
                     We provide cutting-edge solutions that improve productivity and offer high-quality IT services
                    </div>
                </div>

            </div>

        </div>
        

  
      </div>
  
      
    )
  }
  
  export default Aboutus;