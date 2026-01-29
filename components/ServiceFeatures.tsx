
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
    <div className="w-full bg-bgGray overflow-hidden">
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
          <div className="flex justify-between items-end mb-12 px-2">
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
            className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none rounded-[80px]"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
            onClick={toggleAutoPlay}
          >
            <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
              <FeatureSlide 
                index="01" 
                title="Analytics 기반운영관리" 
                subtitle="센서데이터의진단룰뿐만아니라알림업무처리까지진단하여조치가이드를제공합니다." 
                details={[
                  { 
                    label: '센서설정 Rule-set', 
                    items: [
                      '설비와 공간 매칭 특성별 Rule-set 설정',
                      '위험상황 감지 및 이상 패턴 검출',
                      '계절별, 요일별, 시간대별 지능형 운영'
                    ] 
                  },
                  { 
                    label: '스마트진단 Rule-set', 
                    items: [
                      '알림 횟수/간격 판단 및 자동 조정',
                      '기상 연계 예지 보전 (동파, 누수 등)',
                      '에너지, 쾌적도, 공기질 진단지수 관리'
                    ] 
                  },
                  { 
                    label: '업무처리 Rule-set', 
                    items: [
                      '기준/평균 응답 및 처리시간 정밀 관리',
                      '알림 메시지 중복 발생에 대한 혼란 방지'
                    ] 
                  }
                ]} 
              />
              <FeatureSlide 
                index="02" 
                title="운영지표및각종Metric제공" 
                subtitle="각종지표와Metric은업무의대응력을높이고, 운영의의사결정을지원합니다." 
                details={[
                  { 
                    label: '관제운영지표', 
                    items: [
                      '발생~완료 처리율 지표 및 비율 관리',
                      'IoT 운영평가 및 설비 가용성 지표',
                      '전체/개별 사업소 운영 현황 비교 분석'
                    ] 
                  },
                  { 
                    label: 'Metric 의사결정 지원', 
                    items: [
                      '유형별 평균 응답 및 처리시간 데이터',
                      '알림처리 타임라인 및 상세 히스토리',
                      '경년 변화에 따른 사고율/빈도율 분석'
                    ] 
                  },
                  { 
                    label: '분석 및 보고서', 
                    items: [
                      '센서/공간/장비별 알림 발생 원인 분석',
                      '알림 추이 분석 및 자동 월간보고서 제공'
                    ] 
                  }
                ]} 
              />
              <FeatureSlide 
                index="03" 
                title="IT 투자비용절감" 
                subtitle="복잡한 서버 구축 없이 월 구독방식을 통해 비용 부담을 제거 하였습니다." 
                details={[
                  { 
                    label: '구축형 대비 경쟁력 확보', 
                    items: [
                      'H/W 도입비 및 고비용 개발 인건비 Zero화',
                      '전문가 사전 컨설팅으로 도입 비용 최소화',
                      '고가 인프라 구축 없는 신속한 도입 가능'
                    ] 
                  },
                  { 
                    label: '서비스형 솔루션 제공', 
                    items: [
                      '초기 구축/유지비 없는 투명한 구독 모델',
                      '장기 계약 시 합리적 비용 및 혜택 제시',
                      '지속적 업데이트 포함 경제적 가치 극대화'
                    ] 
                  }
                ]} 
              />
              <FeatureSlide 
                index="04" 
                title="지속적인 서비스 개선" 
                subtitle="비즈니스 환경변화가 있더라도 지속적인 업그레이드와 안정적인 서비스를 제공합니다." 
                details={[
                  { 
                    label: '지속적인 업그레이드', 
                    items: [
                      '법령 및 기준 변화에 따른 실시간 설정',
                      '스마트 진단 및 Rule-Set 상시고도화',
                      '관제 기능 및 알림 템플릿 지속 업데이트'
                    ] 
                  },
                  { 
                    label: '기술지원 서비스', 
                    items: [
                      'Rule-set 변경 및 장소 변경 지원 서비스',
                      '알람 환경 변화에 따른 전문 기술 지원'
                    ] 
                  },
                  { 
                    label: '유연성 및 확장성', 
                    items: [
                      '표준프로토콜 지원 및 연계 확장성 확보',
                      '글로벌 IoT 표준(MQTT) 완벽 대응'
                    ] 
                  }
                ]} 
              />
              <FeatureSlide 
                index="05" 
                title="사업소특성에맞는 유연한구성" 
                subtitle="다양한연결성을바탕으로사업소특성과사용자운영에유연하게대응합니다." 
                details={[
                  { 
                    label: '표준 및 설비 연결성 확보', 
                    items: [
                      'IoT API : Web Socket, Hook, MQTT',
                      '표준: Modbus, OPC, BACnet 연동',
                      '외부 플랫폼 연동을 위한 API 제공'
                    ] 
                  },
                  { 
                    label: '기존 Legacy 시스템 연계', 
                    items: [
                      '기존 시스템 정보 통합 및 알림/업무 적용',
                      '응답/처리시간 및 운영평가 지표 통합관리',
                      '사업소별 운영 평가 비교 지표 제공'
                    ] 
                  },
                  { 
                    label: '그룹사 보안 정책 적용', 
                    items: [
                      '개인정보보호 시행령 및 법령 완벽 준수',
                      '정기 웹 취약성 평가 및 보안 기준 준수'
                    ] 
                  }
                ]} 
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const FeatureSlide: React.FC<{ index: string; title: string; subtitle: string; details: { label: string; items: string[] }[] }> = ({ index, title, subtitle, details }) => (
  <div className="min-w-full">
    <div className="bg-white p-12 md:p-16 border border-slate-100 shadow-xl flex flex-col min-h-[720px] items-stretch mx-2 rounded-[80px]">
      {/* 상단: 제목 및 설명 */}
      <div className="mb-12">
        <div className="flex items-center gap-8 mb-6">
          <span className="text-brand font-black text-7xl opacity-10 italic"># {index}</span>
          <h4 className="text-5xl font-black text-navy leading-tight">{title}</h4>
        </div>
        <p className="text-slate-600 text-2xl font-bold leading-relaxed max-w-5xl">{subtitle}</p>
      </div>
      
      {/* 하단: 이미지(좌) 및 상세설명(우) */}
      <div className="flex flex-col lg:flex-row gap-16 flex-1 items-stretch">
        {/* 이미지 플레이스홀더 영역 (좌) - 비중 확대 (1/2) */}
        <div className="lg:w-1/2 min-h-[400px] bg-slate-50 rounded-[50px] border border-slate-100 flex items-center justify-center relative overflow-hidden group pointer-events-none">
           <div className="flex flex-col items-center">
             <i className="fas fa-image text-slate-200 text-[120px] mb-8"></i>
             <span className="text-slate-300 font-black text-base tracking-[0.3em] uppercase">Visual Representation Area</span>
           </div>
           <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        {/* 상세 설명 리스트 (우) - 텍스트 사이즈 대폭 확대 */}
        <div className="lg:w-1/2 flex flex-col justify-center space-y-12">
          {details.map((sec, i) => (
            <div key={i} className="pl-10 border-l-4 border-brand">
              <h5 className="text-2xl font-black text-navy mb-5 tracking-tight">{sec.label}</h5>
              <ul className="space-y-4">
                {sec.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-4 text-xl font-bold text-slate-700 leading-snug">
                    <i className="fas fa-circle-check text-brand mt-1.5 text-lg"></i>
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
