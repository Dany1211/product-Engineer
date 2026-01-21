"use client";
import Link from 'next/link';
import CustomCursor from './components/CustomCursor';
import BottomNav from './components/BottomNav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <div className="grain-overlay" />
      <CustomCursor />
      <BottomNav />
      <main className="relative z-10">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}