import React from 'react';
import { motion } from 'framer-motion';

const ConnectOrb = () => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
      {/* Ambient center glow */}
      <div className="absolute w-24 h-24 bg-brand-tan/10 blur-3xl rounded-full" />
      
      {/* Expanding pulses (Simulating massive broadcasting/communication) */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 3.5],
            opacity: [0.4, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 1.6,
            ease: "easeOut"
          }}
          className="absolute w-24 h-24 border-[1px] border-brand-tan/20 rounded-full"
        />
      ))}

      {/* Rotating outer frame - massive orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 border border-brand-tan/10 rounded-full flex items-center justify-center"
      >
         {/* Orbital dot */}
         <div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-brand-tan rounded-full shadow-[0_0_15px_#D7CCC8]" />
         <div className="absolute -bottom-1 left-1/4 w-2 h-2 bg-brand-accent rounded-full opacity-60" />
         <div className="absolute top-1/2 -right-1 w-1.5 h-1.5 bg-brand-light rounded-full opacity-40" />
      </motion.div>

      {/* Counter-rotating dashed inner element */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 border border-dashed border-brand-accent/20 rounded-full"
      />
      
      {/* Very faint inner rotating square to give it an artifact/astrolabe feel */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute w-28 h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 border border-brand-tan/10 rotate-45"
      />

      {/* Center Iconography (Minimalist Envelope/Paper Plane/Connection) */}
      <motion.div 
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 text-brand-tan/80 text-5xl lg:text-6xl filter drop-shadow-[0_0_20px_rgba(215,204,200,0.4)]"
      >
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
           <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
           <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </motion.div>
    </div>
  );
};

export default ConnectOrb;
