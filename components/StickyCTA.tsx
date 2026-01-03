
import React from 'react';
import { Download } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const scrollToForm = () => {
    const form = document.getElementById('registration-form');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full px-6 z-50 md:hidden">
      <button 
        onClick={scrollToForm}
        className="w-full bg-red-600 text-white font-extrabold py-4 rounded-full shadow-[0_15px_30px_-5px_rgba(220,38,38,0.6)] flex items-center justify-center gap-3 active:scale-90 transition-transform animate-shake"
      >
        <Download className="w-6 h-6" />
        NHẬN EBOOK MIỄN PHÍ
      </button>
    </div>
  );
};

export default StickyCTA;
