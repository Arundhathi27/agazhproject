import React from 'react';
import herobannerImg from '../Images/herobanner.png';
import image from '../Images/image.png';

const Herobanner = () => {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden flex items-center justify-center text-center">
      
      {/* Background Image - Scale slightly for drama */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transform scale-105 origin-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Simplified Overlay - Dark gradient from top for Navbar blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-transparent to-brand-dark/40"></div> 
      </div>

      {/* Content - Funky Typography */}
      <div className="relative z-10 px-4 max-w-5xl mx-auto text-white mt-16">
        <h1 className="text-6xl md:text-8xl font-display text-brand-light mb-6 drop-shadow-2xl tracking-tight animate-fade-in">
          AGAZH AVAIYAM
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-0.5 w-24 bg-brand-tan/60"></div>
        </div>

        <p className="text-xl md:text-3xl font-sans font-light tracking-widest text-brand-tan uppercase mb-8 drop-shadow-lg">
          A Centre for Archaeological Excellence
        </p>
        
        <p className="text-lg md:text-xl italic font-serif text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg mb-16">
         "The echoes of the past that whispers revelation through voices of the present in guiding every step towards the future"
        </p>

        {/* Flashing Down Arrow */}
        <div className="animate-bounce">
            <a href="#aboutus" className="text-white hover:text-brand-tan transition-colors">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Herobanner;