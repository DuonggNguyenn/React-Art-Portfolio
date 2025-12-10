import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import { artworks } from "@/data/artworks"
import { type Artwork } from "@/data/artworks"
import ArtworkFrame from "./ArtworkFrame"
import { useTranslation } from "react-i18next";

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const [topViewedArtworks, setTopViewedArtworks] = useState<Artwork[]>([]);

    const { t, i18n } = useTranslation();

    //TODO: make a common utility to read artwork views from localStorage
    useEffect(() => {
        const viewedArtworks = localStorage.getItem("artworkViews") || "{}";

        const views = JSON.parse(viewedArtworks);

        //merge views with artworks data to get full artwork details
        const mergedArtworks = artworks.filter(artwork => artwork.status !== 'work in progress').map((artwork) => ({
            ...artwork,
            views: views[artwork.id] || 0,
        }))

        //sort top 3 viewed artworks
        setTopViewedArtworks(mergedArtworks.sort((a, b) => b.views - a.views).slice(0, 3));
    }, []);

    useEffect(() => {
        if (topViewedArtworks.length === 0) return;
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % topViewedArtworks.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [topViewedArtworks.length]);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const currentArtwork = topViewedArtworks.length > 0 ? topViewedArtworks[currentImageIndex] : artworks[1];

    const currentLang = i18n.language;
    const lang = currentLang.startsWith("no") ? "no" : "en";

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center w-full
                        bg-[#1b1206] text-[#C6A664]
                        bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.55)_0%,transparent_65%),url('/textures/canvas-pattern.jpg')]
                        bg-cover bg-blend-overlay"
        >
            <div className="max-w-6xl mx-auto w-full
                            flex flex-col md:flex-row items-center justify-center
                            pt-12 pb-16
                            px-6 sm:px-8 md:px-12 lg:px-16
                            gap-10 lg:gap-20">

                {/* Left column: Image + Button */}
                <div className="flex flex-col items-center
                                w-4/5 sm:w-3/4
                                md:w-1/2 lg:w-[45%] xl:w-[48%]
                                sm:py-5">
                    <ArtworkFrame
                        src={currentArtwork.src}
                        title={currentArtwork.title[lang]}
                        index={currentImageIndex}
                    />
                    <Button
                        onClick={
                            (e) => {
                                e.preventDefault();
                                scrollToSection('portfolio')
                            }
                        }
                        asChild={true}
                        className="bg-[#221B10] text-[#C6A664] text-medium font-serif italic px-15 lg:px-20
                         hover:bg-[#A68B5B] border border-[#C6A664] hover:text-[#221B10] 
                         transition-colors duration-300 rounded-full py-3 lg:py-5 shadow-md font-light
                         text-sm lg:text-base"
                    >
                        <a href="#portfolio">{t('hero.viewWorks')}</a>
                    </Button>
                </div>

                {/* Right column: Title + Text + Button */}
                <div className="w-full
                                max-w-xl                
                                md:max-w-none md:flex-1 
                                text-center md:text-left
                                px-6 sm:px-8 md:px-0 ">
                    <h2 className="text-xl sm:text-2xl xl:text-3xl font-serif font-light tracking-wide">
                        <span>{t('hero.titleLine1')}</span>
                        <span className="block lg:mt-2 xl:mt-3">{t('hero.titleLine2')}</span>
                    </h2>
                    <div className="border-b border-[#C6A664] my-4"></div>
                    <p className="
                    text-[#f5f2e7]
                     text-sm xl:text-base tracking-wide
                    leading-loose font-sans">{t('hero.description')}</p>
                    <p className="mt-6 text-sm xl:text-base font-sans text-[#f5f2e7] tracking-wide">
                        {t("hero.contactPrefix")}{" "}
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("contact");
                            }}
                            className="text-[#E3C97B] text-sm xl:text-base hover:underline hover:underline-offset-5 hover:text-[#F1D88C] transition-colors"
                        >
                            {t("hero.contactLink")}
                        </a>{" "}
                        {t("hero.contactSuffix")}
                    </p>
                </div>
            </div>
        </section>
    );
}
