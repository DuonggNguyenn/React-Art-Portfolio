import portraitPainting from '/public/artworks/portrait.jpg';

export default function About() {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section
            id="about"
            className="min-h-screen w-full flex items-center bg-[#15110B] text-[#C6A664] py-16">
            <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 items-center gap-16 w-full">
                {/* Left column: Title + text + buttons */}
                <div className="flex flex-col items-start w-full md:pr-8">
                    <div className="max-w-2xl md:text-left w-full">
                        <h2 className="text-5xl font-semibold mb-8">About the Artist</h2>
                        <p className="text-lg mb-6 text-white leading-relaxed">
                            With over a decade of experience in visual arts, I specialize in creating thought-provoking pieces that bridge the gap between traditional and contemporary art forms.
                        </p>
                        <p className="text-lg mb-6 text-white leading-relaxed">
                            My work explores themes of human connection, urban life, and the natural world. I hold a Bachelor in Mathematic and a Bachelor in Data Engineering. My artistic journey began in childhood, and I've since developed a distinctive style that combines technical precision with emotional depth.
                        </p>

                        {/* Artistic Focus */}
                        <h3 className="text-3xl font-semibold mt-16">Artistic Focus</h3>
                        <div className="grid grid-cols-3 gap-8 mb-8 mt-8">
                            {['Portraits', 'Oil Painting', 'Gouache', 'Landscape', 'Anime'].map((focus) => (
                                <span key={focus} className="bg-[#C6A664] text-[#221B10] px-4 py-2 rounded-2xl text-center font-semibold hover:bg-[#A68B5B] transition-colors duration-200 cursor-pointer block">
                                    {focus}
                                </span>
                            ))}
                        </div>

                        {/* Back to Portfolio Button */}
                        <button
                            onClick={() => scrollToSection('portfolio')}
                            className="!text-lg text-[#C6A664] hover:underline mt-8 -ml-6">
                            ← Back to Portfolio
                        </button>
                    </div>
                </div>

                {/* Right column: Image */}
                <div className="flex flex-col items-center w-full md:pl-8">
                    <div className="relative mb-6 w-full">
                        <img
                            src={portraitPainting}
                            alt="Portrait Painting Artwork"
                            className="w-full max-w-xl rounded-2xl shadow-lg"
                        />

                        {/* Feature label overlay - clickable */}
                        <a
                            href="#portfolio"
                            className="absolute bottom-0 right-2 bg-[#C6A664] text-[#221B10] px-7 py-4 rounded-3xl text-sm font-medium shadow-lg border border-[#221B10] transform translate-y-1/2 hover:bg-[#A68B5B] transition-colors duration-200 cursor-pointer block"
                        >
                            <div className="text-sm opacity-80">#Feature work:</div>
                            <div className="font-semibold text-lg">Hobbit Painting</div>
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
}