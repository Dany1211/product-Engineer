"use client";
import { experience, achievements } from '../data/content';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Trophy, Calendar, Building2, CheckCircle2, Zap, Cpu, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

export default function Experience() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    return (
        <section id="experience" ref={containerRef} className="py-32 bg-[#e8e8e8] relative overflow-hidden">
            {/* Background Circuit Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 flex items-end gap-6"
                >
                    <div className="relative">
                        <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-[#eb5939]" />
                        <h2 className="text-5xl md:text-7xl font-transporter font-bold text-zinc-900 tracking-tighter uppercase">
                            System<br /><span className="text-[#eb5939]">Logs</span>
                        </h2>
                    </div>
                    <div className="pb-4 hidden md:block">
                        <p className="font-mono text-zinc-500 text-sm">/// EXPERIENCE_AND_RECOGNITION_MODULE_V2.0</p>
                        <div className="h-1 w-full bg-[#eb5939] mt-2" />
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* Experience Main Circuit */}
                    <div className="lg:col-span-7 relative">
                        {/* Animated Circuit Line */}
                        <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-zinc-300 hidden md:block">
                            <motion.div
                                style={{ scaleY: scrollYProgress, originY: 0 }}
                                className="w-full h-full bg-[#eb5939]"
                            />
                        </div>

                        <div className="space-y-16">
                            {experience.map((job, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="relative pl-0 md:pl-16 group"
                                >
                                    {/* Circuit Node Connector */}
                                    <div className="hidden md:flex absolute left-0 top-8 items-center justify-center w-[56px] h-[56px]">
                                        <div className="w-4 h-4 bg-zinc-900 border-2 border-[#eb5939] z-10 skew-x-[-12deg]" />
                                        <div className="absolute w-[56px] h-px bg-[#eb5939] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                    </div>

                                    {/* Tech Card */}
                                    <div className="relative bg-white border-l-4 border-zinc-200 group-hover:border-[#eb5939] transition-all duration-300 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1">

                                        {/* Technical Corner Cut */}
                                        <div className="absolute top-0 right-0 w-8 h-8 bg-[#e8e8e8]" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />

                                        <div className="p-8">
                                            {/* Header */}
                                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                                <div>
                                                    <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-[#eb5939] transition-colors flex items-center gap-2">
                                                        {job.role}
                                                    </h3>
                                                    <div className="flex items-center gap-2 text-zinc-500 font-mono text-sm mt-1">
                                                        <Building2 className="w-4 h-4" />
                                                        <span className="uppercase tracking-wider font-bold">{job.company}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs font-mono bg-zinc-100 px-3 py-1.5 border border-zinc-200 text-zinc-600">
                                                    <Calendar className="w-3 h-3 text-[#eb5939]" />
                                                    {job.period}
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-zinc-600 leading-relaxed mb-6">
                                                {job.description}
                                            </p>

                                            {/* Achievements List */}
                                            {job.achievements && job.achievements.length > 0 && (
                                                <div className="bg-zinc-50 p-4 border border-zinc-100 relative">
                                                    <div className="absolute top-0 left-0 w-1 h-full bg-zinc-200 group-hover:bg-[#eb5939] transition-colors" />
                                                    <ul className="space-y-3">
                                                        {job.achievements.map((point, idx) => (
                                                            <li key={idx} className="flex gap-3 text-sm text-zinc-600">
                                                                <Zap className="w-4 h-4 text-[#eb5939] flex-shrink-0 mt-0.5" />
                                                                <span>{point}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements Data Block */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-12">
                            <div className="flex items-center gap-3 mb-8">
                                <Cpu className="w-6 h-6 text-[#eb5939]" />
                                <h3 className="text-xl font-bold uppercase tracking-widest text-zinc-900">Achievements_DB</h3>
                            </div>

                            <div className="grid gap-4">
                                {achievements.map((award, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                                        className="relative group bg-white border border-zinc-200 p-6 hover:border-[#eb5939] transition-all duration-300"
                                    >
                                        {/* Background Index Number */}
                                        <div className="absolute top-2 right-4 text-6xl font-black text-zinc-100 pointer-events-none group-hover:text-zinc-100/50 transition-colors">
                                            0{i + 1}
                                        </div>

                                        <div className="relative z-10">
                                            <div className="w-10 h-10 bg-zinc-100 flex items-center justify-center text-[#eb5939] mb-4 border border-zinc-200 group-hover:scale-110 transition-transform">
                                                <Trophy className="w-5 h-5" />
                                            </div>
                                            <h4 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-[#eb5939] transition-colors line-clamp-1">
                                                {award.title}
                                            </h4>
                                            <p className="text-sm text-zinc-500 leading-relaxed font-mono">
                                                {award.description}
                                            </p>

                                            <div className="mt-4 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                                                <ArrowUpRight className="w-5 h-5 text-[#eb5939]" />
                                            </div>
                                        </div>

                                        {/* Decorative Corners */}
                                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#eb5939] group-hover:w-full transition-all duration-500" />
                                        <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-[#eb5939] group-hover:h-full transition-all duration-500 delay-100" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
