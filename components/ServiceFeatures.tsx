
import React, { useState, useEffect, useRef } from 'react';

const ServiceFeatures: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlayStopped, setIsAutoPlayStopped] = useState(false);
  const slideCount = 5;
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  // 드래그 관련 ref
  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    resetTimeout();
    if (!isAutoPlayStopped) {
      timeoutRef.current = setTimeout(
        () => setActiveSlide((prevIndex) => (prevIndex === slideCount - 1 ? 0 : prevIndex + 1)),
        7000
      );
    }
    return () => resetTimeout();
  }, [activeSlide, isAutoPlayStopped]);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const toggleAutoPlay = (e: React.MouseEvent) => {
    // 버튼이나 링크 클릭 시에는 토글하지 않음
    if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('a')) return;
    setIsAutoPlayStopped(!isAutoPlayStopped);
  };

  const stopAutoPlayTemporarily = () => {
    // 드래그 시작 시에는 일단 멈춤
    resetTimeout();
  };

  // 드래그 핸들러
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    stopAutoPlayTemporarily();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    dragStartX.current = clientX;
    isDragging.current = true;
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current || dragStartX.current === null) return;
    
    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStartX.current - clientX;
    
    if (Math.abs(diff) > 50) { // 50px 이상 이동 시 슬라이드 전환
      if (diff > 0) {
        setActiveSlide((prev) => (prev === slideCount - 1 ? prev : prev + 1));
      } else {
        setActiveSlide((prev) => (prev === 0 ? prev : prev - 1));
      }
    }
    
    dragStartX.current = null;
    isDragging.current = false;
  };

  const differentiationItems = [
    { title: '데이터 기반 효율적 건물관리', desc: '센서 설정 룰 뿐만 아니라 업무처리 룰까지 관리', icon: 'fa-desktop-pulse' },
    { title: '운영 지표 및 각종 리포트 제공', desc: '관제 운영지표 및 사고율, 빈도율 등 다양한 지표 제공', icon: 'fa-chart-line' },
    { title: '지속적인 서비스 업그레이드', desc: '운영 Rule-set 및 각종 비즈니스 로직 지속 업데이트', icon: 'fa-arrows-rotate' }
  ];

  return (
    <div className="w-full bg-bgGray">
      <div className="container mx-auto px-6 py-20">
        
        <section className="mb-32">
          <div className="flex flex-col md:flex-row items-start gap-12 mb-20">
            <div className="md:w-1/3">
              <h3 className="text-4xl font-black text-navy leading-tight mb-8">
                K-IoT Plus 만의<br />
                <span className="text-brand">차별화 포인트</span>
              </h3>
              <p className="text-slate-500 text-lg font-bold leading-relaxed">
                관제 환경 및 ICT 적용에 대한 Pain Points를 개선하여 
                건물주, 운영자, 입주자 모두에게 최적의 가치를 제공합니다.
              </p>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
              {differentiationItems.map((item, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-xl flex flex-col items-center text-center group hover:bg-brand transition-all duration-500">
                  <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-brand text-2xl mb-6 group-hover:bg-white/20 group-hover:text-white">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <h4 className="text-lg font-black text-navy mb-4 group-hover:text-white leading-tight">{item.title}</h4>
                  <p className="text-sm text-slate-400 font-bold group-hover:text-white/80 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="flex justify-between items-end mb-12 px-4">
             <div className="flex items-center gap-6">
                <h3 className="text-5xl font-black text-navy">특장점</h3>
             </div>
             <div className="flex gap-4 mb-4">
                {[0, 1, 2, 3, 4].map((i) => (
                  <button key={i} onClick={() => { setActiveSlide(i); setIsAutoPlayStopped(true); }} className={`w-12 h-2 rounded-full transition-all duration-500 ${activeSlide === i ? 'bg-brand w-24' : 'bg-slate-300'}`} />
                ))}
             </div>
          </div>

          <div 
            className="relative overflow-visible cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
            onClick={toggleAutoPlay}
          >
            <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
              <FeatureSlide index="01" title="Analytics 기반 지능형 운영관리" subtitle="수집된 센서 데이터의 임계치 진단뿐만 아니라, 상황별 최적의 업무 처리 가이드를 실시간으로 제공합니다." details={[
                  { label: '센서 및 상황별 Rule-set 설정', items: ['설비/공간 특성을 반영한 지능형 데이터 분석 엔진 탑재', '위험 징후 조기 감시 및 이상 패턴 자동 검출 알고리즘 적용'] },
                  { label: '스마트 진단 및 예지 보전', items: ['기상청/공공데이터 연동을 통한 동파·침수 선제적 예보', '실내 쾌적도(PMV) 및 공기질(IAQ) 지수 기반 지능형 제어 가이드'] }
              ]} />
              <FeatureSlide index="02" title="운영 효율화를 위한 통합 지표/Metric" subtitle="단순 모니터링을 넘어 관리 효율성을 입증하는 체계적인 운영 데이터 분석 Metric을 제공합니다." details={[
                  { label: '실시간 관제 운영 대시보드', items: ['알림 발생 후 초동 조치 완료까지의 구간별 처리율 지표 관리', '전체 사업소 통합 관리 및 지점별 운영 효율성 비교 분석'] },
                  { label: '데이터 기반 정밀 분석 보고서', items: ['센서·공간·장비별 빈발 장애 입체 분석 데이터 제공', '운영 성과 측정 및 월간 운영 개선 보고서 자동 생성'] }
              ]} />
              <FeatureSlide index="03" title="TCO 절감을 위한 클라우드 SaaS 솔루션" subtitle="복잡한 서버 구축 없이 월 구독 방식의 SaaS를 통해 초기 투자비용(CAPEX)을 혁신적으로 절감합니다." details={[
                  { label: '구축형 대비 압도적 경제성', items: ['H/W 도입비 및 고비용 시스템 개발 인건비 ZERO화', '클라우드 인프라 활용으로 도입 기간 획기적 단축 (3일 이내)'] },
                  { label: '운영 편의성 및 전문성', items: ['보안/업그레이드/백업 등 인프라 관리를 본사에서 전담', 'SaaS 표준 로직 적용으로 운영 시스템의 안정성 상향 평준화'] }
              ]} />
              <FeatureSlide index="04" title="지속적인 지능형 서비스 고도화" subtitle="변화하는 법령과 기술 트렌드에 맞춰 지능형 로직을 상시 업데이트하여 최고의 서비스 품질을 유지합니다." details={[
                  { label: '최신 법규 및 기술 규제 대응', items: ['중대재해처벌법, 소방안전 관리 등 변경 법령 실시간 반영', '스마트 진단 로직 및 AI 분석 알고리즘 상시 업그레이드'] },
                  { label: '안정적인 24/7 서비스 유지', items: ['클라우드 기반의 무중단 서비스 아키텍처 구현', '최신 보안 패치 및 취약점 상시 점체로 데이터 보안 강화'] }
              ]} />
              <FeatureSlide index="05" title="확장성이 뛰어난 유연한 시스템 구성" subtitle="LoRa, LTE-M 등 다양한 통신 규격과 표준 API 연동을 통해 현장 맞춤형 인프라를 구축합니다." details={[
                  { label: '다양한 유무선 네트워크 지원', items: ['LoRa-WAN, LTE-M, Wi-Fi 등 현장 여건별 통신 최적화', '기존 레거시 설비 및 외부 솔루션 연동을 위한 표준 API 지원'] },
                  { label: '사용자 중심의 UI/UX 커스터마이징', items: ['사업소별 관리 특성에 맞춘 사용자 정의 알림 설정', '모바일·PC·대형 상황판 등 다양한 디바이스 최적화 뷰 제공'] }
              ]} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const FeatureSlide: React.FC<{ index: string; title: string; subtitle: string; details: { label: string; items: string[] }[] }> = ({ index, title, subtitle, details }) => (
  <div className="min-w-full px-4">
    <div className="bg-white rounded-[80px] p-12 md:p-20 border border-slate-100 shadow-xl flex flex-col min-h-[750px] items-stretch">
      {/* 상단: 제목 및 설명 */}
      <div className="mb-16">
        <div className="flex items-center gap-6 mb-4">
          <span className="text-brand font-black text-6xl opacity-10 italic"># {index}</span>
          <h4 className="text-4xl font-black text-navy leading-tight">{title}</h4>
        </div>
        <p className="text-slate-500 text-xl font-bold leading-relaxed max-w-4xl">{subtitle}</p>
      </div>
      
      {/* 하단: 이미지(좌) 및 상세설명(우) */}
      <div className="flex flex-col lg:flex-row gap-16 flex-1 items-stretch">
        {/* 이미지 플레이스홀더 영역 (좌) */}
        <div className="lg:w-1/2 min-h-[350px] bg-slate-50 rounded-[50px] border border-slate-100 flex items-center justify-center relative overflow-hidden group pointer-events-none">
           <div className="flex flex-col items-center">
             <i className="fas fa-image text-slate-200 text-8xl mb-6"></i>
             <span className="text-slate-300 font-black text-sm tracking-[0.2em] uppercase">Visual Representation Area</span>
           </div>
           <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        {/* 상세 설명 리스트 (우) */}
        <div className="lg:w-1/2 flex flex-col justify-center space-y-12">
          {details.map((sec, i) => (
            <div key={i} className="pl-12 border-l-4 border-brand">
              <h5 className="text-2xl font-black text-navy mb-5">{sec.label}</h5>
              <ul className="space-y-4">
                {sec.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-4 text-lg font-bold text-slate-700 leading-snug">
                    <i className="fas fa-circle-check text-brand mt-1.5 text-base"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ServiceFeatures;
