import Link from 'next/link';
import { projects } from '../data/content';
import { ArrowUpRight } from 'lucide-react';
import Section from './Section';
import { cn } from '@/lib/utils';

export default function BentoGrid() {
    return (
        <Section id="projects" className="py-24">
            <div className="flex items-end justify-between mb-12">
                <h2 className="text-4xl md:text-5xl font-serif text-zinc-900">Selected Works</h2>
                <span className="text-zinc-400 hidden md:block">2023 — Present</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[400px]">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className={cn(
                            "group relative flex flex-col justify-between p-8 rounded-3xl bg-white border border-zinc-200 hover:border-zinc-300 transition-all duration-500 overflow-hidden",
                            i === 0 || i === 3 ? "md:col-span-2" : "md:col-span-1"
                        )}
                    >
                        {/* Hover Background */}
                        <div className="absolute inset-0 bg-zinc-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex justify-between items-start">
                            <span className="px-3 py-1 rounded-full border border-zinc-200 bg-white text-xs font-medium text-zinc-600">
                                {project.type}
                            </span>
                            <div className="w-10 h-10 rounded-full border border-zinc-200 bg-white flex items-center justify-center -mr-2 -mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <ArrowUpRight className="w-5 h-5 text-zinc-900" />
                            </div>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-serif text-zinc-900 mb-3">{project.title}</h3>
                            <p className="text-zinc-500 leading-relaxed mb-6 line-clamp-2">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-sm font-medium text-zinc-400">
                                        #{t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
