
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-slate-400 py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 border-b border-white/10 pb-16">
          <div className="mb-12 md:mb-0">
            <div className="text-2xl font-black text-white mb-6 tracking-tighter">
              K-IoT <span className="text-brand">PLUS</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              코오롱엘에스아이(주)에서 제공하는<br />
              데이터 기반 지능형 빌딩 관리 솔루션.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-10">
            <div>
              <h5 className="text-white font-bold mb-6 text-sm">Service</h5>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#intro" className="hover:text-brand transition-colors">서비스 소개</a></li>
                <li><a href="#features" className="hover:text-brand transition-colors">서비스 특장점</a></li>
                <li><a href="#cases" className="hover:text-brand transition-colors">설치 사례</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-6 text-sm">Support</h5>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#support" className="hover:text-brand transition-colors">고객지원</a></li>
                <li><a href="#support" className="hover:text-brand transition-colors">뉴스레터 구독</a></li>
                <li><a href="#support" className="hover:text-brand transition-colors">자료실</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h5 className="text-white font-bold mb-6 text-sm">Contact</h5>
              <p className="text-sm text-slate-400 leading-loose">
                경기도 과천시 코오롱타워<br />
                T. 1588-0000<br />
                E. support@k-iotplus.co.kr
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-[13px] font-medium">
          <div className="mb-6 md:mb-0">
            &copy; {new Date().getFullYear()} K-IoT Plus. All Rights Reserved.
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white">개인정보처리방침</a>
            <a href="#" className="hover:text-white">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
