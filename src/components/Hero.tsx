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
                    bg-[#110a01]
                     text-[#C6A664]  
                     bg-[radial-gradient(circle_at_center,rgba(198,166,100,0.25)_0%,transparent_70%)]
                     bg-[url('/public/textures/canvas-pattern.jpg')] bg-cover bg-blend-overlay"
        >
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-30 w-full">

                {/* Left column: Image + Button */}
                <div className="flex flex-col items-center">
                    <div className="relative mb-6">
                        {/* Outer frame */}
                        <div className="border-2 border-[#C6A664] rounded-sm shadow-[0_8px_20px_rgba(0,0,0,0.6)] mb-6
                                      bg-[#0F0C08] ">
                            <div className="border-2 border-[#C6A664]/60 m-2">
                                {/* Inner frame with image */}
                                <div className="bg-[#1f1a12] p-4 rounded-sm">
                                    {/* Current image (fading in) */}
                                    <img
                                        src={images[currentImageIndex].src}
                                        alt={images[currentImageIndex].alt}
                                        className="w-135 rounded-2xl shadow-lg mb-8 
                                                   animate-fadeCrossfade"
                                    />

                                    <p className="italic font-serif text-medium text-[#C6A664]/80 text-center mb-2 tracking-wide">
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
                        className="bg-[#221B10] text-[#C6A664] text-medium font-serif italic px-20
                         hover:bg-[#A68B5B] border border-[#C6A664] hover:text-[#221B10] 
                         transition-colors duration-300 rounded-full py-5 text-base font-semibold shadow-md"
                    >
                        <a href="#portfolio">View My Works</a>
                    </Button>
                </div>

                {/* Right column: Title + Text + Button */}
                <div className="max-w-md md:text-left">
                    <h2 className="text-6xl font-serif mb-6 tracking-wide">Art <br />  Journey</h2>
                    <p className="border-b border-[#C6A664] mb-6"></p>
                    <p className="text-lg mb-8 text-[#f5f2e7]  leading-loose font-sans">Art has always been my way of balancing life with creativity and expression. Painting and sketching let me explore stories, moods, and ideas that can’t be explained with code or numbers — only felt. Each piece reflects that balance.</p>
                    <Button
                        onClick={
                            (e) => {
                                e.preventDefault(),
                                    scrollToSection('contact')
                            }
                        }
                        asChild={true}
                        className="bg-[#221B10] text-white font-serif hover:bg-[#A68B5B] 
                        border border-white hover:text-white 
                        transition-colors duration-300 rounded-full py-5 px-10 text-base font-semibold shadow-md">
                        <a href="#contact">Contact Me</a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
