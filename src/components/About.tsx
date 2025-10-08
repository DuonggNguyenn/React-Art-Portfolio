import { Button } from './ui/button';
import portraitPainting from '/artworks/artist-portrait.jpg';

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
      className="min-h-screen w-full flex items-center 
             bg-[#1b1206] text-[#C6A664]
             bg-[url('/textures/canvas-pattern.jpg')] bg-cover bg-blend-overlay"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 
                  grid lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center">

        {/* Left column */}
        <div>
          <h2 className="font-serif font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4">
            About the Artist
          </h2>

          <div className="h-[1px] bg-[#C6A664] mb-6"></div>

          <p className="text-[#f5f2e7] text-base lg:text-lg leading-loose mb-4">
            I have bachelor’s degrees in Data Engineering and Mathematics and
            work full-time as an integration developer. Outside of my tech career,
            I turn to painting and drawing as a way to step away from code and
            explore creativity in a more personal way.
          </p>

          <p className="text-[#f5f2e7] text-base lg:text-lg leading-loose mb-6">
            In my free time, I create oil paintings, portraits, landscapes,
            and other works inspired by curiosity and imagination. I am
            entirely self-taught and paint simply because I love it — it’s my
            way of finding balance, expression, and a deeper connection
            outside of my everyday work.
          </p>

          <h3 className="text-lg lg:text-xl xl:text-2xl font-serif font-semibold mb-6">
            Artistic Focus
          </h3>

          <div className="flex flex-wrap gap-6">
            {['Portraits', 'Oil Painting', 'Landscape', 'Gouache', 'Anime'].map((focus) => (
              <span
                key={focus}
                className="border border-[#C6A664] text-[#C6A664] px-6 py-2 rounded-full
                       text-sm lg:text-base font-serif cursor-pointer
                       hover:bg-[#C6A664] hover:text-[#221B10] transition-colors duration-200"
              >
                {focus}
              </span>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="flex justify-center">
          <div className="relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md">

            <div className="border-2 border-[#C6A664] shadow-lg bg-[#0F0C08] p-2">
              <div className="border-2 border-[#C6A664]/60 p-2">
                <img
                  src={portraitPainting}
                  alt="Portrait Painting Artwork"
                  className="w-full object-cover rounded-sm shadow-lg"
                />
              </div>
            </div>

            <Button
              asChild={true}
              onClick={() => scrollToSection('portfolio')}
              className="absolute bottom-0 right-0 translate-y-1/2
                     bg-[#221B10] text-[#C6A664] border border-[#C6A664] rounded-md shadow-md
                     px-10 py-9 hover:bg-[#C6A664] hover:text-[#221B10] hover:scale-105
                     transition-all duration-200"
            >
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[12px] uppercase tracking-widest opacity-80 font-serif">
                  #Feature Work
                </span>
                <span className="font-semibold text-medium font-serif">
                  The Hobbit Painting
                </span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
