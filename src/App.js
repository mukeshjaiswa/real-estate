
import './App.css';
import Hero from './section/Hero'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import About from './section/About';
import PropertiesArea from './section/PropertiesArea';
import Popular from './section/Popular';
import Services from './section/Services';
import Clients from './section/Clients';
import Contact from './section/Contact';
import Footer from './component/Footer';
import Header from './component/Header';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, 
    });
  
   
  }, [])
  return (
    <div >'
      <Header/>
      <Hero/>
      <About/>
      <Popular/>
      <PropertiesArea/>
      <Services/>
      <Clients/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
