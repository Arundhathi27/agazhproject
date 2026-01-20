import React from 'react'
import Navbar from '../components/Navbar'
import Herobanner from './Herobanner'
import Service from './Service'
import Events from './Events'
import AboutUs from './Aboutus'
import ContactUs from './ContactUs'

const Home = () => {
  return (
    <>
        <Navbar />
        <Herobanner />
        <AboutUs />
        <Service />
        <Events />
        <ContactUs />
    </>
  )
}

export default Home
