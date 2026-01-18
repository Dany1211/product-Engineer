"use client";
import { personalInfo } from '../data/content';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="py-24 px-6 md:px-12 bg-zinc-900 text-[#d8d7d5] overflow-hidden">
            <div className="max-w-[1600px] mx-auto">
                <div className="flex flex-col items-center justify-center text-center py-24">
                    <p className="text-sm font-mono uppercase tracking-widest mb-8 text-zinc-500">What's Next?</p>
                    <motion.a
                        href={`mailto:${personalInfo.social.email}`}
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="text-[12vw] leading-none font-serif font-medium hover:text-orange-500 transition-colors duration-500 block"
                    >
                        LET'S TALK
                    </motion.a>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end border-t border-zinc-800 pt-12">
                    <div className="flex gap-8 text-sm font-mono text-zinc-500 uppercase tracking-wider">
                        <a href={personalInfo.social.linkedin} target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href={personalInfo.social.github} target="_blank" className="hover:text-white transition-colors">GitHub</a>
                        <a href="#home" className="hover:text-white transition-colors">Back to Top</a>
                    </div>
                    <div className="mt-8 md:mt-0 text-zinc-600 text-sm">
                        © {new Date().getFullYear()} Dnyanesh
                    </div>
                </div>
            </div>
        </footer>
    );
}
