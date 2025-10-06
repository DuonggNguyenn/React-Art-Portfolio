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
      <div
        className="max-w-6xl mx-auto xl:px-8 xl:my-20 2xl:my-12
                   grid md:grid-cols-2 items-center 
                   gap-12 xl:gap-6 2xl:gap-12 w-full" 
        // ⬆️ reduced gap at xl, restored larger at 2xl
      >
        {/* Left column */}
        <div className="flex flex-col items-start w-full md:pr-10 xl:md:pr-8 xl:mt-5 xl:ml-5 2xl:mt-10">
          <div className="max-w-2xl md:text-left w-full">
            <h2
              className="text-5xl font-serif font-semibold xl:mb-6 xl:mt-5 2xl:mt-10 2xl:mb-6
                         xl:text-4xl 2xl:text-5xl
                         tracking-wide"
            >
              About the Artist
            </h2>
            <p className="border-b border-[#C6A664] mb-6"></p>
            <p
              className="text-[#f5f2e7]
                         xl:text-base 2xl:text-lg
                         mb-6 leading-loose font-sans"
            >
              I have bachelor’s degrees in Data Engineering and Mathematics and
              work full-time as an integration developer. Outside of my tech
              career, I turn to painting and drawing as a way to step away from
              code and explore creativity in a more personal way.
            </p>
            <p
              className="xl:text-base 2xl:text-lg text-[#f5f2e7] 
                         leading-loose font-sans"
            >
              In my free time, I create oil paintings, portraits, landscapes,
              and other works inspired by curiosity and imagination. I am
              entirely self-taught and paint simply because I love it — it’s my
              way of finding balance, expression, and a deeper connection
              outside of my everyday work.
            </p>

            {/* Artistic Focus */}
            <h3 className="xl:text-2xl 2xl:text-3xl font-serif font-semibold xl:mt-10 2xl:mt-10">
              Artistic Focus
            </h3>
            <div
              className="grid grid-cols-3 
                         xl:gap-5 xl:mb-8 xl:mt-6
                         2xl:gap-6 2xl:mb-6 2xl:mt-6"
            >
              {['Portraits', 'Oil Painting', 'Gouache', 'Landscape', 'Anime'].map((focus) => (
                <span
                  key={focus}
                  className="border border-[#C6A664] text-[#C6A664] 
                             xl:text-sm xl:px-2 xl:py-2
                             2xl:text-base
                             rounded-full
                             text-medium tracking-wide font-serif
                             text-center
                             hover:bg-[#C6A664] hover:text-[#221B10] 
                             transition-colors duration-200 cursor-pointer block"
                >
                  {focus}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: Image */}
        <div className="flex flex-col items-center w-full xl:md:pl-16 2xl:md:pl-8">
          <div
            className="relative mb-6 w-full 
                       xl:max-w-sm  /* smaller at xl (~384px) */
                       2xl:max-w-md /* grows slightly at 2xl (~448px) */"
          >
            {/* Image with double border */}
            <div className="border-2 border-[#C6A664] shadow-[0_8px_20px_rgba(0,0,0,0.6)] bg-[#0F0C08] p-2">
              <div className="border-2 border-[#C6A664]/60 p-2">
                <img
                  src={portraitPainting}
                  alt="Portrait Painting Artwork"
                  className="w-full object-cover rounded-sm shadow-lg"
                />
              </div>
            </div>

            {/* Feature label overlay */}
            <Button
              asChild={true}
              onClick={() => scrollToSection('portfolio')}
              className="absolute bottom-1 right-0 
                         bg-[#221B10] text-[#C6A664]  
                         border border-[#C6A664] rounded-md shadow-md 
                         transform translate-y-1/2
                         px-9 py-9
                         hover:bg-[#C6A664] hover:text-[#221B10] hover:scale-105
                         hover:border-[#221B10] transition-all duration-200 cursor-pointer block"
            >
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[0.75rem] uppercase tracking-widest opacity-80 font-serif">
                  #Feature Work
                </span>
                <span className="font-semibold text-sm font-serif">
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
