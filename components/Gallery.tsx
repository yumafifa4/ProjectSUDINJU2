"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop",
        alt: "Kegiatan Belajar Mengajar",
        category: "Pendidikan"
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1565034946487-077786996e27?q=80&w=2070&auto=format&fit=crop",
        alt: "Upacara Bendera ASN",
        category: "Kegiatan"
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop",
        alt: "Pelatihan Guru",
        category: "Pelatihan"
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
        alt: "Lomba Siswa Berprestasi",
        category: "Prestasi"
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
        alt: "Rapat Koordinasi",
        category: "Rapat"
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop",
        alt: "Kunjungan Kerja",
        category: "Kunjungan"
    }
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

    return (
        <section id="gallery" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <SectionTitle
                    title="Galeri Kegiatan"
                    subtitle="Dokumentasi aktivitas dan momen penting"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-gray-100"
                            onClick={() => setSelectedImage(image)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div className="text-white text-center p-4">
                                    <ZoomIn className="h-8 w-8 mx-auto mb-2" />
                                    <p className="font-semibold">{image.alt}</p>
                                    <span className="text-xs uppercase tracking-wider">{image.category}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-lg bg-white"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X className="h-6 w-6" />
                            </button>
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="h-full w-full object-contain max-h-[85vh]"
                            />
                            <div className="bg-white p-4">
                                <h3 className="text-lg font-semibold text-gray-900">{selectedImage.alt}</h3>
                                <p className="text-sm text-gray-500">{selectedImage.category}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
