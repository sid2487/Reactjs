import React from 'react'
import Navbar from './components/Navbar'
import HeroText from './components/HeroText'
import HeroButtons from './components/HeroButtons'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroText />
      <HeroButtons />
      <Footer />
    </div>
  )
}

export default App