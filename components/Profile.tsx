"use client";

import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import Image from "next/image"; // Assuming I can use next/image, but I don't have local images. I'll use placeholders.

export default function Profile() {
    return (
        <section id="profile" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <SectionTitle
                    title="Profil Instansi"
                    subtitle="Mengenal lebih dekat Suku Dinas Pendidikan Wilayah II Jakarta Utara"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                                alt="Kantor Sudin Pendidikan"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-gray-900">Sejarah & Peran</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Suku Dinas Pendidikan Wilayah II Jakarta Utara merupakan unsur pelaksana urusan pemerintahan bidang pendidikan yang berkedudukan di bawah dan bertanggung jawab kepada Kepala Dinas Pendidikan Provinsi DKI Jakarta.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Kami bertugas menyelenggarakan urusan pemerintahan di bidang pendidikan pada wilayah kerja Kecamatan Cilincing, Koja, dan Kelapa Gading. Berkomitmen untuk meningkatkan mutu pendidikan, aksesibilitas, dan tata kelola yang transparan.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="p-4 bg-primary-50 rounded-lg border border-primary-100">
                                <h4 className="text-3xl font-bold text-primary-600 mb-1">150+</h4>
                                <p className="text-sm text-gray-600">Sekolah Binaan</p>
                            </div>
                            <div className="p-4 bg-primary-50 rounded-lg border border-primary-100">
                                <h4 className="text-3xl font-bold text-primary-600 mb-1">5000+</h4>
                                <p className="text-sm text-gray-600">Tenaga Pendidik</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
