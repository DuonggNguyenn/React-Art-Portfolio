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
            <div className="max-w-6xl mx-auto px-6 
            flex flex-col md:flex-row items-center justify-center 
            mb-10 xl:gap-15 2xl:gap-20
            w-full">

                {/* Left column: Image + Button */}
                <div className="flex flex-col items-center mt-20 sm:mt-25 md:mt-25 lg:mt-25 xl:mt-25 2xl:mt-10">
                    <div className="relative mb-6">
                        {/* Outer frame */}
                        <div className="border-2 border-[#C6A664] rounded-sm shadow-[0_0_40px_rgba(198,140,100,0.5)] mb-4
                                      bg-[#0F0C08] ">
                            <div className="border-2 border-[#C6A664]/60 m-2">
                                {/* Inner frame with image */}
                                <div className="bg-[#1f1a12] p-4 rounded-sm">
                                    {/* Current image (fading in) */}
                                    <img
                                        src={images[currentImageIndex].src}
                                        alt={images[currentImageIndex].alt}
                                        className="
                                            sm:max-w-[400px] sm:h-[450px]
                                            md:max-w-[300px] md:h-[400px]
                                            lg:max-w-[350px] lg:h-[450px]
                                            xl:max-w-[350px] xl:h-[450px]
                                            2xl:max-w-[400px] 2xl:h-[540px]
                                        object-cover rounded-2xl shadow-lg mb-8 animate-fadeCrossfade"
                                    />

                                    <p className="italic font-serif 
                                                xl: text-sm 
                                                text-medium text-[#C6A664]/80 text-center mb-2 tracking-wide">
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
                        className="bg-[#221B10] text-[#C6A664] text-medium font-serif italic px-15 xl:px-20 2xl:px-20
                         hover:bg-[#A68B5B] border border-[#C6A664] hover:text-[#221B10] 
                         transition-colors duration-300 rounded-full py-3 xl:py-5 2xl:py-5 font-semibold shadow-md
                         text-[12px] xl:text-sm xl:mb-10 2xl:text-base
                         "
                    >
                        <a href="#portfolio">View My Works</a>
                    </Button>
                </div>

                {/* Right column: Title + Text + Button */}
                <div className="max-w-md text-center mt-6 md:mt-0 md:text-left md:ml-10 xl:mt-0 2xl:mt-0 xl:md:text-left 2xl:md:text-left">
                    <h2 className="
                    text-lg md:text-2xl xl:text-4xl 2xl:text-6xl 
                    font-serif mb-4 xl:mb-6 2xl:mb-6 tracking-wide">Art <br />  Journey</h2>
                    <p className="border-b border-[#C6A664] mb-6"></p>
                    <p className="mb-8 
                    text-[#f5f2e7]  
                     text-sm md:sm xl:text-base 2xl:text-base
                    leading-loose font-sans">Art has always been my way of balancing life with creativity and expression. Painting and sketching let me explore stories, moods, and ideas that can’t be explained with code or numbers — only felt. Each piece reflects that balance.</p>
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
                        transition-colors duration-300 rounded-full px-6 xl:py-5 2xl:py-5 xl:px-10 2xl:px-10 font-semibold shadow-md
                        text-[12px] xl:text-sm 2xl:text-base">
                        <a href="#contact">Contact Me</a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
