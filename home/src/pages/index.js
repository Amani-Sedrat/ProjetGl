import React, {useState} from 'react';
//import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }


  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
        {/* <HeroSection /> */}
        <InfoSection {...homeObjOne}/>
        <Services/>
        
        {/* <InfoSection {...homeObjTwo}/> */}
        <Contact />
        {/* <InfoSection {...homeObjThree}/> */}
        <Footer />
    </>
  );
};

export default Home