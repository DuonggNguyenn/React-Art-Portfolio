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
        const mergedArtworks = artworks.map((artwork) => ({
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
            className="min-h-screen flex items-center
             bg-[#1b1206] text-[#C6A664]
             bg-[radial-gradient(circle_at_center,rgba(198,166,100,0.25)_0%,transparent_70%)]
             bg-[url('/textures/canvas-pattern.jpg')] bg-cover bg-blend-overlay"
        >
            <div className="max-w-6xl mx-auto w-full px-4 sm:px-6
                  flex flex-col md:flex-row items-center justify-center 
                  pb-10 xl:gap-15">

                {/* Left column: Image + Button */}
                <div className="flex flex-col items-center">
                    <ArtworkFrame
                        src={currentArtwork.src}
                        title={currentArtwork.title[lang]}
                    />
                    <Button
                        onClick={
                            (e) => {
                                e.preventDefault(),
                                    scrollToSection('portfolio')
                            }
                        }
                        asChild={true}
                        className="bg-[#221B10] text-[#C6A664] text-medium font-serif italic px-15 lg:px-20
                         hover:bg-[#A68B5B] border border-[#C6A664] hover:text-[#221B10] 
                         transition-colors duration-300 rounded-full py-3 lg:py-5 shadow-md font-semibold
                         text-[12px] lg:text-sm"
                    >
                        <a href="#portfolio">{t('hero.viewWorks')}</a>
                    </Button>
                </div>

                {/* Right column: Title + Text + Button */}
                <div className="max-w-md text-center md:mx-8 md:text-left">
                    <h2 className="
                    text-2xl md:text-4xl font-serif mb-4 mt-8 lg:mt-0 tracking-wide">{t('hero.titleLine1')}<br />{t('hero.titleLine2')}</h2>
                    <div className="border-b border-[#C6A664] mb-6"></div>
                    <p className="
                    text-[#f5f2e7]
                     text-sm md:sm xl:text-base
                    leading-loose font-sans">{t('hero.description')}</p>
                    <p className="mt-6 text-sm lg:text-base font-sans text-[#f5f2e7] tracking-wide">
                        {t("hero.contactPrefix")}{" "}
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("contact");
                            }}
                            className="text-[#E3C97B] hover:underline hover:underline-offset-5 hover:text-[#F1D88C] transition-colors"
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
