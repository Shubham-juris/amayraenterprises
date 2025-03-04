import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import About from './Components/AboutUs/AboutUs'
import Sitemaintenance from './Components/Sitemaintenance/Sitemaintenance'
import ContactUs from './Components/Contactus/ContactUs'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <About/>
      <ContactUs/>
      <Footer/>
      <Sitemaintenance/>
    </>
  )
}

export default App
