
import React, { useState, useEffect, useRef } from 'react';

interface CaseDetail {
  category: string;
  icon: string;
  purpose: string;
  targets: { subject: string; goal: string; note?: string }[];
  features: string[];
  examples: { title: string; sensor: string; desc: string }[];
}

const UseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlayStopped, setIsAutoPlayStopped] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 드래그 관련 ref
  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const cases: CaseDetail[] = [
    {
      category: '전기 부문',
      icon: 'fa-bolt-lightning',
      purpose: '전기 설비의 안정적 운영을 위해 정전 전환 장치(LBS, ALTS, ATS), 발전기 가동 및 배터리 전압 상태를 실시간 관리',
      targets: [
        { subject: '수변전 설비', goal: '정전(LBS/ALTS/ATS) 전환 감시, 보호계전기 동작 상태 감시, 변압기 온도/누수' },
        { subject: '발전기', goal: '정전 시 발전기 가동 여부 확인, 엔진 오일/냉각수 이상 및 배터리 전압 실시간 감시' },
        { subject: '판넬/MCC', goal: '분전반 전력사용량 계측, 메인 차단기 트립 감시, 판넬 내 고온/누수 감시' },
        { subject: 'UPS/배터리', goal: 'UPS 운전 상태 및 입출력 전압 감시, 배터리 뱅크 전압 상시 모니터링' },
        { subject: '전기차 충전', goal: '충전 구역 화재(연기/불꽃) 감시, 지능형 CCTV 연동 구역 상황 관리' }
      ],
      features: [
        '정전 상황 시 LBS/ATS 동작 상태 즉각 확인 및 알림',
        '최대 수요 전력 제어기 연동으로 전력 피크 관리',
        '배터리 적정 전압값 상시 감시로 예비 전력 확보',
        '무선 LoRa-WAN 통신으로 노후 배선 교체 없는 구축'
      ],
      examples: [
        { title: '발전기 정전 대응 감시', sensor: '전압감지센서', desc: '정전 시 비상발전기 자동 기동 여부 확인' },
        { title: '전기차 구역 화재 감시', sensor: '연기/불꽃 센서', desc: '지능형 CCTV를 활용한 화재 감지' },
        { title: '전력 피크 관리', sensor: '최대수요전력제어기', desc: '한전 계량기 호환 에너지 효율 관리' },
        { title: '분전반 전력 사용 분석', sensor: '전력량/전류 센서', desc: '에너지 사용 패턴 분석 및 낭비 제거' },
        { title: '배터리 뱅크 전압 감시', sensor: '전압감지센서', desc: '비상 배터리 적정 전압 상시 체크' },
        { title: '전기실 환경 모니터링', sensor: '온습도/누수 센서', desc: '고온 및 누수로 인한 고장 사전 예방' }
      ]
    },
    {
      category: '기계 부문',
      icon: 'fa-gears',
      purpose: '기계 설비의 안정적 운영 및 적정 상태 유지를 위한 냉난방, 급수, 급탕, 위생 설비 실시간 감시',
      targets: [
        { subject: '기계실 인프라', goal: '실 전체 온습도, 펌프 베어링 소음/진동, 배관 누수 및 결로 감시' },
        { subject: '열원/공조 설비', goal: '냉난방기 가동 상태, 공조기 풍량 및 필터 차압 감시, 냉각탑 수위 체크' },
        { subject: '수조/탱크 설비', goal: '저수위/고수위 경보, 배수펌프 집수정 수위 감시, 정화조 가스 농도 감시' },
        { subject: '회전 기기 펌프', goal: '펌프 토출 압력 감시, 모터 진동/온도 센서를 통한 예지보전' },
        { subject: '가스/위생 설비', goal: '가스 배관 누출 감시, 화장실 소모품 잔량 및 피플카운팅 관리' }
      ],
      features: [
        '냉난방 헤더 및 배관의 적정 압력 실시간 감시',
        '초음파 수위 센서로 탱크 및 집수정 침수 예방',
        '가속도 진동 센서로 대형 펌프/모터 고장 사전 예측',
        '가스 누출 시 원격 관제반을 통한 즉각적인 초동 대처'
      ],
      examples: [
        { title: '위험 구역 누수 감시', sensor: '물감지센서', desc: '배관 파손 시 밸브 자동 차단 및 알림' },
        { title: '급수 펌프 압력 모니터링', sensor: '압력센서', desc: '적정 급수 압력 유지를 통한 민원 방지' },
        { title: '냉난방 헤더 운전 감시', sensor: '차압/온도 센서', desc: '공급/환수 온도차 분석으로 효율 최적화' },
        { title: '펌프 고장 예지 보전', sensor: '가속도 진동 센서', desc: '모터 이상 진동 감지로 수명 연장' },
        { title: '저수조 고/저 수위 감시', sensor: '수위/누수 센서', desc: '단수 및 넘침 사고 방지를 위한 체크' },
        { title: '가스누출 판넬 관리', sensor: '가스감지/전압 센서', desc: '가스 정거장 및 주방 입상관 원격 감시' }
      ]
    },
    {
      category: '소방 부문',
      icon: 'fa-fire-extinguisher',
      purpose: '화재 시 신속한 알림 및 펌프 동작 상태 모니터링을 통한 골든타임 확보 및 보험료 절감',
      targets: [
        { subject: '수신반(P/R형)', goal: '주경종/지구경종 동작 신호 감시, 포인트별 화재 신호 원격 모니터링' },
        { subject: '소화 펌프 설비', goal: '소방 주펌프/보조펌프/충압펌프 동작 및 정지 상태 상시 감시' },
        { subject: '소화전/압력챔버', goal: '배관 내 적정 압력 유지 감시, 동파 방지용 온도 감시' },
        { subject: '비상 방송 설비', goal: '화재 시 비상 앰프/스피커 출력 신호 감시 및 방송 송출 확인' }
      ],
      features: [
        '화재보험법 개정(25.01)에 따른 보험료 5% 추가 할인 적용',
        '수신반 화재 신호 발생 시 앱을 통한 즉각 상황 전파',
        '소방 펌프의 공회전 및 잦은 가동 원인 실시간 분석',
        '별도 개발 없이 접점 및 전압 신호로 즉시 구축 가능'
      ],
      examples: [
        { title: '수신반 연동 알림', sensor: '전압/접점 센서', desc: '화재 신호 즉각 관제 센터 및 앱 전파' },
        { title: '스피커 방송 모니터링', sensor: '오디오 센서', desc: '비상 방송 실제 송출 여부 원격 확인' },
        { title: '소방 주펌프 동작 감시', sensor: '전류/접점 센서', desc: '소화수 방출 상황 실시간 모니터링' },
        { title: '압력챔버 수압 관리', sensor: '압력센서', desc: '누수로 인한 펌프 잦은 기동 방지' },
        { title: '저수조 수위 관리', sensor: '수위 센서', desc: '소화용수 부족 상황 사전 경보' },
        { title: '소방판넬 가동 감시', sensor: '전압감지센서', desc: '판넬 트립으로 인한 설비 무력화 방지' }
      ]
    },
    {
      category: '보안 및 미화',
      icon: 'fa-user-shield',
      purpose: '365일 무인 보안 체계 지원 및 데이터 기반의 효율적인 미화 업무 자동화 실현',
      targets: [
        { subject: '보안 취약 구역', goal: '출입문 도어 개폐 감시, 열/동작감지 침입 실시간 탐지' },
        { subject: '순찰 및 포인트', goal: '순찰 코스별 실시간 순찰 이력 관리 및 누락 방지' },
        { subject: '지능형 화장실', goal: '공기질(냄새) 감시, 소모품 잔량 감시, 재실 현황 파악' },
        { subject: '사용 빈도 관리', goal: '피플카운터 활용 공간 빈도 분석 및 청소 주기 자동 할당' }
      ],
      features: [
        '비접촉식 센서 활용 휴지/물비누 리필 시점 정밀 예측',
        '데이터 기반 미화 작업 지시로 불필요한 청소 횟수 절감',
        'LoRa 통신으로 보안 취약 지점 즉시 무선 구축 보완',
        '공간 사용 데이터 수집으로 공간 재배치 의사결정 지원'
      ],
      examples: [
        { title: '보안 취약지역 감시', sensor: '도어/동작 센서', desc: '야간/휴일 무단 진입 즉각 탐지' },
        { title: '스마트 순찰 관리', sensor: '무선 버튼 센서', desc: '순찰 포인트 태그로 업무 이력 자동화' },
        { title: '물비누 자동 리필 알림', sensor: '레벨 센서', desc: '소모품 부족 시 미화원에게 자동 푸시' },
        { title: '휴지 잔량 모니터링', sensor: '광학 레벨 센서', desc: '데이터 기반 선제적 소모품 보충' },
        { title: '피플카운팅 빈도 분석', sensor: '적외선 카운터', desc: '사용 인원 분석을 통한 효율적 미화 운영' },
        { title: '화장실 실내 환경 관리', sensor: '온습도/암모니아 센서', desc: '악취 발생 시 즉각 환기 지시' }
      ]
    },
    {
      category: '기타 및 사각지대',
      icon: 'fa-binoculars',
      purpose: '기존 시스템 관리 범위에 없는 사각지대 및 고위험 취약 지역의 선제적 안전 관리',
      targets: [
        { subject: '특수 시설 관리', goal: '서버실 정밀 온습도 관리, 실험용 가스 누출 감시' },
        { subject: '밀폐 공간 안전', goal: '집수정 내 산소 농도 감시, 침수 및 유해가스 상시 체크' },
        { subject: '구조물 안전 진단', goal: '옹벽/축대 기울기 변위 감시, 지반 침하 상시 모니터링' },
        { subject: '창고 및 물류', goal: '동파 방지 온습도 감시, 화재 감시 및 전도 사고 예방' }
      ],
      features: [
        '음영 구역을 해소하는 장거리 무선 통신 솔루션 적용',
        '위험 예방을 위한 지능형 룰(Rule-set) 상시 가동',
        '인력 접근 어려운 협소 공간 및 고소 부위 원격 관리',
        '기존 인프라와 단절된 설비의 독립적인 모니터링'
      ],
      examples: [
        { title: '유해가스 안전 관리', sensor: '복합 가스 센서', desc: '농도 이상 발생 시 환기 팬 자동 가동' },
        { title: '서버실 정밀 환경 감시', sensor: '온습도/누수 센서', desc: '고가 장비 보호를 위한 24시간 감시' },
        { title: '밀폐구역 작업자 안전', sensor: '산소/유해가스 센서', desc: '작업 전 농도 체크 및 상시 모니터링' },
        { title: '협소 공간 누수 탐지', sensor: '무선 누수 센서', desc: '육안 확인 어려운 공동구 하단 감시' },
        { title: '구조물 기울기 감시', sensor: '기울기 센서', desc: '붕괴 전조 현상 사전 탐지' },
        { title: '창고 저온 보관 관리', sensor: '정밀 온도 센서', desc: '식자재 및 부품 신선도 유지' }
      ]
    }
  ];

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const toggleAutoPlay = (e: React.MouseEvent) => {
    // 버튼 클릭 시에는 토글하지 않음
    if ((e.target as HTMLElement).closest('button')) return;
    setIsAutoPlayStopped(!isAutoPlayStopped);
  };

  const stopAutoPlayTemporarily = () => {
    resetTimeout();
  };

  useEffect(() => {
    resetTimeout();
    if (!isAutoPlayStopped) {
      timeoutRef.current = setTimeout(() => {
        setActiveTab((prev) => (prev + 1) % cases.length);
      }, 7000);
    }
    return () => resetTimeout();
  }, [activeTab, isAutoPlayStopped]);

  const handleTabClick = (index: number) => {
    setIsAutoPlayStopped(true);
    setActiveTab(index);
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
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setActiveTab((prev) => (prev + 1) % cases.length);
      } else {
        setActiveTab((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
      }
    }
    
    dragStartX.current = null;
    isDragging.current = false;
  };

  return (
    <div className="w-full bg-white py-24 md:py-32">
      <div className="container mx-auto px-6">
        
        <header className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-4xl">
            <h3 className="text-4xl md:text-5xl font-black text-navy leading-tight mb-8">
              K-IoT Plus <span className="text-brand">설치사례</span>
            </h3>
            <p className="text-slate-500 text-xl font-bold leading-relaxed">
              각 부분별 목적과 현장 설치 사례 입니다.
            </p>
          </div>
        </header>

        {/* 상단 탭 (카테고리 선택) */}
        <div className="flex flex-wrap justify-start md:justify-center mb-16 gap-3">
          {cases.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleTabClick(idx)}
              className={`px-8 py-4 rounded-2xl text-lg font-black transition-all flex items-center gap-3 ${
                activeTab === idx 
                  ? 'bg-brand text-white shadow-xl scale-105' 
                  : 'bg-bgGray text-slate-500 hover:bg-slate-200'
              }`}
            >
              <i className={`fas ${item.icon}`}></i>
              {item.category}
            </button>
          ))}
        </div>

        {/* 슬라이딩 컨텐츠 영역 */}
        <div 
          className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
          onClick={toggleAutoPlay}
        >
          <div 
            className="flex transition-transform duration-1000 ease-in-out" 
            style={{ transform: `translateX(-${activeTab * 100}%)` }}
          >
            {cases.map((caseItem, idx) => (
              <div key={idx} className="min-w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch px-2">
                  {/* 왼쪽: 설명 영역 */}
                  <div className="lg:col-span-6 flex flex-col gap-10">
                    <div className="flex-1 flex flex-col">
                      <h4 className="text-2xl font-black text-navy mb-4 border-l-4 border-brand pl-4">관리 목적</h4>
                      <div className="text-slate-600 text-lg font-bold leading-relaxed bg-slate-50 p-8 rounded-3xl border border-slate-100 flex-1">
                        {caseItem.purpose}
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col">
                      <h4 className="text-2xl font-black text-navy mb-4 border-l-4 border-brand pl-4">적용 대상</h4>
                      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white flex-1">
                        <table className="w-full text-left h-full">
                          <thead className="bg-slate-50 border-b border-slate-200">
                            <tr>
                              <th className="px-6 py-4 text-sm font-black text-slate-700 w-1/3">적용 대상</th>
                              <th className="px-6 py-4 text-sm font-black text-slate-700">관리 내용</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {caseItem.targets.map((row, i) => (
                              <tr key={i} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4 text-[15px] font-bold text-navy bg-slate-50/20">{row.subject}</td>
                                <td className="px-6 py-4 text-[14px] font-medium text-slate-600 leading-relaxed">{row.goal}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col">
                      <h4 className="text-2xl font-black text-navy mb-4 border-l-4 border-brand pl-4">기능 및 특장점</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                        {caseItem.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                            <i className="fas fa-circle-check text-brand mt-1 flex-shrink-0"></i>
                            <span className="text-[14px] font-bold text-slate-700 leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* 오른쪽: 이미지 플레이스홀더 그리드 */}
                  <div className="lg:col-span-6 flex flex-col gap-6">
                    <h4 className="text-2xl font-black text-navy mb-4 border-l-4 border-brand pl-4">현장 설치 예시</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                      {caseItem.examples.map((ex, i) => (
                        <div key={i} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                          <div className="relative aspect-video bg-slate-100 flex items-center justify-center pointer-events-none">
                            <div className="text-slate-300 text-center p-4">
                               <i className="fas fa-image text-5xl mb-3 block"></i>
                               <span className="text-xs font-bold uppercase tracking-widest">Image Area</span>
                            </div>
                          </div>
                          <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                              <h5 className="text-lg font-black text-navy mb-2 group-hover:text-brand transition-colors">{ex.title}</h5>
                              <div className="text-red-500 font-black text-[11px] mb-3 flex items-center gap-1.5 uppercase tracking-tighter">
                                <i className="fas fa-microchip"></i>
                                {ex.sensor}
                              </div>
                            </div>
                            <p className="text-slate-500 text-sm font-bold leading-relaxed">{ex.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-left mt-20">
          <p className="text-slate-600 text-base font-bold leading-relaxed">
            <i className="fas fa-info-circle mr-2 text-brand"></i>
            전체 영역을 클릭하면 자동 전환이 일시정지/재생됩니다. 드래그하여 다른 사례를 확인할 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
