import React, { useState } from "react";
import CountryList from "react-select-country-list";
import Select from 'react-select';
import axios from 'axios';
import contact from '../assets/contact.png';


const Contactus = ({mode}) => {

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
      background: "#ffff",
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
      background: state.isSelected ? "#C4C4C4" : "#ffff",
      color: state.isSelected ? "white" : "black",
      "&:hover": {
        background: "#C4C4C4"
      }
    })
  };

  const [email, setEmail] = useState({
    Customer_Name: '',
    Customer_Email: '',
    Customer_Organization: '',
    Customer_Contact:'',
    Customer_Country:'',
    Customer_Topic:'',
    Customer_Message:'',

  });

  const handleChange = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://pen-tech-solution.netlify.app/send-email', email)
      .then(response => {
        console.log(response.data);
        setEmail({Customer_Name: '', 
        Customer_Email: '', 
        Customer_Organization: '', 
        Customer_Contact: '', 
        Customer_Country: '', 
        Customer_Topic: '', 
        Customer_Message: ''  });

        setSelectedCountry("");

      })
      .catch(error => {
        console.log(error);
      });
  };


  

  return (
    <div name="contactus" className={!mode ? 'z-20 py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] flex justify-center items-center bg-[#402158]' : 'z-20 py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] flex justify-center items-center bg-[#1D2226]'}>
      <div className="max-w-[1581px] w-full">
        <div className="flex flex-col justify-center items-center text-center px-5">
          <div className={!mode ? 'text-[#ffff] text-[45px] sm:text-[50px] lg:text-[60px] 2xl:text-[50px] font-bold' : 'text-[#ffff] text-[45px] sm:text-[50px] lg:text-[60px] 2xl:text-[50px] font-bold'}>
            Get Answer To Your Questions
          </div>
          <div className={!mode ? 'sm:text-[15px] md:text-[18px] mt-3 font-medium text-white' : 'sm:text-[15px] md:text-[18px] mt-3 font-medium text-white'}>
            Our clients turn to us to help them reimagine ways of working with technology. We are technology solutions providing with 5 years experience.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-[4rem] gap-[3rem] px-5">
          <div className="w-full flex justify-center items-center">
            <img src={contact} alt="/" className='max-w-[35rem] w-full'></img>
          </div>
          <div className="lg:px-6">
            <form onSubmit={handleSubmit}>
              <div className="text-black grid grid-cols-1 gap-5 lg:grid-cols-2 font-medium">
                <input className="bg-[#ffff] text-black w-full p-[.7rem] rounded-md"
                  type="text"
                  id="Customer_Name"
                  name="Customer_Name"
                  placeholder="Name"
                  required
                  onChange={handleChange} 
                  value={email.Customer_Name}/>
                <input className="bg-[#ffff] text-black w-full p-[.7rem] rounded-md"
                  type="email"
                  id="Customer_Email"
                  name="Customer_Email"
                  placeholder="Email"
                  required onChange={handleChange}
                  value={email.Customer_Email}/>
                <input className="bg-[#ffff] text-black w-full p-[.7rem] rounded-md"
                  type="text"
                  id="Customer_Organization"
                  name="Customer_Organization"
                  placeholder="Organization"
                  onChange={handleChange} 
                  value={email.Customer_Organization}/>
                <input className="bg-[#ffff] text-black w-full p-[.7rem] rounded-md"
                  type="text"
                  id="Customer_Contact"
                  name="Customer_Contact"
                  placeholder="Contact Number"
                  required
                  onChange={handleChange}
                  value={email.Customer_Contact} />
                <div>
                  <Select className="bg-[#ffff] text-black w-full p-[.3rem] rounded-md"
                  styles={customStyles}
                    menuPlacement="bottom"
                    id="Customer_Country"
                    name="Customer_Country"
                    value={selectedCountry}
                    options={options}
                    onChange={(option) => {
                      handleSelect(option.value);
                      handleChange({
                        target: {
                          name: "Customer_Country",
                          value: option.value,
                        },
                      });
                    }}
                    placeholder="Country"
                    required
                    
                  />
                </div>
                
                <input className="bg-[#ffff] text-black w-full p-[.7rem] rounded-md"
                  type="text"
                  id="Customer_Topic"
                  name="Customer_Topic"
                  placeholder="Topic"
                  required onChange={handleChange}
                  value={email.Customer_Topic}/>
              </div>
              <div className="">
                <textarea required id="Customer_Message" name="Customer_Message"
                  className="bg-[#ffff] text-black p-[.7rem] h-40 mt-[2rem] w-full font-medium rounded-md"
                  placeholder="Message" onChange={handleChange}
                  value={email.Customer_Message}>
                  
                </textarea>
              </div>
  
              <button type="submit" className={!mode ? 'w-full mt-5 py-4 px-8 sm:px-12   text-white font-medium bg-[#7D5683] rounded-[30px] hover:bg-[#7D5683] text-[15px] flex justify-center items-center' : 'w-full mt-5 py-4 px-8 sm:px-12   text-white font-medium bg-[#402158] rounded-[30px] hover:bg-[#7D5683] text-[15px] flex justify-center items-center'} >
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