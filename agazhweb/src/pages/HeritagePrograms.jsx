import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const schoolImg = `${import.meta.env.BASE_URL}images/Schools1.webp`;
const collegeImg = `${import.meta.env.BASE_URL}images/College1.webp`;
const layImg = `${import.meta.env.BASE_URL}images/Lay1.webp`;

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

/* ─────────────── Target Audience Card (hero-style) ─────────────── */
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
      {index < 2 && (
        <div className="hidden lg:block absolute left-1/2 -bottom-12 w-px h-12 bg-gradient-to-b from-brand-accent/40 to-transparent z-10" />
      )}

      <div className={`grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl shadow-brand-dark/10 border border-brand-tan/30 group-hover:shadow-brand-accent/20 transition-all duration-700`}>
        {/* Image Panel */}
        <div
          className={`relative h-[320px] lg:h-auto overflow-hidden ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}
        >
          <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-brand-dark/20 to-transparent"></div>
          {/* Number Badge */}
          <div className="absolute top-6 right-6 w-14 h-14 bg-brand-dark/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 z-10">
            <span className="text-brand-tan font-display text-xl font-bold">{item.id}</span>
          </div>
        </div>

        {/* Content Panel */}
        <div className={`bg-white p-10 lg:p-16 flex flex-col justify-center ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            <span className="text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.2em] text-brand-accent">{item.category}</span>
          </div>
          <h3 className="font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6 leading-tight">{item.title}</h3>
          <p className="font-sans text-base lg:text-lg text-brand-dark/70 leading-relaxed max-w-lg">{item.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

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
      title: "Schools",
      desc: "Curated heritage walks and interactive workshops designed to spark curiosity in young minds.",
      img: schoolImg,
      id: "01",
      category: "Early Education"
    },
    {
      title: "Colleges",
      desc: "In-depth field explorations and career guidance programs to help students pursue pathways in archaeology.",
      img: collegeImg,
      id: "02",
      category: "Higher Learning"
    },
    {
      title: "Lay Audience",
      desc: "Engaging community events and heritage tourism that bring history to life for enthusiasts.",
      img: layImg,
      id: "03",
      category: "Community Engagement"
    }
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

      {/* ── TARGET AUDIENCE ── */}
      <div className="relative py-24 px-6 bg-brand-light/50 border-t border-brand-brown/5">
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <SectionLabel>Target Audience</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl md:text-6xl font-bold text-brand-dark mb-4"
            >
              Inspiring knowledge across <span className="text-brand-accent italic">generations</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display text-xl md:text-2xl text-brand-brown/80 max-w-2xl mx-auto"
            >
               Knowledge for Every Generation
            </motion.p>
          </div>

          <div className="flex flex-col gap-20">
            {programs.map((item, i) => (
              <ProgramCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>


    </section>
  );
};

export default HeritagePrograms;
