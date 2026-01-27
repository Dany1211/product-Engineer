"use client";
import React from 'react';
import { skills } from '../data/content';
import { motion } from 'framer-motion';

export default function Skills() {
    return (
        <section id="skills" className="relative bg-[#dedede] py-24 border-t border-zinc-900/10">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

                {/* Technical Header */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} // Changed to true for less distraction
                    className="flex items-end justify-between mb-16 border-b-2 border-zinc-900 pb-4"
                >
                    <div>
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">// SYSTEM DIAGNOSTIC</span>
                        <h2 className="text-3xl md:text-5xl font-black font-sans text-zinc-900 uppercase tracking-tighter">
                            SPECIFICATIONS
                        </h2>
                    </div>
                    <div className="hidden md:block text-right">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Last Audit</span>
                        <span className="text-sm font-mono font-bold text-zinc-900">2026.01.27</span>
                    </div>
                </motion.div>

                {/* Raw Data Table */}
                <div className="grid grid-cols-1 border-t border-zinc-900/20">
                    {Object.entries(skills).map(([category, items], index) => (
                        <SkillRow
                            key={category}
                            category={category}
                            items={items}
                            index={index}
                        />
                    ))}
                </div>

                {/* Footer Data Strip */}
                <div className="mt-8 flex justify-between items-center text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                    <span>End of Report</span>
                    <span>Verified by: DNYANESH</span>
                </div>
            </div>
        </section>
    );
}

function SkillRow({ category, items, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className="group grid grid-cols-1 md:grid-cols-12 border-b border-zinc-900/20 hover:bg-zinc-900/5 transition-colors duration-300"
        >
            {/* Category Label (col-span-3) */}
            <div className="md:col-span-3 py-6 md:py-8 border-r-0 md:border-r border-zinc-900/20 md:pr-8 flex items-start">
                <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">0{index + 1}</span>
                    <h3 className="text-sm font-bold font-mono text-zinc-900 uppercase tracking-wider">
                        {category}
                    </h3>
                </div>
            </div>

            {/* Skills List (col-span-9) */}
            <div className="md:col-span-9 py-4 md:py-8 md:pl-8 flex flex-wrap items-center gap-x-6 gap-y-2">
                {items.map((skill, i) => (
                    <span
                        key={skill}
                        className="text-sm md:text-base font-mono text-zinc-600 group-hover:text-zinc-900 transition-colors uppercase tracking-tight"
                    >
                        {/* Bullet separator for all except first */}
                        {i > 0 && <span className="inline-block text-zinc-300 mr-6">/</span>}
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
