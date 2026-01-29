
import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: '서비스 소개', href: '#intro' },
    { label: '서비스 특장점', href: '#features' },
    { label: '설치 사례', href: '#cases' },
    { label: '뉴스레터', href: '#newsletter' },
    { label: '고객지원', href: '#support' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === '#hero' || href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetId = href.replace('#', '');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#hero" 
          onClick={(e) => handleScrollTo(e, '#hero')}
          className="flex items-center gap-1.5 transition-transform hover:scale-105"
        >
          <span className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-brand' : 'text-white'}`}>K-IoT</span>
          <span className="bg-red-600 text-white px-1.5 py-0.5 rounded-[4px] text-[10px] font-black uppercase tracking-widest leading-none">PLUS</span>
        </a>

        {/* 데스크탑 메뉴 */}
        <div className="hidden md:flex space-x-10 items-center">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className={`text-[15px] font-semibold transition-colors hover:text-brand ${isScrolled ? 'text-slate-800' : 'text-white'}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#support"
            onClick={(e) => handleScrollTo(e, '#support')}
            className={`px-6 py-2.5 rounded-full text-[14px] font-bold transition-all shadow-sm ${
              isScrolled 
                ? 'bg-brand text-white hover:bg-brand-dark' 
                : 'bg-white text-brand hover:bg-brand hover:text-white'
            }`}
          >
            상담 신청하기
          </a>
        </div>

        {/* 모바일 토글 */}
        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} ${isScrolled ? 'text-navy' : 'text-white'}`}></i>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen border-t' : 'max-h-0'}`}>
        <div className="flex flex-col p-8 space-y-6">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="text-xl font-bold text-navy hover:text-brand"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#support"
            onClick={(e) => handleScrollTo(e, '#support')}
            className="bg-brand text-white text-center py-4 rounded-xl font-bold text-lg"
          >
            상담 신청하기
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
