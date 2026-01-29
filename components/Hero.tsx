
import React from 'react';

const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Building" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/40 to-navy/70"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.15] mb-8 drop-shadow-2xl">
            건물관리 효율화<br />
            <span className="text-white">K-IoT Plus</span> 가 앞장서겠습니다
          </h1>
          <p className="text-lg md:text-2xl text-white/95 mb-12 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-lg">
            K-IoT Plus는 IoT 센서를 통해 건물을 감시하고<br className="hidden md:block" />
            데이터 분석을 통한 예측 가능한 사고를 예방하고<br className="hidden md:block" />
            효율적인 건물 관리에 도움이 됩니다
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#support"
              onClick={(e) => handleScrollTo(e, 'support')}
              className="w-full sm:w-auto px-10 py-5 bg-white text-brand font-bold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              상담 신청하기
            </a>
            <a
              href="#newsletter"
              onClick={(e) => handleScrollTo(e, 'newsletter')}
              className="w-full sm:w-auto px-10 py-5 bg-navy text-white font-bold rounded-full text-lg shadow-xl border border-white/20 hover:bg-navy/80 transition-all transform hover:-translate-y-1"
            >
              뉴스레터 바로 가기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
