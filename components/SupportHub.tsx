
import React from 'react';

const SupportHub: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* 좌측: 고객센터 안내 */}
        <div className="lg:col-span-4 space-y-8">
          <div>
            <h3 className="text-3xl font-black text-navy mb-6">고객지원</h3>
            <p className="text-slate-600 font-bold mb-10 leading-relaxed">
              K-IoT Plus 솔루션 도입을 고민 중이신가요?<br />
              전문 컨설턴트가 상세히 안내해 드립니다.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center text-brand text-2xl">
                  <i className="fas fa-phone-volume"></i>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-black uppercase">Main Line</div>
                  <div className="text-2xl font-black text-navy">1588-0000</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center text-brand text-2xl">
                  <i className="fas fa-envelope-open-text"></i>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-black uppercase">Email Support</div>
                  <div className="text-xl font-black text-navy">support@k-iotplus.co.kr</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h4 className="font-black text-navy mb-6">자료실</h4>
            <div className="space-y-4">
              <a href="#" className="flex items-center p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-brand group transition-all">
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-lg flex items-center justify-center text-xl mr-4 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <i className="far fa-file-pdf"></i>
                </div>
                <div className="flex-1">
                  <div className="font-black text-slate-800 text-sm">K-IoT Plus 카탈로그</div>
                  <div className="text-[11px] text-slate-400 font-bold">PDF, 12.4 MB</div>
                </div>
                <i className="fas fa-download text-slate-300 group-hover:text-navy"></i>
              </a>
              <a href="#" className="flex items-center p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-brand group transition-all">
                <div className="w-12 h-12 bg-blue-50 text-brand rounded-lg flex items-center justify-center text-xl mr-4 group-hover:bg-brand group-hover:text-white transition-colors">
                  <i className="far fa-file-powerpoint"></i>
                </div>
                <div className="flex-1">
                  <div className="font-black text-slate-800 text-sm">서비스 소개서</div>
                  <div className="text-[11px] text-slate-400 font-bold">PPT, 24.8 MB</div>
                </div>
                <i className="fas fa-download text-slate-300 group-hover:text-navy"></i>
              </a>
            </div>
          </div>
        </div>

        {/* 우측: 문의 신청 폼 */}
        <div className="lg:col-span-8 bg-white p-12 md:p-16 rounded-[40px] shadow-2xl border border-slate-50">
          <h3 className="text-3xl font-black text-navy mb-8">상담 신청하기</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-black mb-3 text-slate-700">담당자 이름 *</label>
                <input type="text" className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-brand/20 outline-none transition-all font-bold" placeholder="성함을 입력하세요" />
              </div>
              <div>
                <label className="block text-sm font-black mb-3 text-slate-700">연락처 *</label>
                <input type="text" className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-brand/20 outline-none transition-all font-bold" placeholder="010-0000-0000" />
              </div>
              <div>
                <label className="block text-sm font-black mb-3 text-slate-700">회사명 / 소속 *</label>
                <input type="text" className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-brand/20 outline-none transition-all font-bold" placeholder="회사명을 입력하세요" />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-black mb-3 text-slate-700">문의 사항</label>
                <textarea className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-brand/20 outline-none h-[228px] transition-all font-bold resize-none" placeholder="궁금하신 내용을 남겨주세요."></textarea>
              </div>
            </div>
            <div className="md:col-span-2">
              <button className="w-full bg-brand text-white py-6 rounded-2xl font-black text-xl shadow-2xl shadow-brand/20 hover:bg-brand-dark transition-all transform hover:-translate-y-1">
                상담 요청 완료
              </button>
              <p className="text-center text-slate-400 text-xs mt-6 font-bold">
                기입해주신 정보를 바탕으로 영업일 기준 24시간 이내에 연락드리겠습니다.
              </p>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default SupportHub;
