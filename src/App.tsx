import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { StrategicFoundations } from './components/StrategicFoundations';
import { WhyUs } from './components/WhyUs';
import { CaseStudies } from './components/CaseStudies';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800 font-sans">
      <Navbar />
      <Hero />
      <Services />
      <StrategicFoundations />
      <WhyUs />
      <CaseStudies />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;