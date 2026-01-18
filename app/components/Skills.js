"use client";
import Section from './Section';
import { skills } from '../data/content';
import { motion } from 'framer-motion';

export default function Skills() {
    return (
        <Section id="skills" className="py-24">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-500 mb-12">Technical Arsenal</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <h3 className="text-lg font-serif capitalize text-zinc-900 mb-6 border-b border-zinc-200 pb-2">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-zinc-100 text-zinc-600 text-sm rounded-md font-mono hover:bg-zinc-900 hover:text-white transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
