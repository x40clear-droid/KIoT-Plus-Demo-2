
import React, { useState } from 'react';

interface WeeklyLink {
  label: string;
  link: string;
}

interface MonthlyArchive {
  month: string;
  weeks: WeeklyLink[];
}

interface NewsletterCategory {
  year: string;
  data: MonthlyArchive[];
}

const NewsletterSection: React.FC = () => {
  const [openFmIndex, setOpenFmIndex] = useState<number | null>(0);
  const [openIotIndex, setOpenIotIndex] = useState<number | null>(0);
  
  // 페이징 상태 (0부터 시작, 한 페이지에 3개월씩)
  const [fmPage, setFmPage] = useState(0);
  const [iotPage, setIotPage] = useState(0);
  
  // 애니메이션 방향 상태 ('next' 또는 'prev')
  const [fmDirection, setFmDirection] = useState<'next' | 'prev'>('next');
  const [iotDirection, setIotDirection] = useState<'next' | 'prev'>('next');

  const months = ['12월', '11월', '10월', '9월', '8월', '7월', '6월', '5월', '4월', '3월', '2월', '1월'];

  // FM 뉴스레터 전체 데이터 (12개월)
  const fmNewsletterData: NewsletterCategory = {
    year: '2024',
    data: months.map(m => ({
      month: m,
      weeks: [
        { label: `${m} 1주 뉴스레터`, link: '#' },
        { label: `${m} 2주 뉴스레터`, link: '#' },
        { label: `${m} 3주 뉴스레터`, link: '#' },
        { label: `${m} 4주 뉴스레터`, link: '#' },
      ]
    }))
  };

  // K-IoT 뉴스레터 전체 데이터 (12개월)
  const iotNewsletterData: NewsletterCategory = {
    year: '2024',
    data: months.map(m => ({
      month: m,
      weeks: [
        { label: `${m} 1주 뉴스레터`, link: '#' },
        { label: `${m} 2주 뉴스레터`, link: '#' },
        { label: `${m} 3주 뉴스레터`, link: '#' },
      ]
    }))
  };

  const ITEMS_PER_PAGE = 3;

  const toggleFm = (index: number) => {
    setOpenFmIndex(openFmIndex === index ? null : index);
  };

  const toggleIot = (index: number) => {
    setOpenIotIndex(openIotIndex === index ? null : index);
  };

  // 페이징된 데이터 계산
  const visibleFmData = fmNewsletterData.data.slice(fmPage * ITEMS_PER_PAGE, (fmPage + 1) * ITEMS_PER_PAGE);
  const visibleIotData = iotNewsletterData.data.slice(iotPage * ITEMS_PER_PAGE, (iotPage + 1) * ITEMS_PER_PAGE);

  return (
    <div className="w-full bg-white py-24 md:py-32 scroll-mt-header" id="newsletter">
      <div className="container mx-auto px-6">
        {/* 헤더 영역 */}
        <header className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-6">뉴스레터</h2>
          <p className="text-slate-500 text-xl font-bold max-w-3xl mx-auto leading-relaxed">
            FM 사업의 최신 뉴스 와 K-IoT Plus 의 새로운 뉴스를 분야별로 구독 하세요
          </p>
        </header>

        {/* 아카이브 모아보기 (2열 병렬 배치) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20 items-stretch">
          
          {/* FM 뉴스레터 아카이브 */}
          <div className="flex flex-col bg-slate-50/50 rounded-[40px] p-8 md:p-12 border border-slate-100 h-full overflow-hidden">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <div className="w-2 h-8 bg-navy rounded-full"></div>
                <h4 className="text-2xl font-black text-navy uppercase tracking-tight">FM Newsletter</h4>
              </div>
              {/* 페이징 컨트롤 */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => {
                    setFmDirection('prev');
                    const nextPage = Math.max(0, fmPage - 1);
                    setFmPage(nextPage);
                    setOpenFmIndex(nextPage * ITEMS_PER_PAGE);
                  }}
                  disabled={fmPage === 0}
                  className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${fmPage === 0 ? 'border-slate-200 text-slate-200 cursor-not-allowed' : 'border-slate-300 text-slate-600 hover:bg-navy hover:text-white'}`}
                >
                  <i className="fas fa-chevron-left text-xs"></i>
                </button>
                <button 
                  onClick={() => {
                    setFmDirection('next');
                    const nextPage = Math.min(Math.ceil(fmNewsletterData.data.length / ITEMS_PER_PAGE) - 1, fmPage + 1);
                    setFmPage(nextPage);
                    setOpenFmIndex(nextPage * ITEMS_PER_PAGE);
                  }}
                  disabled={(fmPage + 1) * ITEMS_PER_PAGE >= fmNewsletterData.data.length}
                  className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${(fmPage + 1) * ITEMS_PER_PAGE >= fmNewsletterData.data.length ? 'border-slate-200 text-slate-200 cursor-not-allowed' : 'border-slate-300 text-slate-600 hover:bg-navy hover:text-white'}`}
                >
                  <i className="fas fa-chevron-right text-xs"></i>
                </button>
              </div>
            </div>

            <div 
              key={fmPage} 
              className={`flex flex-col gap-3 flex-1 mb-12 ${fmDirection === 'next' ? 'animate-slide-in-right' : 'animate-slide-in-left'}`}
            >
              {visibleFmData.map((item, idx) => {
                const globalIdx = fmPage * ITEMS_PER_PAGE + idx;
                return (
                  <div key={globalIdx} className="bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md">
                    <button 
                      onClick={() => toggleFm(globalIdx)}
                      className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-slate-50"
                    >
                      <span className="text-[15px] font-bold text-slate-700">
                        {fmNewsletterData.year}년 {item.month} 뉴스레터 모아보기
                      </span>
                      <i className={`fas fa-chevron-down text-slate-300 transition-transform duration-300 ${openFmIndex === globalIdx ? 'rotate-180 text-brand' : ''}`}></i>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFmIndex === globalIdx ? 'max-h-64 opacity-100 border-t border-slate-50' : 'max-h-0 opacity-0'}`}>
                      <div className="p-4 bg-slate-50/30 flex flex-col gap-2">
                        {item.weeks.map((week, wIdx) => (
                          <a 
                            key={wIdx} 
                            href={week.link} 
                            className="flex items-center justify-between px-4 py-3 rounded-xl bg-white border border-slate-100 hover:border-brand hover:text-brand transition-all group"
                          >
                            <span className="text-sm font-bold text-slate-600 group-hover:text-brand">{week.label}</span>
                            <i className="fas fa-external-link-alt text-[10px] opacity-30 group-hover:opacity-100"></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* FM 전용 구독 박스 (수정하지 않음) */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mt-auto">
              <h5 className="font-black text-navy mb-2 flex items-center gap-2">
                <i className="far fa-envelope text-brand"></i>
                FM 뉴스레터 구독하기
              </h5>
              <p className="text-xs text-slate-400 font-bold mb-6">시설 관리 트렌드를 메일로 보내드립니다.</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="이메일 주소 입력" 
                  className="flex-1 px-5 py-3 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand outline-none text-sm font-bold"
                />
                <button className="bg-navy text-white px-6 py-3 rounded-xl font-black text-sm hover:bg-black transition-all">
                  신청
                </button>
              </form>
            </div>
          </div>

          {/* K-IoT 뉴스레터 아카이브 */}
          <div className="flex flex-col bg-brand/[0.03] rounded-[40px] p-8 md:p-12 border border-brand/5 h-full overflow-hidden">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <div className="w-2 h-8 bg-brand rounded-full"></div>
                <h4 className="text-2xl font-black text-navy uppercase tracking-tight">K-IoT Newsletter</h4>
              </div>
              {/* 페이징 컨트롤 */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => {
                    setIotDirection('prev');
                    const nextPage = Math.max(0, iotPage - 1);
                    setIotPage(nextPage);
                    setOpenIotIndex(nextPage * ITEMS_PER_PAGE);
                  }}
                  disabled={iotPage === 0}
                  className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${iotPage === 0 ? 'border-slate-200 text-slate-200 cursor-not-allowed' : 'border-slate-300 text-slate-600 hover:bg-brand hover:text-white'}`}
                >
                  <i className="fas fa-chevron-left text-xs"></i>
                </button>
                <button 
                  onClick={() => {
                    setIotDirection('next');
                    const nextPage = Math.min(Math.ceil(iotNewsletterData.data.length / ITEMS_PER_PAGE) - 1, iotPage + 1);
                    setIotPage(nextPage);
                    setOpenIotIndex(nextPage * ITEMS_PER_PAGE);
                  }}
                  disabled={(iotPage + 1) * ITEMS_PER_PAGE >= iotNewsletterData.data.length}
                  className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${(iotPage + 1) * ITEMS_PER_PAGE >= iotNewsletterData.data.length ? 'border-slate-200 text-slate-200 cursor-not-allowed' : 'border-slate-300 text-slate-600 hover:bg-brand hover:text-white'}`}
                >
                  <i className="fas fa-chevron-right text-xs"></i>
                </button>
              </div>
            </div>

            <div 
              key={iotPage} 
              className={`flex flex-col gap-3 flex-1 mb-12 ${iotDirection === 'next' ? 'animate-slide-in-right' : 'animate-slide-in-left'}`}
            >
              {visibleIotData.map((item, idx) => {
                const globalIdx = iotPage * ITEMS_PER_PAGE + idx;
                return (
                  <div key={globalIdx} className="bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md">
                    <button 
                      onClick={() => toggleIot(globalIdx)}
                      className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-slate-50"
                    >
                      <span className="text-[15px] font-bold text-slate-700">
                        {iotNewsletterData.year}년 {item.month} 뉴스레터 모아보기
                      </span>
                      <i className={`fas fa-chevron-down text-slate-300 transition-transform duration-300 ${openIotIndex === globalIdx ? 'rotate-180 text-brand' : ''}`}></i>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIotIndex === globalIdx ? 'max-h-64 opacity-100 border-t border-slate-50' : 'max-h-0 opacity-0'}`}>
                      <div className="p-4 bg-slate-50/30 flex flex-col gap-2">
                        {item.weeks.map((week, wIdx) => (
                          <a 
                            key={wIdx} 
                            href={week.link} 
                            className="flex items-center justify-between px-4 py-3 rounded-xl bg-white border border-slate-100 hover:border-brand hover:text-brand transition-all group"
                          >
                            <span className="text-sm font-bold text-slate-600 group-hover:text-brand">{week.label}</span>
                            <i className="fas fa-external-link-alt text-[10px] opacity-30 group-hover:opacity-100"></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* K-IoT 전용 구독 박스 (수정하지 않음) */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mt-auto">
              <h5 className="font-black text-navy mb-2 flex items-center gap-2">
                <i className="far fa-paper-plane text-brand"></i>
                K-IoT 뉴스레터 구독하기
              </h5>
              <p className="text-xs text-slate-400 font-bold mb-6">IoT 솔루션 업데이트 소식을 전해드립니다.</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="이메일 주소 입력" 
                  className="flex-1 px-5 py-3 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand outline-none text-sm font-bold"
                />
                <button className="bg-brand text-white px-6 py-3 rounded-xl font-black text-sm hover:bg-brand-dark transition-all shadow-lg shadow-brand/20">
                  신청
                </button>
              </form>
            </div>
          </div>

        </div>

        <div className="text-center">
          <p className="text-slate-400 text-sm font-medium">
            <i className="fas fa-info-circle mr-2 opacity-50"></i>
            상단의 화살표 버튼을 클릭하여 3개월 단위로 지난 뉴스레터 모아보기를 확인하실 수 있습니다.
          </p>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideInFromRight {
          0% { transform: translateX(30px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInFromLeft {
          0% { transform: translateX(-30px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in-right {
          animation: slideInFromRight 0.4s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slideInFromLeft 0.4s ease-out forwards;
        }
      `}} />
    </div>
  );
};

export default NewsletterSection;
