"use client";
import { experience, achievements } from '../data/content';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Building2, CheckCircle2 } from 'lucide-react';

export default function Experience() {
    return (
        <section id="experience" className="py-32 bg-white relative">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* Experience Section - Timeline */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-12"
                        >
                            <h2 className="text-3xl md:text-4xl font-serif text-zinc-900">Experience</h2>
                            <div className="h-px bg-zinc-200 flex-grow" />
                        </motion.div>

                        <div className="space-y-12 relative pl-8 border-l border-zinc-200">
                            {experience.map((job, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="relative"
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-4 border-white bg-zinc-300 ring-1 ring-zinc-200" />

                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                        <h3 className="text-xl font-bold text-zinc-900">{job.role}</h3>
                                        <div className="flex items-center text-sm font-mono text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full w-fit">
                                            <Calendar className="w-3 h-3 mr-2" />
                                            {job.period}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-zinc-600 mb-6 font-medium">
                                        <Building2 className="w-4 h-4" />
                                        {job.company}
                                    </div>

                                    <div className="prose prose-zinc max-w-none">
                                        <p className="text-zinc-600 leading-relaxed mb-4 text-[15px]">
                                            {job.description}
                                        </p>

                                        {job.achievements && job.achievements.length > 0 && (
                                            <ul className="space-y-3 mt-4">
                                                {job.achievements.map((point, idx) => (
                                                    <li key={idx} className="flex gap-3 text-zinc-600 text-sm leading-relaxed">
                                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements Section - Cards */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-12"
                        >
                            <h2 className="text-3xl md:text-4xl font-serif text-zinc-900">Achievements</h2>
                            <div className="h-px bg-zinc-200 flex-grow" />
                        </motion.div>

                        <div className="grid gap-6">
                            {achievements.map((award, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                                    className="group p-6 bg-zinc-50 border border-zinc-100 hover:border-zinc-300 hover:shadow-md transition-all duration-300 rounded-xl"
                                >
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:text-emerald-600 group-hover:border-emerald-200 transition-colors">
                                            <Trophy className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-zinc-900 mb-2 group-hover:text-emerald-700 transition-colors">{award.title}</h3>
                                            <p className="text-sm text-zinc-600 leading-relaxed">{award.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
