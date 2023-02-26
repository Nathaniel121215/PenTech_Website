
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Article from './components/Article';
import Aboutus from './components/Aboutus';
import Services from './components/Services';
import Offers from './components/Offers';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Contactus from './components/Contactus';

const App = () => {


  const nodemailer = require("nodemailer");

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
        <Contactus/>
      </div>
    </>

    
  )
}

export default App;
