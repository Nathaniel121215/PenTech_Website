
import article from '../assets/Article.png';
const Article = ({mode}) => {

 
  return (
    <div name="aboutus" className={!mode ? 'w-full z-20 flex justify-center items-center relative border-t border-gray-500 bg-[#402158]' : 'w-full z-20 flex justify-center items-center relative bg-[#1D2226]'}>


      <div className=' w-full max-w-[1581px] h-full  grid grid-cols-1 md:grid-cols-2 px-5 py-[3rem] sm:py--[4rem] md:py-[5rem] gap-[2rem] 2xl:gap-[6rem]'>
          
          <div className="grid-column-[1] md:order-2">
            <div className={!mode ? 'text-[45px] sm:text-[50px] md:text-[40px] lg:text-[50px] font-bold text-[#ffff]' : 'text-[45px] sm:text-[50px] lg:text-[60px] 2xl:text-[50px] font-bold text-white'}>
              What is PEN Tech Solution?
            </div>
            <div className={!mode ? 'sm:text-[15px] md:text-[18px] mt-4 text-white' : 'sm:text-[15px] md:text-[18px] mt-4 text-white'}>
            Welcome to PEN Tech Solution! We are a premier IT company that 
            specializes in developing custom websites and software solutions for 
            a diverse range of clients. Our team of experts is dedicated to providing 
            top-quality services that meet the unique needs of each and every client. 
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-4 lg:flex">
                <div className={!mode ? 'py-4 px-8 sm:px-12 text-white font-medium bg-[#7D5683] rounded-[30px] hover:bg-[#7D5683] text-[15px] flex justify-center items-center' : 'py-4 px-8 sm:px-12 text-white font-medium bg-[#402158] rounded-[30px] hover:bg-[#7D5683] text-[15px] flex justify-center items-center'}>
                    Learn More
                </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
                <img src={article} alt="/" className='max-w-[35rem]'></img>
            </div>
          
      </div>



    </div>

    
  )
}

export default Article;