"use client";
import React from 'react';
import { skills } from '../data/content';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Database, Terminal, Code2, Cpu, Layers, Box } from 'lucide-react';

export default function Skills() {
    return (
        <section id="skills" className="relative bg-zinc-50 py-24 overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-baseline justify-between mb-12 gap-4"
                >
                    <h2 className="text-3xl md:text-4xl font-serif text-zinc-900 leading-tight">
                        Technical <span className="italic text-zinc-500">Arsenal</span>
                    </h2>
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-400">
                        <Box size={14} />
                        <span>Build • Ship • Scale</span>
                    </div>
                </motion.div>

                {/* Creative Colorful Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.entries(skills).map(([category, items], index) => (
                        <SkillColumn
                            key={category}
                            category={category}
                            items={items}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function SkillColumn({ category, items, index }) {
    // Distinct color themes for each category
    const themes = {
        web: {
            icon: Globe,
            color: "text-blue-600",
            bg: "bg-blue-50",
            border: "border-blue-100",
            hover: "hover:border-blue-300 hover:shadow-blue-100",
            pill: "text-blue-700 bg-blue-50/50 hover:bg-blue-100 border-blue-100"
        },
        mobile: {
            icon: Smartphone,
            color: "text-violet-600",
            bg: "bg-violet-50",
            border: "border-violet-100",
            hover: "hover:border-violet-300 hover:shadow-violet-100",
            pill: "text-violet-700 bg-violet-50/50 hover:bg-violet-100 border-violet-100"
        },
        backend: {
            icon: Database,
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            border: "border-emerald-100",
            hover: "hover:border-emerald-300 hover:shadow-emerald-100",
            pill: "text-emerald-700 bg-emerald-50/50 hover:bg-emerald-100 border-emerald-100"
        },
        tools: {
            icon: Terminal,
            color: "text-orange-600",
            bg: "bg-orange-50",
            border: "border-orange-100",
            hover: "hover:border-orange-300 hover:shadow-orange-100",
            pill: "text-orange-700 bg-orange-50/50 hover:bg-orange-100 border-orange-100"
        }
    };

    const theme = themes[category.toLowerCase()] || themes.web;
    const Icon = theme.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group relative p-6 bg-white rounded-2xl border ${theme.border} shadow-sm transition-all duration-300 ${theme.hover} hover:-translate-y-1`}
        >
            {/* Colorful Top Accent */}
            <div className={`absolute top-0 inset-x-0 h-1 rounded-t-2xl ${theme.bg.replace('/50', '-500')} opacity-0 group-hover:opacity-100 transition-opacity`} />

            <div className="flex flex-col h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2.5 rounded-xl ${theme.bg} ${theme.color}`}>
                        <Icon size={20} className="stroke-[1.5]" />
                    </div>
                    <h3 className="font-bold text-base capitalize text-zinc-800">
                        {category}
                    </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2 content-start">
                    {items.map((skill, i) => (
                        <span
                            key={skill}
                            className={`px-2.5 py-1.5 rounded-lg text-[11px] font-semibold tracking-wide uppercase border transition-colors cursor-default ${theme.pill}`}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
