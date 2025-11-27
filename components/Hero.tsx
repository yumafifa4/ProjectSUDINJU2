"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            id="home"
            ref={ref}
            className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden"
        >
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70" />
            </motion.div>

            {/* Content */}
            <div className="container relative z-10 px-4 md:px-6 text-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm border border-white/20">
                            Selamat Datang di Portal Resmi
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
                            Suku Dinas Pendidikan <br />
                            <span className="text-primary-300">Wilayah II Jakarta Utara</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
                            Membangun generasi cerdas, berkarakter, dan siap menghadapi tantangan masa depan melalui layanan pendidikan yang prima dan inovatif.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100 font-semibold text-base">
                                Jelajahi Profil
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white font-semibold text-base">
                                Hubungi Kami <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hidden lg:block relative"
                    >
                        {/* Abstract Illustration/Shape */}
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-400 to-secondary-400 rounded-full opacity-20 blur-3xl animate-pulse" />
                            <div className="relative z-10 grid grid-cols-2 gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl">
                                <div className="space-y-4 mt-8">
                                    <div className="h-40 bg-gray-200/20 rounded-xl w-full animate-pulse"></div>
                                    <div className="h-24 bg-gray-200/20 rounded-xl w-full animate-pulse"></div>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-24 bg-gray-200/20 rounded-xl w-full animate-pulse"></div>
                                    <div className="h-40 bg-gray-200/20 rounded-xl w-full animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white/50 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
