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
        className="max-w-6xl mx-auto xl:px-8 lg:px-15 xl:my-20 2xl:my-12
                   grid md:grid-cols-2 items-center 
                   gap-4 md:gap-0 lg:gap-6 xl:gap-6 2xl:gap-12 w-full"
      >
        {/* Left column */}
        <div className="flex flex-col items-start w-full xl:md:pr-9 lg:pr-8 xl:mt-5 xl:ml-5 2xl:mt-10">
          <div className="max-w-2xl md:text-left w-full">
            <h2
              className="font-serif font-semibold mt-8 mb-3 mx-6 sm:ml-8 lg:mx-2 xl:mb-6 xl:mt-5 2xl:mt-10 2xl:mb-6
                         text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl
                         tracking-wide"
            >
              About the Artist
              <p className="border-b border-[#C6A664] my-4 xl:my-6 2xl:my-6"></p>
            </h2>
            <p
              className="text-[#f5f2e7]
                         text-[12px] lg:mx-2 lg:text-sm xl:text-base 2xl:text-lg
                         mb-3 mx-6 sm:mx-8 leading-loose font-sans"
            >
              I have bachelor’s degrees in Data Engineering and Mathematics and
              work full-time as an integration developer. Outside of my tech
              career, I turn to painting and drawing as a way to step away from
              code and explore creativity in a more personal way.
            </p>
            <p
              className="text-[12px] mx-6 mb-3 sm:mx-8 lg:mx-2 lg:text-sm xl:text-base 2xl:text-lg text-[#f5f2e7]
                         leading-loose font-sans"
            >
              In my free time, I create oil paintings, portraits, landscapes,
              and other works inspired by curiosity and imagination. I am
              entirely self-taught and paint simply because I love it — it’s my
              way of finding balance, expression, and a deeper connection
              outside of my everyday work.
            </p>

            {/* Artistic Focus */}
            <h3 className="text-base xl:text-2xl 2xl:text-3xl font-serif font-semibold ml-6 sm:ml-8 lg:mt-10 lg:mx-2 xl:mt-10 2xl:mt-10">
              Artistic Focus
            </h3>
            <div
              className="grid grid-cols-3 
                         gap-3 mb-4 mt-3 mx-6
                         sm:gap-4 sm:mb-6 sm:mt-4 sm:mx-8  
                         lg:mx-2      
                         xl:gap-5 xl:mb-8 xl:mt-6
                         2xl:gap-6 2xl:mb-6 2xl:mt-6"
            >
              {['Portraits', 'Oil Painting', 'Gouache', 'Landscape', 'Anime'].map((focus) => (
                <span
                  key={focus}
                  className="border border-[#C6A664] text-[#C6A664] 
                             text-[10px] py-1
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
        <div className="flex flex-col items-center w-full mb-6 xl:md:pl-16 2xl:md:pl-8">
          <div
            className="relative mb-6 w-full 
                       max-w-xs  /* default (~320px) */
                       lg:max-w-90  /* grows at lg (~384px) */
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
                         px-6 py-6 xl:px-9 xl:py-9  2xl:px-9 2xl:py-9
                         hover:bg-[#C6A664] hover:text-[#221B10] hover:scale-105
                         hover:border-[#221B10] transition-all duration-200 cursor-pointer block"
            >
              <div className="flex flex-col items-start leading-tight ">
                <span className="text-[10px] xl:text-[0.75rem] 2xl:text-[0.75rem] uppercase tracking-widest opacity-80 font-serif">
                  #Feature Work
                </span>
                <span className="font-semibold text-[10px] xl:text-sm 2xl:text-sm font-serif">
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
