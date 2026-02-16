import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
const schoolImg = '/images/students_workshop_1768917126967.png';
const collegeImg = '/images/career_guidance_1768917220575.png';
const layImg = '/images/heritage_walk_team_1768917192614.png';

const audienceData = [
  {
    title: "Schools",
    desc: "Curated heritage walks and interactive workshops designed to spark curiosity in young minds.",
    img: schoolImg,
    id: "01"
  },
  {
    title: "Colleges",
    desc: "In-depth field explorations and career guidance programs to help students pursue pathways in archaeology.",
    img: collegeImg,
    id: "02"
  },
  {
    title: "Lay Audience",
    desc: "Engaging community events and heritage tourism that bring history to life for enthusiasts.",
    img: layImg,
    id: "03"
  }
];

const ServiceCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[35vw] h-[65vh] md:h-[70vh] relative flex-shrink-0 group overflow-hidden bg-white rounded-lg shadow-2xl"
    >
      <div className="h-[55%] overflow-hidden relative">
        <img
          src={item.img}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 filter grayscale-[0.3] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent"></div>

        {/* Number Badge */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-brand-dark/90 backdrop-blur-sm rounded-full flex items-center justify-center">
          <span className="text-brand-tan font-display text-2xl font-bold">{item.id}</span>
        </div>
      </div>

      <div className="p-6 md:p-8 w-full h-[45%] flex flex-col justify-between bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%235D4037' fill-opacity='1'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        />

        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display text-brand-dark mb-3 uppercase tracking-tight">{item.title}</h3>
          <div className="w-12 h-1 bg-brand-tan mb-4 transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
        </div>

        <p className="text-brand-dark/70 text-base md:text-lg leading-relaxed relative z-10">
          {item.desc}
        </p>

        {/* Corner Accent */}
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-brand-light rounded-tr-full transform -translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
      </div>
    </motion.div>
  );
};

const Service = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Longer lock with complete horizontal scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section ref={targetRef} id="service" className="relative h-[800vh] bg-brand-light">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%235D4037'/%3E%3C/svg%3E")`
        }}
      />

      <div className="sticky top-0 h-screen flex items-center overflow-hidden">

        {/* Fixed Title on Left - Fades out when cards appear */}
        <motion.div
          className="absolute top-16 md:top-20 left-6 md:left-20 z-20 max-w-sm"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]),
            pointerEvents: 'none'
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-brand-brown"></div>
            <h2 className="text-brand-brown font-mono uppercase tracking-widest text-xs">Target Audience</h2>
          </div>
          <p className="text-brand-dark text-2xl md:text-4xl font-display leading-tight">
            Inspiring knowledge across <span className="text-brand-accent italic">generations</span>
          </p>
        </motion.div>

        <motion.div
          style={{ x, willChange: 'transform' }}
          className="flex gap-8 md:gap-12 pl-[5vw] items-center py-12"
        >

          {/* Intro Block */}
          <div className="min-w-[85vw] sm:min-w-[70vw] md:min-w-[40vw] lg:min-w-[35vw] h-[60vh] sm:h-[65vh] md:h-[70vh] flex items-center justify-center p-6 sm:p-8 md:p-12 mr-4 sm:mr-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-tan/20 to-brand-light transform -skew-y-3 rounded-lg"></div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-display text-brand-dark leading-none relative z-10 text-center">
              Knowledge <br />
              <span className="text-brand-accent italic text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl">for Every</span> <br />
              <span className="text-brand-brown">Generation</span>
            </h3>
          </div>

          {audienceData.map((item, index) => (
            <ServiceCard key={index} item={item} />
          ))}

          {/* Outro Block */}
          <div className="min-w-[35vw] h-[70vh] flex items-center justify-center p-12 ml-6 bg-gradient-to-br from-white to-brand-light rounded-lg shadow-xl">
            <div className="text-center">
              <p className="text-brand-dark/40 text-2xl font-display italic mb-4">Join the movement</p>
              <p className="text-brand-accent text-sm uppercase tracking-widest">and many more...</p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Service;
