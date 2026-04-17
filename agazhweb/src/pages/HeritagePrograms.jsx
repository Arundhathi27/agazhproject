import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';

/* ─────────────────────────── helpers ─────────────────────────── */
const useCountUp = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
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

/* ─────────────────── Section Title ─────────────────── */
const SectionLabel = ({ children }) => (
  <motion.span
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-[0.3em] text-brand-accent mb-4"
  >
    <span className="w-8 h-px bg-brand-accent" />
    {children}
    <span className="w-8 h-px bg-brand-accent" />
  </motion.span>
);

/* ─────────────── Program Card (hero-style) ─────────────── */
const ProgramCard = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      {/* Connector line */}
      {index < 3 && (
        <div className="hidden lg:block absolute left-1/2 -bottom-12 w-px h-12 bg-gradient-to-b from-brand-accent/40 to-transparent z-10" />
      )}

      <div className={`grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl shadow-brand-dark/10 border border-brand-tan/30 group-hover:shadow-brand-accent/20 transition-all duration-700`}>
        {/* Accent Panel */}
        <div
          className={`relative p-10 flex flex-col justify-center min-h-[320px] ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}
          style={{ background: item.gradient }}
        >
          <ParticleField />
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6 shadow-lg"
          >
            <span className="text-3xl">{item.icon}</span>
          </motion.div>

          <h3 className="font-display text-3xl font-bold text-white mb-3 leading-tight">{item.title}</h3>
          <div className="flex flex-wrap gap-2 mt-4">
            {item.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-sans font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/20 text-white/90 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>

          {/* Decorative circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full border border-white/10"
          />
          <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-white/5 blur-2xl" />
        </div>

        {/* Content Panel */}
        <div className={`bg-white p-10 flex flex-col justify-between ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
          <div className="space-y-6">
            <InfoBlock label="What It Is" text={item.whatItIs} color={item.accentColor} />
            <InfoBlock label="Who It's For" text={item.whoItsFor} color={item.accentColor} />
            <InfoBlock label="Outcome & Impact" text={item.outcome} color={item.accentColor} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const InfoBlock = ({ label, text, color }) => (
  <div className="group/block">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
      <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-brand-accent">{label}</span>
    </div>
    <p className="font-sans text-sm text-brand-dark/70 leading-relaxed pl-3.5">{text}</p>
  </div>
);

/* ─────────────── Events Section ─────────────── */
const EventCard = ({ title, desc, badge, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, boxShadow: '0 25px 60px rgba(93,64,55,0.15)' }}
      className="relative bg-white rounded-2xl p-8 border border-brand-tan/30 overflow-hidden cursor-default"
    >
      {/* Top gradient strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent via-brand-brown to-brand-tan" />

      <span className="inline-block text-[10px] font-sans font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-brand-light text-brand-accent mb-4">
        {badge}
      </span>
      <h4 className="font-display text-xl font-bold text-brand-dark mb-3">{title}</h4>
      <p className="font-sans text-sm text-brand-dark/65 leading-relaxed">{desc}</p>

      {/* Decorative */}
      <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-brand-light/80" />
    </motion.div>
  );
};

/* ─────────────── Offering Card (grid-style) ─────────────── */
const OfferingCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative h-full"
    >
      <div className={`relative h-full bg-gradient-to-br ${item.gradient} rounded-3xl p-8 shadow-xl overflow-hidden flex flex-col ${item.gradient.includes('dark') ? 'text-white' : 'text-brand-dark'}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />

        <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-3xl shadow-lg relative z-10 ${item.gradient.includes('dark') ? 'bg-white/10' : 'bg-white/50'}`}>
          {item.icon}
        </div>

        <h3 className="text-2xl font-display font-bold mb-4 relative z-10">{item.title}</h3>
        <div className="space-y-4 flex-1 relative z-10">
          {item.description.split('\n\n').map((p, i) => (
            <p key={i} className={`text-sm leading-relaxed ${item.gradient.includes('dark') ? 'text-white/80' : 'text-brand-dark/75'}`}>
              {p}
            </p>
          ))}
        </div>

        {/* Decorative */}
        <div className={`absolute bottom-0 right-0 w-24 h-24 rounded-tl-full transition-transform duration-500 transform translate-x-8 translate-y-8 group-hover:translate-x-4 group-hover:translate-y-4 ${item.gradient.includes('dark') ? 'bg-white/5' : 'bg-white/20'}`} />
      </div>
    </motion.div>
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

