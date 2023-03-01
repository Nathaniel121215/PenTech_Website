

const Aboutus = ({mode}) => {

 
    return (
      <div className={!mode ? 'z-20 py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] flex justify-center items-center' : 'z-20 bg-[#1E1E1E] py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] flex justify-center items-center'}>
        <div className="max-w-[1581px]">
            <div className="text-white flex flex-col justify-center items-center text-center px-5">
                <div className={!mode ? 'text-[45px] sm:text-[50px] lg:text-[60px] 2xl:text-[50px] font-bold text-[#402158]' : 'text-[45px] sm:text-[50px] lg:text-[60px] 2xl:text-[50px] font-bold text-white'} >
                    Company’s Mission and Vision
                </div>
                <div className={!mode ? 'sm:text-[15px] md:text-[18px] mt-3 font-medium text-[#272626]' : 'sm:text-[15px] md:text-[18px] mt-3 font-medium text-white'}>
                    Our Commitment to Excellence and Customer Satisfaction
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 px-5 gap-[2rem] 2xl:gap-[6rem] mt-[4rem]">
                <div >
                    <div className={!mode ? 'text-[22px] md:text-[24px] font-bold text-[#402158]' : 'text-[22px] md:text-[24px] font-bold text-white'}>
                        Vision
                    </div>
                    <div className={!mode ? 'sm:text-[15px] md:text-[18px] mt-3 text-[#272626]' : 'sm:text-[15px] md:text-[18px] mt-3 text-white'} >
                    Pen Tech Solutions aims to be a renowned provider of IT services and to compete with the leading companies nationwide. 
                    To become an established technology partner by distributing services and solutions that deliver valuable business results.
                    </div>
                </div>


                <div >
                    <div className={!mode ? 'text-[22px] md:text-[24px] font-bold text-[#402158]' : 'text-[22px] md:text-[24px] font-bold text-white'}>
                        Mission
                    </div>
                    <div className={!mode ? 'sm:text-[15px] md:text-[18px] mt-3 text-[#272626]' : 'sm:text-[15px] md:text-[18px] mt-3 text-white'} >
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