import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const FuturisticThemeSlider = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <div className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[280px] px-4">
      <div className="relative w-full h-12 rounded-full bg-black/90 backdrop-blur-md border-2 border-border/50 p-1.5 flex items-center shadow-lg"
        style={{
          boxShadow: isDark 
            ? '0 0 20px rgba(239, 68, 68, 0.3)' 
            : '0 0 20px rgba(6, 182, 212, 0.3)'
        }}
      >
        {/* Track with glowing effect */}
        <div className="absolute inset-1.5 rounded-full overflow-hidden">
          <div 
            className="absolute inset-0 transition-all duration-500"
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

        {/* Slider Button */}
        <button
          onClick={() => setTheme(isDark ? 'navy' : 'dark')}
          className="relative w-full h-full group"
          aria-label="Toggle theme"
        >
          <div
            className="absolute top-1/2 transform -translate-y-1/2 w-9 h-9 rounded-full transition-all duration-500 ease-out z-20"
            style={{
              left: isDark ? 'calc(100% - 2.5rem)' : '0.25rem',
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
            className="absolute top-1/2 transform -translate-y-1/2 h-1.5 rounded-full transition-all duration-500 opacity-50"
            style={{
              left: isDark ? '0.5rem' : '0.5rem',
              right: isDark ? 'calc(100% - 2.5rem)' : 'calc(100% - 2.5rem)',
              background: isDark
                ? 'linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.4))'
                : 'linear-gradient(90deg, rgba(6, 182, 212, 0.4), transparent)',
            }}
          />
        </button>

      </div>
    </div>
  );
};

export default FuturisticThemeSlider;
