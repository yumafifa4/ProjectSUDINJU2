import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import VisiMisi from "@/components/VisiMisi";
import Gallery from "@/components/Gallery";
import Kegiatan from "@/components/Kegiatan";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <div className="flex flex-col w-full">
            <Hero />
            <Profile />
            <VisiMisi />
            <Gallery />
            <Kegiatan />
            <Contact />
        </div>
    );
}
