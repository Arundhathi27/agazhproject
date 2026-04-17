import React from 'react'
import Navbar from '../components/Navbar'
import Herobanner from './Herobanner'
import Service from './Service'
import Events from './Events'
import AboutUs from './Aboutus'
import AimMission from './AimMission'
import ContactUs from './ContactUs'
import HeritagePrograms from './HeritagePrograms'

const Home = () => {
  return (
    <>
      <Navbar />
      <Herobanner />
      <AboutUs />
      <AimMission />
      <Service />
      <HeritagePrograms />
      <Events />
      <ContactUs />
    </>
  )
}

export default Home
