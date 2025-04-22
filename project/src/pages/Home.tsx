import React from 'react';
import { Hero } from '../components/home/Hero';
import { About } from '../components/home/About'; 
import { Services } from '../components/home/Services';
import { Portfolio } from '../components/home/Portfolio';
import { Testimonials } from '../components/home/Testimonials';
import { Contact } from '../components/home/Contact';

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  );
};