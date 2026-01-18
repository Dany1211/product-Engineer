"use client";
import Link from 'next/link';
import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { projects } from '../data/content';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Section from './Section';

export default function WorkGallery() {
    const [activeProject, setActiveProject] = useState(null);
    // Mouse position tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring physics for the floating image
    const springConfig = { damping: 20, stiffness: 200 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouseX.set(clientX - 200); // Offset to center image
        mouseY.set(clientY - 150);
    };

    return (
        <Section id="projects" className="py-32 relative">
            <div className="mb-16 border-b border-black md:border-none pb-8">
                <h2 className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-4">Selected Works</h2>
                <p className="text-3xl font-serif">A curated list of production features.</p>
            </div>

            <div
                className="w-full relative"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setActiveProject(null)}
            >
                {projects.map((project, index) => (
                    <Link
                        key={index}
                        href={`#project-${index}`}
                        className="group block border-t border-zinc-300 py-12 transition-all hover:px-4"
                        onMouseEnter={() => setActiveProject(index)}
                    >
                        <div className="flex items-baseline justify-between">
                            <h3 className="text-5xl md:text-7xl font-sans font-light tracking-tight text-zinc-400 group-hover:text-zinc-900 transition-colors duration-300">
                                {project.title}
                            </h3>
                            <div className="flex items-center gap-4">
                                <span className="hidden md:inline-block text-zinc-400 font-mono text-sm group-hover:text-zinc-900">
                                    {project.type}
                                </span>
                                <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 text-zinc-300 group-hover:text-orange-500 transition-colors duration-300" />
                            </div>
                        </div>
                        <div className="max-w-xl mt-4 overflow-hidden h-0 group-hover:h-auto transition-all duration-300">
                            <p className="text-zinc-600 text-lg pt-2">{project.description}</p>
                            <div className="flex gap-2 mt-4">
                                {project.tech.map(t => (
                                    <span key={t} className="text-xs border border-zinc-300 px-2 py-1 rounded-full">{t}</span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Floating Reveal Image Container */}
            <motion.div
                className="fixed top-0 left-0 w-[400px] h-[300px] bg-zinc-800 pointer-events-none z-50 rounded-xl overflow-hidden hidden md:block"
                style={{
                    x: springX,
                    y: springY,
                    opacity: activeProject !== null ? 1 : 0,
                    scale: activeProject !== null ? 1 : 0.5,
                }}
            >
                {/* Placeholder for project images since we don't have real ones yet. 
            In a real scenario, we'd render the active project's image here. */}
                <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-white font-mono text-xs">
                    NO IMAGE PREVIEW
                </div>
            </motion.div>
        </Section>
    );
}
