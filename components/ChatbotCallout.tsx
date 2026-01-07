
import React, { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';

const ChatbotCallout: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed it in this session
    const hasBeenDismissed = sessionStorage.getItem('chatbot_callout_dismissed');
    
    if (!hasBeenDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000); // Appear after 2 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('chatbot_callout_dismissed', 'true');
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-24 right-6 md:right-8 z-[10000] animate-fade-in-up max-w-[280px] md:max-w-xs transition-all duration-500 transform translate-y-0 opacity-100">
      <div className="bg-white rounded-2xl shadow-2xl border border-red-100 p-4 relative overflow-visible">
        {/* Pointer Triangle */}
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-red-100 rotate-45"></div>
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute -top-2 -right-2 bg-slate-100 text-slate-500 p-1 rounded-full hover:bg-red-500 hover:text-white transition-colors shadow-sm"
          aria-label="Close message"
        >
          <X className="w-3 h-3" />
        </button>

        <div className="flex gap-3">
          <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-red-100 overflow-hidden bg-slate-100">
            <img 
              src="https://i.postimg.cc/66HF2t5q/Tac-gia-Ebook.png" 
              alt="Avatar Trịnh Trang" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-red-600 mb-1 flex items-center gap-1">
              <MessageCircle className="w-3 h-3" />
              Trợ lý AI của Trang
            </h4>
            <p className="text-slate-700 text-sm leading-snug">
              Chào bạn! Bạn cần Trang tư vấn thêm về lộ trình 30 ngày Xây dựng THCN không? Chat với Trang ngay nhé! 😊
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ChatbotCallout;
