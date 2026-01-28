"use client";
import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';
import { ArrowDown, Mail, FileText, Code, Cpu, Activity, MoveUpRight } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex flex-col pt-24 md:pt-32 pb-12 overflow-hidden relative bg-[#dedede]">
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

            {/* Top Bar / Quick Links - Moved for visibility */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute top-6 right-6 md:right-12 z-50 flex gap-4 items-center"
            >
                <div className="hidden md:flex flex-col text-right mr-8">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">System Status</span>
                    <span className="text-xs font-mono text-emerald-600 font-bold flex items-center justify-end gap-1">
                        <span className="block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> OPERATIONAL
                    </span>
                </div>

                <a
                    href={`mailto:${personalInfo.social.email}`}
                    className="group flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm border border-zinc-900/10 text-zinc-600 text-xs font-mono uppercase tracking-wider hover:bg-zinc-900 hover:text-white transition-all"
                >
                    <Mail className="w-3 h-3 group-hover:stroke-white transition-colors" />
                    Connect
                </a>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/20"
                >
                    <FileText className="w-3 h-3" />
                    Resume
                </a>
            </motion.div>

            {/* Content Container */}
            <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 relative z-10 flex-grow flex flex-col justify-center">

                <div className="flex flex-col md:flex-row items-stretch justify-between mt-12 md:mt-0 gap-12 h-full">

                    {/* LEFT COLUMN: Main Typography & Mission */}
                    <div className="flex-1 flex flex-col justify-center relative">
                        {/* Title Group */}
                        <div className="space-y-2 mb-12 relative z-20">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 }}
                                className="flex items-center gap-2 text-zinc-400 font-mono text-xs tracking-widest uppercase mb-4"
                            >
                                <Cpu className="w-3 h-3" />
                                <span>Schematic v8.0 // RUDE_MODE</span>
                            </motion.div>

                            <div className="overflow-hidden">
                                <motion.h1
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                                    className="text-[6vw] lg:text-[5.5vw] leading-none font-sans font-black tracking-tighter text-zinc-900 mix-blend-multiply italic"
                                >
                                    BUILDING SYSTEMS
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
                                    className="text-[6vw] lg:text-[5.5vw] leading-none font-serif font-light tracking-tighter text-zinc-500 mix-blend-multiply"
                                >
                                    THAT SHIP
                                </motion.h1>
                            </div>
                        </div>

                        {/* Mission Statement Repositioned */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="max-w-lg border-l-2 border-zinc-900 pl-6"
                        >
                            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">/ Mission Objective</h3>
                            <p className="text-lg leading-relaxed text-zinc-800 font-sans font-medium">
                                Building systems that <span className="bg-zinc-900 text-white px-1">scale, fail gracefully, and recover</span>.
                                <br />Focused on delivery, not demos.
                            </p>

                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Blueprint Profile Card */}
                    <div className="flex-1 flex items-center justify-center md:justify-end relative">
                        {/* Connecting Line (Decorative) */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 1, duration: 1 }}
                            className="absolute top-1/2 left-0 w-full h-[1px] bg-zinc-300 hidden md:block -z-10"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="relative w-full max-w-[380px] bg-[#e5e5e5] p-3 border border-zinc-900/20 shadow-2xl shadow-zinc-900/50"
                        >
                            {/* Card Frame */}
                            <div className="absolute inset-0 border border-zinc-900/100 pointer-events-none"></div>

                            {/* Inner Info */}
                            <div className="relative z-10">
                                {/* Photo Content */}
                                <div className="relative aspect-[4/5] w-full bg-zinc-800 overflow-hidden group">
                                    {/* Overlay Lines */}
                                    <div className="absolute inset-0 border border-white/10 m-2 pointer-events-none z-20"></div>

                                    <img
                                        src="/hero.png"
                                        alt="Dnyanesh"
                                        className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                                    />

                                    {/* ANTI-WATERMARK BADGE */}
                                    <div className="absolute bottom-0 right-0 z-30 bg-zinc-900 text-white px-3 py-1.5 flex items-center gap-2 border-t border-l border-zinc-500">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                                        <span className="text-[10px] font-mono font-bold tracking-wider leading-none">VERIFIED_OP</span>
                                    </div>

                                    {/* Horizontal Scan Line */}
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20 animate-scan-slow pointer-events-none z-20"></div>
                                </div>

                                {/* Minimal Footer */}
                                <div className="pt-3 flex justify-between items-end border-t border-zinc-900 mt-3 border-dotted">
                                    <div>
                                        <h2 className="text-2xl font-black font-sans text-zinc-900 leading-none">DNYANESH</h2>
                                        <span className="text-[10px] font-mono text-zinc-500 uppercase block mt-1 tracking-widest">Operator Class</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold border border-emerald-200">
                                            ACTIVE
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Rude Qualities Strip */}
                <div className="border-t-2 border-zinc-900 mt-12 py-6 hidden md:flex justify-between items-center text-sm font-black font-mono text-zinc-900 uppercase tracking-tight">
                    <div className="flex gap-12">
                        <span className="hover:line-through decoration-emerald-500 cursor-cell transition-all">No Fluff</span>
                        <span className="hover:line-through decoration-emerald-500 cursor-cell transition-all">Just Ship</span>
                        <span className="hover:line-through decoration-emerald-500 cursor-cell transition-all">Zero Excuses</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400 font-normal text-xs normal-case tracking-normal">
                        <span>Initialize System</span>
                        <ArrowDown className="w-3 h-3 animate-bounce" />
                    </div>
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
                </div>
            </div>
        </section>
    );
}
