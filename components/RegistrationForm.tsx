
import React, { useState } from 'react';
import { Send, User, Phone, Mail, ShieldCheck } from 'lucide-react';

interface Props {
  onSuccess: () => void;
}

const RegistrationForm: React.FC<Props> = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form data submitted:', formData);
      setLoading(false);
      onSuccess();
    }, 1500);
  };

  return (
    <section id="registration-form" className="py-24 bg-red-600 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-8 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border-8 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="lg:w-1/2 text-white text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              ĐỪNG ĐỂ SỰ TRÌ HOÃN CẢN BƯỚC THÀNH CÔNG CỦA BẠN
            </h2>
            <p className="text-xl text-red-100 mb-8 font-medium">
              Cuốn Ebook này HOÀN TOÀN MIỄN PHÍ, nhưng giá trị nó mang lại có thể thay đổi hoàn toàn công việc kinh doanh của bạn.
            </p>
            <div className="flex items-center gap-3 justify-center lg:justify-start bg-red-700/50 p-4 rounded-xl border border-red-500/50">
              <ShieldCheck className="w-8 h-8 text-red-200" />
              <p className="text-sm text-red-100">Chúng tôi cam kết bảo mật thông tin 100%. <br/>Tài liệu sẽ được gửi trực tiếp qua Zalo/Email của bạn.</p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full max-w-md mx-auto">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 font-bold px-6 py-2 rounded-full text-sm shadow-lg whitespace-nowrap">
                🎁 MIỄN PHÍ DÀNH CHO BẠN
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 mt-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-2 ml-1">Họ và tên của bạn</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input 
                      required
                      type="text" 
                      placeholder="Nguyễn Văn A" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-red-600 focus:bg-white outline-none transition-all text-slate-900"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-2 ml-1">Số điện thoại (Có Zalo)</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input 
                      required
                      type="tel" 
                      placeholder="09xx xxx xxx" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-red-600 focus:bg-white outline-none transition-all text-slate-900"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-2 ml-1">Email nhận sách (Tùy chọn)</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input 
                      type="email" 
                      placeholder="vidu@gmail.com" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-red-600 focus:bg-white outline-none transition-all text-slate-900"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <button 
                  disabled={loading}
                  type="submit"
                  className="w-full bg-red-600 text-white font-bold text-xl py-5 rounded-xl hover:bg-red-700 active:scale-95 transition-all shadow-xl shadow-red-600/20 flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      GỬI EBOOK CHO TÔI NGAY
                      <Send className="w-6 h-6" />
                    </>
                  )}
                </button>
                <p className="text-center text-slate-400 text-xs mt-4">
                  Bằng cách bấm nút, bạn đồng ý với các chính sách của chúng tôi
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
