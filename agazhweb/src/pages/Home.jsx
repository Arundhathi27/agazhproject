import React from 'react'
import SEOHead from '../components/SEOHead'
import Navbar from '../components/Navbar'
import Herobanner from './Herobanner'
import Events, { PartnerWithUs } from './Events'
import AimMission from './AimMission'
import ContactUs from './ContactUs'
import FAQ from '../components/FAQ'
import HeritagePrograms from './HeritagePrograms'

const Home = () => {
  return (
    <>
      <SEOHead 
        title="Agazh Avaiyam | A Centre for Archaeological Excellence"
        description="Agazh Avaiyam is a centre for archaeological excellence in Tamil Nadu, offering heritage education, field-based learning, workshops, and cultural tours for schools and colleges."
        keywords="archaeology Tamil Nadu, heritage education, field learning, archaeological workshops, cultural tours"
        ogUrl="/"
      />
      <Navbar />
      <Herobanner />
      <AimMission />
      <HeritagePrograms />
      <Events />
      <PartnerWithUs />
      <FAQ />
      <ContactUs />
    </>
  )
}

export default Home