const offeringsData = [
  {
    title: "Field-Based Learning",
    icon: "🎓",
    description: "Move beyond traditional classrooms and bring textbook chapters to life through interactive field experiences. Students connect classroom learning with the real world by exploring heritage sites, participating in mini-excavations, and engaging in interactive, activity-based experiences.\n\nThis approach makes learning interactive, transformative, and impactful while sharpening analytical and observational skills.",
    gradient: "from-brand-brown to-brand-accent"
  },
  {
    title: "Hands-On Workshops",
    icon: "🛠️",
    description: "Engage in interactive workshops that bring history, archaeology, and traditional art practices to life. Participants explore ancient techniques, experiment with time-honored crafts, and interact directly with material culture from the past.\n\nThese experiences foster curiosity, creativity, and critical thinking while deepening appreciation for heritage.",
    gradient: "from-brand-tan to-brand-accent"
  },
  {
    title: "Expert-Led Tours",
    icon: "👨‍🏫",
    description: "Experience historical and cultural sites through the eyes of passionate experts. Our team doesn’t just guide—they tell stories, reveal hidden insights, and bring the past alive, turning every site into a living narrative.\n\nThese tours offer meaningful, memorable journeys into history and culture.",
    gradient: "from-brand-dark to-brand-brown"
  }
];

