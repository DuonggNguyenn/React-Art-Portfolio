import { Button } from "./ui/button"
import hobbitPainting from "/artworks/oilpainting/thehobbit-oilpainting.jpeg"
import theswanPainting from "/artworks/oilpainting/theswan-oilpainting.jpeg"
import { useEffect, useState } from "react"


export default function Hero() {
    const images = [
        { src: hobbitPainting, alt: "Hobbit Painting Artwork" },
        { src: theswanPainting, alt: "The Swan Lake Artwork" }
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

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
            xl:gap-15
            w-full">

                {/* Left column: Image + Button */}
                <div className="flex flex-col items-center">
                    <div className="relative mb-8">
                        {/* Outer frame */}
                        <div className="border-1 border-[#C6A664] rounded-sm shadow-[0_0_40px_rgba(198,140,100,0.5)] p-1
                                      bg-[#0F0C08] ">
                            <div className="border-2 border-[#C6A664]/60 m-2">
                                {/* Inner frame with image */}
                                <div className="bg-[#1f1a12] p-4 rounded-sm">
                                    {/* Current image (fading in) */}
                                    <img
                                        src={images[currentImageIndex].src}
                                        alt={images[currentImageIndex].alt}
                                        className="max-w-xs md:max-w-sm h-auto object-cover rounded-md shadow-lg animate-fadeCrossfade"
                                    />

                                    <p className="italic font-serif text-sm text-[#C6A664]/90 text-center mt-3 tracking-wide">
                                        {images[currentImageIndex].alt}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
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
                <div className="max-w-md text-center md:text-left">
                    <h2 className="
                    text-2xl md:text-4xl font-serif mb-4 tracking-wide">Art <br />  Journey</h2>
                    <div className="border-b border-[#C6A664] mb-6"></div>
                    <p className="
                    text-[#f5f2e7]
                     text-sm md:sm xl:text-base
                    leading-loose font-sans">Art has always been my way of balancing life with creativity and expression. Painting and sketching let me explore stories, moods, and ideas that can’t be explained with code or numbers — only felt. Each piece reflects that balance.</p>
                    <p className="mt-6 text-sm md:text-base font-serif text-[#f5f2e7] tracking-wide">
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
