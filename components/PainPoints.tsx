
import React from 'react';
import { XCircle, AlertCircle } from 'lucide-react';

const PainPoints: React.FC = () => {
  const points = [
    "Sáng mở mắt ra cầm điện thoại nhưng không biết đăng gì, viết mãi không xong một dòng caption.",
    "Muốn quay video bán hàng nhưng chân tay run lẩy bẩy, ngại ngùng, sợ bị người quen đánh giá.",
    "Bài đăng tâm huyết nhưng chỉ lác đác vài like của người thân, khách lạ hoàn toàn không thấy.",
    "Cảm thấy cô đơn và lạc lõng giữa một rừng người bán hàng giỏi giang ngoài kia."
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tight">
              CÓ PHẢI BẠN ĐANG GẶP TÌNH TRẠNG NÀY?
            </h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-4 md:gap-6">
            {points.map((text, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-red-200 transition-colors group"
              >
                <div className="flex-shrink-0 mt-1">
                  <XCircle className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-slate-700 text-lg md:text-xl font-medium leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center p-8 bg-red-50 rounded-3xl border-2 border-dashed border-red-200">
            <AlertCircle className="w-10 h-10 text-red-600 mx-auto mb-4" />
            <p className="text-xl md:text-2xl font-semibold text-slate-800 italic leading-relaxed">
              "Trang hiểu cảm giác đó, vì Trang cũng từng bắt đầu từ con số 0 tròn trĩnh như thế..."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
