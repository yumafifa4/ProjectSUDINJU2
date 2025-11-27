"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "Profile", href: "#profile" },
    { name: "Visi & Misi", href: "#visi-misi" },
    { name: "Gallery", href: "#gallery" },
    { name: "Kegiatan", href: "#kegiatan" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "bg-white/90 backdrop-blur-md shadow-md py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        {/* Placeholder for Logo */}
                        <div className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">
                            SD
                        </div>
                        <div className={cn("flex flex-col", scrolled ? "text-gray-900" : "text-white")}>
                            <span className="text-sm font-bold leading-none">Suku Dinas Pendidikan</span>
                            <span className="text-xs leading-none opacity-80">Wilayah II Jakarta Utara</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary-500",
                                    scrolled ? "text-gray-700" : "text-white/90"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button
                            variant={scrolled ? "default" : "secondary"}
                            size="sm"
                            className={cn(!scrolled && "bg-white text-primary-600 hover:bg-gray-100")}
                        >
                            Portal Login
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className={cn("h-6 w-6", scrolled ? "text-gray-900" : "text-white")} />
                        ) : (
                            <Menu className={cn("h-6 w-6", scrolled ? "text-gray-900" : "text-white")} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t animate-fade-in">
                    <div className="flex flex-col p-4 gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-gray-700 hover:text-primary-600 py-2 border-b border-gray-100 last:border-0"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button className="w-full mt-2">Portal Login</Button>
                    </div>
                </div>
            )}
        </nav>
    );
}
