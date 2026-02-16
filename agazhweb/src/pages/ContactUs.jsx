import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ContactUs = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  const contactMethods = [
    {
      icon: "📞",
      label: "Phone",
      value: "+91 93618 61147",
      href: "tel:+919361861147",
      detail: "Mon-Sat, 9AM-6PM"
    },
    {
      icon: "✉️",
      label: "Email",
      value: "agazhavaiyam.org@gmail.com",
      href: "mailto:agazhavaiyam.org@gmail.com",
      detail: "We'll respond within 24 hours"
    },
    {
      icon: "📱",
      label: "Instagram",
      value: "@agazhavaiyam",
      href: "https://instagram.com/agazhavaiyam",
      detail: "Follow our journey"
    }
  ];

  return (
    <section ref={container} id="contactus" className="relative min-h-screen bg-brand-dark overflow-hidden">

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs - Hidden on mobile */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 -left-48 w-96 h-96 bg-brand-brown rounded-full blur-3xl hidden lg:block"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-brand-accent rounded-full blur-3xl hidden lg:block"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D7CCC8' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-32">

        {/* Header Section - Mobile Optimized */}
        <motion.div
          style={{ y }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-tan/60 font-mono text-xs sm:text-sm uppercase tracking-wider sm:tracking-[0.3em] mb-4 sm:mb-6 block">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-brand-tan leading-[0.9] mb-6 sm:mb-8">
              LET'S DIG<br />
              <span className="text-white/90">DEEPER</span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed px-4">
              Have questions about our programs or want to collaborate? We'd love to hear from you.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Methods - Mobile Optimized Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target={method.label === "Instagram" ? "_blank" : undefined}
              rel={method.label === "Instagram" ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white/10 hover:border-brand-tan/30 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-tan/0 to-brand-accent/0 group-hover:from-brand-tan/5 group-hover:to-brand-accent/5 transition-all duration-500"></div>

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="text-4xl sm:text-5xl mb-3 sm:mb-4"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {method.icon}
                </motion.div>

                {/* Label */}
                <span className="text-brand-tan/60 text-[10px] sm:text-xs uppercase tracking-widest font-mono mb-2 block">
                  {method.label}
                </span>

                {/* Value */}
                <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-display mb-2 group-hover:text-brand-tan transition-colors break-words">
                  {method.value}
                </h3>

                {/* Detail */}
                <p className="text-white/40 text-xs sm:text-sm">
                  {method.detail}
                </p>

                {/* Arrow Icon - Hidden on mobile */}
                <motion.div
                  className="absolute top-6 sm:top-8 right-6 sm:right-8 text-brand-tan/0 group-hover:text-brand-tan transition-colors hidden sm:block"
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Location / Quote Section - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-brand-brown/20 to-brand-accent/10 border border-brand-tan/20 rounded-xl sm:rounded-2xl p-6 sm:p-10 md:p-16 mb-8 sm:mb-12 overflow-hidden"
        >
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-brand-tan/5 rounded-bl-full"></div>

          <div className="relative z-10 max-w-3xl">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="text-4xl sm:text-5xl md:text-6xl">🏛️</div>
              <div className="flex-1">
                <span className="text-brand-tan font-mono text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest mb-2 block">
                  Based in Tamil Nadu
                </span>
                <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-display mb-3 sm:mb-4">
                  Where History Meets Innovation
                </h3>
                <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed italic">
                  "Join us in preserving the past while building a future where archaeology, education, and cultural heritage thrive together."
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Animated Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-brand-tan/30 to-transparent mb-8 sm:mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* Footer - Mobile Optimized */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="text-center sm:text-left">
            <p className="text-brand-tan font-display text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2">Agazh Avaiyam</p>
            <p className="text-white/40 text-xs sm:text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>
          </div>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 sm:gap-3 bg-brand-tan/10 hover:bg-brand-tan/20 border border-brand-tan/30 hover:border-brand-tan text-brand-tan px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300"
          >
            <span className="text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest font-mono">Back to Top</span>
            <motion.svg
              className="w-3 h-3 sm:w-4 sm:h-4"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </motion.svg>
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
