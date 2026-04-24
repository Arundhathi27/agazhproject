import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const OurPurposeSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      ref={containerRef}
      className="relative bg-brand-light py-20 sm:py-32 overflow-hidden border-t border-brand-tan/10"
    >
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-evenly opacity-20">
        <div className="w-[1px] h-full bg-brand-brown/10" />
        <div className="w-[1px] h-full bg-brand-brown/10" />
        <div className="w-[1px] h-full bg-brand-brown/10" />
        <div className="w-[1px] h-full bg-brand-brown/10" />
      </div>

      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">

        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <p className="font-mono text-xs uppercase tracking-widest text-brand-brown">Core Values</p>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display text-brand-dark leading-none">
              Our <span className="italic text-brand-accent">Purpose</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block w-32 h-[1px] bg-brand-brown/30"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Left: Image Container (Sticky on Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 relative flex flex-col items-center pb-32 lg:pb-0 z-20 lg:min-h-[80vh] justify-start mt-8 lg:mt-0">

            {/* Background Texture Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[120%] aspect-square bg-brand-tan/10 rounded-full blur-[60px] -z-10 lg:mt-28" />

            {/* Main Picture Frame */}
            <motion.div
              style={{ y: y1 }}
              className="relative w-[92%] sm:w-[85%] md:w-[90%] aspect-[4/3] bg-white p-3 sm:p-4 shadow-[0_20px_50px_rgba(44,24,16,0.15)] rotate-[-3deg] z-10 lg:mt-24"
            >
              <div className="w-full h-full relative overflow-hidden bg-brand-brown">
                <div className="absolute inset-0 bg-brand-dark/10 mix-blend-multiply z-10 pointer-events-none" />
                {/* Full natural aspect ratio image */}
                <img
                  src={`${import.meta.env.BASE_URL}images/Ouraim1.webp`}
                  alt="Agazh Avaiyam Overview"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Secondary Picture Frame */}
            <motion.div
              style={{ y: y2 }}
              className="absolute top-1/3 right-0 md:-right-8 w-[65%] aspect-[4/3] bg-white p-2.5 sm:p-3 shadow-2xl rotate-[5deg] z-20 lg:mt-24"
            >
              <div className="w-full h-full relative overflow-hidden bg-[#2C1810]">
                <div className="absolute inset-0 bg-brand-brown/20 mix-blend-multiply z-10 pointer-events-none" />
                <img
                  src={`${import.meta.env.BASE_URL}images/heritage_walk_team1.webp`}
                  alt="Archaeology Detail"
                  className="w-full h-full object-cover grayscale opacity-90"
                  loading="lazy"
                />
              </div>
            </motion.div>



          </div>

          {/* Right: Text Blocks */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-12 sm:gap-16 pt-8 lg:pt-0">

            {/* Block 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
              className="relative pl-6 sm:pl-10 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[2px] before:bg-brand-brown/20"
            >
              <div className="absolute left-[-4px] top-2 w-[10px] h-[10px] bg-brand-accent rounded-full" />
              <p className="text-xl sm:text-2xl text-brand-dark/80 font-light leading-relaxed">
                We are an optimistic organisation committed to honouring the past and empowering the present. We <span className="font-medium text-brand-brown">preserve history, advance archaeology, and nurture language</span> and culture to build meaningful connections with heritage.
              </p>
            </motion.div>

            {/* Block 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative pl-6 sm:pl-10 border-l border-brand-brown/10"
            >
              <p className="text-lg sm:text-xl text-brand-dark/70 font-light leading-relaxed">
                At the heart of our work is education grounded in first-hand learning, research, and community engagement. We aim to <span className="italic text-brand-brown">inspire curiosity, encourage critical thinking</span>, and cultivate a deep sense of responsibility towards our shared past and future.
              </p>
            </motion.div>

            {/* Block 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative pl-6 sm:pl-10 border-l border-brand-brown/10"
            >
              <p className="text-lg sm:text-xl text-brand-dark/70 font-light leading-relaxed">
                As a pioneering centre for archaeological learning, we empower students, educators, and enthusiasts through <span className="font-semibold text-brand-dark">immersive experiences guided tours, interactive workshops</span>, and experimental archaeology sessions that invite exploration and active participation.
              </p>
            </motion.div>

            {/* Block 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative p-6 sm:p-8 bg-brand-brown/5 rounded-2xl border border-brand-brown/10"
            >
              <div className="absolute top-0 right-8 -translate-y-1/2 text-5xl text-brand-accent/20 font-serif">"</div>
              <p className="text-xl sm:text-2xl text-brand-dark font-display italic leading-snug">
                Guided by collaboration, inclusivity, and sustainability, we envision growing as a collective force that promotes knowledge, cultural appreciation, and social well-being.
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default OurPurposeSection;
