import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
const heritageImg = `${import.meta.env.BASE_URL}images/heritage_walk_team_1768917192614.png`;
const workshopImg = `${import.meta.env.BASE_URL}images/excavation_hands_1768917147028.png`;
const careerImg = `${import.meta.env.BASE_URL}images/career_guidance_1768917220575.png`;

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

export default Events;
