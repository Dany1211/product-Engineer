import Section from './Section';
import { personalInfo } from '../data/content';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

export default function Contact() {
    return (
        <Section id="contact" className="py-32">
            <div className="text-center max-w-2xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                    Ready to build something <span className="text-blue-500">amazing?</span>
                </h2>

                <p className="text-lg text-zinc-400">
                    I'm currently available for paid internships and engineering roles.
                    If you're looking for someone who ships, let's talk.
                </p>

                <div className="flex items-center justify-center gap-4 pt-4">
                    <a
                        href={`mailto:${personalInfo.social.email}`}
                        className="group flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-all"
                    >
                        <Mail className="w-4 h-4" />
                        Email Me
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <div className="flex items-center gap-2">
                        <a
                            href={personalInfo.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 text-white rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href={personalInfo.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 text-white rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );
}
