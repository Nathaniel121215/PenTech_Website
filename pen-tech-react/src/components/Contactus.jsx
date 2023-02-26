import React, { useState } from "react";
import CountryList from "react-select-country-list";
import Select from 'react-select';



const Contactus = () => {

  const [selectedCountry, setSelectedCountry] = useState("");

  const options = CountryList().getData();

  const handleSelect = (option) => {
    setSelectedCountry(option.value);
  };

  const customStyles = {
    placeholder: (provided) => ({
      ...provided,
      color: '#9DA4B0', // replace with your desired color
    }),
    control: (provided, state) => ({
      ...provided,
      background: "#E2E9FF",
      border: "none",
      boxShadow: "none",
      textcolor:"black",
    }),
    menu: (provided, state) => ({
      ...provided,
      background: "#E2E9FF",
      border: "none"
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected ? "#C4C4C4" : "#E2E9FF",
      color: state.isSelected ? "white" : "black",
      "&:hover": {
        background: "#C4C4C4"
      }
    })
  };


  

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
                  placeholder="Name"
                  required />
                <input className="bg-[#E2E9FF] text-black w-full p-[.7rem]"
                  type="email"
                  id="email"
                  placeholder="Email"
                  required />
                <input className="bg-[#E2E9FF] text-black w-full p-[.7rem]"
                  type="text"
                  id="organization"
                  placeholder="Organization" />
                <input className="bg-[#E2E9FF] text-black w-full p-[.7rem]"
                  type="text"
                  id="number"
                  placeholder="Contact Number"
                  required />
                <div>
                  <Select className="bg-[#E2E9FF] text-black w-full p-[.3rem]"
                  styles={customStyles}
                    menuPlacement="bottom"
                    id="country"
                    name="country"
                    value={selectedCountry}
                    options={options}
                    onChange={(option) => handleSelect(option.value)}
                    placeholder="Country"
                    required
                  />
                </div>
                
                <input className="bg-[#E2E9FF] text-black w-full p-[.7rem]"
                  type="text"
                  id="topic"
                  placeholder="Topic"
                  required />
              </div>
              <div className="">
                <textarea required id="message" name="message"
                  className="bg-[#E2E9FF] text-black p-[.7rem] h-40 mt-[2rem] w-full font-medium"
                  placeholder="Message">
                    
                </textarea>
              </div>
  
              <button type="submit" className="w-full mt-5 py-4 px-8 sm:px-12   text-white font-medium bg-[#402158] rounded-[30px] hover:bg-[#7D5683] text-[15px] flex justify-center items-center">
                    Submit
              </button>

            </form>
                </div>

                

            </div>
            
            

        </div>
        

  
      </div>
  
      
    )
  }
  
  export default Contactus;