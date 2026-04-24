import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
const heroImage = `${import.meta.env.BASE_URL}images/hero_temple_ruins_1768917098837.webp`;

const Herobanner = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const titleText = "AGAZH".split("");
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.3 } 
    }
  };
  const letterVariants = {
    hidden: { y: 100, opacity: 0, rotateY: 90, scale: 0.8 },
    visible: { 
      y: 0, 
      opacity: 1, 
      rotateY: 0,
      scale: 1,
      transition: { type: 'spring', damping: 15, stiffness: 50 } 
    }
  };

  return (
    <div ref={containerRef} id="home" className="relative h-screen w-full overflow-hidden bg-brand-dark">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235D4037' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Parallax Background Image with generated custom image */}
      <motion.div
        style={{
          y,
          scale,
          willChange: 'transform'
        }}
        className="absolute inset-0 z-0"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            imageRendering: 'crisp-edges'
          }}
        >
          {/* Noise/Grain texture */}
          <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
            }}
          />

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/60 to-brand-dark" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-brown/40 to-transparent" />
        </div>
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-32 h-32 border-2 border-brand-tan/10 rounded-full hidden lg:block"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-40 left-10 w-24 h-24 border border-brand-tan/20 hidden lg:block"
        style={{ transform: 'rotate(45deg)' }}
      />

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">

        <motion.div
          style={{ opacity }}
          className="mb-8"
        >
          <motion.div className="relative w-full flex flex-col items-center justify-center mb-8">
            {/* Background Majestic Stroke Text */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.08 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 -top-8 sm:-top-16"
            >
              <span className="font-display font-light text-[35vw] text-transparent leading-none whitespace-nowrap" style={{ WebkitTextStroke: '2px #D7CCC8' }}>
                AGAZH
              </span>
            </motion.div>

            {/* Main Foreground Typography */}
            <motion.h1
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="relative z-10 flex flex-col items-center mt-12 sm:mt-0"
            >
              <div className="flex pt-4 pb-6 px-4 text-[5rem] sm:text-[7rem] md:text-[9.5rem] lg:text-[14vw] leading-none font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-brand-tan to-brand-accent tracking-tighter drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                {titleText.map((char, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block origin-bottom underline-none" style={{ textShadow: char !== " " ? '0 10px 30px rgba(0,0,0,0.5)' : 'none' }}>
                    {char}
                  </motion.span>
                ))}
              </div>
              <motion.div 
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
                className="flex items-center gap-4 sm:gap-6 md:gap-8 mt-2 sm:mt-4 md:mt-6 lg:mt-4"
              >
                <div className="w-12 sm:w-20 md:w-32 lg:w-40 h-[1px] bg-gradient-to-r from-transparent to-brand-tan shadow-lg" />
                <span className="text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8vw] leading-[0.8] font-display text-white tracking-widest drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] mx-2">
                  AVAIYAM
                </span>
                <div className="w-12 sm:w-20 md:w-32 lg:w-40 h-[1px] bg-gradient-to-l from-transparent to-brand-tan shadow-lg" />
              </motion.div>
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-white/70 font-serif text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mt-6 sm:mt-8 px-4"
          >
            A Centre for Archaeological Excellence
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="h-px w-24 sm:w-32 bg-gradient-to-r from-transparent via-brand-tan to-transparent mt-6 sm:mt-8 mx-auto"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="text-white/60 font-serif italic text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-6 sm:mt-8 px-6"
          >
            "The echoes of the past whisper revelation through voices of the present, guiding every step towards the future"
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-brand-tan/60 text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 border-2 border-brand-tan/40 rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-1 h-2 bg-brand-tan/60 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Herobanner;