/* ────────────────────────── STAT COUNTER ────────────────────────── */
const StatCounter = ({ value, label, suffix = '+' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useCountUp(value, 2000, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="font-display text-5xl font-bold text-white mb-1">
        {count}{suffix}
      </div>
      <div className="font-sans text-xs uppercase tracking-widest text-brand-tan/60">{label}</div>
    </motion.div>
  );
};

/* ═══════════════ MAIN COMPONENT ═══════════════ */
const HeritagePrograms = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  const programs = [
    {
      title: 'Heritage Education Programs',
      subtitle: 'Experiential Heritage Learning (EHL) Programme',
      icon: '🏛️',
      gradient: 'linear-gradient(135deg, #3E2723 0%, #5D4037 50%, #8D6E63 100%)',
      accentColor: '#8D6E63',
      tags: ['Year-Long Initiative', 'Grades 6–9', 'In-Campus', 'Interdisciplinary'],
      whatItIs: 'The Experiential Heritage Learning (EHL) Programme is a structured, year-long initiative that integrates heritage, history, environment, and cultural knowledge into activity-based modules. It transforms textbook learning into immersive, real-world experiences.',
      whoItsFor: 'Designed for students in Grades 6–9 across all school types, while also extending to colleges and general audiences through broader initiatives.',
      outcome: 'Students strengthen academic understanding through field engagement, observation, and interdisciplinary exploration. The program nurtures critical thinking, ethical awareness, and meaningful connections with heritage.',
    },
    {
      title: 'Workshops & Storytelling Sessions',
      subtitle: 'Experiential Archaeology & Field Explorations',
      icon: '🪄',
      gradient: 'linear-gradient(135deg, #5D4037 0%, #795548 50%, #A1887F 100%)',
      accentColor: '#795548',
      tags: ['Interactive', 'Pottery-Making', 'Excavations', 'Heritage Trails'],
      whatItIs: 'Experiential archaeology workshops featuring practical sessions like pottery-making, simulated excavations, and experimental archaeology, combined with storytelling and field exploration.',
      whoItsFor: 'Students, schools, colleges, and the general public.',
      outcome: 'Encourages creativity, curiosity, and active participation while helping participants connect personally with history and cultural traditions.',
    },
    {
      title: 'School Activities & Clubs',
      subtitle: 'Extra-Curricular Heritage Learning (EHL)',
      icon: '🎓',
      gradient: 'linear-gradient(135deg, #4E342E 0%, #6D4C41 50%, #8D6E63 100%)',
      accentColor: '#6D4C41',
      tags: ['4 Classes/Month', 'Career Guidance', 'Grades 6–9', 'All School Types'],
      whatItIs: 'An extracurricular heritage learning program integrated into school schedules, offering regular sessions and career guidance in archaeology and humanities.',
      whoItsFor: 'Students in Grades 6–9 across all types of schools.',
      outcome: 'Develops observation, inquiry, documentation, and communication skills through experiential learning that complements academic studies.',
    },
    {
      title: 'Events & Field Experiences',
      subtitle: 'Heritage Walks, Explorations & Awareness Campaigns',
      icon: '🗺️',
      gradient: 'linear-gradient(135deg, #3E2723 0%, #4E342E 50%, #6D4C41 100%)',
      accentColor: '#5D4037',
      tags: ['Heritage Walks', 'Site Visits', 'Awareness Campaigns', 'Open to All'],
      whatItIs: 'Curated heritage walks, archaeological site visits, and awareness campaigns designed to bring history to life through direct exploration.',
      whoItsFor: 'Open to schools, colleges, and the general audience.',
      outcome: 'Promotes heritage awareness, cultural appreciation, and responsible engagement with historical sites while creating memorable learning experiences.',
    },
  ];

  const partnerItems = [
    {
      icon: '🏫',
      title: 'Schools',
      desc: 'Partner with us to seamlessly integrate our competency-based EHL programme into your academic schedule to strengthen your students\' understanding of curricular themes.',
    },
    {
      icon: '🤝',
      title: 'NGOs, Volunteers & Sponsors',
      desc: 'Join our multidisciplinary team of scholars, young researchers, and skilled educators to advance archaeology and promote social well-being. Help us explore ancient technologies, document unexplored sites, and lead awareness campaigns to make the past alive for learning and innovation.',
    },
  ];

  return (
    <section id="heritage-programs" ref={containerRef} className="relative bg-brand-light overflow-hidden">

      {/* ── HERO BANNER ── */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #3E2723 0%, #5D4037 45%, #8D6E63 100%)' }}
      >
        <ParticleField />

        {/* Animated grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(215,204,200,1) 1px, transparent 1px), linear-gradient(90deg, rgba(215,204,200,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Parallax orbs */}
        <motion.div style={{ y: parallaxY }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-accent/20 blur-3xl"
        />
        <motion.div style={{ y: parallaxY }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-brand-tan/15 blur-3xl"
        />

        {/* Rotating rings */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5"
        />
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/3"
        />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <SectionLabel>Our Programs</SectionLabel>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
          >
            Heritage Education
            <br />
            <span className="text-brand-tan italic">& Cultural Programs</span>
          </motion.h1>

          <div className="space-y-6 max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="font-sans text-base sm:text-lg text-white/80 leading-relaxed font-medium"
            >
              Built on collaboration and inclusivity, our programs deliver immersive learning experiences that bring archaeology and heritage to life for every participant.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-sans text-sm sm:text-base text-white/60 leading-relaxed"
            >
              We believe that archaeology is most impactful when it goes beyond textbooks. By combining fieldwork, practical learning, and heritage tourism, we create transformative learning experiences that inspire curiosity, creativity, and a deeper connection to cultural heritage.
            </motion.p>
          </div>

          {/* Scroll indicator */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-14 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-sans uppercase tracking-widest text-white/30">Explore Programs</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
            >
              <div className="w-1 h-2 rounded-full bg-white/40" />
            </motion.div>
          </motion.div> */}
        </div>
      </div>

      {/* ── STAT BAR ── */}
      <div style={{ background: 'linear-gradient(90deg, #3E2723, #5D4037, #3E2723)' }} className="py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCounter value={4} label="Core Programs" />
          <StatCounter value={6} label="Grades Served" suffix="" />
          <StatCounter value={4} label="Sessions / Month" />
          <StatCounter value={100} label="Heritage Engagement" suffix="%" />
        </div>
      </div>

      {/* ── CORE LEARNING EXPERIENCES ── */}
      <div className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Core Learning Experiences</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl md:text-6xl font-bold text-brand-dark"
            >
              The <span className="text-brand-accent italic">Foundation</span> of Discovery
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offeringsData.map((item, index) => (
              <OfferingCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* ── PROGRAMS THAT TRANSFORM ── */}
      <div className="relative py-24 px-6 bg-brand-light/50 border-t border-brand-brown/5">
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <SectionLabel>Programs That Transform</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl md:text-6xl font-bold text-brand-dark"
            >
              Academic <span className="text-brand-accent italic">& Social Impact</span>
            </motion.h2>
          </div>

          <div className="flex flex-col gap-20">
            {programs.map((item, i) => (
              <ProgramCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* ── EVENTS & UPDATES ── */}
      <div className="py-24 px-6" style={{ background: 'linear-gradient(180deg, #EFEBE9 0%, #E8E0DC 100%)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Events & Updates</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl md:text-6xl font-bold text-brand-dark"
            >
              Our <span className="text-brand-accent italic">Stories</span> in the Field
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <EventCard
              badge="Upcoming"
              title="Upcoming Events"
              desc="Content to be updated with future schedules. Stay tuned for our upcoming heritage walks, workshops, and educational programs."
              delay={0}
            />
            <EventCard
              badge="Past Event"
              title="Velammal Institution Workshop"
              desc="We recently executed successful projects with Velammal Institution. This included a two-day hands-on Archaeology Workshop featuring interactive simulated excavations and pottery-making."
              delay={0.1}
            />
            <EventCard
              badge="Highlight"
              title="Heritage Walk at Mahabalipuram"
              desc="A major highlight from our recent work was the Heritage Walk at Mahabalipuram, where students not only explored Pallava architecture but also created their own hand-drawn site maps. These programs successfully fostered creativity and a deeper connection to living history."
              delay={0.2}
            />
          </div>

          {/* Photo placeholder with shimmer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden border border-brand-tan/40 bg-brand-dark/5"
            style={{ minHeight: 220 }}
          >
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-3 p-8">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-14 h-14 rounded-full bg-brand-accent/20 flex items-center justify-center text-2xl"
              >
                📸
              </motion.div>
              <p className="font-display text-xl text-brand-dark/50 italic text-center">
                Event photos from Velammal Institution & Mahabalipuram Heritage Walk — coming soon
              </p>
              <span className="text-xs font-sans text-brand-accent/60 uppercase tracking-widest">Photos to be inserted</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── PARTNER WITH US ── */}
      <div className="relative py-24 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #3E2723 0%, #5D4037 60%, #6D4C41 100%)' }}
      >
        <ParticleField />

        <motion.div animate={{ rotate: 360 }} transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full border border-white/5 -translate-y-1/2 translate-x-1/4"
        />

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Collaboration</SectionLabel>
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
      </div>

    </section>
  );
};

export default HeritagePrograms;
