"use client";

import { SectionTitle } from "@/components/ui/section-title";
import { publicServices } from "@/lib/data";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function LayananPublik() {
    return (
        <section id="layanan" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <SectionTitle
                    title="Layanan Publik"
                    subtitle="Akses cepat ke berbagai layanan pendidikan"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {publicServices.map((service, index) => {
                        return (
                            <motion.a
                                key={index}
                                href={service.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.03 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="group relative overflow-hidden bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300"
                            >
                                <div className={cn("absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full opacity-10 transition-transform group-hover:scale-150", service.color)} />

                                <div className="relative z-10 flex items-start gap-4">
                                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-white p-1 shadow-sm border border-gray-100 flex items-center justify-center">
                                        <img
                                            src={service.image}
                                            alt={`Logo ${service.title}`}
                                            className="h-full w-full object-contain"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
