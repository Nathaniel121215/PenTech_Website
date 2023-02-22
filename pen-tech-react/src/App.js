import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Article from './components/Article';
import Aboutus from './components/Aboutus';
import Services from './components/Services';
import Offers from './components/Offers';
import Team from './components/Team';

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
      </div>
    </>

    
  )
}

export default App;
