"use client"
import { useState, useEffect } from "react";
import { Home, Briefcase, Layers, Mail } from "lucide-react";

function NavItem({ href, icon: Icon, label, isActive }) {
  return (
    <a
      href={href}
      className="
        group relative flex flex-col items-center justify-center
        px-4 py-2.5
        transition-all duration-300
        hover:-translate-y-0.5 hover:scale-105
      "
    >
      {/* Active highlight */}
      {isActive && (
        <div className="
          absolute inset-0 rounded-full
          bg-white
          shadow-[0_0_25px_rgba(255,255,255,0.6)]
        " />
      )}

      <Icon
        size={20}
        className={`relative z-10 transition-colors duration-300 ${isActive
          ? "text-black"
          : "text-gray-300 group-hover:text-white"
          }`}
      />

      <span
        className={`relative z-10 hidden sm:block text-xs font-semibold tracking-wide ${isActive
          ? "text-black"
          : "text-gray-300 group-hover:text-white"
          }`}
      >
        {label}
      </span>
    </a>
  );
}

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "projects", "experience", "contact"];

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        if (
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <div
        className="
          flex items-center gap-2
          px-5 py-3
          rounded-full
          bg-black/80 backdrop-blur-2xl
          border border-white/20
          shadow-[0_10px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(255,255,255,0.15)]
        "
      >
        <NavItem href="#home" icon={Home} label="Home" isActive={activeSection === "home"} />
        <NavItem href="#projects" icon={Layers} label="Projects" isActive={activeSection === "projects"} />
        <NavItem href="#experience" icon={Briefcase} label="Experience" isActive={activeSection === "experience"} />
        <NavItem href="#contact" icon={Mail} label="Contact" isActive={activeSection === "contact"} />
      </div>
    </nav>
  );
}
