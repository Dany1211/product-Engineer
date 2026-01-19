"use client";
import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';
import { ArrowDown, Mail, FileText, Code, Cpu, Activity } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex flex-col pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden relative bg-[#dedede]">
            {/* 1. Technical Grid Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Main Grid 100px */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)',
                        backgroundSize: '100px 100px'
                    }}
                />
                {/* Sub Grid 25px */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px)',
                        backgroundSize: '25px 25px'
                    }}
                />
            </div>

            {/* 2. Technical Markers (Crosshairs) - Decorative */}
            <div className="absolute top-32 left-12 text-black/20 font-mono text-xs hidden md:block">+ CORDS: 34.0522° N</div>
            <div className="absolute bottom-32 right-12 text-black/20 font-mono text-xs hidden md:block">+ CORDS: 118.2437° W</div>

            {/* Content Container */}
            <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 relative z-10 flex-grow flex flex-col justify-center">

                {/* Top Bar / Quick Links */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="absolute top-0 right-6 md:right-12 mt-4 md:mt-0 flex gap-4 items-center"
                >
                    <div className="hidden md:flex flex-col text-right mr-8">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">System Status</span>
                        <span className="text-xs font-mono text-emerald-600 font-bold flex items-center justify-end gap-1">
                            <span className="block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> OPERATIONAL
                        </span>
                    </div>

                    <a
                        href={`mailto:${personalInfo.social.email}`}
                        className="group flex items-center gap-2 px-4 py-2 bg-transparent border border-zinc-900/10 text-zinc-600 text-xs font-mono uppercase tracking-wider hover:bg-zinc-900 hover:text-white transition-all"
                    >
                        <Mail className="w-3 h-3 group-hover:stroke-white transition-colors" />
                        Connect
                    </a>
                    <a
                        href="/resume.pdf"
                        className="group flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/20"
                    >
                        <FileText className="w-3 h-3" />
                        Resume
                    </a>
                </motion.div>

                {/* Main Title - The "Schematic" Typography */}
                <div className="space-y-[-1vw] mb-12 relative">
                    {/* Decorative Label */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 }}
                        className="absolute -top-8 left-1 md:left-2 flex items-center gap-2 text-zinc-400 font-mono text-xs tracking-widest uppercase"
                    >
                        <Cpu className="w-3 h-3" />
                        <span>Schematic v4.0</span>
                    </motion.div>

                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                            className="text-[11vw] leading-none font-serif font-medium tracking-tighter text-zinc-900 mix-blend-multiply"
                        >
                            ARCHITECTING
                        </motion.h1>
                    </div>

                    <div className="overflow-hidden flex items-center gap-4 md:gap-8">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100px" }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="h-[2px] bg-zinc-900 hidden md:block"
                        />
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                            className="text-[11vw] leading-none font-serif font-medium tracking-tighter text-zinc-900 mix-blend-multiply"
                        >
                            INTELLIGENCE
                        </motion.h1>
                    </div>
                </div>

                {/* Bottom Data Grid */}
                <div className="grid md:grid-cols-3 gap-8 border-t border-zinc-900/10 pt-8 mt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="col-span-1"
                    >
                        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">/ Mission</h3>
                        <p className="text-lg leading-relaxed text-zinc-800 font-sans max-w-sm">
                            Shipping scalable systems, not just features. Latency &lt; 50ms.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="col-span-1 hidden md:block"
                    >
                        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">/ Stack</h3>
                        <div className="flex flex-wrap gap-2 text-sm font-mono text-zinc-700">
                            <span className="px-2 py-1 bg-white border border-zinc-200">React Native</span>
                            <span className="px-2 py-1 bg-white border border-zinc-200">LLM Ops</span>
                            <span className="px-2 py-1 bg-white border border-zinc-200">Docker</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="col-span-1 flex flex-col items-start md:items-end justify-between h-full"
                    >
                        <div className="hidden md:flex items-center gap-2 text-xs font-mono text-zinc-400">
                            <Activity className="w-4 h-4" />
                            <span>LIVE REPLICA</span>
                        </div>

                        <div className="flex items-center gap-3 mt-4 md:mt-0">
                            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Initialize</span>
                            <ArrowDown className="w-4 h-4 text-zinc-900 animate-bounce" />
                        </div>
                    </motion.div>
                </div>

            </div>

            {/* Decorative Bottom Ticker */}
            <div className="absolute bottom-0 left-0 w-full h-8 bg-zinc-900 text-zinc-400 text-[10px] font-mono flex items-center overflow-hidden whitespace-nowrap opacity-100 z-20">
                <div className="animate-marquee flex gap-8 px-4">
                    <span>// SYSTEM READY</span>
                    <span>// DEPLOYING RESOURCES</span>
                    <span>// OPTIMIZING RUNTIME</span>
                    <span>// USER: GUEST</span>
                    <span>// ACCESS: GRANTED</span>
                    {/* Duplicate for seamless loop if we had the animation set up properly in tailwind config, sticking to static for safety if config missing */}
                </div>
            </div>
        </section>
    );
}
