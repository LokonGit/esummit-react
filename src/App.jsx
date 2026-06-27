import Navbar from './components/Navbar'
import Hero from './components/Hero'
import UniteSection from './components/UniteSection'
import Speakers from './components/Speakers'
import Workshops from './components/Workshops'
import GenesisAction from './components/GenesisAction'
import Merchandise from './components/Merchandise'
import Partners from './components/Partners'
import PixelsMemory from './components/PixelsMemory'
import FAQ from './components/FAQ'
import ReadySynergy from './components/ReadySynergy'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden">
      {/* Hero Wrapper with Background Image */}
      <div
        className="w-full flex flex-col relative bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: "url('/asset_001.png')",
          backgroundColor: "#FAF7F0"
        }}
      >
        <div className="absolute inset-0 bg-white/5 pointer-events-none" />

        {/* Top Shadow Overlay */}
        <div className="absolute top-0 left-0 w-full h-[199px] pointer-events-none z-10 select-none">
          <img
            src="/asset_260.png"
            alt="Top grid shadow"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Header / Navbar */}
        <Navbar />

        {/* Hero Section */}
        <main className="flex-1 flex flex-col justify-center">
          <Hero />
        </main>

        {/* Bottom Shadow Overlay */}
        <div className="absolute -bottom-85 left-0 w-full h-[150px] sm:h-[220px] md:h-[280px] lg:h-[343px] pointer-events-none z-50 select-none">
          <img
            src="/asset_167.png"
            alt="Bottom grid shadow"
            className="w-full h-full object-cover object-bottom"
          />
        </div>
      </div>

      {/* Unite Section */}
      <UniteSection />

      {/* Speakers Section */}
      <Speakers />

      {/* Workshops Section */}
      <Workshops />

      {/* Genesis In Action Section */}
      <GenesisAction />

      {/* Merchandise Section */}
      <Merchandise />

      {/* Partners Section */}
      <Partners />

      {/* Pixels of Memory Section */}
      <PixelsMemory />

      {/* FAQs Section */}
      <FAQ />

      {/* ReadySynergy Section */}
      <ReadySynergy />

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
