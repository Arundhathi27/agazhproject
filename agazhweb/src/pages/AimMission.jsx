import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const digImg = '/images/archaeology_dig_team_1768911719447.png';
const templeImg = '/images/hero_temple_ruins_1768917098837.png';
const artifactImg = '/images/ancient_artifact_hands_1768911747714.png';
const workshopImg = '/images/pottery_workshop_students_1768911974461.png';
const excavationImg = '/images/excavation_hands_1768917147028.png';

/* ── stat pills shown in AIM section ── */
const stats = [
    { value: '2024', label: 'Founded' },
    { value: '100+', label: 'Field Sessions' },
    { value: '3+', label: 'Heritage Trails' },
    { value: '500+', label: 'Learners Reached' },
];

/* ── mission data ── */
const missionData = [
    {
        category: 'Academic & Research',
        icon: '📚',
        emoji: '🎓',
        color: 'from-brand-brown to-brand-dark',
        accent: '#A0856C',
        textColor: 'text-white',
        img: workshopImg,
        items: [
            'To deliver first hand, experiential learning in archaeology and history through workshops, field trips that bridge classroom learning with real-world application.',
            'To inspire intellectual curiosity and foster critical thinking among the next generation, empowering learners capable of questioning, exploring and contributing meaningfully to archaeology, history and society.',
            'To identify and document unexplored archaeological sites and monuments.',
        ],
    },
    {
        category: 'Tourism',
        icon: '🗺️',
        emoji: '🏛️',
        color: 'from-brand-tan to-brand-accent',
        accent: '#C8A882',
        textColor: 'text-brand-dark',
        img: templeImg,
        items: [
            'Develop heritage trails, archaeological site visits and cultural tours, that allows people to experience history first-hand.',
            'Design Edu-Tourism concepts to students, that combine travel with structured educational experiences.',
            'To Educate tourists on the significance of archaeological sites and monuments and the importance of respecting them.',
        ],
    },
    {
        category: 'Social Awareness',
        icon: '🌍',
        emoji: '✊',
        color: 'from-brand-accent to-brand-brown',
        accent: '#8D6748',
        textColor: 'text-white',
        img: digImg,
        items: [
            'To promote awareness through campaigns, exhibitions, and outreach programmes that ensure heritage remains accessible, valued and protected for future generation.',
            "To advance awareness of education's importance in shaping lives, ensuring its reach extends to communities that have long remained undeserved.",
        ],
    },
];

