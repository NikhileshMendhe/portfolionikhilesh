import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const MovingBackground = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle mouse tracking to smooth percentage
      const x = Math.round((e.clientX / window.innerWidth) * 100);
      const y = Math.round((e.clientY / window.innerHeight) * 100);
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const isLight = !mounted || theme === 'light' || !theme;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 w-full max-w-[100vw] select-none">
      {/* 1. Interactive Cursor Ambient Spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
        style={{
          background: isLight
            ? `radial-gradient(750px circle at ${mousePos.x}% ${mousePos.y}%, rgba(37, 99, 235, 0.07) 0%, rgba(6, 182, 212, 0.03) 45%, transparent 75%)`
            : `radial-gradient(700px circle at ${mousePos.x}% ${mousePos.y}%, rgba(59, 130, 246, 0.12) 0%, rgba(6, 182, 212, 0.05) 50%, transparent 80%)`,
        }}
      />

      {/* 2. Precision Blueprint Grid & Dot Matrix Layer (SVG) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
        style={{
          maskImage: 'radial-gradient(ellipse 90% 85% at 50% 35%, black 45%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at 50% 35%, black 45%, transparent 95%)',
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* 60px x 60px Engineering Grid */}
          <pattern id="prof-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            {/* Grid square border */}
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke={isLight ? 'rgba(37, 99, 235, 0.045)' : 'rgba(147, 197, 253, 0.06)'}
              strokeWidth="1"
            />
            {/* Micro Dot in center */}
            <circle
              cx="30"
              cy="30"
              r="1"
              fill={isLight ? 'rgba(6, 182, 212, 0.18)' : 'rgba(6, 182, 212, 0.25)'}
            />
          </pattern>

          {/* 180px Major Section with Crosshairs */}
          <pattern id="prof-major-cross" width="180" height="180" patternUnits="userSpaceOnUse">
            <path
              d="M 90 84 L 90 96 M 84 90 L 96 90"
              fill="none"
              stroke={isLight ? 'rgba(37, 99, 235, 0.18)' : 'rgba(56, 189, 248, 0.25)'}
              strokeWidth="1.2"
            />
            <circle
              cx="90"
              cy="90"
              r="1.5"
              fill={isLight ? 'rgba(37, 99, 235, 0.3)' : 'rgba(56, 189, 248, 0.4)'}
            />
          </pattern>

          {/* Linear Gradient for Performance Curve */}
          <linearGradient id="curve-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1d4ed8" stopOpacity={isLight ? '0.2' : '0.4'} />
            <stop offset="50%" stopColor="#2563eb" stopOpacity={isLight ? '0.45' : '0.6'} />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity={isLight ? '0.7' : '0.9'} />
          </linearGradient>

          <linearGradient id="area-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity={isLight ? '0.08' : '0.12'} />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Base Grid */}
        <rect width="100%" height="100%" fill="url(#prof-grid)" />
        {/* Major Crosshairs */}
        <rect width="100%" height="100%" fill="url(#prof-major-cross)" />
      </svg>

      {/* 3. Luminous Multi-Layer Aurora & Ambient Mesh Orbs */}
      {/* Orb 1: Top Right (Hero background) */}
      <div
        className="absolute -top-32 -right-32 w-[650px] h-[650px] rounded-full blur-[90px] animate-orb-1 pointer-events-none transition-all duration-1000"
        style={{
          background: isLight
            ? 'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(59, 130, 246, 0.04) 50%, transparent 75%)'
            : 'radial-gradient(circle, rgba(37, 99, 235, 0.20) 0%, rgba(59, 130, 246, 0.08) 55%, transparent 75%)',
        }}
      />

      {/* Orb 2: Top Left (Title accent) */}
      <div
        className="absolute top-1/4 -left-32 w-[550px] h-[550px] rounded-full blur-[85px] animate-orb-2 pointer-events-none transition-all duration-1000"
        style={{
          background: isLight
            ? 'radial-gradient(circle, rgba(6, 182, 212, 0.10) 0%, rgba(14, 165, 233, 0.03) 50%, transparent 75%)'
            : 'radial-gradient(circle, rgba(6, 182, 212, 0.18) 0%, rgba(14, 165, 233, 0.06) 55%, transparent 75%)',
        }}
      />

      {/* Orb 3: Center Right (Case studies & proof) */}
      <div
        className="absolute top-1/2 -right-28 w-[620px] h-[620px] rounded-full blur-[95px] animate-orb-3 pointer-events-none transition-all duration-1000"
        style={{
          background: isLight
            ? 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(59, 130, 246, 0.02) 50%, transparent 75%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.16) 0%, rgba(59, 130, 246, 0.05) 55%, transparent 75%)',
        }}
      />

      {/* Orb 4: Lower Left (Stats & Skills) */}
      <div
        className="absolute bottom-1/4 -left-20 w-[520px] h-[520px] rounded-full blur-[80px] animate-orb-1 pointer-events-none transition-all duration-1000"
        style={{
          background: isLight
            ? 'radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, rgba(6, 182, 212, 0.02) 50%, transparent 75%)'
            : 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, rgba(6, 182, 212, 0.05) 55%, transparent 75%)',
        }}
      />

      {/* Orb 5: Bottom Center (Contact area) */}
      <div
        className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[720px] h-[450px] rounded-full blur-[100px] animate-orb-2 pointer-events-none transition-all duration-1000"
        style={{
          background: isLight
            ? 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, rgba(6, 182, 212, 0.03) 60%, transparent 80%)'
            : 'radial-gradient(circle, rgba(37, 99, 235, 0.16) 0%, rgba(6, 182, 212, 0.06) 60%, transparent 80%)',
        }}
      />

      {/* 4. Performance Marketing Growth Curve (SVG vector etched into background) */}
      <div className="absolute top-16 right-4 sm:right-12 lg:right-24 w-72 sm:w-96 lg:w-[480px] h-48 lg:h-64 pointer-events-none opacity-60 dark:opacity-40">
        <svg viewBox="0 0 400 200" className="w-full h-full overflow-visible">
          {/* Subtle horizontal grid lines */}
          <line x1="0" y1="50" x2="400" y2="50" stroke={isLight ? 'rgba(37, 99, 235, 0.06)' : 'rgba(255, 255, 255, 0.05)'} strokeDasharray="3 3" />
          <line x1="0" y1="100" x2="400" y2="100" stroke={isLight ? 'rgba(37, 99, 235, 0.06)' : 'rgba(255, 255, 255, 0.05)'} strokeDasharray="3 3" />
          <line x1="0" y1="150" x2="400" y2="150" stroke={isLight ? 'rgba(37, 99, 235, 0.06)' : 'rgba(255, 255, 255, 0.05)'} strokeDasharray="3 3" />

          {/* Area fill under curve */}
          <path
            d="M 10 180 Q 110 170, 190 125 T 320 60 T 390 20 L 390 190 L 10 190 Z"
            fill="url(#area-gradient)"
          />

          {/* Exponential Growth Curve */}
          <path
            d="M 10 180 Q 110 170, 190 125 T 320 60 T 390 20"
            fill="none"
            stroke="url(#curve-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Milestone Data Points */}
          <g>
            <circle cx="110" cy="170" r="4" fill="#2563eb" className="animate-pulse" />
            <circle cx="110" cy="170" r="8" fill="none" stroke="#2563eb" strokeWidth="1" opacity="0.4" />
          </g>
          <g>
            <circle cx="190" cy="125" r="4.5" fill="#2563eb" className="animate-pulse" />
            <circle cx="190" cy="125" r="9" fill="none" stroke="#2563eb" strokeWidth="1" opacity="0.4" />
          </g>
          <g>
            <circle cx="320" cy="60" r="5" fill="#06b6d4" className="animate-pulse" />
            <circle cx="320" cy="60" r="10" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.5" />
          </g>
          <g>
            <circle cx="390" cy="20" r="5.5" fill="#06b6d4" />
            <circle cx="390" cy="20" r="12" fill="none" stroke="#06b6d4" strokeWidth="1.5" className="animate-ping" opacity="0.4" />
          </g>
        </svg>
      </div>

      {/* 5. Subtle Ambient Floating Glass Geometric Shapes (Non-intrusive) */}
      {/* Card 1 */}
      <div
        className="absolute top-[18%] left-[12%] w-24 h-24 rounded-2xl pointer-events-none animate-float-slow transition-all duration-700"
        style={{
          background: isLight
            ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(239, 246, 255, 0.4) 100%)'
            : 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.2) 100%)',
          border: isLight ? '1px solid rgba(37, 99, 235, 0.14)' : '1px solid rgba(59, 130, 246, 0.2)',
          boxShadow: isLight ? '0 10px 30px -10px rgba(37, 99, 235, 0.08)' : 'none',
          backdropFilter: 'blur(6px)',
          transform: 'rotate(-8deg)',
        }}
      />

      {/* Card 2 */}
      <div
        className="absolute top-[48%] right-[8%] w-28 h-28 rounded-3xl pointer-events-none animate-float transition-all duration-700"
        style={{
          background: isLight
            ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(240, 253, 250, 0.3) 100%)'
            : 'linear-gradient(135deg, rgba(30, 41, 59, 0.3) 0%, rgba(15, 23, 42, 0.2) 100%)',
          border: isLight ? '1px solid rgba(6, 182, 212, 0.16)' : '1px solid rgba(6, 182, 212, 0.2)',
          boxShadow: isLight ? '0 10px 30px -10px rgba(6, 182, 212, 0.08)' : 'none',
          backdropFilter: 'blur(6px)',
          transform: 'rotate(12deg)',
        }}
      />

      {/* Card 3 */}
      <div
        className="absolute top-[82%] right-[18%] w-20 h-20 rounded-2xl pointer-events-none animate-float-slow transition-all duration-700"
        style={{
          background: isLight
            ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(238, 242, 255, 0.4) 100%)'
            : 'linear-gradient(135deg, rgba(30, 41, 59, 0.3) 0%, rgba(15, 23, 42, 0.2) 100%)',
          border: isLight ? '1px solid rgba(99, 102, 241, 0.14)' : '1px solid rgba(99, 102, 241, 0.2)',
          boxShadow: isLight ? '0 10px 30px -10px rgba(99, 102, 241, 0.08)' : 'none',
          backdropFilter: 'blur(6px)',
          transform: 'rotate(-6deg)',
        }}
      />
    </div>
  );
};

export default MovingBackground;
