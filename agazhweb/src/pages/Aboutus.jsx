import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
const teamImg = `${import.meta.env.BASE_URL}images/Aboutus2.jpeg`;

const AboutUs = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / 50;
    const y = (clientY - innerHeight / 2) / 50;
    setMousePosition({ x, y });
  };

  return (
    <section
      id="aboutus"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative bg-brand-light overflow-hidden"
    >

      {/* Animated Background Mesh */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #5D4037 1px, transparent 1px),
                                     radial-gradient(circle at 80% 80%, #795548 1px, transparent 1px)`,
          backgroundSize: '50px 50px, 80px 80px'
        }} />
      </div>

      {/* Floating Gradient Orbs - Hidden on mobile */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-radial from-brand-accent/20 to-transparent rounded-full blur-3xl hidden lg:block"
      />

      {/* Hero Section - Mobile Optimized */}
      <div className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-12 py-16 sm:py-24 md:py-32">
        <div className="max-w-[1800px] mx-auto w-full">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              {/* Tag */}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 sm:gap-3 bg-white shadow-lg rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
              >
                <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-brand-brown">About Us</span>
              </motion.div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display text-brand-dark leading-[0.95] mb-6 sm:mb-8">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="block"
                >
                  Making Archaeology
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="block text-brand-brown italic"
                >
                  Immersive
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="block text-brand-accent"
                >
                  & Accessible
                </motion.span>
              </h2>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="h-1.5 sm:h-2 w-16 sm:w-24 bg-gradient-to-r from-brand-brown via-brand-accent to-brand-tan mb-6 sm:mb-8 md:mb-10 rounded-full"
              />

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
                className="text-brand-dark/80 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-4 sm:mb-6 max-w-2xl"
              >
                <span className="font-bold text-brand-brown">Agazh Avaiyam</span> is an MCA-registered organization specializing in education, heritage tourism, and research.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="text-brand-dark/70 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl"
              >
                Backed by a multidisciplinary team of <span className="font-semibold text-brand-accent">scholars and humanities practitioners</span>, we partner with schools to promote academically grounded, experiential heritage education.
              </motion.p>
            </motion.div>

            {/* Right: Image Card - Simplified for mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative h-[400px] sm:h-[500px] md:h-[600px]"
            >
              <div className="relative h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={teamImg}
                  alt="Archaeological Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />

                {/* Info Badge */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 md:bottom-8 md:left-8 md:right-8 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-brand-brown/60 font-mono text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest block mb-1">Established</span>
                      <span className="text-brand-dark font-display text-2xl sm:text-3xl font-bold">2024</span>
                    </div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-accent/10 flex items-center justify-center"
                    >
                      <span className="text-xl sm:text-2xl">🏛️</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>


      {/* ── Closing Quote — Dark full-bleed editorial ── */}
      <div className="relative overflow-hidden">

        {/* Background image layer */}
        <div className="absolute inset-0">
          <img
            src={`${import.meta.env.BASE_URL}images/excavation_site_artistic.jpeg`}
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/96 via-brand-dark/88 to-brand-brown/80" />
        </div>

        {/* Decorative orbital rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute -right-24 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/[0.04] hidden lg:block"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="absolute -right-8 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-brand-tan/10 hidden lg:block"
        />

        {/* Ambient glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-1/4 w-96 h-40 bg-brand-brown/30 blur-3xl rounded-full pointer-events-none"
        />

        {/* Content */}
        <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12 py-20 sm:py-28 md:py-36">
          <div className="max-w-4xl mx-auto text-center">

            {/* Animated quote-mark icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8 sm:mb-10 flex justify-center"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-brand-tan/30 absolute inset-0 m-auto"
                />
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
                  <span className="text-3xl sm:text-4xl">🏛️</span>
                </div>
              </div>
            </motion.div>

            {/* Large decorative open-quote */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="font-display text-[6rem] sm:text-[8rem] text-brand-tan/20 leading-none -mb-10 sm:-mb-14 select-none"
            >
              "
            </motion.div>

            {/* The quote */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9 }}
              viewport={{ once: true }}
              className="text-white/90 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display italic leading-relaxed mb-4"
            >
              Together, we honor the echoes of the past while shaping a future where heritage thrives.
            </motion.p>

            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              viewport={{ once: true }}
              className="h-[2px] w-32 sm:w-44 bg-gradient-to-r from-transparent via-brand-tan to-transparent mx-auto mt-6 sm:mt-8"
            />

          </div>
        </div>
      </div>

      {/* ── Meet Our Team — Bright split panel ── */}
      <div className="relative bg-brand-light overflow-hidden py-16 sm:py-24 md:py-32">

        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: 'radial-gradient(circle, #5D4037 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }} />

        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/8 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT — Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Tag */}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 sm:gap-3 bg-white shadow-lg rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
              >
                <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-brand-brown">Meet Our Team</span>
              </motion.div>

              {/* Heading */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-brand-dark leading-tight mb-6 sm:mb-8">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="block"
                >
                  The People
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="block text-brand-brown italic"
                >
                  Behind the Heritage
                </motion.span>
              </h2>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="h-1.5 sm:h-2 w-24 sm:w-32 bg-gradient-to-r from-brand-brown via-brand-accent to-brand-tan mb-8 sm:mb-10 rounded-full"
                style={{ transformOrigin: 'left' }}
              />

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.7 }}
                viewport={{ once: true }}
                className="text-brand-dark/75 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10"
              >
                Our team includes <span className="font-bold text-brand-brown">enigmatic young researchers</span>, academic scholars, and skilled educators passionate about archaeology, history, maritime studies, and cultural storytelling. This breadth of expertise guarantees that every program we deliver is <span className="text-brand-accent font-semibold">accurate, interactive, and inspiring</span>.
              </motion.p>

              {/* Expert-type pills */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-2 sm:gap-3"
              >
                {['Archaeologists', 'Historians', 'Educators', 'Maritime Scholars', 'Storytellers'].map((role, i) => (
                  <motion.span
                    key={role}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.08 }}
                    viewport={{ once: true }}
                    className="bg-white border border-brand-brown/20 text-brand-dark/70 font-mono text-[10px] sm:text-xs uppercase tracking-wider px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm"
                  >
                    {role}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT — Image mosaic */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              {/* Large top-left */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/Meet_our_team1.jpeg`}
                  alt="Heritage walk team"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>

              {/* Top-right */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ transitionDelay: '0.3s' }}
                className="rounded-2xl overflow-hidden shadow-xl aspect-square"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/Meet_our_team2.jpeg`}
                  alt="Students workshop"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>

              {/* Bottom-right */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ transitionDelay: '0.45s' }}
                className="rounded-2xl overflow-hidden shadow-xl relative aspect-square"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/Meet_our_team3.jpeg`}
                  alt="Career guidance"
                  className="w-full h-full object-cover object-center"
                />
                {/* dark overlay with label */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent flex items-end p-3 sm:p-4">
                  <span className="font-display text-white/90 text-xs sm:text-sm italic">"Passion for the past"</span>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutUs;
