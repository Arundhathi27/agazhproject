import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const faqs = [
  {
    question: "What is Agazh Avaiyam?",
    answer: "Agazh Avaiyam is an MCA-registered organization specializing in education, heritage tourism, and research. Backed by a multidisciplinary team of scholars and humanities practitioners, we partner with schools to promote academically grounded, experiential heritage education in Tamil Nadu."
  },
  {
    question: "What programs does Agazh Avaiyam offer?",
    answer: "We offer heritage education and cultural programs including field-based learning at archaeological sites, hands-on workshops with pottery making, seal design, and simulated excavations, plus expert-led heritage tours through historical monuments across Tamil Nadu."
  },
  {
    question: "Who can participate in Agazh Avaiyam programs?",
    answer: "Our programs are designed for three audiences: Schools (curated heritage walks and interactive workshops for young minds), Colleges (in-depth field explorations and career guidance in archaeology), and Lay Audience (engaging community events and heritage tourism for enthusiasts)."
  }
];

const FAQItem = ({ faq, index, activeIndex, setActiveIndex }) => {
  const isActive = activeIndex === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="border-b border-brand-tan/10 last:border-b-0"
    >
      <button
        onClick={() => setActiveIndex(isActive ? null : index)}
        className="w-full py-6 sm:py-8 flex items-center justify-between gap-6 text-left group"
      >
        <div className="flex items-center gap-6 sm:gap-8">
          <span className="font-mono text-xs text-brand-tan/40 group-hover:text-brand-tan transition-colors">
            0{index + 1}
          </span>
          <h3 className={`font-display text-xl sm:text-2xl lg:text-3xl transition-colors duration-300 ${isActive ? 'text-brand-tan' : 'text-white group-hover:text-white/80'}`}>
            {faq.question}
          </h3>
        </div>
        <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
          <div className={`w-8 h-[1px] bg-brand-tan transition-transform duration-500 ${isActive ? 'rotate-180' : 'rotate-0'}`} />
          <div className={`absolute w-[1px] h-8 bg-brand-tan transition-transform duration-500 ${isActive ? 'rotate-90 opacity-0' : 'rotate-0'}`} />
        </div>
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-10 sm:pl-14">
              <div className="pl-6 border-l border-brand-tan/30">
                <p className="text-white/60 text-base sm:text-lg leading-relaxed font-light">
                  {faq.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="relative py-24 sm:py-32 bg-brand-dark overflow-hidden border-t border-brand-tan/10">
      {/* Decorative Texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #D7CCC8 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <motion.div
        style={{ y: parallaxY }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"
      />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-brown/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

        {/* Left Column - Editorial Intro */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-brand-tan/50" />
              <span className="text-brand-tan font-mono uppercase text-[10px] sm:text-xs tracking-[0.3em]">
                Discover More
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-display text-white leading-[1.1] mb-8">
              Frequently <br />
              <span className="italic text-brand-tan">Asked</span>
              <br />Questions
            </h2>

            <p className="text-white/60 text-lg leading-relaxed font-light mb-12 max-w-md">
              Everything you need to know about our archaeological programs, heritage tours, and educational initiatives across Tamil Nadu.
            </p>

            <div className="relative w-32 h-32 hidden lg:flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-brand-tan/20 border-dashed"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 rounded-full border border-brand-tan/10"
              />
              <div className="font-display italic text-3xl text-brand-tan/50">?</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Accordion Items */}
        <div className="lg:col-span-7">
          <div className="border-t border-brand-tan/10">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5"
          >
            <p className="text-white/60 text-sm font-light">
              Still have questions? We're here to help.
            </p>
            <a
              href="#contactus"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contactus')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-brand-tan uppercase text-[10px] tracking-widest font-mono hover:text-white transition-colors"
            >
              Contact Us →
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
