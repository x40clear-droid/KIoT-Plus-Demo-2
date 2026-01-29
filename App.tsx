
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceOverview from './components/ServiceOverview';
import ServiceFeatures from './components/ServiceFeatures';
import ServiceBenefits from './components/ServiceBenefits';
import UseCases from './components/UseCases';
import NewsletterSection from './components/NewsletterSection';
import SupportHub from './components/SupportHub';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="intro" className="py-24 bg-white scroll-mt-header">
          <ServiceOverview />
        </section>

        <section id="features" className="py-24 bg-bgGray scroll-mt-header">
          <ServiceFeatures />
        </section>

        <section id="benefits" className="scroll-mt-header">
          <ServiceBenefits />
        </section>

        <section id="cases" className="py-24 bg-white scroll-mt-header">
          <UseCases />
        </section>

        <section id="newsletter">
          <NewsletterSection />
        </section>

        <section id="support" className="py-24 bg-bgGray scroll-mt-header">
          <SupportHub />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
