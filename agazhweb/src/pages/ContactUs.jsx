import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import emailjs from '@emailjs/browser';
import ConnectOrb from '../components/ConnectOrb';

const ContactUs = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || 'Not provided',
      message: formData.message,
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    })
    .catch((err) => {
      console.error('EmailJS Error:', err);
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    });
  };

  return (
    <section ref={container} id="contactus" className="relative min-h-screen bg-brand-dark overflow-hidden">

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 right-0 w-[600px] h-[600px] bg-brand-brown/40 rounded-full blur-[120px] pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 -left-64 w-[700px] h-[700px] bg-brand-accent/20 rounded-full blur-[150px] pointer-events-none"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20">

        {/* ── HEADER WITH CONNECT ORB ── */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-8 sm:mb-12 md:mb-16">
           <motion.div
             style={{ y }}
             className="flex-1"
           >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                   <div className="h-[1px] w-12 bg-brand-tan/50" />
                   <span className="text-brand-tan font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em]">
                     Get In Touch
                   </span>
                </div>
                
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-display text-white leading-[1.0] mb-4">
                  LET'S DIG<br />
                  <span className="block text-brand-tan italic -mt-2 sm:-mt-4 relative left-8 sm:left-16 md:left-24 lg:left-32">
                    DEEPER.
                  </span>
                </h2>
                
                <p className="text-white/60 text-base sm:text-lg lg:text-xl max-w-xl font-light leading-relaxed mt-8 bg-brand-dark/50 backdrop-blur-sm p-4 border-l-2 border-brand-tan/30 rounded-r-lg inline-block">
                  Have questions about our programs or want to collaborate? We'd love to hear from you. Drop your query below.
                </p>
              </motion.div>
           </motion.div>

           {/* The New Animated Orb Component */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.2, delay: 0.3 }}
             viewport={{ once: true }}
             className="flex justify-center md:justify-end shrink-0 hidden sm:flex"
           >
              <ConnectOrb />
           </motion.div>
        </div>

        {/* ── 2-COLUMN MAIN CONTENT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 mb-10 sm:mb-12 md:mb-20">

          {/* LEFT: Premium Editorial Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            {/* Asymmetrical Premium Container */}
            <div className="relative bg-[#3A241B]/30 backdrop-blur-md rounded-t-[60px] rounded-br-[60px] rounded-bl-2xl p-8 sm:p-12 md:p-14 shadow-2xl group border-[0.5px] border-brand-tan/20">
              
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-tan/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              <div className="mb-10 relative z-10 flex items-center justify-between">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-display text-white mb-2">Send a Message</h3>
                  <p className="text-brand-tan/60 text-sm font-mono uppercase tracking-widest mt-2">Connect with the Team</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-brand-tan/20 flex items-center justify-center shrink-0 hidden sm:flex text-brand-tan">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10">
                
                {/* Sleek Input Fields */}
                <div className="group/input relative flex flex-col gap-1">
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required 
                    value={formData.name} 
                    onChange={handleInputChange}
                    className="peer w-full bg-transparent border-b border-brand-tan/20 text-white pb-3 pt-4 focus:outline-none focus:border-brand-tan transition-colors placeholder-transparent font-light"
                    placeholder="Full Name"
                  />
                  <label htmlFor="name" className="absolute left-0 -top-2 text-brand-tan/50 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-brand-tan">
                    Full Name
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="group/input relative flex flex-col gap-1">
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required 
                      value={formData.email} 
                      onChange={handleInputChange}
                      className="peer w-full bg-transparent border-b border-brand-tan/20 text-white pb-3 pt-4 focus:outline-none focus:border-brand-tan transition-colors placeholder-transparent font-light"
                      placeholder="Email Address"
                    />
                    <label htmlFor="email" className="absolute left-0 -top-2 text-brand-tan/50 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-brand-tan">
                      Email Address
                    </label>
                  </div>
                  <div className="group/input relative flex flex-col gap-1">
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone} 
                      onChange={handleInputChange}
                      className="peer w-full bg-transparent border-b border-brand-tan/20 text-white pb-3 pt-4 focus:outline-none focus:border-brand-tan transition-colors placeholder-transparent font-light"
                      placeholder="Mobile Number"
                    />
                    <label htmlFor="phone" className="absolute left-0 -top-2 text-brand-tan/50 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-brand-tan">
                      Mobile No (Optional)
                    </label>
                  </div>
                </div>

                <div className="group/input relative flex flex-col gap-1 mt-2">
                  <textarea 
                    id="message"
                    name="message"
                    required 
                    rows="3"
                    value={formData.message} 
                    onChange={handleInputChange}
                    className="peer w-full bg-transparent border-b border-brand-tan/20 text-white pb-2 pt-6 focus:outline-none focus:border-brand-tan transition-colors placeholder-transparent font-light resize-none"
                    placeholder="Your Message..."
                  />
                  <label htmlFor="message" className="absolute left-0 top-0 text-brand-tan/50 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-tan">
                    Your Message
                  </label>
                </div>

                {/* Submit Rounded Button */}
                <div className="mt-8">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full relative overflow-hidden rounded-full py-4 sm:py-5 border flex items-center justify-center font-mono uppercase tracking-widest text-[10px] sm:text-xs transition-all duration-300 ${
                      submitStatus === 'success' 
                      ? 'bg-transparent border-green-500/50 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.1)]'
                      : submitStatus === 'error'
                      ? 'bg-transparent border-red-500/50 text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.1)]'
                      : 'bg-brand-tan/10 hover:bg-brand-tan hover:text-brand-dark border-brand-tan/30 text-brand-tan shadow-lg'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-3">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Transmitting...
                      </span>
                    ) : submitStatus === 'success' ? (
                      <span className="flex items-center gap-2">
                        Message Sent Successfully
                      </span>
                    ) : submitStatus === 'error' ? (
                      <span className="flex items-center gap-2">
                        Failed to Send
                      </span>
                    ) : (
                      "Submit Query"
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* RIGHT: Elegant List-Style Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col mt-4 lg:mt-0"
          >
            {/* The List */}
            <div className="flex flex-col border-t border-brand-tan/10">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.label === "Instagram" ? "_blank" : undefined}
                  rel={method.label === "Instagram" ? "noreferrer" : undefined}
                  className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 py-6 sm:py-8 border-b border-brand-tan/10 cursor-pointer overflow-hidden relative"
                >
                  {/* Subtle hover background sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-tan/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                  
                  <div className="w-12 h-12 shrink-0 rounded-full border border-brand-tan/20 flex items-center justify-center text-xl text-brand-tan/80 group-hover:bg-brand-tan group-hover:text-brand-dark transition-all duration-500 shadow-inner">
                    {method.icon}
                  </div>
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 z-10">
                    <div>
                      <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-mono block mb-1">
                        {method.label}
                      </span>
                      <h4 className="text-white text-lg sm:text-xl font-light group-hover:text-brand-tan transition-colors">
                        {method.value}
                      </h4>
                    </div>
                    {/* Arrow Icon */}
                    <div className="hidden sm:block text-brand-tan opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                         <line x1="5" y1="12" x2="19" y2="12"></line>
                         <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Asymmetrical Quote Box */}
            <div className="relative bg-brand-dark border-l border-brand-tan/30 pl-6 sm:pl-8 py-6 mt-12 sm:mt-16 group">
              <div className="absolute -left-[1px] top-6 w-[2px] h-12 bg-brand-tan transition-all duration-500 group-hover:h-full group-hover:top-0" />
              <div className="relative z-10">
                <span className="text-brand-tan/50 font-mono text-[10px] uppercase tracking-[0.3em] mb-4 block">
                  Tamil Nadu, Region
                </span>
                <h3 className="text-white text-2xl sm:text-3xl font-display mb-4">
                  Where History Meets <br className="hidden sm:block" />
                  <span className="text-brand-tan italic pr-2">Innovation</span>
                </h3>
                <p className="text-white/40 text-xs sm:text-sm leading-relaxed font-light">
                  "Join us in preserving the past while building a future where archaeology, education, and cultural heritage thrive together."
                </p>
              </div>
            </div>
            
          </motion.div>
          
        </div>

        {/* ── FOOTER ── */}
        <div className="pt-8 border-t border-brand-tan/10">
           <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
             <div className="text-center sm:text-left">
               <p className="text-brand-tan font-display text-xl sm:text-2xl mb-1 tracking-wide">Agazh Avaiyam</p>
               <p className="text-white/30 text-xs font-light">© {new Date().getFullYear()} All Rights Reserved.</p>
             </div>

             <motion.button
               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
               whileHover={{ y: -4 }}
               whileTap={{ scale: 0.95 }}
               className="flex items-center gap-3 px-6 py-3"
             >
               <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-brand-tan/70 hover:text-brand-tan transition-colors">Back to Top</span>
               <div className="w-8 h-8 rounded-full border border-brand-tan/30 flex items-center justify-center text-brand-tan">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                   <line x1="12" y1="19" x2="12" y2="5"></line>
                   <polyline points="5 12 12 5 19 12"></polyline>
                 </svg>
               </div>
             </motion.button>
           </div>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
