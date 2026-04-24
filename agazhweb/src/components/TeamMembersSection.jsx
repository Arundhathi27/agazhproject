import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

const BASE = import.meta.env.BASE_URL;

const visionaries = [
  {
    id: 1,
    name: 'Shyam Daniel S',
    role: 'Founder',
    title: 'Founder & Chief Executive Officer (CEO)',
    image: `${BASE}images/our_team/ShyamDaniel.jpeg`,
    shortBio: 'Founder specializing in Ancient History & Marine Archaeology.',
    bio: `Shyam Daniel S is the Founder and an archaeologist specializing in Ancient History and Archaeology, with a Master's degree from the University of Madras and a Postgraduate Diploma in Marine Archaeology from Deccan College.

With hands-on experience in excavations conducted by the Tamil Nadu State Department of Archaeology and the University of Madras, he also brings expertise in conservation through his work at the Tamil Nadu Archives.

His research in maritime archaeology—including a dissertation on stone anchors of Dwarka, Bet Dwarka, and Somnath—reflects his deep interest in underwater cultural heritage. As a founder, he is driven to make history more engaging, accessible, and experiential for diverse audiences.`,
    index: '01',
  },
  {
    id: 2,
    name: 'Bharath Jayakumar',
    role: 'Co-Founder',
    title: 'Co-Founder & Chief Operations Officer (COO)',
    image: `${BASE}images/our_team/BharathJayakumar.jpeg`,
    shortBio: `Master's in Ancient History & Archaeology, epigraphy specialist.`,
    bio: `Bharath Jayakumar holds a Master's degree in Ancient History and Archaeology from the University of Madras, along with a diploma in Epigraphy and Archaeology. He specializes in Pre and Proto-historical archaeology, with a keen interest in lithics and ceramics that reveal insights into early human life.

He has worked as a Research Scholar with the Tamil Nadu State Department of Archaeology (TNSDA) and is passionate about bringing heritage and history closer to people through engaging learning experiences.`,
    index: '02',
  },
  {
    id: 3,
    name: 'Priyankaa Prasad',
    role: 'Heritage Educator',
    title: 'Program Content Developer',
    image: `${BASE}images/our_team/PriyankaaPrasad.jpeg`,
    shortBio: 'Specializes in material culture, iconography & public history.',
    bio: `Priyankaa Prasad is a postgraduate scholar in Ancient History and Archaeology from the University of Madras, with a strong academic foundation in history and material culture. She has gained practical experience through archaeological fieldwork, excavations, and an internship with the Archaeological Survey of India.

She has also been actively involved in heritage education, conducting guided heritage walks for children and contributing to initiatives that make history engaging and accessible to wider audiences. Her interests include iconography, public history, and cultural preservation.

Through her work, she aims to promote awareness and appreciation of India’s rich heritage by bridging academic knowledge with meaningful public engagement.`,
    index: '03',
  },
  {
    id: 4,
    name: 'Rebheka Shankar',
    role: 'Field Archaeologist',
    title: 'Program Instructional Designer',
    image: `${BASE}images/our_team/RebhekaShankar.jpeg`,
    shortBio: 'Expert in excavation, site supervision & ceramic studies.',
    bio: `Rebheka Shankar is a field archaeologist with a Master's degree in Ancient History and Archaeology from the University of Madras. She is currently working with the Archaeological Survey of India and has prior experience as a Field Archaeologist (Supervisor) under the State Department.

Her expertise includes excavation, site supervision, and field documentation such as stratigraphy recording, artefact cataloguing, and maintaining detailed site records. She has a strong research interest in ceramic studies and is currently working on a research article as part of her PhD preparation.`,
    index: '04',
  },
  {
    id: 5,
    name: 'Arundhathi N.B',
    role: 'Tech Contributor',
    title: 'Digital Platform & Web Experience Manager',
    image: `${BASE}images/our_team/ArundhathiN.B.jpeg`,
    shortBio: 'Dedicated developer and contributor focusing on web technologies and ML.',
    bio: `Arundhathi N.B is a dedicated developer and contributor to Agazh Avaiyam, with a strong academic background and technical expertise in programming, web technologies, and database management. She has gained hands-on experience through projects in machine learning and web application development, demonstrating strong problem-solving abilities.

Her active participation in training programs and hackathons reflects a commitment to continuous learning and innovation. Through her contributions, she supports Agazh Avaiyam’s vision of fostering collaboration, technological growth, and meaningful learning experiences.`,
    index: '05',
  }
];

