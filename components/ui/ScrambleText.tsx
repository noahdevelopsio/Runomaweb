"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

interface ScrambleTextProps {
    text: string;
    className?: string;
    delay?: number;
    speed?: number; // ms per iteration
}

export default function ScrambleText({
    text,
    className = "",
    delay = 0,
    speed = 40,
}: ScrambleTextProps) {
    const [displayed, setDisplayed] = useState(text.replace(/./g, "·"));
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    const started = useRef(false);

    useEffect(() => {
        if (!inView || started.current) return;
        started.current = true;

        setTimeout(() => {
            let iteration = 0;
            const totalFrames = text.length * 3;

            const interval = setInterval(() => {
                setDisplayed(
                    text
                        .split("")
                        .map((char, i) => {
                            if (char === " ") return " ";
                            if (i < Math.floor(iteration / 3)) return char;
                            return CHARS[Math.floor(Math.random() * CHARS.length)];
                        })
                        .join("")
                );

                iteration++;
                if (iteration >= totalFrames) {
                    clearInterval(interval);
                    setDisplayed(text);
                }
            }, speed);

            return () => clearInterval(interval);
        }, delay * 1000);
    }, [inView, text, delay, speed]);

    return (
        <span ref={ref} className={`font-mono ${className}`} aria-label={text}>
            {displayed}
        </span>
    );
}
