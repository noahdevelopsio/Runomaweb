"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { Menu, X } from "lucide-react";

const links = [
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
];

export default function DynamicIslandNav() {
    const [expanded, setExpanded] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 60 && expanded) {
                setExpanded(false); // Auto-collapse on scroll
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [expanded]);

    // Close island on route change
    useEffect(() => {
        setExpanded(false);
    }, [pathname]);

    return (
        <div className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex justify-center">
            <motion.div
                layout
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={
                    expanded
                        ? { type: "spring", stiffness: 400, damping: 25 }
                        : { duration: 0 }
                }
                className={`bg-surface-2/90 backdrop-blur-xl border border-sage/20 shadow-card 
                   overflow-hidden flex flex-col items-center justify-center
                   ${expanded ? "rounded-[32px] w-[340px] p-6" : "rounded-full w-auto p-2 px-4"}`}
            >
                <AnimatePresence mode="wait">
                    {!expanded ? (
                        // Collapsed State
                        <motion.div
                            layout="position"
                            key="collapsed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 0 } }}
                            exit={{ opacity: 0, filter: "blur(4px)", transition: { duration: 0.15 } }}
                            className="flex items-center gap-4"
                        >
                            <Link href="/">
                                <div className="bg-surface-1 rounded-full p-2 border border-sage/10 hover:border-sage/40 transition-colors">
                                    <Logo className="w-5 h-auto" />
                                </div>
                            </Link>
                            <div className="flex gap-1 border-l border-sage/20 pl-4">
                                <button
                                    onClick={() => setExpanded(true)}
                                    className="font-mono text-xs tracking-widest text-text-primary uppercase 
                             px-4 py-2 hover:bg-surface-3 rounded-full transition-colors flex items-center gap-2"
                                >
                                    <Menu className="w-4 h-4" /> Menu
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        // Expanded State
                        <motion.div
                            layout="position"
                            key="expanded"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1, transition: { duration: 0.1 } }}
                            exit={{ opacity: 0, transition: { duration: 0 } }}
                            className="w-full flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-6 w-full">
                                <Logo className="w-6 h-auto" />
                                <button
                                    onClick={() => setExpanded(false)}
                                    className="p-2 bg-surface-1 rounded-full text-text-secondary hover:text-text-primary transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="flex flex-col gap-2 w-full mb-6 relative">
                                {links.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            className={`relative px-4 py-3 rounded-2xl font-body text-sm text-center transition-all ${isActive
                                                ? "text-ink font-semibold"
                                                : "text-text-secondary hover:text-text-primary hover:bg-surface-3"
                                                }`}
                                        >
                                            {isActive && (
                                                <motion.div
                                                    layoutId="active-pill"
                                                    className="absolute inset-0 bg-sage rounded-2xl"
                                                    initial={false}
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                />
                                            )}
                                            <span className="relative z-10">{link.label}</span>
                                        </Link>
                                    );
                                })}
                            </div>

                            <div className="w-full">
                                <Button href="/contact" size="md" className="w-full flex justify-center">
                                    Book Free Audit
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
