import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import { Analytics } from "@vercel/analytics/react"

function App() {
  
  return (
    <div className="w-full min-h-screen">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}

export default App
