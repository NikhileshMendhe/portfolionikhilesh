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
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40">
      <div className="relative w-48 h-16 rounded-full bg-black/80 backdrop-blur-md border-2 border-border/50 p-2 flex items-center">
        {/* Track with glowing effect */}
        <div className="absolute inset-2 rounded-full overflow-hidden">
          <div 
            className="absolute inset-0 transition-all duration-500"
            style={{
              background: isDark 
                ? 'linear-gradient(90deg, transparent 50%, rgba(239, 68, 68, 0.2) 100%)'
                : 'linear-gradient(90deg, rgba(6, 182, 212, 0.2) 0%, transparent 50%)',
            }}
          />
        </div>

        {/* Left Icon - Blue/Light */}
        <div className={`absolute left-4 z-10 transition-all duration-300 ${
          !isDark ? 'text-cyan-500 scale-110' : 'text-muted-foreground scale-100'
        }`}>
          <Sun className="w-6 h-6" style={{
            filter: !isDark ? 'drop-shadow(0 0 8px #06b6d4)' : 'none'
          }} />
        </div>

        {/* Right Icon - Red/Dark */}
        <div className={`absolute right-4 z-10 transition-all duration-300 ${
          isDark ? 'text-red-500 scale-110' : 'text-muted-foreground scale-100'
        }`}>
          <Moon className="w-6 h-6" style={{
            filter: isDark ? 'drop-shadow(0 0 8px #ef4444)' : 'none'
          }} />
        </div>

        {/* Slider Button */}
        <button
          onClick={() => setTheme(isDark ? 'navy' : 'dark')}
          className="relative w-full h-full"
          aria-label="Toggle theme"
        >
          <div
            className="absolute top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full transition-all duration-500 ease-out"
            style={{
              left: isDark ? 'calc(100% - 3.5rem)' : '0.25rem',
              background: isDark 
                ? 'radial-gradient(circle, #ef4444, #991b1b)'
                : 'radial-gradient(circle, #06b6d4, #0e7490)',
              boxShadow: isDark
                ? '0 0 20px #ef4444, 0 0 40px #ef444480, inset 0 0 10px rgba(255, 255, 255, 0.3)'
                : '0 0 20px #06b6d4, 0 0 40px #06b6d480, inset 0 0 10px rgba(255, 255, 255, 0.3)',
              border: '3px solid rgba(255, 255, 255, 0.5)',
            }}
          >
            {/* Center glow */}
            <div 
              className="absolute inset-0 rounded-full animate-pulse"
              style={{
                background: isDark
                  ? 'radial-gradient(circle, rgba(239, 68, 68, 0.5), transparent)'
                  : 'radial-gradient(circle, rgba(6, 182, 212, 0.5), transparent)',
              }}
            />
          </div>

          {/* Trail effect */}
          <div
            className="absolute top-1/2 transform -translate-y-1/2 h-2 rounded-full transition-all duration-500"
            style={{
              left: isDark ? '0.5rem' : '0.5rem',
              right: isDark ? 'calc(100% - 3.5rem)' : 'calc(100% - 3.5rem)',
              background: isDark
                ? 'linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.3))'
                : 'linear-gradient(90deg, rgba(6, 182, 212, 0.3), transparent)',
            }}
          />
        </button>

        {/* Labels */}
        <div className="absolute -bottom-6 left-2 text-xs font-medium text-cyan-500">
          DAY
        </div>
        <div className="absolute -bottom-6 right-2 text-xs font-medium text-red-500">
          NIGHT
        </div>
      </div>
    </div>
  );
};

export default FuturisticThemeSlider;
