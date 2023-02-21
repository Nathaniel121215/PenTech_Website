import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Article from './components/Article';
import Aboutus from './components/Aboutus';

const App = () => {




  return (
   <>
      <Navbar/>
      <div className="flex flex-col">
        <Homepage />
        <Article />
        <Aboutus/>
      </div>
    </>

    
  )
}

export default App;
