
import React from 'react';

const ServiceBenefits: React.FC = () => {
  return (
    <div className="w-full bg-white py-24 md:py-32">
      <div className="container mx-auto px-6">
        
        <header className="mb-20 max-w-4xl">
          <h3 className="text-4xl md:text-5xl font-black text-navy leading-tight mb-8">
            K-IoT Plus <span className="text-brand">도입 효과</span>
          </h3>
          <p className="text-slate-500 text-xl font-bold leading-relaxed">
            건물 운영의 안전성, 효율성, 경제성을 모두 강화할 수 있는 최적의 솔루션입니다.<br className="hidden md:block" />
            이는 미래 지향적인 건물 관리를 위한 필수 도구입니다.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 max-w-7xl mx-auto">
          <div className="flex flex-col gap-20 lg:w-1/3 order-2 lg:order-1">
            <div className="flex flex-col items-start lg:items-end lg:text-right group">
              <div className="mb-6">
                <h4 className="text-2xl md:text-3xl font-black text-navy mb-4">고장율, 사고율의 감소</h4>
              </div>
              <ul className="space-y-3 text-lg font-bold text-slate-600">
                <li className="flex items-center gap-2 lg:flex-row-reverse"><i className="fas fa-check-circle text-brand text-sm"></i>예방점검, 예지보전, 초동대처</li>
                <li className="flex items-center gap-2 lg:flex-row-reverse"><i className="fas fa-check-circle text-brand text-sm"></i>위험 발생 확률 감소 및 자산 안정성 향상</li>
              </ul>
            </div>
            <div className="flex flex-col items-start lg:items-end lg:text-right group">
              <div className="mb-6">
                <h4 className="text-2xl md:text-3xl font-black text-[#A52A2A] mb-4">효율적인 자산관리</h4>
              </div>
              <ul className="space-y-3 text-lg font-bold text-slate-600">
                <li className="flex items-center gap-2 lg:flex-row-reverse"><i className="fas fa-check-circle text-red-400 text-sm"></i>플랫폼을 통한 실시간 데이터 공유</li>
                <li className="flex items-center gap-2 lg:flex-row-reverse"><i className="fas fa-check-circle text-red-400 text-sm"></i>데이터 기반의 합리적인 의사결정</li>
              </ul>
            </div>
          </div>

          <div className="lg:w-1/3 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[480px] aspect-square bg-slate-50 rounded-[60px] border border-slate-100 flex items-center justify-center p-8">
                <div className="text-slate-300 text-center">
                   <i className="fas fa-chart-pie text-7xl mb-4"></i>
                   <p className="font-bold">도입 효과 인포그래픽</p>
                </div>
            </div>
          </div>

          <div className="flex flex-col gap-20 lg:w-1/3 order-3">
            <div className="flex flex-col items-start group">
              <div className="mb-6">
                <h4 className="text-2xl md:text-3xl font-black text-navy mb-4">비용 절감</h4>
              </div>
              <ul className="space-y-3 text-lg font-bold text-slate-600">
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-brand text-sm"></i>설비 수명 연장 및 운영 효율 극대화</li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-brand text-sm"></i>에너지 절감 및 인력 효율성 증대</li>
              </ul>
            </div>
            <div className="flex flex-col items-start group">
              <div className="mb-6">
                <h4 className="text-2xl md:text-3xl font-black text-navy mb-4">업무 자동화</h4>
              </div>
              <ul className="space-y-3 text-lg font-bold text-slate-600">
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-brand text-sm"></i>반복 작업 최소화로 생산성 향상</li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-brand text-sm"></i>지능형 알림을 통한 신속한 대응</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBenefits;