/* ── Mission Tab Card ── */
const MissionTab = ({ item, index, active, onSelect }) => {
    const isActive = active === index;
    return (
        <motion.button
            onClick={() => onSelect(index)}
            className={`relative text-left w-full rounded-2xl p-5 sm:p-6 border-2 transition-all duration-500 overflow-hidden ${isActive
                    ? 'border-brand-brown bg-brand-dark shadow-2xl'
                    : 'border-brand-brown/20 bg-white hover:border-brand-brown/50 hover:shadow-lg'
                }`}
            whileHover={{ scale: isActive ? 1 : 1.01 }}
            whileTap={{ scale: 0.99 }}
        >
            <div className="flex items-center gap-4 relative z-10">
                <motion.span
                    animate={isActive ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                    transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                    className="text-3xl sm:text-4xl flex-shrink-0"
                >
                    {item.icon}
                </motion.span>
                <div className="flex-1">
                    <span className={`font-mono text-[10px] uppercase tracking-widest block mb-0.5 ${isActive ? 'text-brand-tan/70' : 'text-brand-brown/60'}`}>
                        Mission Focus
                    </span>
                    <h3 className={`font-display text-xl sm:text-2xl leading-tight ${isActive ? 'text-white' : 'text-brand-dark'}`}>
                        {item.category}
                    </h3>
                </div>
                <motion.div
                    animate={{ x: isActive ? 0 : -6, opacity: isActive ? 1 : 0.3 }}
                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${isActive ? 'bg-brand-tan' : 'bg-brand-brown/20'}`}
                >
                    <span className={`text-xs font-bold ${isActive ? 'text-brand-dark' : 'text-brand-brown'}`}>→</span>
                </motion.div>
            </div>
            {isActive && (
                <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-br from-brand-dark to-brand-brown/80 -z-0 rounded-2xl"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
            )}
        </motion.button>
    );
};

const AimMission = () => {
    const containerRef = useRef(null);
    const [activeTab, setActiveTab] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });
    const parallaxY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

    return (
        <section
            id="aim-mission"
            ref={containerRef}
            className="relative bg-white overflow-hidden"
        >
            {/* ══════════════════════════════════════════
          AIM SECTION — Split editorial panel
      ══════════════════════════════════════════ */}
            <div className="relative py-16 sm:py-24 md:py-32">

                {/* Subtle dot grid */}
                <div className="absolute inset-0 opacity-[0.025]" style={{
                    backgroundImage: 'radial-gradient(circle, #5D4037 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }} />

                {/* Ambient orb */}
                <motion.div
                    animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/8 rounded-full blur-3xl pointer-events-none"
                />

                <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[600px]">

                        {/* LEFT — Image stack */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="relative h-[350px] sm:h-[450px] lg:h-auto lg:min-h-[620px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
                        >
                            {/* Parallax image */}
                            <motion.img
                                src={digImg}
                                alt="Archaeology dig team"
                                className="absolute inset-0 w-full h-full object-cover object-center scale-110"
                                style={{ y: parallaxY }}
                            />

                            {/* Dark gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent" />

                            {/* Small artifact inset image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.7 }}
                                viewport={{ once: true }}
                                className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8"
                            >
                                <div className="flex items-end gap-4">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 border-white/30 shadow-xl flex-shrink-0">
                                        <img src={artifactImg} alt="Ancient artifact" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:p-4 flex-1">
                                        <span className="font-mono text-[10px] uppercase tracking-widest text-white/60 block mb-1">Our Aim</span>
                                        <p className="font-display text-white text-sm sm:text-base italic leading-snug">
                                            "Honouring the past,<br />empowering the present"
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Animated corner dots */}
                            {[['top-4 left-4'], ['top-4 right-4']].map((pos, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ scale: [1, 1.6, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.8 }}
                                    className={`absolute ${pos[0]} w-2 h-2 rounded-full bg-brand-tan/60`}
                                />
                            ))}
                        </motion.div>

                        {/* RIGHT — Text content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex flex-col justify-center lg:pl-12 xl:pl-16 pt-10 lg:pt-0"
                        >
                            {/* Tag */}
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.25 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 sm:gap-3 bg-brand-light shadow-lg rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 w-fit"
                            >
                                <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-brand-brown">Our Aim</span>
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
                                    Honouring the
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="block text-brand-brown italic"
                                >
                                    Past
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

                            {/* Body text */}
                            <div className="space-y-4 sm:space-y-5 mb-10 sm:mb-12">
                                <motion.p
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.55, duration: 0.7 }}
                                    viewport={{ once: true }}
                                    className="text-brand-dark/80 text-base sm:text-lg md:text-xl leading-relaxed"
                                >
                                    We as an <span className="font-bold text-brand-brown">optimistic organisation</span> aim to honour the past and empower the present by{' '}
                                    <span className="font-semibold text-brand-accent">preserving history, advancing archaeology, nurturing language and culture, and promoting social well-being</span>.
                                    Education stands at the heart of our mission - through first-hand learning, research, and community engagement, we strive to inspire curiosity, foster critical thinking, and create meaningful connections with heritage.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.65, duration: 0.7 }}
                                    viewport={{ once: true }}
                                    className="text-brand-dark/70 text-sm sm:text-base md:text-lg leading-relaxed"
                                >
                                    Guided by <span className="font-semibold text-brand-dark">collaboration and inclusivity</span>, our organization seeks to grow as a collective force for knowledge, heritage, and sustainable progress.
                                </motion.p>
                            </div>

                            {/* Stats row */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                                {stats.map((s, i) => (
                                    <motion.div
                                        key={s.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 + i * 0.1, duration: 0.6 }}
                                        viewport={{ once: true }}
                                        className="bg-brand-light rounded-xl p-3 sm:p-4 text-center border border-brand-brown/10"
                                    >
                                        <span className="font-display text-xl sm:text-2xl text-brand-brown block mb-0.5">{s.value}</span>
                                        <span className="font-mono text-[10px] uppercase tracking-widest text-brand-dark/50">{s.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════════
          VISION SECTION — Dark immersive banner
      ══════════════════════════════════════════ */}
            <div className="relative overflow-hidden">
                {/* Full-bleed image layer */}
                <div className="absolute inset-0">
                    <img
                        src={templeImg}
                        alt="Heritage temple"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-brand-dark/30" />
                </div>

                {/* Orbiting decorative ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                    className="absolute right-8 sm:right-16 top-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 rounded-full border border-white/5 hidden md:block"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    className="absolute right-8 sm:right-16 top-1/2 -translate-y-1/2 w-44 h-44 sm:w-64 sm:h-64 rounded-full border border-brand-tan/10 hidden md:block"
                />

                {/* Content */}
                <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12 py-20 sm:py-28 md:py-36">
                    <div className="max-w-3xl">

                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-8 sm:mb-10"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-2 h-2 rounded-full bg-brand-tan"
                            />
                            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-white/80">Our Vision</span>
                        </motion.div>

                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-white leading-tight mb-6 sm:mb-8">
                            <motion.span
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                viewport={{ once: true }}
                                className="block"
                            >
                                A Pioneering
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.45, duration: 0.8 }}
                                viewport={{ once: true }}
                                className="block text-brand-tan italic"
                            >
                                Centre of Learning
                            </motion.span>
                        </h2>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ delay: 0.55, duration: 0.9 }}
                            viewport={{ once: true }}
                            className="h-[2px] w-28 sm:w-36 bg-gradient-to-r from-brand-tan to-transparent mb-8 sm:mb-10"
                            style={{ transformOrigin: 'left' }}
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-white/80 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed"
                        >
                            To be a <span className="font-bold text-brand-tan">pioneering centre of learning</span> that advances archaeology through education and research, inspiring{' '}
                            <span className="font-semibold text-white">respect for the past and responsibility for the future</span>.
                        </motion.p>

                        {/* Animated quote mark */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mt-10 sm:mt-12 flex items-center gap-4 sm:gap-6"
                        >
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-brand-tan/40 flex-shrink-0">
                                <img src={excavationImg} alt="Excavation" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="text-brand-tan font-display italic text-sm sm:text-base">"We dig deeper — into the soil, and the story."</p>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 mt-1 block">Agazhavaiyam Foundation</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════════
          MISSION SECTION — Interactive tab layout
      ══════════════════════════════════════════ */}
            <div className="relative py-16 sm:py-24 md:py-32 bg-brand-light overflow-hidden">

                {/* Background texture */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'radial-gradient(circle at 30% 70%, #5D4037 1px, transparent 1px), radial-gradient(circle at 70% 30%, #795548 1px, transparent 1px)',
                    backgroundSize: '50px 50px, 80px 80px',
                }} />

                <motion.div
                    animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-20 left-10 w-80 h-80 bg-brand-brown/6 rounded-full blur-3xl pointer-events-none"
                />

                <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16 md:mb-20"
                    >
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 sm:gap-3 bg-white shadow-lg rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
                        >
                            <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-brand-brown">What We Do</span>
                        </motion.div>

                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-brand-dark leading-tight mb-4 sm:mb-6">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                                className="block"
                            >
                                Our
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                                className="block text-brand-brown italic"
                            >
                                Mission
                            </motion.span>
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="h-1.5 sm:h-2 w-24 sm:w-32 bg-gradient-to-r from-brand-brown via-brand-accent to-brand-tan mx-auto rounded-full"
                        />
                    </motion.div>

                    {/* Tab + Panel layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 items-start">

                        {/* Left: Tab list */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2 space-y-4"
                        >
                            {missionData.map((item, index) => (
                                <MissionTab
                                    key={index}
                                    item={item}
                                    index={index}
                                    active={activeTab}
                                    onSelect={setActiveTab}
                                />
                            ))}
                        </motion.div>

                        {/* Right: Active panel */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3"
                        >
                            <AnimatePresence mode="wait">
                                {missionData.map((item, index) =>
                                    activeTab === index ? (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 24 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -24 }}
                                            transition={{ duration: 0.45, ease: 'easeOut' }}
                                            className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
                                        >
                                            {/* Image header */}
                                            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                                                <img
                                                    src={item.img}
                                                    alt={item.category}
                                                    className="w-full h-full object-cover object-center scale-105"
                                                />
                                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80`} />
                                                <div className="absolute inset-0 flex items-end p-6 sm:p-8">
                                                    <div>
                                                        <span className={`font-mono text-[10px] uppercase tracking-widest block mb-1 ${item.textColor === 'text-white' ? 'text-white/60' : 'text-brand-dark/60'}`}>
                                                            Mission Focus
                                                        </span>
                                                        <h3 className={`font-display text-3xl sm:text-4xl md:text-5xl ${item.textColor}`}>
                                                            {item.category}
                                                        </h3>
                                                    </div>
                                                </div>
                                                {/* Animated gradient sweep on activation */}
                                                <motion.div
                                                    initial={{ x: '-100%' }}
                                                    animate={{ x: '200%' }}
                                                    transition={{ duration: 0.8, ease: 'easeOut' }}
                                                    className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="bg-white p-6 sm:p-8 md:p-10">
                                                <div className="space-y-4 sm:space-y-5">
                                                    {item.items.map((point, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            initial={{ opacity: 0, x: -16 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.1 + idx * 0.12, duration: 0.5 }}
                                                            className="flex gap-4 items-start"
                                                        >
                                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-brown/10 border border-brand-brown/20 flex items-center justify-center mt-0.5">
                                                                <span className="text-brand-brown text-xs font-bold">{idx + 1}</span>
                                                            </div>
                                                            <p className="text-brand-dark/75 text-sm sm:text-base leading-relaxed flex-1">
                                                                {point}
                                                            </p>
                                                        </motion.div>
                                                    ))}
                                                </div>

                                                {/* Bottom accent bar */}
                                                <motion.div
                                                    initial={{ scaleX: 0 }}
                                                    animate={{ scaleX: 1 }}
                                                    transition={{ delay: 0.5, duration: 0.7 }}
                                                    className={`h-1 mt-8 rounded-full bg-gradient-to-r ${item.color}`}
                                                    style={{ transformOrigin: 'left' }}
                                                />
                                            </div>
                                        </motion.div>
                                    ) : null
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AimMission;
