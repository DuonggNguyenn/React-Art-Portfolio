
import { Button } from "./ui/button"
import hobbitPainting from "../assets/hobbit-painting.jpg"

export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen items-center flex bg-[#15110B] text-[#C6A664] px-4"
        >
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-30 w-full">

                {/* Left column: Image + Button */}
                <div className="flex flex-col items-center">
                    <img
                        src={hobbitPainting}
                        alt="Hobbit Painting Artwork"
                        className="w-135 rounded-2xl shadow-lg mb-8"
                    />
                    <Button
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
                    <Button asChild={true} className="bg-[#221B10] text-white hover:bg-[#A68B5B] border border-white hover:text-white transition-colors duration-300 rounded-2xl py-5 px-10 text-lg font-semibold">
                        <a href="#contact">Contact Me</a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
