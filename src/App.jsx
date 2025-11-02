import { useEffect } from 'react'
import Hero from './components/Hero'
import InfoSections from './components/InfoSections'
import PurchaseSection from './components/PurchaseSection'
import SocialFAQFooter from './components/SocialFAQFooter'

function App() {
  useEffect(() => {
    document.title = 'Annaprada Organic Haldi | 100% Natural Turmeric – Curcumin Rich'
  }, [])

  const scrollToBuy = () => {
    const el = document.getElementById('buy')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-[#FFF7E6]">
      <header className="sticky top-0 z-40 border-b border-[#264B36]/10 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-lg bg-[#E76F00]" aria-hidden />
            <span className="text-lg font-extrabold tracking-tight text-[#264B36]">Annaprada Organic</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-[#264B36] md:flex">
            <a className="hover:text-[#E76F00]" href="#">Home</a>
            <a className="hover:text-[#E76F00]" href="#buy">Pricing</a>
            <a className="hover:text-[#E76F00]" href="#contact">Contact</a>
            <button onClick={scrollToBuy} className="rounded-lg bg-[#2E7D32] px-4 py-2 font-medium text-white hover:bg-[#256a29]">Buy Now</button>
          </nav>
        </div>
      </header>

      <main>
        <Hero onPrimaryCta={scrollToBuy} />
        <InfoSections />
        <PurchaseSection />
        <div id="contact">
          <SocialFAQFooter />
        </div>
      </main>
    </div>
  )
}

export default App
