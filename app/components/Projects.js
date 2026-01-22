"use client";
import React, { useRef } from 'react';
import { projects } from '../data/content';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} id="projects" className="relative bg-black py-20">

            {/* Background - Fluid Deep Aurora */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-purple-900/10 rounded-full blur-[120px] opacity-30 animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-indigo-900/10 rounded-full blur-[120px] opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 mb-12">
                {/* Header */}
                <div className="flex flex-col items-start mb-10">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-400 font-medium tracking-wider text-sm mb-4 uppercase"
                    >
                        Selected Work
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-semibold text-white mb-8 leading-tight"
                    >
                        Digital <br /> Craftsmanship.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed"
                    >
                        Here are a few of my cherry-picked projects. I obsess over small details and build software that feels right.
                    </motion.p>
                </div>

                {/* Sticky Stack Project Cards */}
                <div className="flex flex-col gap-20">
                    {projects.map((project, index) => {
                        const targetScale = 1 - ((projects.length - index) * 0.05);
                        return (
                            <Card
                                key={index}
                                i={index}
                                project={project}
                                progress={scrollYProgress}
                                range={[index * 0.25, 1]}
                                targetScale={targetScale}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function Card({ i, project, progress, range, targetScale }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const scale = useTransform(progress, range, [1, targetScale]);

    // Choose a gradient based on index to give variety
    const gradients = [
        "from-violet-500/20 to-purple-500/20",
        "from-blue-500/20 to-cyan-500/20",
        "from-emerald-500/20 to-teal-500/20",
        "from-orange-500/20 to-red-500/20"
    ];
    const gradient = gradients[i % gradients.length];

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
                className="relative flex flex-col md:flex-row gap-6 bg-[#0a0a0a] border border-white/10 p-6 md:p-10 rounded-3xl w-full max-w-4xl h-[450px] shadow-2xl overflow-hidden"
            >
                {/* Abstract Visual Background */}
                <div className={`absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l ${gradient} blur-3xl opacity-20 -mr-20 pointer-events-none`} />

                <div className="flex flex-col justify-between w-full md:w-1/2 relative z-10 pointer-events-none">
                    <div>
                        <span className="text-zinc-500 text-sm font-mono mb-4 block">0{i + 1}</span>
                        <h3 className="text-4xl font-bold text-white mb-4">{project.title}</h3>
                        <p className="text-zinc-400 leading-relaxed text-base mb-8">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tech.map(t => (
                                <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-zinc-300 text-xs border border-white/5">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {project.links?.github && (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pointer-events-auto inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors w-fit group"
                            >
                                <span className="text-sm font-medium">Source Code</span>
                                <ArrowUpRight size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                        )}
                        {project.links?.live && (
                            <a
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pointer-events-auto inline-flex items-center gap-2 text-white hover:text-green-400 transition-colors w-fit group"
                            >
                                <span className="text-sm font-medium">Live Demo</span>
                                <ArrowUpRight size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                        )}
                        {/* Fallback for old link structure if it exists */}
                        {project.link && !project.links && (
                            <a href={project.link} className="pointer-events-auto inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors w-fit group">
                                <span className="text-sm font-medium">View Project</span>
                                <ArrowUpRight size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Visual Section - Abstract Representation since no images */}
                <div className="w-full md:w-1/2 relative h-full rounded-2xl overflow-hidden bg-white/5 border border-white/5 flex items-center justify-center group pointer-events-auto">
                    {/* Inner "Screen" representation */}
                    <div className="absolute inset-4 bg-[#050505] rounded-xl border border-white/5 flex flex-col overflow-hidden">
                        <div className="h-6 border-b border-white/5 bg-white/5 flex items-center px-4 gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-500/50" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                            <div className="w-2 h-2 rounded-full bg-green-500/50" />
                        </div>
                        <div className="flex-1 flex items-center justify-center relative p-8">
                            {/* Abstract Element per project type */}
                            {project.type === 'Mobile' ? (
                                <div className="w-32 h-64 border-2 border-white/10 rounded-[2rem] bg-zinc-900/50 flex flex-col shadow-2xl group-hover:scale-105 transition-transform duration-500">
                                    <div className="h-full w-full bg-gradient-to-br from-white/5 to-transparent p-4 flex flex-col gap-2">
                                        <div className="w-12 h-2 bg-white/10 rounded-full" />
                                        <div className="w-full h-20 bg-white/5 rounded-lg mt-4" />
                                        <div className="w-full h-8 bg-white/5 rounded-lg" />
                                        <div className="w-full h-8 bg-white/5 rounded-lg" />
                                    </div>
                                </div>
                            ) : (
                                <div className="w-full aspect-video border-2 border-white/10 rounded-xl bg-zinc-900/50 shadow-2xl group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent p-6 flex flex-col gap-4">
                                        <div className="flex gap-4">
                                            <div className="w-1/3 h-32 bg-white/5 rounded-lg" />
                                            <div className="w-2/3 h-32 bg-white/5 rounded-lg" />
                                        </div>
                                        <div className="w-full h-4 bg-white/5 rounded-full" />
                                        <div className="w-3/4 h-4 bg-white/5 rounded-full" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
