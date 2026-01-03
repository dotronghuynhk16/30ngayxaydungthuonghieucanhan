
import React from 'react';
import { CheckCircle2, Calendar, PenTool, Video, Target } from 'lucide-react';

const WhatIsInside: React.FC = () => {
  const benefits = [
    {
      title: "Lộ trình 30 ngày chi tiết",
      desc: "Ngày 1 làm gì, Ngày 2 viết gì... Cứ thế làm theo, không cần vắt óc suy nghĩ.",
      icon: <Calendar className="w-8 h-8 text-white" />,
      color: "bg-blue-500"
    },
    {
      title: "Kho công thức viết bài thần thánh",
      desc: "5W1H, AIDA, PAS... Điền vào chỗ trống là có ngay bài đăng nghìn like.",
      icon: <PenTool className="w-8 h-8 text-white" />,
      color: "bg-purple-500"
    },
    {
      title: "Bí kíp Phá băng Camera",
      desc: "Mẹo tâm lý và kỹ thuật quay đơn giản giúp bạn tự tin nói chuyện như với bạn thân.",
      icon: <Video className="w-8 h-8 text-white" />,
      color: "bg-red-500"
    },
    {
      title: "Chiến thuật Mưa dầm thấm lâu",
      desc: "Biến người lạ thành người quen, người quen thành khách hàng trung thành.",
      icon: <Target className="w-8 h-8 text-white" />,
      color: "bg-green-500"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            CUỐN EBOOK NÀY LÀ <span className="text-red-600">"TẤM BẢN ĐỒ"</span> DÀNH RIÊNG CHO BẠN
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Trang đã đóng gói toàn bộ kinh nghiệm thực chiến vào một cuốn cẩm nang cầm tay chỉ việc.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex gap-6 p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
              <div className={`flex-shrink-0 w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:-translate-y-1 transition-transform`}>
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-600" />
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="https://picsum.photos/seed/content/1200/600" 
              alt="Ebook Preview" 
              className="relative w-full max-w-3xl h-auto rounded-2xl shadow-2xl border-4 border-white"
            />
          </div>
          <p className="mt-6 text-slate-400 font-medium">Hình ảnh thực tế từ các chương trong Ebook</p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsInside;
