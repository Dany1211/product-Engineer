"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Sparkles, Briefcase, User, Award, Mail } from "lucide-react";

export default function BottomNav() {
    const [activeTab, setActiveTab] = useState("home");

    const tabs = [
        { id: "home", label: "Home", icon: Sparkles, href: "#home" },
        { id: "experience", label: "Experience", icon: User, href: "#experience" },
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
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50">
            <div
                className="
        flex items-center gap-1 p-2 rounded-full
        bg-black/85 backdrop-blur-2xl
        border border-white/10
        shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_40px_rgba(99,102,241,0.25)]
      "
            >
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={(e) => handleClick(e, tab.href)}
                        className={cn(
                            "relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all",
                            activeTab === tab.id
                                ? "text-black"
                                : "text-zinc-400 hover:text-white"
                        )}
                    >
                        {activeTab === tab.id && (
                            <motion.div
                                layoutId="nav-pill"
                                className="
                absolute inset-0 rounded-full
                bg-white
                shadow-[0_0_25px_rgba(99,102,241,0.6)]
              "
                                transition={{ type: "spring", stiffness: 350, damping: 26 }}
                            />
                        )}

                        <span className="relative z-10 flex items-center gap-2">
                            <tab.icon className="w-4 h-4" />
                            <span className="hidden sm:inline">{tab.label}</span>
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );


}
