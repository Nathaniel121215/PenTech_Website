import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Article from './components/Article';
import Aboutus from './components/Aboutus';
import Services from './components/Services';
import Offers from './components/Offers';
import Team from './components/Team';
import Testimonial from './components/Testimonial';

const App = () => {




  return (
   <>
      <Navbar/>
      <div className="flex flex-col">
        <Homepage />
        <Article />
        <Aboutus/>
        <Services/>
        <Offers/>
        <Team/>
        <Testimonial/>
      </div>
    </>

    
  )
}

export default App;
