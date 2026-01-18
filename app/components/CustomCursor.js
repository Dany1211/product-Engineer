"use client";
import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Mouse values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springs for the ring (laggy/fluid feel)
    const ringX = useSpring(mouseX, { stiffness: 100, damping: 20 });
    const ringY = useSpring(mouseY, { stiffness: 100, damping: 20 });

    // Tighter springs for the dot (responsive feel)
    const dotX = useSpring(mouseX, { stiffness: 1000, damping: 50 });
    const dotY = useSpring(mouseY, { stiffness: 1000, damping: 50 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            setIsVisible(true);
        };

        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);
        const handleMouseLeaveWindow = () => setIsVisible(false);

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseleave', handleMouseLeaveWindow);

        // Add event listeners to all interactive elements
        // Re-adding listeners on mutation could be better, but this covers most static/initial load cases
        const addListeners = () => {
            const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });
            return interactiveElements; // return to clean up specific elements
        };

        const elements = addListeners();

        // Optional: Observer for dynamic content (like lazy loaded lists)
        const observer = new MutationObserver(addListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseleave', handleMouseLeaveWindow);
            observer.disconnect();
            elements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, [mouseX, mouseY]);

    return (
        <>
            {/* The Dot - High precision, mix-blend-difference */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: '-50%',
                    translateY: '-50%',
                    opacity: isVisible ? 1 : 0,
                }}
            />

            {/* The Ring - Trailing, expands on hover */}
            <motion.div
                className="fixed top-0 left-0 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference"
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                    opacity: isVisible ? 1 : 0,
                }}
                animate={{
                    width: isHovered ? 64 : 24,
                    height: isHovered ? 64 : 24,
                    borderWidth: isHovered ? '1px' : '1.5px',
                    backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1
                }}
            />
        </>
    );
}
