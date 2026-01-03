
import React from 'react';
import { Quote, Heart, Award } from 'lucide-react';

const AboutAuthor: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
          {/* Left: Image */}
          <div className="lg:w-1/2 w-full max-w-md lg:max-w-none mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-red-600/30 rounded-3xl -z-10 translate-x-8 translate-y-8"></div>
              <img 
                src="https://picsum.photos/seed/author/600/800" 
                alt="Trịnh Trang" 
                className="w-full h-auto rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-red-600 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">TRỊNH TRANG</h4>
                    <p className="text-white/80 text-sm">Chuyên gia xây dựng thương hiệu cá nhân</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              VỀ TÁC GIẢ TRỊNH TRANG
              <div className="h-px bg-red-600 flex-grow"></div>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <div className="flex gap-4">
                <Quote className="w-10 h-10 text-red-600 flex-shrink-0 opacity-50" />
                <p className="font-semibold text-white text-xl">"Chào các anh chị, em là Trang..."</p>
              </div>
              
              <p>
                Trang từng là một người cực kỳ rụt rè, sợ đám đông và luôn lo lắng về việc người khác nghĩ gì về mình. Trang hiểu cái cảm giác "bí từ", sợ ống kính và sự lạc lõng khi mới bắt đầu.
              </p>
              
              <p>
                Từ con số 0 tròn trĩnh, Trang đã nỗ lực tự xây dựng thương hiệu cá nhân, tạo dựng cộng đồng và chia sẻ giá trị thực cho hàng ngàn học viên. Trang ở đây để chứng minh rằng: <span className="text-white font-bold">Bất kỳ ai cũng có thể tỏa sáng nếu có lộ trình đúng đắn.</span>
              </p>

              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <p className="text-red-400 font-bold mb-2 flex items-center gap-2 uppercase tracking-widest text-sm">
                  <Heart className="w-4 h-4" /> Triết lý của Trang
                </p>
                <p className="italic text-slate-100">
                  "Em Trang không dạy lý thuyết, em chỉ chia sẻ lại chính xác những cái 'hố' em đã ngã và con đường em đã đi để anh chị về đích nhanh hơn."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
