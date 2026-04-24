import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import Navbar from '../components/Navbar';
import ContactUs from './ContactUs';
import ArtifactOrb from '../components/ArtifactOrb';
import HeritageAstrolabe from '../components/HeritageAstrolabe';
import OurPurposeSection from '../components/OurPurposeSection';
import TeamMembersSection from '../components/TeamMembersSection';

const teamImg = `${import.meta.env.BASE_URL}images/Aboutus2.webp`;

const AboutUsPage = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="About Us | Agazh Avaiyam — Making Archaeology Accessible"
        description="Learn about Agazh Avaiyam, our team, vision, and mission to make archaeology engaging and accessible to all through hands-on education and heritage programs."
        ogUrl="/aboutus"
      />
      <Navbar />
      <div className="bg-brand-light">
        {/* ── Asymmetrical Premium Editorial Hero ── */}
        <section
          id="aboutus"
          ref={containerRef}
          className="relative min-h-[95vh] md:min-h-screen pt-32 pb-16 flex flex-col justify-center overflow-hidden bg-brand-dark"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -left-32 top-1/4 text-[400px] font-regal text-brand-light/[0.02] pointer-events-none select-none leading-none">
            A
          </div>

          {/* ── 3D Artifact Orb — top-right floating accent ── */}
          <div className="hidden lg:flex absolute top-8 right-8 xl:right-16 items-center justify-center z-0 opacity-70">
            <ArtifactOrb />
          </div>

          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 items-center">

            {/* Left Text Column */}
            <div className="lg:col-span-6 flex flex-col items-start z-20">

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-4 mb-6 sm:mb-8"
              >
                <div className="h-[1px] w-12 bg-brand-tan/50" />
                <span className="text-brand-tan font-mono uppercase text-[10px] sm:text-xs tracking-[0.3em]">About The Organization</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.1] text-brand-light mb-8"
              >
                Journey Into <br />
                <span className="italic text-brand-tan">Our Heritage</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="pl-5 border-l-2 border-brand-tan/30"
              >
                <p className="text-brand-light/70 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-md">
                  We are dedicated to unearthing our cultural legacy, ensuring that the wisdom of the past vividly shapes the future.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="mt-10 sm:mt-12 flex flex-col items-start"
              >
                <span className="text-brand-tan/40 font-mono text-[10px] uppercase tracking-widest mb-3">
                  Scroll to Explore
                </span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-[1px] h-12 bg-gradient-to-b from-brand-tan/50 to-transparent"
                />
              </motion.div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-10 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[450px] lg:max-w-[500px]"
              >
                {/* Decorative border frame */}
                <div className="absolute inset-0 border border-brand-tan/20 rounded-tl-[100px] sm:rounded-tl-[120px] rounded-br-[100px] sm:rounded-br-[120px] rounded-tr-2xl rounded-bl-2xl translate-x-3 translate-y-3 sm:translate-x-5 sm:translate-y-5 pointer-events-none" />

                {/* Image Container */}
                <div className="relative rounded-tl-[100px] sm:rounded-tl-[120px] rounded-br-[100px] sm:rounded-br-[120px] rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-brand-brown">
                  <motion.div
                    style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '15%']) }}
                    className="w-full h-full"
                  >
                    <img
                      src={teamImg}
                      alt="Agazh Avaiyam Team"
                      className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-80 scale-105"
                    />
                  </motion.div>
                  {/* Gradient overlay for blending */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/60 via-brand-dark/10 to-brand-accent/30 mix-blend-multiply pointer-events-none" />
                </div>
              </motion.div>
            </div>

          </div>

          {/* Smooth transition block to bottom section */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-light to-transparent" />
        </section>

        {/* ── Introduction Content Section ── */}
        <section className="relative py-20 sm:py-28 lg:py-36 bg-brand-light">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 text-center">

            {/* The Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display text-brand-dark leading-[1.05] mb-8 sm:mb-10"
            >
              <span className="block">Making Archaeology</span>
              <span className="block text-brand-accent italic">Immersive</span>
              <span className="block">& Accessible</span>
            </motion.h2>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-[2px] w-24 sm:w-32 bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto mb-8 sm:mb-12 opacity-70"
            />

            {/* Description Text */}
            <div className="max-w-3xl mx-auto space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-brand-dark/80 text-lg sm:text-xl lg:text-2xl leading-relaxed font-light"
              >
                <span className="font-bold text-brand-brown">Agazh Avaiyam</span> is an MCA-registered organization specializing in education, heritage tourism, and research.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-brand-dark/70 text-base sm:text-lg lg:text-xl leading-relaxed font-light"
              >
                Backed by a multidisciplinary team of <span className="text-brand-brown font-medium">scholars and humanities practitioners</span>, we partner with schools to promote academically grounded, experiential heritage education.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── Quote + Astrolabe Section — proper two-column ── */}
        <div className="relative overflow-hidden bg-[#2C1810] border-t border-brand-accent/20">

          {/* Texture overlays */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/60 via-transparent to-brand-accent/20" />

          {/* Ambient glow */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-accent/10 blur-[100px] rounded-full pointer-events-none"
          />

          {/* Two-column content */}
          <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 py-24 sm:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

              {/* LEFT — Astrolabe */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center justify-center gap-8 relative z-10"
              >
                <div className="relative">
                  {/* Background glow for Astrolabe */}
                  <div className="absolute inset-0 bg-brand-tan/10 blur-2xl rounded-full scale-150" />
                  <HeritageAstrolabe />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex items-center gap-4 mt-2"
                >
                  <div className="h-[1px] w-8 bg-brand-tan/30" />
                  <p className="text-brand-tan/60 font-mono text-[10px] sm:text-xs uppercase tracking-[0.4em] text-center">
                    Heritage · Navigation · Legacy
                  </p>
                  <div className="h-[1px] w-8 bg-brand-tan/30" />
                </motion.div>
              </motion.div>

              {/* RIGHT — Quote text */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="flex flex-col items-center text-center lg:items-start lg:text-left relative z-10"
              >
                {/* Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="mb-8 sm:mb-10 flex flex-col items-center lg:flex-row lg:items-center gap-4 lg:gap-6"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-brand-tan/20 absolute inset-0 m-auto border-dashed"
                    />
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                      <span className="text-2xl sm:text-3xl filter drop-shadow-md">🏛️</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="hidden lg:block h-[2px] w-12 bg-gradient-to-r from-brand-tan/40 to-transparent mb-1" />
                    <span className="font-mono text-[10px] sm:text-xs text-brand-tan/60 uppercase tracking-[0.2em] lg:tracking-[0.3em] font-medium">Our Ethos</span>
                  </div>
                </motion.div>

                {/* Large open-quote mark */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative flex justify-center lg:justify-start w-full"
                >
                  <span className="font-display text-[6rem] sm:text-[8rem] md:text-[10rem] text-brand-tan/15 leading-none block -mb-8 sm:-mb-14 md:-mb-16 select-none relative lg:-left-6">
                    &ldquo;
                  </span>
                </motion.div>

                {/* Quote text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="text-white/95 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display italic leading-[1.4] md:leading-[1.3] mb-8 sm:mb-10 relative z-10 drop-shadow-lg max-w-2xl mx-auto lg:mx-0"
                >
                  Together, we honor the echoes of the past while shaping a future where heritage thrives.
                </motion.p>

                {/* Underline */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 1.2, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-transparent via-brand-tan lg:from-brand-tan lg:via-brand-accent/50 to-transparent"
                />
              </motion.div>

            </div>
          </div>
        </div>

        {/* ── Our Purpose Section ── */}
        <OurPurposeSection />

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
                    src={`${import.meta.env.BASE_URL}images/Meet_our_team1.webp`}
                    alt="Heritage walk team"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
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
                    src={`${import.meta.env.BASE_URL}images/Meet_our_team2.webp`}
                    alt="Students workshop"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
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
                    src={`${import.meta.env.BASE_URL}images/Meet_our_team3.webp`}
                    alt="Career guidance"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
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

        {/* ── Team Members Cards Section ── */}
        <TeamMembersSection />

      </div>
      <ContactUs />
    </>
  );
};

export default AboutUsPage;
