import { Star, MessageCircle, Mail, Phone, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const Testimonial = ({ quote, name }) => (
  <div className="rounded-2xl border border-[#264B36]/10 bg-white p-6 shadow-sm">
    <div className="flex text-[#E76F00]" aria-hidden>
      <Star className="h-5 w-5 fill-current" />
      <Star className="h-5 w-5 fill-current" />
      <Star className="h-5 w-5 fill-current" />
      <Star className="h-5 w-5 fill-current" />
      <Star className="h-5 w-5 fill-current" />
    </div>
    <p className="mt-2 text-[#264B36]">“{quote}”</p>
    <div className="mt-3 text-sm text-[#264B36]/70">— {name}</div>
  </div>
)

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-[#264B36]/10 bg-white">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-[#264B36]"
        aria-expanded={open}
      >
        <span className="font-medium">{q}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="px-4 pb-4 text-sm text-[#264B36]/80">{a}</div>}
    </div>
  )
}

const SocialFAQFooter = () => {
  // Contact form state
  const [c, setC] = useState({ name: '', email: '', message: '' })
  const [ack, setAck] = useState('')

  const submitContact = (e) => {
    e.preventDefault()
    if (!c.name.trim() || !/^([^\s@]+)@([^\s@]+)\.[^\s@]+$/.test(c.email) || c.message.trim().length < 10) {
      setAck('Please complete all fields correctly.')
      return
    }
    setAck('Thank you! We will get back to you shortly.')
    setC({ name: '', email: '', message: '' })
    setTimeout(() => setAck(''), 3000)
  }

  return (
    <section className="bg-[#FFF7E6]">
      {/* Testimonials */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-center text-3xl font-extrabold text-[#264B36]">Loved by Families</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Testimonial quote="The aroma is incredible. My curries look and taste so much better!" name="Ritika, Pune" />
          <Testimonial quote="Finally found haldi that dissolves well in milk without lumps." name="Amit, Bengaluru" />
          <Testimonial quote="Colour is natural and rich. Appreciate the clean sourcing." name="Neha, Delhi" />
        </div>
      </div>

      {/* FAQ & Contact */}
      <div className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold text-[#264B36]">FAQs</h3>
            <div className="mt-4 grid gap-3">
              <FAQItem q="Is this product certified organic?" a="Yes, sourced from certified organic farms with batch-level testing for purity." />
              <FAQItem q="Does it contain artificial colour?" a="No. It is 100% natural turmeric with no added colours or anti-caking agents." />
              <FAQItem q="How should I store it?" a="Keep in a cool, dry place in an airtight container away from direct sunlight." />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#264B36]">Contact Us</h3>
            <form onSubmit={submitContact} className="mt-4 grid gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#264B36]/10">
              <div>
                <label htmlFor="cname" className="text-sm text-[#264B36]">Name</label>
                <input id="cname" value={c.name} onChange={(e) => setC({ ...c, name: e.target.value })} className="mt-1 w-full rounded-lg border border-[#264B36]/20 bg-[#FFF7E6] p-3 outline-none focus:ring-2 focus:ring-[#E76F00]/40" required />
              </div>
              <div>
                <label htmlFor="cemail" className="text-sm text-[#264B36]">Email</label>
                <input id="cemail" type="email" value={c.email} onChange={(e) => setC({ ...c, email: e.target.value })} className="mt-1 w-full rounded-lg border border-[#264B36]/20 bg-[#FFF7E6] p-3 outline-none focus:ring-2 focus:ring-[#E76F00]/40" required />
              </div>
              <div>
                <label htmlFor="cmsg" className="text-sm text-[#264B36]">Message</label>
                <textarea id="cmsg" rows={4} value={c.message} onChange={(e) => setC({ ...c, message: e.target.value })} className="mt-1 w-full rounded-lg border border-[#264B36]/20 bg-[#FFF7E6] p-3 outline-none focus:ring-2 focus:ring-[#E76F00]/40" required />
              </div>
              {ack && <div className="rounded-md bg-[#2E7D32]/10 p-2 text-sm text-[#2E7D32]">{ack}</div>}
              <button type="submit" className="rounded-lg bg-[#2E7D32] py-3 font-semibold text-white hover:bg-[#256a29]">Send Message</button>
              <div className="flex items-center justify-center gap-6 text-sm text-[#264B36]">
                <a href="tel:+919999999999" className="inline-flex items-center gap-2 hover:underline"><Phone className="h-4 w-4" /> +91 99999 99999</a>
                <a href="mailto:hello@annaprada.in" className="inline-flex items-center gap-2 hover:underline"><Mail className="h-4 w-4" /> hello@annaprada.in</a>
                <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-green-700 hover:underline"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#264B36]/10 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center md:flex-row">
          <div className="text-sm text-[#264B36]">
            © {new Date().getFullYear()} Annaprada Organic. All rights reserved.
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-[#264B36]">
            <a className="hover:underline" href="#">Privacy</a>
            <a className="hover:underline" href="#">Terms</a>
            <a className="hover:underline" href="#buy">Shop</a>
          </nav>
        </div>
      </footer>
    </section>
  )
}

export default SocialFAQFooter
