
import React from 'react';

const ServiceOverview: React.FC = () => {
  return (
    <div className="container mx-auto px-6 space-y-28">
      
      {/* 0. 플랫폼 개요 */}
      <section id="architecture">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-black text-navy mb-8 tracking-tight">K-IoT Plus 란?</h2>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            (주)코오롱글로벌에서 제공하는 IoT 플랫폼 서비스 입니다.
          </p>
          <div className="bg-brand/5 py-3 px-8 inline-block rounded-full border border-brand/10">
            <p className="text-brand font-bold">IoT 센서 디바이스, 대시보드형 플랫폼, IoT 서비스로 구성됩니다.</p>
          </div>
        </div>

        {/* 시스템 구성도 (확대 및 폰트 확장 버전) */}
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-0">
            
            {/* Top Layer: IoT Services */}
            <div className="flex gap-6 items-stretch">
              <div className="w-56 bg-[#9BD6FF] rounded-[24px] flex items-center justify-center text-navy font-black text-2xl shadow-sm text-center px-4">
                IoT Services
              </div>
              <div className="flex-1 border-2 border-slate-400 rounded-xl p-8 bg-white flex flex-col items-center justify-center relative">
                <div className="text-slate-400 text-lg font-bold mb-8">빌딩, 연구소, 호텔, 리테일, 병원, 공장, 물류센터...</div>
                <div className="flex flex-wrap justify-center gap-4 w-full">
                  {['안전관리', '환경관리', '설비관리', '에너지관리', '무인관리', '보건관리'].map((item) => (
                    <div key={item} className="bg-[#CFE8FF] px-8 py-4 text-center text-xl font-black text-slate-700 rounded-md min-w-[150px] shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Connector 1 */}
            <div className="flex justify-center items-center h-20 ml-56">
              <div className="flex flex-col items-center">
                <i className="fas fa-arrows-up-down text-slate-500 text-2xl"></i>
                <span className="text-[13px] font-black text-slate-500 mt-1 uppercase tracking-tight">Platform to Service</span>
              </div>
            </div>

            {/* Middle Layer: IoT Platform */}
            <div className="flex gap-6 items-stretch">
              <div className="w-56 bg-[#9BD6FF] rounded-[24px] flex items-center justify-center text-navy font-black text-2xl shadow-sm text-center px-4">
                IoT Platform
              </div>
              <div className="flex-1 border-2 border-slate-400 rounded-xl p-10 bg-white flex items-center justify-around">
                {/* Left: Mobile/Web Device */}
                <div className="flex items-center gap-8">
                   <div className="relative">
                      <i className="fas fa-mobile-screen text-slate-700 text-6xl"></i>
                   </div>
                   <div className="relative">
                      <i className="fas fa-desktop text-brand text-8xl"></i>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                         <i className="fas fa-cloud-arrow-up text-white text-2xl opacity-80"></i>
                      </div>
                   </div>
                </div>

                {/* Horizontal Connector */}
                <div className="flex flex-col items-center px-6">
                   <i className="fas fa-arrows-left-right text-slate-500 text-2xl"></i>
                   <span className="text-[12px] font-black text-slate-500 mt-1 uppercase tracking-tighter whitespace-nowrap">Platform to Platform</span>
                </div>

                {/* Right: Server/Cloud */}
                <div className="flex items-center gap-8">
                   <div className="flex flex-col gap-2">
                      <div className="w-14 h-2.5 bg-slate-300 rounded-full"></div>
                      <div className="w-14 h-2.5 bg-slate-300 rounded-full"></div>
                      <div className="w-14 h-2.5 bg-slate-300 rounded-full"></div>
                   </div>
                   <div className="relative">
                      <i className="fas fa-cloud text-navy text-[120px]"></i>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                         <i className="fas fa-arrows-rotate text-white text-3xl animate-spin-slow"></i>
                      </div>
                   </div>
                </div>
              </div>
            </div>

            {/* Connectors to Bottom */}
            <div className="flex ml-56 h-20">
               <div className="flex-1 flex flex-col items-center justify-center">
                  <i className="fas fa-arrows-up-down text-slate-500 text-2xl"></i>
                  <span className="text-[13px] font-black text-slate-500 mt-1 uppercase tracking-tight">Platform to Sensor</span>
               </div>
               <div className="flex-1 flex flex-col items-center justify-center">
                  <i className="fas fa-arrows-up-down text-slate-500 text-2xl"></i>
                  <span className="text-[13px] font-black text-slate-500 mt-1 uppercase tracking-tight">Platform to things</span>
               </div>
            </div>

            {/* Bottom Layer: IoT Sensor & Things */}
            <div className="flex gap-6 items-stretch">
              <div className="w-56 bg-[#9BD6FF] rounded-[24px] flex items-center justify-center text-navy font-black text-2xl shadow-sm text-center px-4 leading-tight">
                IoT Sensor<br/>& Things
              </div>
              <div className="flex-1 flex gap-6">
                {/* Bottom Left Box */}
                <div className="flex-[1.2] border-2 border-slate-400 rounded-xl p-8 bg-white flex items-center gap-8 shadow-sm">
                   <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center bg-slate-50 rounded-2xl border border-slate-100">
                      <i className="fas fa-microchip text-slate-300 text-7xl"></i>
                   </div>
                   <div className="text-[16px] font-bold text-slate-600 leading-snug">
                      전압감지센서(DC,AC), 누수감지센서,<br/>
                      온습도센서, 공기질센서, 압력센서,<br/>
                      전력량센서, 진동센서, 초음파센서 등<br/>
                      <span className="text-slate-800 font-black text-2xl mt-1 block">60여종</span>
                   </div>
                </div>
                {/* Bottom Right Box */}
                <div className="flex-1 border-2 border-slate-400 rounded-xl p-8 bg-white flex justify-around items-center gap-4 shadow-sm">
                   {['IoT things', 'Controller', 'HVAC', 'Legacy'].map(item => (
                     <div key={item} className="w-24 h-24 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[13px] font-black text-slate-500 text-center leading-tight p-2 hover:bg-slate-200 transition-colors">
                        {item}
                     </div>
                   ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* [통합 프레임 1]: 현장 고민 요소 & 해결 가능성 & 운영인력 전담 어려움 내용 등 */}
      <section className="bg-bgGray rounded-[60px] p-12 md:p-20 border border-slate-200 shadow-inner overflow-hidden">
        {/* 건물관리 효율화를 위해 현장에서의 고민 요소는 무엇일까요? */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-black text-navy mb-8">건물관리 효율화를 위해 현장에서의 고민 요소는 무엇일까요?</h3>
          <p className="text-slate-600 text-lg md:text-xl font-bold leading-relaxed max-w-4xl mx-auto">
            건물 관리 환경이 복잡해짐에 따라 현장에서는 기술적, 제도적 한계로 인한 <span className="text-brand underline decoration-2 underline-offset-8">실질적인 고민</span>이 깊어지고 있습니다.
          </p>
        </div>

        {/* 고민 요소 3가지 이미지 카드 (이미지 삭제 및 공간 유지) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto items-stretch mb-24">
          {[
            { 
              title: '1. 업무량 및 규제 증가', 
              desc: '관리해야할 인프라와 자산의 규모가 지속적으로 확대되면서 법률적 규제, 중대재해, 안전에 대한 요구가 더욱 강화되고 있습니다.'
            },
            { 
              title: '2. 기존 시스템의 한계', 
              desc: '기존 시스템 및 레거시 인프라는 복잡한 자산관리 요구를 충분히 충족시키지 못하고 있습니다.'
            },
            { 
              title: '3. 효과적인 관리 방안 부재', 
              desc: '많은 건물이 FM(시설관리) 데이터의 디지털화와 자산관리의 기술적 업그레이드에 어려움을 겪고 있습니다.'
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col bg-white rounded-[40px] border border-slate-100 shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-300">
              {/* 이미지 삭제하고 공간만 유지 */}
              <div className="h-48 bg-slate-50 flex items-center justify-center border-b border-slate-50">
                <i className="fas fa-image text-slate-200 text-5xl"></i>
              </div>
              <div className="p-10 flex-1 flex flex-col">
                <h4 className="text-xl font-black text-navy mb-4">{item.title}</h4>
                <p className="text-slate-500 text-[15px] font-bold leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 안내 문구 형식 및 텍스트 수정 */}
        <div className="flex flex-col items-center mb-16 pt-20 border-t border-slate-200 text-center">
           <p className="text-slate-600 text-lg md:text-xl font-bold leading-relaxed max-w-4xl mx-auto">
             실시간 장애인지, 조치, 복구가 가능한 <span className="text-brand">통합운영 환경</span> 뿐만 아니라 실질적인 개선방향과 <span className="text-brand">현실적 대안</span>이 필요합니다.
           </p>
        </div>

        {/* 운영인력 전담 어려움 등 필요 대안 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto items-start relative z-10">
          {[
            { 
              pain: { title: '운영인력 전담 어려움', desc: '상시 모니터링 및 대기는 현실적으로 불가' },
              need: { title: '원격제어 및 통합관제 도입', desc: '시스템 기반  중단 없는 감시' },
              icon: 'fa-headset'
            },
            { 
              pain: { title: '조치 및 히스토리 부족', desc: '지연된 업무 처리 및 운영 데이터 관리 부재' },
              need: { title: '공간·설비 관리의 중요성 인식', desc: '데이터 중심의 체적 이력 관리 시스템' },
              icon: 'fa-database'
            },
            { 
              pain: { title: '계속된 추가비용 발생', desc: '인건비 및 유지보수 비용의 지속적 증가' },
              need: { title: '별도의 운영 인력 불필요', desc: '자동화 플랫폼을 통한 비용 효율 극대화' },
              icon: 'fa-chart-pie'
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="w-full bg-white p-8 rounded-3xl border border-slate-100 shadow-sm mb-8 relative overflow-hidden h-36 flex flex-col justify-center opacity-70">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-300"></div>
                <h4 className="text-lg font-black text-slate-500 mb-2">{item.pain.title}</h4>
                <p className="text-slate-400 text-xs font-bold leading-relaxed">“{item.pain.desc}”</p>
              </div>
              
              <div className="mb-8 flex flex-col items-center gap-1.5 h-20">
                 <div className="w-2 h-2 rounded-full bg-brand/20 animate-pulse"></div>
                 <div className="w-2 h-2 rounded-full bg-brand/40 animate-pulse delay-75"></div>
                 <div className="w-2 h-2 rounded-full bg-brand/60 animate-pulse delay-150"></div>
                 <div className="w-1 h-8 bg-gradient-to-b from-brand/60 to-brand rounded-full"></div>
              </div>

              <div className="w-full bg-white p-8 rounded-3xl border-2 border-brand/10 shadow-xl relative overflow-hidden group-hover:border-brand transition-all h-48 flex flex-col justify-center">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-brand"></div>
                <div className="w-10 h-10 bg-brand/5 rounded-xl flex items-center justify-center text-brand mb-4 group-hover:bg-brand group-hover:text-white transition-all">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h4 className="text-lg font-black text-navy mb-2">{item.need.title}</h4>
                <p className="text-slate-500 text-xs font-bold leading-relaxed">{item.need.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* [통합 프레임 2]: 현실적 해결책 & 최적의 도구적 가치 */}
      <section className="bg-white border-2 border-slate-100 rounded-[80px] p-12 md:p-20 shadow-xl overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* 메인 타이틀 */}
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-6xl font-black text-navy leading-tight">
               K-IoT Plus는 <span className="text-brand">현실적이고 구체적인 해결책</span>을 제공해 줍니다.
             </h2>
          </div>

          {/* K-IoT Plus 최적의 도구적 가치 (위치 변경) */}
          <div className="text-center mb-12 pt-16 border-t border-slate-100">
            <h3 className="text-2xl md:text-4xl font-black text-navy leading-tight">
              K-IoT Plus는 문제해결을 위한<br />
              <span className="text-brand">최적의 도구적 가치를 제공합니다.</span>
            </h3>
          </div>

          <div className="max-w-6xl mx-auto mb-24">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { id: '01', title: '자동화 (Automation)', desc: 'IoT 센서 기반으로 실시간 건물 상태를 파악하고, 문제 발생 시 시스템이 즉각 대응합니다.', icon: 'fa-robot' },
                  { id: '02', title: '효율화 (Efficiency)', desc: '공간과 설비의 가동률을 최대화하고, 예방 정비를 통해 유지관리 비용을 획기적으로 절감합니다.', icon: 'fa-chart-line' },
                  { id: '03', title: '자산화 (Assetization)', desc: '모든 업무 데이터를 체계적으로 축적하여, 데이터 기반의 정확한 의사결정을 지원합니다.', icon: 'fa-database' }
                ].map((step, i) => (
                  <div key={i} className="flex flex-col bg-slate-50 p-10 rounded-[50px] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-300 group">
                     <div className="flex items-center justify-between mb-8">
                        <div className="text-5xl font-black text-brand/20 italic group-hover:text-brand/40 transition-colors">{step.id}</div>
                        <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg shadow-brand/20 group-hover:rotate-6 transition-transform">
                           <i className={`fas ${step.icon}`}></i>
                        </div>
                     </div>
                     <h5 className="text-xl font-black text-navy mb-6">{step.title}</h5>
                     <p className="text-slate-600 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                ))}
             </div>
          </div>

          {/* 5대 기능 그리드 (위치 변경) */}
          <div className="text-center mb-12 pt-20 border-t border-slate-100">
             <h3 className="text-2xl md:text-4xl font-black text-navy leading-tight">
               <span className="text-brand">KIoT plus 는</span> IoT센서에 공간과 빌딩 설비를 연계하여<br />
               사고 예방, 피해 최소화 및 효율적인 건물 관리 제공합니다.
             </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { title: '관제 운영 사전 컨설팅', desc: '공간 및 설비 분석 기반 IoT 도입 컨설팅', icon: 'fa-magnifying-glass-chart', color: 'bg-brand' },
              { title: '실시간 관제 및 운영', desc: '관제센터 - 사업장 - 패트롤 3중 관제', icon: 'fa-laptop-code', color: 'bg-navy' },
              { title: '운영지표 관리', desc: '각종 지표 및 목표 관리', icon: 'fa-stopwatch-20', color: 'bg-brand' },
              { title: '스마트진단 룰 설정', desc: '센서 별 다양한 진단 기술 및 업그레이드', icon: 'fa-file-signature', color: 'bg-navy' },
              { title: '월간 리포트', desc: '운영 및 분석 리포트 제공', icon: 'fa-chart-pie', color: 'bg-brand' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[45px] border border-slate-100 shadow-2xl hover:-translate-y-4 transition-all duration-700 group flex flex-col items-center text-center">
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-8 shadow-xl group-hover:scale-110 transition-transform group-hover:rotate-3`}>
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h4 className="text-lg font-black text-navy mb-4 leading-tight group-hover:text-brand transition-colors">{item.title}</h4>
                <p className="text-[13px] text-slate-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes move-down {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-move-down {
          animation: move-down 2s infinite ease-in-out;
        }
        .animate-shimmer {
          background-size: 200% 200%;
          animation: shimmer 2s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: 0% 0%; }
          100% { background-position: 0% 100%; }
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
};

export default ServiceOverview;
