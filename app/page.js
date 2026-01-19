"use client";
import Link from 'next/link';
import CustomCursor from './components/CustomCursor';
import BottomNav from './components/BottomNav';
import Hero from './components/Hero';
import WorkGallery from './components/WorkGallery';
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
        <WorkGallery />
        <Contact />
        <Footer />
      </main>
    </>
  );
}