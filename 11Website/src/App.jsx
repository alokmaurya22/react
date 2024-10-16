import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GoalSection from './components/GoalSection';
import WhyBecomeHero from './components/WhyBecomeHero';
import JourneySection from './components/JourneySection';
import SuperPowerSection from './components/SuperPowerSection';
import RegularUserSection from './components/RegularUserSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <GoalSection />
      <WhyBecomeHero />
      <JourneySection />
      <SuperPowerSection />
      <RegularUserSection />
      <Footer />
    </div>
  );
};

export default App;
