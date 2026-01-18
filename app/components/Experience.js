"use client";
import Section from './Section';
import { experience, achievements } from '../data/content';
import { motion } from 'framer-motion';

export default function Experience() {
    return (
        <Section id="experience" className="py-32 relative overflow-hidden">
            {/* Checkered Background Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `
               linear-gradient(45deg, #000 25%, transparent 25%),
               linear-gradient(-45deg, #000 25%, transparent 25%),
               linear-gradient(45deg, transparent 75%, #000 75%),
               linear-gradient(-45deg, transparent 75%, #000 75%)
             `,
                    backgroundSize: '40px 40px',
                    backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
                }}
            />

            <div className="grid md:grid-cols-2 gap-24 relative z-10">
                {/* Experience List */}
                <div>
                    <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-500 mb-12">Credits</h2>
                    <div className="space-y-12">
                        {experience.map((job, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="flex items-baseline justify-between mb-2">
                                    <h3 className="text-2xl font-serif text-zinc-900">{job.role}</h3>
                                    <span className="font-mono text-sm text-zinc-400">{job.period}</span>
                                </div>
                                <div className="text-lg text-zinc-600 mb-4">{job.company}</div>
                                <p className="text-zinc-500 leading-relaxed max-w-sm">
                                    {job.description[0]}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Awards/Recognition - Styled as a "Manifesto" block */}
                <div className="relative pt-12 md:pt-0">
                    <div className="absolute top-0 left-0 w-full h-px bg-zinc-200 md:hidden" />

                    <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-500 mb-12">Recognition</h2>
                    <div className="space-y-8">
                        {achievements.map((award, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className="flex gap-6 items-start"
                            >
                                <span className="font-mono text-xs text-orange-500 mt-1">0{i + 1}</span>
                                <div>
                                    <h3 className="text-xl font-serif text-zinc-900">{award.title}</h3>
                                    <p className="text-sm text-zinc-500 mt-1">{award.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
