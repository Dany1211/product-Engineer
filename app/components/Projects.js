import Section from './Section';
import { projects } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
    return (
        <Section id="projects">
            <div className="mb-12">
                <h2 className="text-3xl font-semibold text-white mb-4">Selected Work</h2>
                <p className="text-zinc-400 max-w-xl">
                    Projects where I owned the technical implementation and design decisions end-to-end.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative flex flex-col p-6 bg-zinc-900/50 border border-white/10 rounded-2xl hover:bg-zinc-900 hover:border-white/20 transition-all duration-300"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <span className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full">
                                {project.type}
                            </span>
                            <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
                        </div>

                        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                            {project.description}
                        </p>

                        <ul className="space-y-2 mb-6 text-sm text-zinc-500">
                            {project.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-600" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2.5 py-1 text-xs text-zinc-400 bg-white/5 rounded-md border border-white/5"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
