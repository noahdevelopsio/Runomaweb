"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticCursor() {
    const dotX = useMotionValue(-100);
    const dotY = useMotionValue(-100);

    const ringX = useSpring(useMotionValue(-100), { stiffness: 150, damping: 20 });
    const ringY = useSpring(useMotionValue(-100), { stiffness: 150, damping: 20 });

    const isHovering = useRef(false);
    const ringRef = useRef<HTMLDivElement>(null);

    const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
    const trailId = useRef(0);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            dotX.set(e.clientX - 4);
            dotY.set(e.clientY - 4);
            ringX.set(e.clientX - 20);
            ringY.set(e.clientY - 20);

            const speed = Math.abs(e.movementX) + Math.abs(e.movementY);
            if (speed > 8) {
                const newDot = { x: e.clientX, y: e.clientY, id: trailId.current++ };
                setTrail(prev => [...prev.slice(-12), newDot]);
            }
        };

        const enter = () => {
            isHovering.current = true;
            ringRef.current?.classList.add("hovering");
        };
        const leave = () => {
            isHovering.current = false;
            ringRef.current?.classList.remove("hovering");
        };

        window.addEventListener("mousemove", move);
        document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
            el.addEventListener("mouseenter", enter);
            el.addEventListener("mouseleave", leave);
        });

        return () => {
            window.removeEventListener("mousemove", move);
        };
    }, [dotX, dotY, ringX, ringY]);

    return (
        <>
            {/* Dot */}
            <motion.div
                style={{ x: dotX, y: dotY }}
                className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary z-[9999]
                   pointer-events-none mix-blend-difference"
            />
            {/* Ring */}
            <motion.div
                ref={ringRef}
                style={{ x: ringX, y: ringY }}
                className="fixed top-0 left-0 w-10 h-10 rounded-full z-[9998]
                   pointer-events-none border border-primary/50 transition-all duration-200
                   [&.hovering]:w-16 [&.hovering]:h-16 [&.hovering]:bg-primary/10
                   [&.hovering]:border-primary [&.hovering]:-translate-x-3 [&.hovering]:-translate-y-3"
            />
            {/* Trail */}
            {trail.map((dot) => (
                <motion.div
                    key={dot.id}
                    initial={{ opacity: 0.4, scale: 1 }}
                    animate={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed w-1 h-1 rounded-full bg-primary pointer-events-none z-[9997]"
                    style={{ left: dot.x - 2, top: dot.y - 2 }}
                />
            ))}
        </>
    );
}
