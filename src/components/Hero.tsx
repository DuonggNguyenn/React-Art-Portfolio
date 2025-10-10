import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import { artworks} from "@/data/artworks"
import { type Artwork } from "@/data/artworks"
import ArtworkFrame from "./ArtworkFrame"

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const [topViewedArtworks, setTopViewedArtworks] = useState<Artwork[]>([]);

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
        if(topViewedArtworks.length === 0) return;
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

    return (
        <section
            id="hero"
            className="min-h-screen items-center px-4 flex
                    bg-[#1b1206]
                     text-[#C6A664]  
                     bg-[radial-gradient(circle_at_center,rgba(198,166,100,0.25)_0%,transparent_70%)]
                     bg-[url('/textures/canvas-pattern.jpg')] bg-cover bg-blend-overlay"
        >
            <div className="max-w-6xl mx-auto
            flex flex-col md:flex-row items-center justify-center 
            pb-10
            xl:gap-15
            w-full">

                {/* Left column: Image + Button */}
                <div className="flex flex-col items-center">
                    <ArtworkFrame
                        src={currentArtwork.src}
                        title={currentArtwork.title}
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
                        <a href="#portfolio">View My Works</a>
                    </Button>
                </div>

                {/* Right column: Title + Text + Button */}
                <div className="max-w-md text-center md:mx-8 md:text-left">
                    <h2 className="
                    text-2xl md:text-4xl font-serif mb-4 mt-8 lg:mt-0 tracking-wide">Art <br />  Journey</h2>
                    <div className="border-b border-[#C6A664] mb-6"></div>
                    <p className="
                    text-[#f5f2e7]
                     text-sm md:sm xl:text-base
                    leading-loose font-sans">Art has always been my way of balancing life with creativity and expression. Painting and sketching let me explore stories, moods, and ideas that can’t be explained with code or numbers — only felt. Each piece reflects that balance.</p>
                    <p className="mt-6 text-sm lg:text-base font-sans text-[#f5f2e7] tracking-wide">
                        Feel free to {" "}
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection("contact")
                            }}
                            className="text-[#E3C97B] hover:underline hover:underline-offset-5 hover:text-[#F1D88C] transition-colors"
                        >
                            connect with me
                        </a>{" "}
                        anytime!
                    </p>
                </div>
            </div>
        </section>
    );
}