const advisors = [
  {
    id: 6,
    name: 'Dr. Jinu Koshy',
    role: 'Archaeological Advisor',
    title: 'Prehistory & Rock Art Specialist',
    image: `${BASE}images/our_team/JinuKoshy.jpeg`,
    shortBio: 'Excavation In-Charge, University of Madras. Rock art & lithic studies.',
    bio: `Dr. Jinu Koshy is an archaeologist specializing in South Indian prehistory, lithic studies, and rock art. He serves as Excavation In-Charge at the Department of Ancient History and Archaeology, University of Madras, and has been actively involved in field research, teaching and student training in archaeology.

His research spans prehistoric lithic technology, rock art, and settlement studies, with important contributions to the documentation of Middle Palaeolithic and Microlithic evidence in South Indian regions. His field teams have documented one of South India's largest prehistoric rock-art landscapes in Kurnool district, recording thousands of Mesolithic paintings and engravings, and also have unearthed Middle Palaeolithic and Microlithic stone tools in Tiruvannamalai, pushing back evidence for early human occupation in the region.

Most recently, he led the discovery and excavation of a rare Neolithic child burial at a small settlement near Chengalpattu in Tamil Nadu, offering new insights into Neolithic burial practices in peninsular India. Over the past two decades, he has trained generations of undergraduate and postgraduate students in archaeological exploration, excavation across Tamil Nadu. An active researcher with numerous national and international publications on lithic technology and rock art.`,
    index: '01',
  },
  {
    id: 7,
    name: 'Dr. A.S. Gaur',
    role: 'Marine Archaeology Advisor',
    title: 'Distinguished Marine Archaeologist',
    image: `${BASE}images/our_team/Gaur.jpeg`,
    shortBio: 'Former Technical Officer, CSIR-NIO. Expert in ancient ports & shipwrecks.',
    bio: `Dr. A.S. Gaur is a distinguished marine archaeologist and former Technical Officer at CSIR-National Institute of Oceanography, Goa, where he contributed extensively to underwater and coastal archaeology in India.

Gaur's work focuses on ancient ports, stone anchors, shipwrecks, and Harappan-era coastal sites like Dwarka, Bet Dwarka, Lothal, and Padri, and he is widely recognised for his work in maritime heritage studies. He has also been associated with several significant explorations and publications in Indian marine archaeology, helping build a deeper understanding of ancient seafaring, port settlements, and submerged cultural remains.`,
    index: '02',
  },
];

