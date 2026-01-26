import { useState, useRef } from 'react';
import Section from './Section';
import { personalInfo } from '../data/content';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(personalInfo.social.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Section id="contact" className="min-h-screen relative bg-black text-white py-24 overflow-hidden border-t border-white/10">
            {/* 1. Static Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            {/* 2. Marquee Header */}
            <div className="absolute top-0 left-0 w-full border-b border-white/10 py-3 overflow-hidden bg-black/50 backdrop-blur-sm z-20">
                <div className="animate-marquee flex gap-12 min-w-full text-xs font-mono uppercase tracking-widest text-zinc-500">
                    <span>// OPEN FOR WORK</span>
                    <span>// REMOTE & ON-SITE</span>
                    <span>// WORLDWIDE ENGINEERING</span>
                    <span>// OPEN FOR WORK</span>
                    <span>// REMOTE & ON-SITE</span>
                    <span>// WORLDWIDE ENGINEERING</span>
                    <span>// OPEN FOR WORK</span>
                    <span>// REMOTE & ON-SITE</span>
                    <span>// WORLDWIDE ENGINEERING</span>
                </div>
            </div>

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 md:gap-24 pt-20" ref={containerRef}>

                {/* LEFT: Massive Headline */}
                <div className="flex-1">
                    <motion.div style={{ y }} className="relative z-10">
                        <h2 className="text-[15vw] md:text-[10vw] leading-[0.8] font-serif font-medium tracking-tighter text-white mix-blend-difference">
                            LETS <br />
                            <span className="text-zinc-600">TALK</span>
                        </h2>
                    </motion.div>
                    <p className="mt-12 text-zinc-400 font-mono text-sm max-w-sm border-l border-white/20 pl-6 leading-relaxed">
                        04 — CONTACT<br /><br />
                        Building systems for the web and mobile.
                        Currently available for select freelance projects and full-time roles.
                    </p>
                </div>

                {/* RIGHT: Interaction List */}
                <div className="flex-1 flex flex-col justify-end pb-12">
                    <div className="flex flex-col border-t border-white/20">

                        {/* 1. Email Action */}
                        <div className="group border-b border-white/20 py-8 relative transition-colors hover:bg-white/5">
                            <div className="flex justify-between items-center px-4">
                                <span className="text-sm font-mono text-zinc-500">01 / EMAIL</span>
                                <div className="flex gap-4 items-center">
                                    <button
                                        onClick={handleCopyEmail}
                                        className="text-xs font-mono uppercase border border-white/20 px-3 py-1 rounded-full text-zinc-500 hover:text-white hover:border-white transition-colors"
                                    >
                                        {copied ? "COPIED" : "COPY"}
                                    </button>
                                    <a href={`mailto:${personalInfo.social.email}`} className="text-3xl md:text-5xl font-light tracking-tight group-hover:underline decoration-1 underline-offset-4">
                                        Send Mail
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 2. GitHub Action */}
                        <a
                            href={personalInfo.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group border-b border-white/20 py-8 relative transition-colors hover:bg-white/5"
                        >
                            <div className="flex justify-between items-center px-4">
                                <span className="text-sm font-mono text-zinc-500">02 / CODE</span>
                                <div className="flex items-center gap-4">
                                    <span className="text-3xl md:text-5xl font-light tracking-tight">GitHub</span>
                                    <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                                </div>
                            </div>
                        </a>

                        {/* 3. LinkedIn Action */}
                        <a
                            href={personalInfo.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group border-b border-white/20 py-8 relative transition-colors hover:bg-white/5"
                        >
                            <div className="flex justify-between items-center px-4">
                                <span className="text-sm font-mono text-zinc-500">03 / CONNECT</span>
                                <div className="flex items-center gap-4">
                                    <span className="text-3xl md:text-5xl font-light tracking-tight">LinkedIn</span>
                                    <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Decoration */}
            <div className="absolute bottom-6 left-6 text-[10px] font-mono text-zinc-700">
                SYSTEM.Coordinates: 34.0522° N, 118.2437° W
            </div>
        </Section>
    );
}
