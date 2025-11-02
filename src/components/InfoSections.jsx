import { CheckCircle, ShieldCheck, Leaf, Soup, FlaskConical, MapPin } from 'lucide-react'

const Badge = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-sm text-[#264B36] shadow-sm">
    <Icon className="h-4 w-4 text-[#2E7D32]" /> {text}
  </div>
)

const InfoSections = () => {
  return (
    <section className="bg-[#FFF7E6]">
      {/* Trust strip */}
      <div className="border-y border-[#264B36]/10 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-6 py-4">
          <Badge icon={Leaf} text="Certified Organic" />
          <Badge icon={ShieldCheck} text="100% Natural" />
          <Badge icon={FlaskConical} text="High Curcumin" />
          <Badge icon={MapPin} text="Single-Origin India" />
        </div>
      </div>

      {/* Features & Benefits */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-14 md:grid-cols-3">
        {[
          {
            title: 'Rich in Curcumin',
            desc: 'Naturally potent variety ensuring bright color and strong aroma.',
          },
          {
            title: 'Stone-Ground Fresh',
            desc: 'Low-heat processing preserves essential oils and nutrients.',
          },
          {
            title: 'No Adulteration',
            desc: 'Zero artificial colors, flavors, or anti-caking agents.',
          },
        ].map((f) => (
          <div key={f.title} className="rounded-2xl border border-[#264B36]/10 bg-white p-6 shadow-sm">
            <CheckCircle className="h-6 w-6 text-[#2E7D32]" />
            <h3 className="mt-3 text-lg font-semibold text-[#264B36]">{f.title}</h3>
            <p className="mt-1 text-sm text-[#264B36]/80">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Ingredients & Sourcing */}
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-[#264B36]/10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#264B36]">Ingredients & Sourcing</h2>
              <p className="mt-2 text-[#264B36]/80">
                Ingredient: 100% turmeric (Curcuma longa). Grown using natural compost and
                bio-pest practices, harvested at peak maturity from partner farms in
                Maharashtra and Tamil Nadu. Every batch is lab-tested for heavy metals and
                adulterants.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-[#264B36]/10 bg-[#FFF7E6] p-4 text-sm text-[#264B36]">
                Sun-cured rhizomes
              </div>
              <div className="rounded-xl border border-[#264B36]/10 bg-[#FFF7E6] p-4 text-sm text-[#264B36]">
                Slow stone grinding
              </div>
              <div className="rounded-xl border border-[#264B36]/10 bg-[#FFF7E6] p-4 text-sm text-[#264B36]">
                Batch traceability
              </div>
              <div className="rounded-xl border border-[#264B36]/10 bg-[#FFF7E6] p-4 text-sm text-[#264B36]">
                Hand-sieved fine powder
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How to Use */}
      <div className="mx-auto max-w-7xl px-6 pb-6">
        <h2 className="text-2xl font-bold text-[#264B36]">How to Use</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Golden Milk',
              desc: 'Simmer milk with 1/2 tsp haldi, a pinch of pepper and jaggery.',
              icon: Soup,
            },
            {
              title: 'Daily Cooking',
              desc: 'Add 1/2–1 tsp to curries, dals, sabzis for color and health.',
              icon: Leaf,
            },
            {
              title: 'Immunity Shot',
              desc: 'Mix with warm water, honey, ginger; drink in the morning.',
              icon: CheckCircle,
            },
          ].map((r) => (
            <div key={r.title} className="rounded-2xl border border-[#264B36]/10 bg-white p-5">
              <r.icon className="h-5 w-5 text-[#E76F00]" />
              <h3 className="mt-2 font-semibold text-[#264B36]">{r.title}</h3>
              <p className="text-sm text-[#264B36]/80">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Nutrition / Curcumin info */}
      <div className="mx-auto max-w-7xl px-6 pb-14">
        <div className="rounded-3xl border border-[#264B36]/10 bg-gradient-to-r from-[#FFF7E6] to-white p-6">
          <h2 className="text-2xl font-bold text-[#264B36]">Curcumin at a Glance</h2>
          <div className="mt-4 grid items-end gap-4 md:grid-cols-4">
            {[
              { label: 'Curcumin', value: '≥ 3.5%' },
              { label: 'Moisture', value: '≤ 10%' },
              { label: 'Ash', value: '≤ 6.5%' },
              { label: 'Oil Content', value: 'High' },
            ].map((n) => (
              <div key={n.label} className="rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-[#264B36]/10">
                <div className="text-2xl font-extrabold text-[#E76F00]">{n.value}</div>
                <div className="text-xs uppercase tracking-wide text-[#264B36]/70">{n.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoSections
