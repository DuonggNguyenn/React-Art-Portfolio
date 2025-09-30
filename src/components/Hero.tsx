
import { Button } from "./ui/button"
import hobbitPainting from "/public/artworks/hobbit-painting.jpg"
import landscapePaiting from "/public/artworks/landscape-painting.jpg"
import portraitPainting from "/public/artworks/portrait.jpg"
import { useEffect, useState } from "react"


export default function Hero() {
    const images = [
        { src: hobbitPainting, alt: "Hobbit Painting Artwork" },
        { src: landscapePaiting, alt: "Landscape Painting Artwork" },
        { src: portraitPainting, alt: "Portrait Painting Artwork" },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

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
            className="min-h-screen items-center flex bg-[#15110B] text-[#C6A664] px-4"
        >
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-30 w-full">

                {/* Left column: Image + Button */}
                <div className="flex flex-col items-center">
                    <img
                        key={currentImageIndex}
                        src={images[currentImageIndex].src}
                        alt={images[currentImageIndex].alt}
                        className="w-135 rounded-2xl shadow-lg mb-8 animate-fadeIn"
                    />
                    <Button
                        onClick={
                            (e) => {
                                e.preventDefault(),
                                    scrollToSection('portfolio')
                            }
                        }
                        asChild={true}
                        className="bg-[#221B10] text-[#C6A664] px-18 hover:bg-[#A68B5B] border border-[#C6A664] hover:text-[#221B10] transition-colors duration-300 rounded-2xl py-5 text-lg font-semibold"
                    >
                        <a href="#portfolio">View My Work</a>
                    </Button>
                </div>

                {/* Right column: Title + Text + Button */}
                <div className="max-w-md md:text-left">
                    <h2 className="text-6xl font-semibold mb-8">Art <br /> Journey</h2>
                    <p className="text-lg mb-8 text-white leading-relaxed">Art is a continuous journey of exploration and expression. Through each piece, I seek to capture moments, moods, and stories that connect with the viewer on a personal level</p>
                    <Button
                        onClick={
                            (e) => {
                                e.preventDefault(),
                                    scrollToSection('contact')
                            }
                        }
                        asChild={true}
                        className="bg-[#221B10] text-white hover:bg-[#A68B5B] border border-white hover:text-white transition-colors duration-300 rounded-2xl py-5 px-10 text-lg font-semibold">
                        <a href="#contact">Contact Me</a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
