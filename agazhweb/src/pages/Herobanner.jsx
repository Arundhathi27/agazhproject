import React from 'react';
import herobannerImg from '../Images/herobanner.png';
import image from '../Images/image.png';

const AnimatedText = ({ text, className, tag: Tag = 'p', baseDelay = 0 }) => {
  return (
    <Tag className={`${className} flex flex-wrap justify-center`}>
      {text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
           {word.split('').map((char, charIndex) => (
             <span
               key={charIndex}
               className="inline-block animate-char"
                // Calculate global index approximation for delay smoothness
               style={{ 
                 animationDelay: `${baseDelay + (wordIndex * 5 + charIndex) * 0.05}s` 
               }}
             >
               {char}
             </span>
           ))}
           {/* Add space after word unless it's the last one */}
           <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </Tag>
  );
};

const Herobanner = () => {

  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseMove = (e) => {
    if (!isHovering) setIsHovering(true);
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    // Calculate mouse position relative to center of the element (-1 to 1)
    const x = (clientX - left - width / 2) / (width / 2);
    const y = (clientY - top - height / 2) / (height / 2);
    
    // Tilt strength (max rotation in degrees)
    const tiltStrength = 5;
    
    // Calculate and set rotation values directly
    setTilt({ 
      x: -y * tiltStrength, 
      y: x * tiltStrength 
    });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center text-center bg-brand-dark"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      // Add touch support roughly mapping to move
      onTouchMove={(e) => {
         const touch = e.touches[0];
         handleMouseMove({ ...touch, currentTarget: e.currentTarget });
      }}
      onTouchEnd={handleMouseLeave}
    >
      
      {/* Background Image - Scale slightly for drama */}
      <div 
        className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform ease-out origin-center will-change-transform ${isHovering ? 'duration-100' : 'duration-700'}`}
        style={{ 
            backgroundImage: `url(${image})`,
            // Apply scale AND tilt to background
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.1, 1.1, 1.1)`
        }}
      >
        {/* Simplified Overlay - Dark gradient from top for Navbar blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-transparent to-brand-dark/40"></div> 
      </div>

      {/* Content - Funky Typography */}
      {/* Add a slight parallax to content too for depth (inverse direction or slower), BUT NO SCALE */}
      <div 
        className={`relative z-10 px-4 max-w-5xl mx-auto text-white mt-16 transition-transform ease-out ${isHovering ? 'duration-100' : 'duration-700'}`}
        style={{
            // Apply half tilt to text for depth, explicitly force scale(1) to prevent inheritance or zoom
            transform: `perspective(1000px) rotateX(${tilt.x / 2}deg) rotateY(${tilt.y / 2}deg) scale3d(1, 1, 1)`
        }}
      >
        <AnimatedText 
            tag="h1"
            className="text-6xl md:text-8xl font-display text-brand-light mb-6 drop-shadow-2xl tracking-tight"
            text="AGAZH AVAIYAM"
            baseDelay={0}
        />
        
        <div className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_1s_forwards]">
            <div className="h-0.5 w-24 bg-brand-tan/60"></div>
        </div>

        <AnimatedText 
            tag="p"
            className="text-xl md:text-3xl font-sans font-light tracking-widest text-brand-tan uppercase mb-8 drop-shadow-lg"
            text="A Centre for Archaeological Excellence"
            baseDelay={0.8}
        />
        
        <AnimatedText 
            tag="p"
            className="text-lg md:text-xl italic font-serif text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg mb-16"
            text="&quot;The echoes of the past that whispers revelation through voices of the present in guiding every step towards the future&quot;"
            baseDelay={2.5}
        />

        {/* Flashing Down Arrow */}
        <div className="animate-bounce">
            <a href="#aboutus" className="text-white hover:text-brand-tan transition-colors">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Herobanner;