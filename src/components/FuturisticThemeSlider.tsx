import { useEffect, useState, useRef } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const FuturisticThemeSlider = () => {
  const [mounted, setMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0);
  const { theme, setTheme } = useTheme();
  const sliderRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const currentPositionRef = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Set initial position based on theme
    setPosition(theme === 'dark' ? 1 : 0);
  }, [theme, mounted]);

  const handleDragStart = (clientX: number) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    startXRef.current = clientX;
    currentPositionRef.current = position;
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging || !sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const deltaX = clientX - startXRef.current;
    const deltaPosition = deltaX / rect.width;
    const newPosition = Math.max(0, Math.min(1, currentPositionRef.current + deltaPosition));
    setPosition(newPosition);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    // Snap to nearest side and set theme
    if (position > 0.5) {
      setPosition(1);
      setTheme('dark');
    } else {
      setPosition(0);
      setTheme('navy');
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    handleDragMove(e.clientX);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleDragEnd);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleDragEnd);
      };
    }
  }, [isDragging, position]);

  if (!mounted) return null;

  const isDark = position > 0.5;

  return (
    <div className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[280px] px-4">
      <div 
        ref={sliderRef}
        className="relative w-full h-12 rounded-full bg-black/90 backdrop-blur-md border-2 border-border/50 p-1.5 flex items-center shadow-lg select-none"
        style={{
          boxShadow: isDark 
            ? '0 0 20px rgba(239, 68, 68, 0.3)' 
            : '0 0 20px rgba(6, 182, 212, 0.3)',
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
        onMouseDown={handleMouseDown}
      >
        {/* Track with glowing effect */}
        <div className="absolute inset-1.5 rounded-full overflow-hidden">
          <div 
            className="absolute inset-0 transition-all duration-300"
            style={{
              background: isDark 
                ? 'linear-gradient(90deg, transparent 50%, rgba(239, 68, 68, 0.15) 100%)'
                : 'linear-gradient(90deg, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
            }}
          />
        </div>

        {/* Left Icon - Blue/Light */}
        <div className={`absolute left-3 z-10 transition-all duration-300 ${
          !isDark ? 'text-cyan-500 scale-100' : 'text-muted-foreground/40 scale-90'
        }`}>
          <Sun className="w-5 h-5" style={{
            filter: !isDark ? 'drop-shadow(0 0 6px #06b6d4)' : 'none'
          }} />
        </div>

        {/* Right Icon - Red/Dark */}
        <div className={`absolute right-3 z-10 transition-all duration-300 ${
          isDark ? 'text-red-500 scale-100' : 'text-muted-foreground/40 scale-90'
        }`}>
          <Moon className="w-5 h-5" style={{
            filter: isDark ? 'drop-shadow(0 0 6px #ef4444)' : 'none'
          }} />
        </div>

        {/* Slider Knob */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 w-9 h-9 rounded-full transition-all ease-out z-20 pointer-events-none"
          style={{
            left: `calc(${position * 100}% - ${position * 2.25}rem + 0.25rem)`,
            transitionDuration: isDragging ? '0ms' : '500ms',
            background: isDark 
              ? 'radial-gradient(circle, #ef4444, #b91c1c)'
              : 'radial-gradient(circle, #06b6d4, #0891b2)',
            boxShadow: isDark
              ? '0 0 25px #ef4444, 0 0 45px #ef444470, inset 0 0 12px rgba(255, 255, 255, 0.4)'
              : '0 0 25px #06b6d4, 0 0 45px #06b6d470, inset 0 0 12px rgba(255, 255, 255, 0.4)',
            border: '2px solid rgba(255, 255, 255, 0.6)',
          }}
        >
          {/* Center glow pulse */}
          <div 
            className="absolute inset-0 rounded-full animate-pulse"
            style={{
              background: isDark
                ? 'radial-gradient(circle, rgba(239, 68, 68, 0.6), transparent 70%)'
                : 'radial-gradient(circle, rgba(6, 182, 212, 0.6), transparent 70%)',
            }}
          />
        </div>

        {/* Trail effect */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 h-1.5 rounded-full transition-all opacity-50"
          style={{
            left: '0.5rem',
            width: `calc(${position * 100}% - ${position * 2.25}rem)`,
            transitionDuration: isDragging ? '0ms' : '500ms',
            background: isDark
              ? 'linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.4))'
              : 'linear-gradient(90deg, rgba(6, 182, 212, 0.4), transparent)',
          }}
        />
      </div>
    </div>
  );
};

export default FuturisticThemeSlider;
