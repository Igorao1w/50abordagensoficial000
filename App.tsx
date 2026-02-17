import React from 'react';
import { Hero } from './components/Hero';
import { FeaturesCarousel } from './components/FeaturesCarousel';
import { PainPoints } from './components/PainPoints';
import { Comparison } from './components/Comparison';
import { Deliverables } from './components/Deliverables';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f3ffe3] font-sans selection:bg-[#7ac70c] selection:text-white">
      <Hero />
      <FeaturesCarousel />
      <PainPoints />
      <Comparison />
      <Deliverables />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;