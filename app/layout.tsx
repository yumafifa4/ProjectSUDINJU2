import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Suku Dinas Pendidikan Wilayah II Jakarta Utara",
    description: "Portal Resmi Suku Dinas Pendidikan Wilayah II Jakarta Utara. Mewujudkan pendidikan berkualitas dan berkarakter.",
    keywords: ["Sudin Pendidikan", "Jakarta Utara", "Pendidikan", "Sekolah", "Dinas Pendidikan"],
    authors: [{ name: "Sudin Pendidikan JU2" }],
    openGraph: {
        title: "Suku Dinas Pendidikan Wilayah II Jakarta Utara",
        description: "Portal Resmi Suku Dinas Pendidikan Wilayah II Jakarta Utara.",
        url: "https://sudinpendidikan-ju2.jakarta.go.id",
        siteName: "Sudin Pendidikan JU2",
        images: [
            {
                url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
                width: 1200,
                height: 630,
            },
        ],
        locale: "id_ID",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id" className="scroll-smooth">
            <body className={inter.className}>
                <Navbar />
                <main className="min-h-screen">
                    {children}
                </main>
                <WhatsAppFloat />
                <Footer />
            </body>
        </html>
    );
}
