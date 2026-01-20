"use client";
import React from 'react';
import Section from './Section';
import { skills } from '../data/content';
import { motion } from 'framer-motion';

export default function Skills() {
    return (
        <Section id="skills" className="relative bg-white py-24 border-b border-zinc-100 overflow-hidden">

            {/* Subtle Grain/Dot Pattern Background */}
            <div className="absolute inset-0 opacity-[0.4] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

                {/* Minimal Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-zinc-400 mb-4">
                        Capabilities
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-serif text-zinc-900 leading-tight">
                        My Technical <span className="italic text-zinc-500">Arsenal</span>
                    </h3>
                </motion.div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12 md:gap-y-0">
                    {Object.entries(skills).map(([category, items], index) => (
                        <div key={category} className="flex flex-col gap-6">

                            {/* Category Header with Accent Line */}
                            <div className="flex items-center gap-3">
                                <span className={`w-8 h-[1px] ${getAccentColor(index)}`} />
                                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-900">
                                    {category}
                                </h4>
                            </div>

                            {/* Skill Badges (Tag Cloud) */}
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill, i) => (
                                    <SkillBadge key={skill} skill={skill} index={i} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

// Helper for accent colors per column
function getAccentColor(index) {
    const colors = ['bg-blue-500', 'bg-purple-500', 'bg-emerald-500', 'bg-orange-500'];
    return colors[index % colors.length];
}

function SkillBadge({ skill, index }) {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            whileHover={{ scale: 1.05, backgroundColor: "#18181b", color: "#ffffff", borderColor: "#18181b" }}
            className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-zinc-600 text-sm font-medium cursor-default transition-all duration-300 shadow-sm hover:shadow-md"
        >
            {skill}
        </motion.span>
    );
}