/* ─── Animated Card Component with 3D Tilt ───────────── */
const MemberCard = ({ member, onClick, isActive }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  // 3D Tilt Setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative cursor-pointer flex-shrink-0"
      style={{ width: 'clamp(280px, 28vw, 360px)', perspective: 1200 }}
    >
      {/* 3D Container Container */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => onClick(member)}
        className="w-full h-full relative"
      >
        {/* Outer dynamic glow */}
        <motion.div
          className="absolute -inset-2 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(141,110,99,0.4) 0%, transparent 70%)',
            filter: 'blur(20px)',
            transform: 'translateZ(-50px)'
          }}
        />

        {/* Main Card */}
        <div
          className={`relative rounded-[2rem] overflow-hidden border transition-all duration-500 bg-white/5 backdrop-blur-xl ${isActive
            ? 'border-brand-tan/80 shadow-[0_0_50px_rgba(215,204,200,0.15)] ring-1 ring-brand-tan/30'
            : 'border-white/10 group-hover:border-brand-tan/50 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]'
            }`}
        >
          {/* Top Image Section */}
          <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
            {/* Parallax Image */}
            <motion.img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-top origin-bottom"
              loading="lazy"
              initial={{ scale: 1.05 }}
              whileHover={{ scale: 1.12, y: -10 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Rich gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#120906] via-[#120906]/50 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#120906]/40 via-transparent to-transparent opacity-60" />

            {/* Glowing Accent Line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-tan/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

            {/* Badges removed */}

            {/* Name and Title Text */}
            <motion.div
              className="absolute bottom-6 left-6 right-6"
              style={{ transform: 'translateZ(50px)' }}
            >
              <motion.h3
                className="font-display text-white text-3xl md:text-2xl lg:text-3xl leading-tight mb-2 group-hover:text-brand-tan transition-colors duration-300"
              >
                {member.name}
              </motion.h3>
              <p className="font-mono text-brand-tan/80 text-[10px] md:text-[9px] lg:text-[10px] uppercase tracking-widest leading-relaxed">
                {member.title}
              </p>
            </motion.div>
          </div>

          {/* Bottom Bio & Interaction Section */}
          <motion.div
            className="p-6 relative bg-gradient-to-b from-[#120906] to-[#0a0503]"
            style={{ transform: 'translateZ(20px)' }}
          >
            <p className="text-white/60 text-sm leading-relaxed font-light line-clamp-2 group-hover:text-white/80 transition-colors duration-300 mb-5 relative z-10">
              {member.shortBio}
            </p>

            <div className="flex items-center justify-between relative z-10">
              <div className="flex flex-wrap gap-2"></div>

              {/* Animated Arrow Button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full border border-brand-tan/20 flex items-center justify-center text-brand-tan/50 group-hover:border-brand-tan group-hover:text-brand-tan group-hover:bg-brand-tan/10 transition-all duration-300 flex-shrink-0 relative overflow-hidden"
              >
                <motion.svg
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                  className="relative z-10"
                  animate={{ x: isActive ? 2 : 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── Staggered Details Modal ─────────────────────────── */
const modalVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } }
};

