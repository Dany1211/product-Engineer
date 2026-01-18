"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Sparkles, Briefcase, User, Award, Mail } from "lucide-react";

export default function BottomNav() {
    const [activeTab, setActiveTab] = useState("home");

    const tabs = [
        { id: "home", label: "Home", icon: Sparkles, href: "#home" },
        { id: "experience", label: "Credits", icon: User, href: "#experience" },
        { id: "projects", label: "Work", icon: Briefcase, href: "#projects" },
        { id: "contact", label: "Contact", icon: Mail, href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'projects', 'experience', 'contact'];
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveTab(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e, href) => {
        e.preventDefault();
        setActiveTab(href.replace('#', ''));
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <div className="flex items-center gap-1 p-1.5 rounded-full backdrop-blur-md border border-zinc-300/50 shadow-lg shadow-black/10" style={{ backgroundColor: 'rgba(216, 215, 213, 0.85)' }}>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={(e) => handleClick(e, tab.href)}
                        className={cn(
                            "relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 outline-none flex items-center gap-2",
                            activeTab === tab.id ? "text-zinc-900" : "text-zinc-600 hover:text-zinc-900"
                        )}
                    >
                        {activeTab === tab.id && (
                            <motion.div
                                layoutId="nav-pill"
                                className="absolute inset-0 bg-white/80 rounded-full shadow-sm"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10 flex items-center gap-2 pt-px">
                            <tab.icon className="w-4 h-4" />
                            <span className="hidden sm:inline">{tab.label}</span>
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
