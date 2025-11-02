import { ShoppingCart, Star, Leaf } from 'lucide-react'

const Hero = ({ onPrimaryCta }) => {
  return (
    <section className="relative overflow-hidden bg-[#FFF7E6]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#2E7D32]/10 px-3 py-1 text-sm font-medium text-[#2E7D32]">
            <Leaf className="h-4 w-4" /> 100% Organic • Curcumin Rich
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-[#264B36]">
            Annaprada Organic Haldi
            <span className="block text-[#E76F00]">Pure Turmeric for Everyday Wellness</span>
          </h1>
          <p className="mt-4 text-lg text-[#264B36]/80">
            Sourced from sustainable Indian farms, stone-ground to preserve natural oils and
            curcumin. Bright aroma. Rich color. Honest purity.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              onClick={onPrimaryCta}
              className="inline-flex items-center gap-2 rounded-lg bg-[#E76F00] px-6 py-3 text-white shadow hover:bg-[#cc6100] focus:outline-none focus:ring-2 focus:ring-[#E76F00]/40"
            >
              <ShoppingCart className="h-5 w-5" /> Buy Now
            </button>
            <div className="flex items-center text-[#264B36]" aria-label="Customer rating">
              <div className="flex text-[#E76F00]" aria-hidden="true">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <span className="ml-2 text-sm">Trusted by 5,000+ families</span>
            </div>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-[#264B36]">
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#2E7D32]" /> Single-origin, non-GMO</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#2E7D32]" /> No colours or additives</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#2E7D32]" /> Lab-tested purity</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#2E7D32]" /> Ethically sourced</li>
          </ul>
        </div>
        <div className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-md rounded-3xl border-4 border-[#264B36]/10 bg-white p-4 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1623065425904-5c2e0e2d0c2f?q=80&w=1200&auto=format&fit=crop"
              alt="Annaprada Organic Haldi — premium turmeric powder in a bowl"
              className="h-full w-full rounded-2xl object-cover"
            />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-[#264B36] px-4 py-2 text-xs text-white shadow">
              Naturally rich golden hue
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