const MemberModal = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 lg:p-8 bg-[#0a0503]/90"
        onClick={onClose}
      >
        <style>{`
          .custom-scrollbar-modal::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scrollbar-modal::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.02);
            border-radius: 8px;
          }
          .custom-scrollbar-modal::-webkit-scrollbar-thumb {
            background: rgba(215, 204, 200, 0.15);
            border-radius: 8px;
          }
          .custom-scrollbar-modal::-webkit-scrollbar-thumb:hover {
            background: rgba(215, 204, 200, 0.3);
          }
        `}</style>
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_0_100px_rgba(141,110,99,0.15)] bg-gradient-to-br from-[#1c100a] to-[#0a0503] flex flex-col md:flex-row"
        >
          {/* Decorative Top/Bottom Glow */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-tan/30 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-tan/10 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 md:top-8 md:right-8 z-50 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300 backdrop-blur-md group"
          >
            <motion.svg
              width="14" height="14" viewBox="0 0 14 14" fill="none"
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </motion.svg>
          </button>

          {/* Left Image Panel */}
          <div className="w-full md:w-[45%] relative h-[35vh] md:h-auto md:min-h-full shrink-0 bg-[#0a0503]">
            <motion.div
              className="w-full h-full absolute inset-0 overflow-hidden"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0503] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-[#0a0503]/50 md:to-[#0a0503]" />
              <div className="absolute inset-0  mix-blend-overlay opacity-30" style={{ backgroundImage: 'radial-gradient(circle, #D7CCC8 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            </motion.div>

            {/* Index removed */}
          </div>

          {/* Right Content Panel */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            data-lenis-prevent="true"
            className="w-full md:w-[55%] flex-1 p-8 md:p-10 lg:p-14 flex flex-col justify-start relative z-10 overflow-y-auto overflow-x-hidden custom-scrollbar-modal font-sans max-h-[90vh]"
          >
            {/* Role removed */}

            <motion.h2 variants={itemVariants} className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-2 leading-[1.1]">
              {member.name}
            </motion.h2>

            <motion.p variants={itemVariants} className="font-mono text-brand-tan/60 text-xs md:text-sm uppercase tracking-widest mb-8 md:mb-10 text-brand-accent">
              {member.title}
            </motion.p>

            <motion.div variants={itemVariants} className="h-px w-24 bg-gradient-to-r from-brand-tan/50 to-transparent mb-8 md:mb-10" />

            <motion.div variants={itemVariants} className="space-y-6 text-white/70 text-sm md:text-base leading-relaxed font-light mb-10 pb-4">
              {member.bio.split('\n\n').map((para, i) => (
                <p key={i} className="first-letter:text-2xl first-letter:font-display first-letter:text-brand-tan/80">{para}</p>
              ))}
            </motion.div>

            {/* Tags section removed */}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ─── Main Section ────────────────────────────────────── */
const TeamMembersSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const sectionRef = useRef(null);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative overflow-hidden py-10"
        style={{
          background: 'radial-gradient(100% 150% at 50% 0%, #1e0f08 0%, #0a0503 100%)',
        }}
      >
        {/* ── Immersive Background VFX ── */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full mix-blend-screen opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(141,110,99,0.15) 0%, transparent 60%)' }}
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-[-30%] right-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-screen opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(215,204,200,0.1) 0%, transparent 60%)' }}
          />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\"20\\" height=\\"20\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Ccircle cx=\\"2\\" cy=\\"2\\" r=\\"1\\" fill=\\"%23fff\\"/%3E%3C/svg%3E")' }} />
        </div>

        {/* ── Section Header ── */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-12 md:pb-16">
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 md:gap-12">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="h-[2px] w-12 bg-gradient-to-r from-brand-tan to-transparent" />
                <span className="font-mono text-xs uppercase tracking-[0.4em] text-brand-tan/80 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-brand-tan to-brand-tan/50">
                  Leadership & Experts
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] text-white leading-[1.05]"
              >
                Meet the <span className="italic text-brand-tan relative inline-block">
                  Visionaries
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-brand-tan/30 origin-left"
                  />
                </span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/40 text-base md:text-lg font-light leading-relaxed max-w-md xl:text-right font-sans"
            >
              Our distinguished collective of <span className="text-white/70">scholars</span>, <span className="text-white/70">archaeologists</span>, and <span className="text-white/70">heritage conservationists</span> dedicated to unearthing true stories.
            </motion.p>
          </div>
        </div>

        {/* ── Floating Cards Strip (Visionaries) ── */}
        <div className="relative z-10 pb-16 md:pb-20 w-full">
          <div className="pb-12 pt-8 px-6 md:px-12 w-full max-w-[1600px] mx-auto">
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 items-stretch mx-auto">
              {visionaries.map((member, i) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: (i % 3) * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full sm:w-auto flex justify-center"
                >
                  <MemberCard
                    member={member}
                    onClick={setSelectedMember}
                    isActive={selectedMember?.id === member.id}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Section Header (Advisory Board) ── */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-12 md:pt-16 pb-12 md:pb-16 border-t border-white/5">
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 md:gap-12">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="h-[2px] w-12 bg-gradient-to-r from-brand-tan to-transparent" />
                <span className="font-mono text-xs uppercase tracking-[0.4em] text-brand-tan/80 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-brand-tan to-brand-tan/50">
                  Expert Guidance
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] text-white leading-[1.05]"
              >
                Advisory <span className="italic text-brand-tan relative inline-block">
                  Board
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-brand-tan/30 origin-left"
                  />
                </span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/40 text-base md:text-lg font-light leading-relaxed max-w-md xl:text-right font-sans"
            >
              Our esteemed advisors bring decades of expertise in culture, tourism, and strategic leadership.
            </motion.p>
          </div>
        </div>

        {/* ── Floating Cards Strip (Advisory Board) ── */}
        <div className="relative z-10 pb-24 md:pb-32 w-full">
          <div className="pb-12 pt-8 px-6 md:px-12 w-full max-w-[1600px] mx-auto">
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 items-stretch mx-auto">
              {advisors.map((member, i) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: (i % 3) * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full sm:w-auto flex justify-center"
                >
                  <MemberCard
                    member={member}
                    onClick={setSelectedMember}
                    isActive={selectedMember?.id === member.id}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ── Member Detail Modal Overlay ── */}
      {selectedMember && (
        <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
      )}
    </>
  );
};

export default TeamMembersSection;
