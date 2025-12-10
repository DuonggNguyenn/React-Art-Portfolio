import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import Detail from './components/Detail'
import { Analytics } from "@vercel/analytics/react"
import { useState } from 'react';
import { artworks } from '@/data/artworks';

function App() {
  // State to manage the currently viewed artwork in Detail component
  const visibleArtworks = artworks.filter(artwork => artwork.status !== 'work in progress');
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [currentArtworkIndex, setCurrentArtworkIndex] = useState(0);

  const openDetailById = (artworkId: number) => {
    const index = visibleArtworks.findIndex(artwork => artwork.id === artworkId);
    if (index !== -1) {
      setCurrentArtworkIndex(index);
      setIsDetailOpen(true);
    }
  }

  return (
    <div className="w-full min-h-screen">
      <Header />
      <main>
        <Hero />
        <Portfolio onOpenDetail={openDetailById}/>
        <About onOpenFeaturedDetail={openDetailById}/>
        <Contact />
      </main>
      <Footer />
      <Analytics />

      {/* Detail modal for artwork viewing */}
      {isDetailOpen && (
        <Detail
            artworkId={visibleArtworks[currentArtworkIndex].id}
            currentImageId={currentArtworkIndex}
            totalArtworks={visibleArtworks.length}
            onClose={() => setIsDetailOpen(false)}
            onPrev={() => {
                if (currentArtworkIndex > 0) {
                    setCurrentArtworkIndex(currentArtworkIndex - 1);
                }
            }}
            onNext={() => {
                if (currentArtworkIndex < visibleArtworks.length - 1) {
                    setCurrentArtworkIndex(currentArtworkIndex + 1);
                }
            }}
        />
      )}  
    </div>
  )
}

export default App
