import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const offeringsData = [
    {
        title: "Field-Based Learning",
        icon: "🎓",
        description: "Move beyond traditional classrooms and bring textbook chapters to life through engaging field experiences. Students will connect what they learn in their lessons with real-world by exploring heritage sites, participating in mini-excavations, and engaging in hands-on activities. This approach makes learning fun, interactive, and memorable while sharpening analytical and observational skills.",
        gradient: "from-brand-brown to-brand-accent"
    },
    {
        title: "Hands-On Workshops",
        icon: "🛠️",
        description: "Engage in immersive workshops that bring history, archaeology, and traditional art practices to life. Participants will explore ancient techniques, experiment with time-honored crafts, and interact directly with material culture from the past. These field-based experiences foster curiosity, creativity, and critical insights, offering a deeper appreciation of heritage and historical traditions.",
        gradient: "from-brand-tan to-brand-accent"
    },
    {
        title: "Expert-Led Tours",
        icon: "👨‍🏫",
        description: "Experience historical and cultural sites through the eyes of our passionate experts. Our wonderful team doesn't just guide you—they weave stories, share hidden details, and bring the past alive in ways that make every site a living narrative. These tours offer rich insights into history and heritage, making each journey memorable and meaningful.",
        gradient: "from-brand-dark to-brand-brown"
    }
];

const OfferingCard = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative"
        >
            <div className={`relative h-full min-h-[450px] sm:min-h-[500px] bg-gradient-to-br ${item.gradient} rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden flex flex-col ${item.gradient.includes('dark') ? 'text-white' : 'text-brand-dark'}`}>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}
                />

                {/* Animated Icon */}
                <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 relative z-10 ${item.gradient.includes('dark')
                            ? 'bg-white/10 backdrop-blur-md border-2 border-white/20'
                            : 'bg-white/50 backdrop-blur-md border-2 border-white/40'
                        } shadow-xl`}
                >
                    <span className="text-4xl sm:text-5xl">{item.icon}</span>
                </motion.div>

                {/* Title */}
                <div className="mb-4 sm:mb-6 relative z-10">
                    <h3 className={`text-2xl sm:text-3xl md:text-4xl font-display leading-tight mb-3 sm:mb-4 ${item.gradient.includes('dark') ? 'text-white' : 'text-brand-dark'
                        }`}>
                        {item.title}
                    </h3>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-1 sm:h-1.5 w-16 sm:w-20 rounded-full ${item.gradient.includes('dark') ? 'bg-brand-tan' : 'bg-brand-brown'
                            }`}
                    />
                </div>

                {/* Description */}
                <p className={`text-sm sm:text-base leading-relaxed flex-1 relative z-10 ${item.gradient.includes('dark') ? 'text-white/85' : 'text-brand-dark/80'
                    }`}>
                    {item.description}
                </p>

                {/* Decorative Corner Element */}
                <motion.div
                    className={`absolute bottom-0 right-0 w-32 h-32 rounded-tl-full transform translate-x-16 translate-y-16 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-500 ${item.gradient.includes('dark') ? 'bg-white/5' : 'bg-white/30'
                        }`}
                />
            </div>
        </motion.div>
    );
};

const WhatWeOffer = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section
            id="what-we-offer"
            ref={containerRef}
            className="relative bg-brand-light overflow-hidden py-16 sm:py-24 md:py-32"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%235D4037'/%3E%3C/svg%3E")`
                }}
            />

            {/* Floating Gradient Orb */}
            <motion.div
                animate={{
                    x: [0, -80, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.3, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-40 left-20 w-96 h-96 bg-gradient-radial from-brand-accent/15 to-transparent rounded-full blur-3xl hidden lg:block"
            />

            <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12">

                {/* Section Header */}
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
                        <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-brand-brown">What We Offer</span>
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-brand-dark leading-tight mb-4 sm:mb-6">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="block"
                        >
                            Transformative
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                            className="block text-brand-brown italic"
                        >
                            Experiences
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

                {/* Offerings Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                    {offeringsData.map((item, index) => (
                        <OfferingCard key={index} item={item} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhatWeOffer;
