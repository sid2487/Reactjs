import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='grid grid-rows-[80px_1fr_200px] '>
      <div>
        <Navbar/>
      </div>

      <div className='h-screen overflow-y-auto'>
        <Hero/>
      </div>

      <div>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App