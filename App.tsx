
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import WhatIsInside from './components/WhatIsInside';
import AboutAuthor from './components/AboutAuthor';
import RegistrationForm from './components/RegistrationForm';
import StickyCTA from './components/StickyCTA';
import ThankYou from './components/ThankYou';
import ChatbotCallout from './components/ChatbotCallout';

const App: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky button after scrolling past hero section (~600px)
      setShowSticky(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSuccess = () => {
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return <ThankYou />;
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-red-100 selection:text-red-600">
      <Hero />
      <PainPoints />
      <WhatIsInside />
      <AboutAuthor />
      <RegistrationForm onSuccess={handleSuccess} />
      
      {/* Footer Branding */}
      <footer className="py-12 bg-slate-50 border-t border-slate-200 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Trịnh Trang. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="text-slate-400 hover:text-red-600 transition-colors">Điều khoản</a>
          <a href="#" className="text-slate-400 hover:text-red-600 transition-colors">Bảo mật</a>
        </div>
      </footer>

      <ChatbotCallout />
      {showSticky && <StickyCTA />}
    </div>
  );
};

export default App;
