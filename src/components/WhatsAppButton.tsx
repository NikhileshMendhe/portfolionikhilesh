import { MessageCircle } from 'lucide-react';
import { personalInfo } from '@/data/marketingData';

const WhatsAppButton = () => {
  return (
    <aside aria-label="WhatsApp quick connect" className="fixed bottom-6 right-6 z-40 group">
      <a
        href={personalInfo.whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Nikhilesh Mendhe on WhatsApp"
        className="flex items-center gap-2.5 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] border border-green-400/40 select-none"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-sm font-semibold hidden sm:inline-block pr-1">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
};

export default WhatsAppButton;
