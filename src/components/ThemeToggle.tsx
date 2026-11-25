import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/80 dark:bg-card/80 backdrop-blur-md border border-slate-200/80 dark:border-border/50 hover:bg-white dark:hover:bg-card/90 transition-all duration-300 shadow-md group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 w-6 h-6 text-amber-500 transition-all duration-500 ${
            theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-75'
          }`}
        />
        <Moon 
          className={`absolute inset-0 w-6 h-6 text-blue-500 transition-all duration-500 ${
            theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;