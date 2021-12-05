import React, { FC } from 'react';
import NavBar from '../components/NavBar';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import WorkSection from '../components/WorkSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer/Footer';

const HomePage: FC = () => {
  return (
    <>
      <NavBar />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default HomePage;
