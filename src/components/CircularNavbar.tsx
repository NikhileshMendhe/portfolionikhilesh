import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { Sparkles } from 'lucide-react';

interface CircularNavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  sections: { id: string; label: string }[];
}

const CircularNavbar = ({ activeSection, onNavigate, sections }: CircularNavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const navRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const startAngleRef = useRef(0);
  const currentRotationRef = useRef(0);
  const lastSoundTimeRef = useRef(0);

  useEffect(() => {
    setMounted(true);
    // Create audio element for Omnitrix sound
    audioRef.current = new Audio('/ben10_omnitrix.mp3');
    audioRef.current.volume = 0.3;
  }, []);

  const playScrollSound = () => {
    const now = Date.now();
    // Debounce: only play sound if 150ms has passed since last sound
    if (audioRef.current && now - lastSoundTimeRef.current > 150) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        // Ignore autoplay errors
      });
      lastSoundTimeRef.current = now;
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!navRef.current) return;
    setIsDragging(true);
    const rect = navRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const touch = e.touches[0];
    startAngleRef.current = Math.atan2(touch.clientY - centerY, touch.clientX - centerX) * (180 / Math.PI);
    currentRotationRef.current = rotation;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !navRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const touch = e.touches[0];
    const currentAngle = Math.atan2(touch.clientY - centerY, touch.clientX - centerX) * (180 / Math.PI);
    const deltaAngle = currentAngle - startAngleRef.current;
    const newRotation = currentRotationRef.current + deltaAngle;
    
    setRotation(newRotation);
    
    // Play sound on rotation
    if (Math.abs(deltaAngle) > 5) {
      playScrollSound();
      startAngleRef.current = currentAngle;
      currentRotationRef.current = newRotation;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!navRef.current) return;
    setIsDragging(true);
    const rect = navRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    startAngleRef.current = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
    currentRotationRef.current = rotation;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !navRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const currentAngle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
    const deltaAngle = currentAngle - startAngleRef.current;
    const newRotation = currentRotationRef.current + deltaAngle;
    
    setRotation(newRotation);
    
    if (Math.abs(deltaAngle) > 5) {
      playScrollSound();
      startAngleRef.current = currentAngle;
      currentRotationRef.current = newRotation;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    
    // Create cinematic scroll animation
    const targetElement = document.getElementById(sectionId);
    if (!targetElement) return;

    // Create neon beam effect
    const beam = document.createElement('div');
    beam.style.position = 'fixed';
    beam.style.top = '0';
    beam.style.left = '50%';
    beam.style.transform = 'translateX(-50%)';
    beam.style.width = '4px';
    beam.style.height = '0';
    beam.style.background = theme === 'dark' 
      ? 'linear-gradient(180deg, #ef4444, transparent)'
      : 'linear-gradient(180deg, #06b6d4, transparent)';
    beam.style.boxShadow = theme === 'dark'
      ? '0 0 20px #ef4444, 0 0 40px #ef4444'
      : '0 0 20px #06b6d4, 0 0 40px #06b6d4';
    beam.style.zIndex = '9999';
    beam.style.pointerEvents = 'none';
    beam.style.transition = 'height 1s ease-out';
    document.body.appendChild(beam);

    // Animate beam
    setTimeout(() => {
      beam.style.height = '100vh';
    }, 10);

    // Scroll with smooth animation
    setTimeout(() => {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Add glow to section heading
      const heading = targetElement.querySelector('h2, h3');
      if (heading) {
        heading.classList.add('animate-pulse');
        setTimeout(() => {
          heading.classList.remove('animate-pulse');
        }, 2000);
      }
    }, 500);

    // Remove beam
    setTimeout(() => {
      beam.style.opacity = '0';
      beam.style.transition = 'opacity 0.5s ease-out';
      setTimeout(() => {
        document.body.removeChild(beam);
      }, 500);
    }, 1200);

    onNavigate(sectionId);
  };

  if (!mounted) return null;

  const glowColor = theme === 'dark' ? '#ef4444' : '#06b6d4';
  const angleStep = 360 / sections.length;

  return (
    <>
      {/* Toggle Button - Fixed at bottom center */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 p-4 rounded-full transition-all duration-500 ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
        style={{
          background: `radial-gradient(circle, ${glowColor}30, transparent)`,
          boxShadow: `0 0 30px ${glowColor}80, inset 0 0 20px ${glowColor}40`,
          border: `2px solid ${glowColor}`,
        }}
        aria-label="Open navigation wheel"
      >
        <Sparkles className="w-6 h-6 text-primary animate-pulse" />
      </button>

      {/* Circular Navigation Wheel */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          background: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div
          ref={navRef}
          className="relative w-80 h-80 transition-transform duration-300 ease-out select-none"
          style={{
            transform: `rotate(${rotation}deg)`,
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
        >
          {/* Outer Circle Glow */}
          <div
            className="absolute inset-0 rounded-full animate-pulse"
            style={{
              boxShadow: `0 0 40px ${glowColor}, 0 0 80px ${glowColor}60, inset 0 0 40px ${glowColor}30`,
              border: `3px solid ${glowColor}`,
            }}
          />

          {/* Navigation Items */}
          {sections.map((section, index) => {
            const angle = (index * angleStep - 90) * (Math.PI / 180);
            const radius = 120;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const isActive = activeSection === section.id;

            return (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={`absolute w-24 h-16 flex items-center justify-center text-xs font-medium rounded-lg transition-all duration-300 ${
                  isActive ? 'scale-110 z-10' : 'scale-100'
                }`}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${-rotation}deg)`,
                  background: isActive
                    ? `linear-gradient(135deg, ${glowColor}40, ${glowColor}20)`
                    : `rgba(0, 0, 0, 0.6)`,
                  border: `2px solid ${isActive ? glowColor : `${glowColor}60`}`,
                  boxShadow: isActive
                    ? `0 0 20px ${glowColor}, 0 0 40px ${glowColor}80, inset 0 0 10px ${glowColor}40`
                    : `0 0 10px ${glowColor}40`,
                  color: isActive ? glowColor : '#fff',
                  textShadow: isActive ? `0 0 10px ${glowColor}` : 'none',
                }}
              >
                {section.label}
              </button>
            );
          })}

          {/* Center Sun/Star Icon */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center z-20"
            style={{
              background: `radial-gradient(circle, ${glowColor}, ${glowColor}80)`,
              boxShadow: `0 0 30px ${glowColor}, 0 0 60px ${glowColor}80, inset 0 0 20px rgba(255, 255, 255, 0.5)`,
              border: `3px solid rgba(255, 255, 255, 0.8)`,
            }}
            aria-label="Close navigation"
          >
            <Sparkles 
              className="w-8 h-8 text-white animate-pulse" 
              style={{ 
                transform: `rotate(${-rotation}deg)`,
                filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))'
              }} 
            />
          </button>

          {/* Inner Circle */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full"
            style={{
              border: `2px solid ${glowColor}80`,
              boxShadow: `0 0 20px ${glowColor}60, inset 0 0 20px ${glowColor}30`,
            }}
          />
        </div>

        {/* Hint Text */}
        <div className="absolute bottom-24 text-center text-sm text-muted-foreground">
          <p className="animate-pulse">Swipe to rotate • Tap to navigate</p>
        </div>
      </div>
    </>
  );
};

export default CircularNavbar;
