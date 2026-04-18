import React from 'react'
import Navbar from '../components/Navbar'
import Herobanner from './Herobanner'
import Events, { PartnerWithUs } from './Events'
import AimMission from './AimMission'
import ContactUs from './ContactUs'
import HeritagePrograms from './HeritagePrograms'

const Home = () => {
  return (
    <>
      <Navbar />
      <Herobanner />
      <AimMission />
      <HeritagePrograms />
      <Events />
      <PartnerWithUs />
      <ContactUs />
    </>
  )
}

export default Home
