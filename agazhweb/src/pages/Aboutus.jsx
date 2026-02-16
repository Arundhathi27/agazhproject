import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
const sculptureImg = '/images/sculpture_detail_1768917167490.png';
const teamImg = '/images/heritage_walk_team_1768917192614.png';

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
                  Passionate
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="block text-brand-brown italic"
                >
                  Researchers
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="block text-brand-accent"
                >
                  & Educators
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
                Our team includes <span className="font-bold text-brand-brown">enigmatic young researchers</span>, academic scholars, and skilled educators passionate about <span className="font-semibold">archaeology, history, maritime studies, and cultural storytelling</span>.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="text-brand-dark/70 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl"
              >
                This breadth of expertise guarantees that every program we deliver is <span className="text-brand-accent font-bold">accurate, engaging, and inspiring</span>.
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

      {/* Foundation Section - Mobile Optimized */}
      <div className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-24"
          >
            <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display text-brand-dark/5 uppercase mb-4 sm:mb-6 leading-none tracking-tight">
              Foundation
            </h3>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 sm:h-1.5 w-24 sm:w-32 md:w-40 bg-gradient-to-r from-brand-brown via-brand-accent to-brand-tan mx-auto mb-4 sm:mb-6 rounded-full"
            />
            <p className="text-brand-dark/60 text-base sm:text-lg md:text-xl">Our guiding principles</p>
          </motion.div>

          {/* Cards Grid - Mobile optimized with smaller min-heights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative"
            >
              <div className="relative h-full min-h-[500px] sm:min-h-[550px] md:min-h-[600px] bg-gradient-to-br from-white via-brand-light to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden border border-brand-brown/10 flex flex-col">

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-brand-accent via-brand-tan to-brand-brown shadow-xl mb-6 sm:mb-8"
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl">🔭</span>
                </motion.div>

                {/* Title */}
                <div className="mb-4 sm:mb-6">
                  <span className="text-brand-brown font-mono text-xs sm:text-sm uppercase tracking-wider sm:tracking-[0.3em] block mb-2 sm:mb-3">Our Vision</span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-brand-dark leading-tight mb-3 sm:mb-4">
                    Pioneering Centre of{' '}
                    <span className="text-brand-brown italic block mt-1 sm:mt-2">Learning</span>
                  </h3>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="h-1 sm:h-1.5 w-12 sm:w-16 md:w-20 bg-brand-accent rounded-full"
                  />
                </div>

                {/* Content */}
                <div className="space-y-3 sm:space-y-4 md:space-y-5 text-brand-dark/70 text-sm sm:text-base md:text-lg leading-relaxed flex-1">
                  <p>
                    To be a <span className="font-bold text-brand-dark">pioneering centre of learning</span> that advances archaeology through education and research, cultivating respect for the past and responsibility for the future.
                  </p>
                  <p>
                    And to explore and recreate ancient technologies and practices, making the past alive for learning, innovation, and connecting people with human history in meaningful ways.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative"
            >
              <div className="relative h-full min-h-[500px] sm:min-h-[550px] md:min-h-[600px] bg-gradient-to-br from-brand-dark via-brand-brown to-brand-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden flex flex-col">

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-md border-2 border-white/20 shadow-2xl mb-6 sm:mb-8"
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl">🎯</span>
                </motion.div>

                {/* Title */}
                <div className="mb-4 sm:mb-6">
                  <span className="text-brand-tan/80 font-mono text-xs sm:text-sm uppercase tracking-wider sm:tracking-[0.3em] block mb-2 sm:mb-3">Our Mission</span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-white leading-tight mb-3 sm:mb-4">
                    Igniting{' '}
                    <span className="text-brand-tan italic block mt-1 sm:mt-2">Curiosity</span>
                  </h3>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="h-1 sm:h-1.5 w-12 sm:w-16 md:w-20 bg-brand-tan rounded-full"
                  />
                </div>

                {/* Content */}
                <div className="space-y-3 sm:space-y-4 text-white/75 text-sm sm:text-base leading-relaxed flex-1">
                  <p>
                    Our initiatives integrate academic learning, tourism, and social awareness. Through <span className="font-semibold text-white">workshops, field explorations, and heritage trails</span>, we bridge classrooms with real-world experience.
                  </p>
                  <p>
                    We <span className="font-semibold text-brand-tan">ignite curiosity</span> in the next generation by integrating Archaeo-sciences, nurturing meaningful contributions to archaeology and society.
                  </p>
                  <p>
                    By promoting edu-Tourism and documenting sites, we ensure India's past remains protected for future generations.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Objective Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative"
            >
              <div className="relative h-full min-h-[500px] sm:min-h-[550px] md:min-h-[600px] bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden border-2 border-brand-brown/20 flex flex-col">

                {/* Sculpture Watermark - Hidden on small mobile */}
                <div className="absolute top-0 right-0 w-full h-full opacity-5 hidden sm:block">
                  <img src={sculptureImg} alt="" className="w-full h-full object-cover object-right" />
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-brand-brown to-brand-dark shadow-xl mb-6 sm:mb-8 relative z-10"
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl">✨</span>
                </motion.div>

                {/* Title */}
                <div className="mb-4 sm:mb-6 relative z-10">
                  <span className="text-brand-brown font-mono text-xs sm:text-sm uppercase tracking-wider sm:tracking-[0.3em] block mb-2 sm:mb-3">Our Objective</span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-brand-dark leading-tight mb-3 sm:mb-4">
                    Transformative{' '}
                    <span className="text-brand-accent italic block mt-1 sm:mt-2">Impact</span>
                  </h3>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="h-1 sm:h-1.5 w-12 sm:w-16 md:w-20 bg-brand-brown rounded-full"
                  />
                </div>

                {/* Content */}
                <div className="space-y-3 sm:space-y-4 md:space-y-5 text-brand-dark/70 text-sm sm:text-base md:text-lg leading-relaxed flex-1 relative z-10">
                  <p>
                    To create <span className="font-bold text-brand-dark">transformative learning experiences</span> that bridge ancient wisdom with modern innovation, making archaeology accessible and relevant to diverse audiences.
                  </p>
                  <p>
                    We strive to build a <span className="font-bold text-brand-brown">community of heritage advocates</span> who actively participate in preserving, documenting, and celebrating India's rich archaeological legacy for generations to come.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Closing Quote - Mobile Optimized */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6"
      >
        <div className="max-w-5xl mx-auto text-center bg-gradient-to-br from-white via-brand-light to-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl border border-brand-brown/10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-6 sm:mb-8 md:mb-10 rounded-full bg-gradient-to-br from-brand-brown to-brand-accent flex items-center justify-center shadow-xl"
          >
            <span className="text-3xl sm:text-4xl md:text-5xl">🏛️</span>
          </motion.div>

          <p className="text-brand-dark/70 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-display italic leading-relaxed">
            "Together, we honor the echoes of the past while shaping a future where heritage thrives."
          </p>
        </div>
      </motion.div>

    </section>
  );
};

export default AboutUs;
