
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToForm = () => {
    const form = document.getElementById('registration-form');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-32 lg:pb-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content Left */}
          <div className="lg:w-7/12 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 bg-red-50 text-red-600 rounded-full text-sm font-semibold tracking-wide uppercase animate-fade-in">
              Quà tặng độc quyền từ Trịnh Trang
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              TẠI SAO BẠN VẪN LOAY HOAY BÁN HÀNG TRONG KHI <span className="text-red-600">NGƯỜI KHÁC ĐÃ XÂY XONG THƯƠNG HIỆU?</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Tải ngay bí mật "Lộ Trình 30 Ngày Tăng Tốc" của Trang - Biến Facebook & TikTok thành cỗ máy thu hút khách hàng tự động.
            </p>
            
            <div className="hidden lg:block">
              <button 
                onClick={scrollToForm}
                className="group relative inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-xl shadow-[0_10px_30px_-10px_rgba(220,38,38,0.5)] hover:bg-red-700 hover:shadow-red-600/40 transition-all active:scale-95 animate-shake"
              >
                TẢI EBOOK MIỄN PHÍ NGAY
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="mt-4 text-slate-400 text-sm italic">* Đã có hơn 1,200+ người đăng ký nhận trong tuần qua</p>
            </div>
          </div>

          {/* Image Right */}
          <div className="lg:w-5/12 w-full max-w-[450px] mx-auto lg:max-w-none">
            <div className="relative">
              <div className="absolute -inset-4 bg-red-100 rounded-3xl rotate-3 blur-2xl opacity-50 -z-10"></div>
              <img 
                src="https://i.postimg.cc/g2YFXKMG/Ebook_Trịnh_Trang.png" 
                alt="Ebook Trịnh Trang" 
                className="w-full h-auto rounded-2xl shadow-2xl transform lg:rotate-2 transition-transform hover:rotate-0 duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-xs">PDF</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Ebook Miễn Phí</p>
                    <p className="text-xs text-slate-500">Tương thích mọi thiết bị</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="lg:hidden w-full px-4">
            <button 
              onClick={scrollToForm}
              className="w-full flex items-center justify-center gap-3 bg-red-600 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-xl animate-shake"
            >
              TẢI EBOOK MIỄN PHÍ NGAY
            </button>
            <p className="mt-3 text-slate-500 text-xs italic">Nhanh tay sở hữu vì số lượng ưu đãi có hạn!</p>
          </div>
        </div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-60"></div>
    </section>
  );
};

export default Hero;
