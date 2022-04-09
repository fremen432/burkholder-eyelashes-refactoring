import React from 'react'

import Header from '../newComponents/Header'
import Footer from '../newComponents/Footer'

import Hero from '../newComponents/Hero'
import AboutUs from '../newComponents/AboutUs'
import ContactUs from '../newComponents/ContactUs'

export default function HomePage() {
  return (
    <div className="HomePage__PAGE">
        <Header/>
            <div className="HP_Body">
                <Hero/>
                <AboutUs/>
                <ContactUs/>
            </div>
        <Footer/>    
    </div>
  )
}
