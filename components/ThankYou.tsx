
import React from 'react';
import { CheckCircle, Download, ExternalLink, ArrowLeft } from 'lucide-react';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-20 px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center relative overflow-hidden">
        {/* Celebration Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2 bg-gradient-to-r from-red-500 via-orange-500 to-red-500"></div>
        
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
          ĐĂNG KÝ THÀNH CÔNG!
        </h1>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
          Chúc mừng bạn đã sở hữu <span className="font-bold text-red-600">tấm bản đồ 30 ngày</span>. Một bước ngoặt lớn cho sự nghiệp của bạn đang bắt đầu.
        </p>

        <div className="space-y-4">
          <a 
            href="https://heyzine.com/flip-book/c5c3db13c7.html" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-red-600 text-white font-bold text-xl py-5 rounded-2xl shadow-xl shadow-red-600/20 flex items-center justify-center gap-3 hover:bg-red-700 transition-all active:scale-95"
          >
            XEM & TẢI EBOOK TẠI ĐÂY
            <Download className="w-6 h-6" />
          </a>

          <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl">
            <p className="text-blue-700 text-sm font-medium flex items-center justify-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Tài liệu cũng đã được gửi vào Email/Zalo của bạn.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100">
          <p className="text-slate-500 mb-4 font-medium italic">"Hãy bắt đầu ngay hôm nay, đừng để đến ngày mai!"</p>
          <button 
            onClick={() => window.location.reload()}
            className="text-slate-400 hover:text-red-600 flex items-center justify-center gap-2 mx-auto transition-colors text-sm font-bold"
          >
            <ArrowLeft className="w-4 h-4" /> Quay lại trang chủ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
