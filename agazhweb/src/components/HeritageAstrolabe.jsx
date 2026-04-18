import React from 'react';
import { motion } from 'framer-motion';

/**
 * HeritageAstrolabe
 * A multi-layer ancient astrolabe/compass animation.
 *  – Outer graduated ring with 36 tick marks (every 10°)
 *  – Middle calibration ring rotating opposite direction
 *  – Inner static crosshair with N/S/E/W labels
 *  – Animated needle that sweeps gently back and forth
 *  – Pulsing centre orb
 * All pure CSS 3D + Framer Motion, no external lib needed.
 */

const TICK_COUNT = 36; // one tick per 10°

const Astrolabe = () => {
  const size = 320;
  const cx = size / 2;
  const cy = size / 2;

  /* ── Outer tick marks ── */
  const ticks = Array.from({ length: TICK_COUNT }, (_, i) => {
    const angleDeg = (i * 360) / TICK_COUNT;
    const angleRad = (angleDeg * Math.PI) / 180;
    const r1 = 148; // outer edge
    const r2 = i % 3 === 0 ? 130 : 140; // major vs minor tick
    const x1 = cx + r1 * Math.sin(angleRad);
    const y1 = cy - r1 * Math.cos(angleRad);
    const x2 = cx + r2 * Math.sin(angleRad);
    const y2 = cy - r2 * Math.cos(angleRad);
    return { x1, y1, x2, y2, major: i % 3 === 0, angle: angleDeg };
  });

  /* ── Cardinal labels ── */
  const cardinals = [
    { label: 'N', angleDeg: 0   },
    { label: 'E', angleDeg: 90  },
    { label: 'S', angleDeg: 180 },
    { label: 'W', angleDeg: 270 },
  ].map(({ label, angleDeg }) => {
    const r = 112;
    const rad = (angleDeg * Math.PI) / 180;
    return { label, x: cx + r * Math.sin(rad), y: cy - r * Math.cos(rad) };
  });

  return (
    <div
      className="relative select-none pointer-events-none"
      style={{ width: size, height: size }}
    >
      {/* ── Outer ring glow pulse ── */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.04, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          boxShadow: '0 0 40px 10px rgba(141,110,99,0.25)',
        }}
      />

      {/* ── Outer graduated ring (CSS rotate) ── */}
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        {/* Outer circle border */}
        <circle
          cx={cx} cy={cy} r={152}
          fill="none"
          stroke="rgba(215,204,200,0.25)"
          strokeWidth="1.5"
        />
        <circle
          cx={cx} cy={cy} r={126}
          fill="none"
          stroke="rgba(141,110,99,0.2)"
          strokeWidth="0.8"
        />

        {/* Tick marks */}
        {ticks.map((t, i) => (
          <line
            key={i}
            x1={t.x1} y1={t.y1}
            x2={t.x2} y2={t.y2}
            stroke={t.major ? 'rgba(215,204,200,0.7)' : 'rgba(215,204,200,0.3)'}
            strokeWidth={t.major ? 1.5 : 0.8}
          />
        ))}
      </motion.svg>

      {/* ── Middle calibration ring (counter-rotate) ── */}
      <motion.svg
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        {/* Dashed ring */}
        <circle
          cx={cx} cy={cy} r={98}
          fill="none"
          stroke="rgba(141,110,99,0.35)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        {/* 4 diamond markers */}
        {[0, 90, 180, 270].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const r = 98;
          const x = cx + r * Math.sin(rad);
          const y = cy - r * Math.cos(rad);
          return (
            <g key={i} transform={`translate(${x},${y}) rotate(${deg})`}>
              <rect x={-4} y={-4} width={8} height={8}
                fill="rgba(141,110,99,0.6)"
                transform="rotate(45)"
              />
            </g>
          );
        })}
      </motion.svg>

      {/* ── Static SVG: crosshair + cardinal labels ── */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        {/* Crosshair lines */}
        <line x1={cx} y1={cy - 88} x2={cx} y2={cy + 88}
          stroke="rgba(215,204,200,0.12)" strokeWidth="1" />
        <line x1={cx - 88} y1={cy} x2={cx + 88} y2={cy}
          stroke="rgba(215,204,200,0.12)" strokeWidth="1" />

        {/* Cardinal labels */}
        {cardinals.map(({ label, x, y }) => (
          <text
            key={label}
            x={x} y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="9"
            fill="rgba(215,204,200,0.55)"
            fontFamily="'Cinzel Decorative', serif"
            letterSpacing="1"
          >
            {label}
          </text>
        ))}

        {/* Inner filled circle */}
        <circle cx={cx} cy={cy} r={28}
          fill="rgba(62,39,35,0.8)"
          stroke="rgba(141,110,99,0.4)"
          strokeWidth="1.5"
        />
      </svg>

      {/* ── Animated needle ── */}
      <motion.svg
        animate={{ rotate: [-18, 18, -18] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          transformOrigin: `${cx}px ${cy}px`,
        }}
      >
        {/* North tip (brand-tan, longer) */}
        <polygon
          points={`${cx},${cy - 78} ${cx - 5},${cy} ${cx + 5},${cy}`}
          fill="rgba(215,204,200,0.85)"
        />
        {/* South tip (brand-accent, shorter) */}
        <polygon
          points={`${cx},${cy + 46} ${cx - 4},${cy} ${cx + 4},${cy}`}
          fill="rgba(141,110,99,0.6)"
        />
        {/* Pivot cap */}
        <circle cx={cx} cy={cy} r={6}
          fill="rgba(215,204,200,0.9)"
          stroke="rgba(93,64,55,0.5)"
          strokeWidth="1.5"
        />
      </motion.svg>

      {/* ── Pulsing centre orb ── */}
      <motion.div
        animate={{ scale: [1, 1.35, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          left: cx - 5,
          top: cy - 5,
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: '#D7CCC8',
          boxShadow: '0 0 12px 4px rgba(215,204,200,0.7)',
        }}
      />

      {/* ── Outer accent ring (very slow) ── */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          inset: -6,
          borderRadius: '50%',
          border: '1px dashed rgba(215,204,200,0.1)',
        }}
      />
    </div>
  );
};

export default Astrolabe;
