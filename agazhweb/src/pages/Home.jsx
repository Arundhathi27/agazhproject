import React from 'react'
import Navbar from '../components/Navbar'
import Herobanner from './Herobanner'
import Service from './Service'
import Events from './Events'
import AboutUs from './Aboutus'
import WhatWeOffer from './WhatWeOffer'
import AimMission from './AimMission'
import ContactUs from './ContactUs'

const Home = () => {
  return (
    <>
      <Navbar />
      <Herobanner />
      <AboutUs />
      <WhatWeOffer />
      <AimMission />
      <Service />
      <Events />
      <ContactUs />
    </>
  )
}

export default Home
