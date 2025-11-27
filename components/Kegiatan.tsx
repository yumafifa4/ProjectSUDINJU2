"use client";

import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const activities = [
    {
        id: 1,
        title: "Sosialisasi Kurikulum Merdeka",
        date: "24 November 2024",
        description: "Kegiatan sosialisasi implementasi Kurikulum Merdeka bagi seluruh kepala sekolah di wilayah Jakarta Utara II.",
        image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1974&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Lomba Kompetensi Siswa (LKS)",
        date: "20 November 2024",
        description: "Ajang kompetisi bagi siswa SMK untuk mengukur kompetensi keahlian sesuai standar industri.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Workshop Peningkatan Mutu Guru",
        date: "15 November 2024",
        description: "Pelatihan intensif untuk meningkatkan kompetensi pedagogik dan profesional guru.",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function Kegiatan() {
    return (
        <section id="kegiatan" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <SectionTitle
                    title="Berita & Kegiatan"
                    subtitle="Informasi terkini seputar pendidikan di Jakarta Utara"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {activities.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-600 flex items-center gap-1 shadow-sm">
                                        <Calendar className="h-3 w-3" />
                                        {item.date}
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="line-clamp-2 group-hover:text-primary-600 transition-colors">
                                        {item.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="line-clamp-3">
                                        {item.description}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="ghost" className="p-0 h-auto text-primary-600 hover:text-primary-700 hover:bg-transparent group/btn">
                                        Baca Selengkapnya <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button size="lg" variant="outline" className="border-primary-500 text-primary-600 hover:bg-primary-50">
                        Lihat Semua Kegiatan
                    </Button>
                </div>
            </div>
        </section>
    );
}
