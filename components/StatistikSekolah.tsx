"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { schoolData } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { School, Users, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

type KecamatanKey = keyof typeof schoolData;

export default function StatistikSekolah() {
    const [activeTab, setActiveTab] = useState<KecamatanKey>("cilincing");

    return (
        <section id="statistik" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <SectionTitle
                    title="Data Statistik Pendidikan"
                    subtitle="Data sebaran satuan pendidikan, guru, dan tenaga kependidikan"
                />

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {(Object.keys(schoolData) as KecamatanKey[]).map((key) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={cn(
                                "px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300",
                                activeTab === key
                                    ? "bg-primary-600 text-white shadow-lg scale-105"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            )}
                        >
                            Kec. {schoolData[key].name}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                    >
                        {/* School Stats Grid */}
                        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
                            {schoolData[activeTab].stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-primary-50 p-6 rounded-xl border border-primary-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow"
                                >
                                    <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-primary-600 mb-3 shadow-sm">
                                        <School className="h-5 w-5" />
                                    </div>
                                    <h4 className="text-3xl font-bold text-gray-900 mb-1">
                                        {stat.count}
                                    </h4>
                                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Teacher & Staff Stats */}
                        <div className="space-y-4">
                            <div className="bg-secondary-50 p-8 rounded-xl border border-secondary-100 flex items-center gap-6">
                                <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center text-secondary-600 shadow-sm shrink-0">
                                    <GraduationCap className="h-8 w-8" />
                                </div>
                                <div>
                                    <h4 className="text-4xl font-bold text-gray-900 mb-1">
                                        {schoolData[activeTab].teachers}
                                    </h4>
                                    <p className="text-base font-medium text-gray-600">Total Guru</p>
                                </div>
                            </div>

                            <div className="bg-orange-50 p-8 rounded-xl border border-orange-100 flex items-center gap-6">
                                <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center text-orange-600 shadow-sm shrink-0">
                                    <Users className="h-8 w-8" />
                                </div>
                                <div>
                                    <h4 className="text-4xl font-bold text-gray-900 mb-1">
                                        {schoolData[activeTab].staff}
                                    </h4>
                                    <p className="text-base font-medium text-gray-600">Tenaga Kependidikan</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
