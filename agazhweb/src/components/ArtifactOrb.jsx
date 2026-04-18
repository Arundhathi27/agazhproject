import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * ArtifactOrb — A CSS-3D animated heritage artifact:
 *  - Three tilted orbiting rings on different axes
 *  - A rotating 8-faceted crystal (octahedron-like) in the centre
 *  - Ambient floating dust particles
 */
const ArtifactOrb = () => {
  return (
    <div
      className="relative flex items-center justify-center select-none pointer-events-none"
      style={{ width: 340, height: 340, perspective: '800px' }}
    >
      {/* ── Ambient glow behind the orb ── */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute rounded-full bg-brand-accent/20 blur-3xl"
        style={{ width: 220, height: 220 }}
      />

      {/* ── Outer Ring (tilted X 70°) ── */}
      <motion.div
        animate={{ rotateZ: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          width: 280,
          height: 280,
          borderRadius: '50%',
          border: '1.5px solid rgba(215,204,200,0.25)',
          transformStyle: 'preserve-3d',
          transform: 'rotateX(70deg)',
        }}
      >
        {/* Dot on outer ring */}
        <div style={{
          position: 'absolute',
          top: -5,
          left: '50%',
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: '#D7CCC8',
          transform: 'translateX(-50%)',
          boxShadow: '0 0 8px 2px rgba(215,204,200,0.6)',
        }} />
      </motion.div>

      {/* ── Middle Ring (tilted X 50°, rotateY 45°) ── */}
      <motion.div
        animate={{ rotateZ: -360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          width: 200,
          height: 200,
          borderRadius: '50%',
          border: '1px solid rgba(141,110,99,0.4)',
          transformStyle: 'preserve-3d',
          transform: 'rotateX(50deg) rotateY(45deg)',
        }}
      >
        {/* Dot on middle ring */}
        <div style={{
          position: 'absolute',
          bottom: -5,
          left: '50%',
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#8D6E63',
          transform: 'translateX(-50%)',
          boxShadow: '0 0 8px 2px rgba(141,110,99,0.7)',
        }} />
      </motion.div>

      {/* ── Inner Ring (tilted X 20°, rotateY 80°) ── */}
      <motion.div
        animate={{ rotateZ: 360 }}
        transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          width: 130,
          height: 130,
          borderRadius: '50%',
          border: '1px solid rgba(215,204,200,0.18)',
          transformStyle: 'preserve-3d',
          transform: 'rotateX(20deg) rotateY(80deg)',
        }}
      />

      {/* ── CSS 3D Crystal (spinning octahedron-style) ── */}
      <motion.div
        animate={{ rotateY: 360, rotateX: [10, -10, 10] }}
        transition={{
          rotateY: { duration: 9, repeat: Infinity, ease: 'linear' },
          rotateX: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{
          position: 'absolute',
          width: 72,
          height: 72,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Top pyramid — 4 triangular faces */}
        {[0, 90, 180, 270].map((rot, i) => (
          <div
            key={`top-${i}`}
            style={{
              position: 'absolute',
              width: 0,
              height: 0,
              left: '50%',
              top: '50%',
              borderLeft: '36px solid transparent',
              borderRight: '36px solid transparent',
              borderBottom: `62px solid ${i % 2 === 0
                ? 'rgba(215,204,200,0.18)'
                : 'rgba(141,110,99,0.26)'}`,
              transform: `translateX(-50%) translateY(-100%) rotateY(${rot}deg) translateZ(36px)`,
              transformOrigin: 'bottom center',
              filter: 'drop-shadow(0 0 4px rgba(215,204,200,0.3))',
            }}
          />
        ))}
        {/* Bottom pyramid */}
        {[0, 90, 180, 270].map((rot, i) => (
          <div
            key={`bot-${i}`}
            style={{
              position: 'absolute',
              width: 0,
              height: 0,
              left: '50%',
              top: '50%',
              borderLeft: '36px solid transparent',
              borderRight: '36px solid transparent',
              borderTop: `62px solid ${i % 2 === 0
                ? 'rgba(93,64,55,0.35)'
                : 'rgba(141,110,99,0.22)'}`,
              transform: `translateX(-50%) rotateY(${rot + 45}deg) translateZ(36px)`,
              transformOrigin: 'top center',
            }}
          />
        ))}
      </motion.div>

      {/* ── Floating sparkle particles ── */}
      {[
        { x: -130, y: -90,  size: 3,  dur: 3.2, delay: 0   },
        { x:  120, y: -110, size: 2,  dur: 4.5, delay: 0.8 },
        { x: -100, y:  100, size: 4,  dur: 3.8, delay: 1.2 },
        { x:  130, y:   80, size: 2.5,dur: 5,   delay: 0.4 },
        { x:    0, y: -145, size: 3,  dur: 4,   delay: 1.6 },
        { x:  -60, y:  130, size: 2,  dur: 3.5, delay: 2   },
        { x:   80, y:  130, size: 3,  dur: 4.2, delay: 0.2 },
      ].map((p, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0, 1, 0],
            y: [p.y, p.y - 14, p.y],
            scale: [0.6, 1, 0.6],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: '#D7CCC8',
            transform: `translate(${p.x}px, ${p.y}px)`,
            boxShadow: `0 0 6px 1px rgba(215,204,200,0.8)`,
          }}
        />
      ))}
    </div>
  );
};

export default ArtifactOrb;
