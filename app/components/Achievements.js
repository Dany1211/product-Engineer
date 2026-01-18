import Section from './Section';
import { achievements } from '../data/content';
import { Award } from 'lucide-react';

export default function Achievements() {
    return (
        <Section id="achievements" className="py-24 border-t border-zinc-200 bg-zinc-50/50">
            <div className="grid md:grid-cols-2 gap-12 md:gap-24">
                <div>
                    <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-6">Recognition</h2>
                    <p className="text-zinc-500 max-w-sm">
                        Milestones that define my journey as an engineer.
                    </p>
                </div>

                <div className="grid gap-8">
                    {achievements.map((item, index) => (
                        <div
                            key={index}
                            className="group flex gap-6 p-6 -mx-6 rounded-2xl hover:bg-white hover:shadow-sm transition-all duration-300"
                        >
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                                <Award className="w-5 h-5 text-zinc-400 group-hover:text-orange-500 transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-xl font-serif text-zinc-900 mb-2">{item.title}</h3>
                                <p className="text-zinc-500 leading-relaxed font-sans group-hover:text-zinc-600">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
