"use client";

import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { CheckCircle2, Target } from "lucide-react";

export default function VisiMisi() {
    const missions = [
        "Mewujudkan akses pendidikan yang merata dan berkeadilan.",
        "Meningkatkan mutu dan relevansi pendidikan yang berpusat pada peserta didik.",
        "Mewujudkan tata kelola pendidikan yang transparan dan akuntabel.",
        "Meningkatkan profesionalisme dan kesejahteraan pendidik dan tenaga kependidikan.",
        "Melestarikan dan mengembangkan budaya Jakarta yang religius dan berkarakter."
    ];

    return (
        <section id="visi-misi" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <SectionTitle
                    title="Visi & Misi"
                    subtitle="Arah dan tujuan strategis pembangunan pendidikan"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Visi Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-1 bg-white rounded-2xl p-8 shadow-lg border-t-4 border-primary-500 hover:shadow-xl transition-shadow"
                    >
                        <div className="h-14 w-14 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-primary-600">
                            <Target className="h-8 w-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi</h3>
                        <p className="text-gray-600 text-lg leading-relaxed italic">
                            "Pendidikan Tuntas dan Berkualitas untuk Semua"
                        </p>
                    </motion.div>

                    {/* Misi Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-2 bg-white rounded-2xl p-8 shadow-lg border-t-4 border-secondary-500 hover:shadow-xl transition-shadow"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-14 w-14 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-600">
                                <CheckCircle2 className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Misi</h3>
                        </div>

                        <ul className="grid grid-cols-1 gap-4">
                            {missions.map((misi, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="mt-1 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                                    <span className="text-gray-700">{misi}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
