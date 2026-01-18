"use client";

export default function Header() {
    const navItems = [
        { label: 'Work', href: '#projects' },
        { label: 'Experience', href: '#experience' },
        { label: 'Achievements', href: '#achievements' },
        { label: 'Contact', href: '#contact' },
    ];

    const handleClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 pointer-events-none">
            <nav className="pointer-events-auto flex items-center gap-1 bg-white/5 backdrop-blur-md border border-white/10 px-2 py-2 rounded-full shadow-lg shadow-black/20">
                <a
                    href="#home"
                    onClick={(e) => handleClick(e, '#home')}
                    className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                    Home
                </a>
                <div className="w-px h-4 bg-white/10 mx-1" />
                {navItems.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => handleClick(e, item.href)}
                        className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors text-nowrap"
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
        </header>
    );
}
