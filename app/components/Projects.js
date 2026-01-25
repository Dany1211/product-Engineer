"use client";
import React, { useRef } from 'react';
import { projects } from '../data/content';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

export default function Projects() {
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section
            ref={containerRef}
            id="projects"
            className={`relative bg-black ${isMobile ? 'h-auto py-20' : 'h-[300vh]'}`}
        >
            {/* Background - Fluid Deep Aurora */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-purple-900/10 rounded-full blur-[120px] opacity-20 animate-pulse" />
                <div className="absolute bottom-[10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-900/10 rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className={`${isMobile ? 'relative min-h-screen flex flex-col' : 'sticky top-0 h-screen flex items-center overflow-hidden'}`}>
                <motion.div
                    style={isMobile ? {} : { x }}
                    className={`${isMobile ? 'flex flex-col pb-24 px-6 w-full' : 'flex gap-16 px-24 w-max'}`}
                >
                    {/* Intro Card */}
                    <div className={`${isMobile ? 'w-full min-h-[50vh] flex flex-col justify-center gap-6' : 'min-w-[400px] md:min-w-[600px] h-[70vh] flex flex-col justify-center gap-8 pl-12'}`}>
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-blue-500 font-mono tracking-wider text-sm uppercase"
                        >
                            Selected Work
                        </motion.span>
                        <h2 className={`font-bold text-white leading-[0.9] ${isMobile ? 'text-5xl' : 'text-6xl md:text-8xl'}`}>
                            Featured <br />
                            <span className="text-zinc-500">Projects.</span>
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-md">
                            A curated selection of my engineering work. I build systems that are robust, beautiful, and solve real problems. Scroll to explore.
                        </p>
                    </div>

                    {/* Project Cards */}
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} isMobile={isMobile} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index, isMobile }) {
    return (
        <div
            className={`group relative flex flex-col justify-between bg-zinc-900/90 border border-white/5 backdrop-blur-md rounded-3xl overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-zinc-900/95 shadow-2xl
            ${isMobile
                    ? 'w-full min-h-[50vh] p-6 sticky'
                    : 'min-w-[350px] md:min-w-[600px] h-[60vh] md:h-[70vh] p-8 md:p-12'
                }`}
            style={isMobile ? {
                top: `${15 + index * 5}vh`,
                marginBottom: '5vh'
            } : {}}
        >
            {/* Gradient Blob for mood */}
            <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

            {/* Top Content */}
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                    <span className="text-5xl md:text-7xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                        0{index + 1}
                    </span>
                    <div className="flex gap-2">
                        {project.links?.github && (
                            <a href={project.links.github} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
                                <Github size={20} />
                            </a>
                        )}
                        {project.links?.live && (
                            <a href={project.links.live} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
                                <ExternalLink size={20} />
                            </a>
                        )}
                        {/* Fallback for old link structure */}
                        {project.link && !project.links && (
                            <a href={project.link} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
                                <ExternalLink size={20} />
                            </a>
                        )}
                    </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed line-clamp-3 mb-6">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium text-zinc-300 bg-white/5 border border-white/5 rounded-full">
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* Bottom Visual / Abstract */}
            <div className="relative z-10 w-full h-[180px] mt-8 rounded-xl bg-black/50 border border-white/5 overflow-hidden group-hover:border-white/10 transition-colors flex items-center justify-center">
                {/*  If we had images, they would go here. Since we don't, we make an abstract UI representation */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />

                {/* Abstract UI Elements */}
                <div className="w-[90%] h-[120%] bg-zinc-900 rounded-t-lg border border-white/5 p-4 transform translate-y-8 group-hover:translate-y-4 transition-transform duration-500">
                    <div className="flex gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-red-500/30" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/30" />
                        <div className="w-2 h-2 rounded-full bg-green-500/30" />
                    </div>
                    <div className="space-y-2">
                        <div className="w-2/3 h-2 bg-white/10 rounded" />
                        <div className="w-full h-8 bg-white/5 rounded" />
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            <div className="h-16 bg-white/5 rounded" />
                            <div className="h-16 bg-white/5 rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
