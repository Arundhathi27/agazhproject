import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
const heritageImg = `${import.meta.env.BASE_URL}images/heritage_walk_team1.webp`;
const workshopImg = `${import.meta.env.BASE_URL}images/excavation_hands1.webp`;
const careerImg = `${import.meta.env.BASE_URL}images/career_guidance1.webp`;

const projects = [
  {
    title: "Heritage Walk",
    subtitle: "Mahabalipuram",
    desc: "Students explored Pallava architecture and created hand-drawn site maps, connecting directly with the history of the land.",
    img: heritageImg,
    color: "#5D4037"
  },
  {
    title: "Archaeology Workshop",
    subtitle: "Hands-on Experience",
    desc: "A comprehensive workshop featuring interactive sessions, pottery making, seal design, and simulated excavations.",
    img: workshopImg,
    color: "#3E2723"
  },
  {
    title: "Career Guidance",
    subtitle: "Future Pathways",
    desc: "Organized specifically for students to seek opportunities in the humanities and heritage sectors.",
    img: careerImg,
    color: "#5D4037"
  }
];

const Card = ({ i, project, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-8">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          willChange: 'transform'
        }}
        className="relative w-full max-w-6xl h-[500px] md:h-[580px] rounded-2xl overflow-hidden origin-top shadow-2xl"
      >
        {/* Full Width Image Background */}
        <motion.div
          style={{ scale: imageScale, willChange: 'transform' }}
          className="absolute inset-0"
        >
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
        </motion.div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 lg:p-16">
          {/* Top: Number & Institution */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-brand-tan/20 backdrop-blur-sm flex items-center justify-center border border-brand-tan/30">
                <span className="text-brand-tan font-display text-2xl font-bold">0{i + 1}</span>
              </div>
              <div className="h-12 w-px bg-brand-tan/30"></div>
              <span className="text-white/40 text-xs uppercase tracking-[0.2em] font-mono">Executed with Velammal Inst.</span>
            </div>
          </div>

          {/* Bottom: Project Info */}
          <div className="max-w-2xl">
            <span className="text-brand-tan/60 text-sm uppercase tracking-widest font-mono mb-3 block">{project.subtitle}</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-6 leading-[0.95] tracking-tight">
              {project.title}
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl mb-6">
              {project.desc}
            </p>

            {/* Decorative Line */}
            <div className="flex items-center gap-4 mt-8">
              <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-brand-tan/60 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-brand-tan via-brand-accent to-transparent"></div>
      </motion.div>
    </div>
  )
}

const Events = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <section ref={container} id="events" className="relative bg-brand-light">
      {/* Decorative Background - Subtle */}
      <div className="absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235D4037' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0-5.523-4.477-10-10-10zm-10 10c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10c0-5.523 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0-5.523-4.477-10-10-10zm10 50c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10c0-5.523 4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-7xl mx-auto pt-24 pb-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Made EXECUTED text much darker and more visible */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[10rem] font-display text-brand-dark/40 uppercase leading-none mb-4">
            EXECUTED
          </h2>
          <div className="w-full h-px bg-gradient-to-r from-brand-brown/40 via-brand-brown/20 to-transparent mb-6"></div>
          <p className="text-brand-dark/70 font-sans text-base md:text-lg max-w-3xl leading-relaxed">
            Showcasing our successful initiatives that brought archaeology and heritage to life for students and communities across Tamil Nadu.
          </p>
        </motion.div>
      </div>

      {
        projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return <Card key={i} i={i} project={project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
        })
      }

      {/* Bottom Spacer */}
      <div className="h-32"></div>
    </section>
  );
};

/* ─────────────── Floating Particle Background ─────────────── */
const ParticleField = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-brand-tan/20"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{
            y: [0, -40, 0],
            x: [0, 15, -15, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

/* ─────────────── Partner Card ─────────────── */
const PartnerCard = ({ icon, title, desc, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -8 }}
      className="group relative bg-brand-dark rounded-2xl p-8 overflow-hidden border border-white/5 hover:border-brand-tan/20 transition-colors duration-500"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(141,110,99,0.15) 0%, transparent 70%)' }}
      />

      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          className="w-14 h-14 rounded-xl bg-brand-accent/20 flex items-center justify-center mb-6 text-2xl"
        >
          {icon}
        </motion.div>
        <h4 className="font-display text-2xl font-bold text-white mb-3">{title}</h4>
        <p className="font-sans text-sm text-brand-tan/70 leading-relaxed">{desc}</p>
      </div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full border border-white/5"
      />
    </motion.div>
  );
};

const partnerItems = [
  {
    icon: '🏫',
    title: 'Schools',
    desc: "Partner with us to seamlessly integrate our competency-based EHL programme into your academic schedule to strengthen your students' understanding of curricular themes.",
  },
  {
    icon: '🤝',
    title: 'NGOs, Volunteers & Sponsors',
    desc: 'Join our multidisciplinary team of scholars, young researchers, and skilled educators to advance archaeology and promote social well-being. Help us explore ancient technologies, document unexplored sites, and lead awareness campaigns to make the past alive for learning and innovation.',
  },
];

const PartnerWithUs = () => {
  return (
    <section
      id="partner-with-us"
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #3E2723 0%, #5D4037 60%, #6D4C41 100%)' }}
    >
      <ParticleField />

      <motion.div animate={{ rotate: 360 }} transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full border border-white/5 -translate-y-1/2 translate-x-1/4"
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-[0.3em] text-brand-accent mb-4"
          >
            <span className="w-8 h-px bg-brand-accent" />
            Collaboration
            <span className="w-8 h-px bg-brand-accent" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Partner <span className="text-brand-tan italic">With Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-sm text-brand-tan/60 max-w-2xl mx-auto leading-relaxed"
          >
            Guided by collaboration and inclusivity, Agazh Avaiyam seeks to grow as a collective force for knowledge, heritage, and sustainable progress. Education and community engagement stand at the heart of our mission.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {partnerItems.map((p, i) => (
            <PartnerCard key={p.title} icon={p.icon} title={p.title} desc={p.desc} delay={i * 0.15} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mt-14"
        >
          <motion.a
            href="#contactus"
            onClick={(e) => { e.preventDefault(); document.getElementById('contactus')?.scrollIntoView({ behavior: 'smooth' }); }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-brand-dark font-sans font-bold text-sm uppercase tracking-widest shadow-2xl shadow-black/20 hover:bg-brand-tan transition-colors duration-300"
          >
            Get In Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export { Events, PartnerWithUs };
export default Events;
