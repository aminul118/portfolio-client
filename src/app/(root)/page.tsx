import About from '@/components/Home/About/About';
import Education from '@/components/Home/Education';
import Experience from '@/components/Home/Experience/Experience';
import HeroBanner from '@/components/Home/HeroSection/HeroBanner';
import Projects from '@/components/Home/Projects/Projects';
import OtherSkills from '@/components/Home/Skills/OtherSkills';
import Skills from '@/components/Home/Skills/Skills';
import { Contact } from 'lucide-react';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <About />
      <Skills />
      <OtherSkills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;
