import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import StatistikSekolah from "@/components/StatistikSekolah";
import LayananPublik from "@/components/LayananPublik";
import VisiMisi from "@/components/VisiMisi";
import Gallery from "@/components/Gallery";
import Kegiatan from "@/components/Kegiatan";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <div className="flex flex-col w-full">
            <Hero />
            <Profile />
            <StatistikSekolah />
            <LayananPublik />
            <VisiMisi />
            <Gallery />
            <Kegiatan />
            <Contact />
        </div>
    );
}
