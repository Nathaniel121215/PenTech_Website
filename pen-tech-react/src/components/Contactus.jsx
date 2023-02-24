import { codes } from 'iso-3166-1';
import { useEffect, useState } from 'react';

const Contactus = () => {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const countryList = [];
    for (const countryCode in codes) {
      const countryName = codes[countryCode];
      const optionObject = { value: countryCode, label: countryName };
      countryList.push(optionObject);
    }
    setCountries(countryList);
  }, []);

  return (
    <div className="z-20 py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] flex justify-center items-center border-b border-gray-500">
      <div className="max-w-[1581px] w-full">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="text-[#402158] text-[45px] sm:text-[50px] lg:text-[60px] 2xl:text-[50px] font-bold">
            Get Answer To Your Questions
          </div>
          <div className="sm:text-[15px] md:text-[18px] mt-3 font-medium">
            Our clients turn to us to help them reimagine ways of working with technology. We are technology solutions providing with 5 years experience.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-[4rem] gap-[3rem] px-5">
          <div className="w-full flex justify-center items-center">
            <div className="relative max-w-[650px] bg-[#402158] rounded-[10px] h-[450px] w-full"></div>
          </div>
          <div className="lg:px-6">
            <form className="">
              <div className="text-black grid grid-cols-1 gap-5 lg:grid-cols-2 font-medium">
                <input className="bg-[#E2E9FF] text-black w-full p-[.7rem]"
                  type="text"
                  id="name"
                  placeholder="Name" />
                <input className="bg-[#E2E9FF] text-black w-full p-[.7rem]"
                  type="email"
                  id="email"
                  placeholder="Email" />
                <input className="bg-[#E2E9FF] text-black w-full p-[.7rem]"
                  type="text"
                  id="organization"
                  placeholder="Organization" />
                <input className="bg-[#E2E9FF] text-black w-full p-[.7rem]"
                  type="text"
                  id="number"
                  placeholder="Contact Number" />
                <select id="country"
                  name="country"
                  className="bg-[#E2E9FF] text-black w-full p-[.7rem]">
                  <option value="">-- Select a country --</option>
                  {countries.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
                <input className="bg-[#E2E9FF] text-black w-full p-[.7rem]"
                  type="text"
                  id="inquiry"
                  placeholder="Inquiry" />
              </div>
              <div className="">
                <textarea id="message" name="message"
                  className="bg-[#E2E9FF] text-black p-[.7rem] h-40 mt-[2rem] w-full "
                  placeholder="Message"></textarea>
              </div>
                        
                        



                    </form>
                </div>

            </div>
            
            

        </div>
        

  
      </div>
  
      
    )
  }
  
  export default Contactus;