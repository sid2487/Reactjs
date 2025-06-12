import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/main/Hero'
import Step from './components/main/Step';
import BentoGrid from './components/main/BentoGrid';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='mt-16'>
        <Hero />
      </div>
      <Step/>
      <BentoGrid/>
      <Footer/>
    </>
  );
}

export default App