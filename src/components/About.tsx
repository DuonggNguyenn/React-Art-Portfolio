import { Button } from './ui/button';
import portraitPainting from '/artworks/artist-portrait/self-portrait.jpeg';
import { useTranslation } from 'react-i18next';
import { artworks, type Artwork } from "@/data/artworks"
import { useEffect, useState } from 'react';

export default function About({onOpenFeaturedDetail}: {onOpenFeaturedDetail?: (artworkId: number) => void}) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const lang = currentLanguage.startsWith("no") ? "no" : "en";
  const [featuredArtwork, setFeaturedArtwork] = useState<Artwork | null>(null);
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const viewedArtworks = localStorage.getItem("artworkViews") || "{}";

    const views = JSON.parse(viewedArtworks);

    //merge views with artworks data to get full artwork details
    const mergedArtworks = artworks
      .filter(artwork => artwork.status !== 'work in progress')
      .map((artwork) => ({
      ...artwork,
      views: views[artwork.id] || 0,
    }))

    //find the most viewed artwork
    setFeaturedArtwork(mergedArtworks.sort((a, b) => b.views - a.views)[0]);

    //If no views yet, pick a default artwork
    if (mergedArtworks.every(artwork => artwork.views === 0)) {
      setFeaturedArtwork(artworks.find(artwork => artwork.id === 1 && artwork.status !== 'work in progress') || null);
    }
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center 
             bg-[#1b1206] text-[#C6A664]
             bg-[url('/textures/canvas-pattern.jpg')] bg-cover bg-blend-overlay"
    >
      <div className="max-w-6xl mx-auto px-10 pt-20 pb-12 
                  grid lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center">

        {/* Left column */}
        <div>
          <h2 className="font-serif font-light text-2xl sm:text-3xl xl:text-4xl mb-4">
            {t('about.title')}
          </h2>

          <div className="h-[1px] bg-[#C6A664] mt-5 mb-6"></div>

          <p className="text-[#f5f2e7] text-sm xl:text-base tracking-[0.02em] leading-loose mb-4">
            {t('about.paragraph1')}
          </p>

          <p className="text-[#f5f2e7] text-sm xl:text-base tracking-[0.02em] leading-loose">
            {t('about.paragraph2')}
          </p>

          <h3 className="text-lg xl:text-xl font-serif font-light mt-8 mb-4">
            {t('about.artisticFocusTitle')}
          </h3>

          <div className="flex flex-wrap gap-6 text-sm xl:text-base 2xl:text-base">
            {[t('about.focus.oilPainting'), t('about.focus.gouache'), t('about.focus.watercolour'), t('about.focus.graphite'), t('about.focus.charcoal')].map((focus) => (
              <span
                key={focus}
                className="
                        relative pb-1  text-[#C6A664]/80 
                      hover:text-[#C6A664] transition-colors"
              >
                {focus}
              </span>
            ))}
          </div>

          {/* WIP section */}
          <div className="mt-8">
            <h3 className="text-lg xl:text-xl font-serif font-light text-[#C6A664]">
              {t("about.wipTitle")}
            </h3>
            <p className="text-sm xl:text-base 2xl:text-base text-[#C6A664]/80 mt-4 mb-4">
              {artworks.filter(artwork => artwork.status === 'work in progress').length > 0 ?
                artworks.filter(artwork => artwork.status === 'work in progress').map(artwork =>`${artwork.title[lang]} - ${artwork.medium[lang]}`).join(", ")
                :
                t("about.noWip")
              }
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="flex justify-center pb-10">
          <div className="relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md">

            <div className="border-1 border-[#C6A664] bg-[#0F0C08] p-2 rounded-xl shadow-[0_0_40px_rgba(198,140,100,0.3)] ">
              <div className="border-1 border-[#C6A664]/60 p-2">
                <img
                  src={portraitPainting}
                  alt="Portrait Painting Artwork"
                  className="w-full object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            <Button
              asChild={true}
              onClick={() => {
                if(featuredArtwork && onOpenFeaturedDetail) {
                  onOpenFeaturedDetail(featuredArtwork.id);
                }
                scrollToSection('portfolio');
              }}
              className="absolute bottom-0 right-0 translate-y-1/2
                     bg-[#221B10] text-[#C6A664] border border-[#C6A664] rounded-md shadow-md
                     px-8 py-8 sm:px-10 sm:py-9 hover:bg-[#C6A664] hover:text-[#221B10] hover:scale-105
                     transition-all duration-200 cursor-pointer"
            >
              <div className="flex flex-col items-center leading-tight">
                <span className="text-[10px] xl:text-sm uppercase tracking-widest opacity-80 font-serif">
                  {t('about.featureLabel')}
                </span>
                <span className="font-semibold text-[11px] xl:text-sm font-serif">
                  {featuredArtwork ? featuredArtwork.title[lang] : t('about.featureDefault')}
                </span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
