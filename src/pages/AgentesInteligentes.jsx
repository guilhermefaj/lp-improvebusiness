import React, { useLayoutEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TabSection } from '../components/TabSection';
import { AdaptiveSection } from '../components/AdaptiveSection';

export function AgentesInteligentes() {
  useLayoutEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 w-full">
        <div className="pt-[96px] sm:pt-[104px] md:pt-[112px]">
          <TabSection />
          <AdaptiveSection />
        </div>
      </main>
      <Footer />
    </div>
  );
} 