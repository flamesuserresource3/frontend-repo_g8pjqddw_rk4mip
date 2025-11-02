import { useEffect, useMemo, useState } from 'react'
import { Minus, Plus, ShoppingCart, Truck, CreditCard, Shield } from 'lucide-react'

const PACKS = [
  { id: '100', label: '100 g', price: 99 },
  { id: '250', label: '250 g', price: 219 },
  { id: '500', label: '500 g', price: 399 },
]

const PurchaseSection = () => {
  const [quantities, setQuantities] = useState({ '100': 1, '250': 1, '500': 1 })
  const [cart, setCart] = useState([])
  const [showCheckout, setShowCheckout] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '' })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')

  // Load cart from localStorage
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('cart') || '[]')
      if (Array.isArray(saved)) setCart(saved)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cart]
  )

  const addToCart = (pack) => {
    const qty = quantities[pack.id] || 1
    setCart((prev) => {
      const existing = prev.find((p) => p.id === pack.id)
      if (existing) {
        return prev.map((p) => (p.id === pack.id ? { ...p, qty: p.qty + qty } : p))
      }
      return [...prev, { id: pack.id, label: pack.label, price: pack.price, qty }]
    })
    setSuccess(`${qty} × ${pack.label} added to cart`)
    setTimeout(() => setSuccess(''), 2000)
  }

  const updateQty = (packId, delta) => {
    setQuantities((q) => ({ ...q, [packId]: Math.max(1, (q[packId] || 1) + delta) }))
  }

  const removeItem = (id) => setCart((prev) => prev.filter((p) => p.id !== id))

  const validate = () => {
    const e = {}
    if (!form.name || form.name.trim().length < 2) e.name = 'Enter your full name'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ''))) e.phone = 'Enter 10-digit phone'
    if (!form.address || form.address.trim().length < 10) e.address = 'Enter full address'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleCheckout = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    // Simulate success
    setSuccess('Order placed! You will receive a confirmation shortly.')
    setCart([])
    localStorage.removeItem('cart')
    setShowCheckout(false)
    setForm({ name: '', email: '', phone: '', address: '' })
  }

  return (
    <section id="buy" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-[#264B36]">Choose Your Pack</h2>
          <p className="mt-2 text-[#264B36]/80">Freshly packed in food-grade, resealable pouches.</p>
        </div>

        {success && (
          <div className="mx-auto mt-4 max-w-md rounded-lg bg-[#2E7D32]/10 p-3 text-center text-sm text-[#2E7D32]">
            {success}
          </div>
        )}

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {PACKS.map((p) => (
            <div key={p.id} className="flex flex-col rounded-2xl border border-[#264B36]/10 bg-[#FFF7E6] p-6">
              <div>
                <div className="text-sm uppercase tracking-wide text-[#264B36]/70">Pack</div>
                <div className="mt-1 text-2xl font-bold text-[#264B36]">{p.label}</div>
                <div className="mt-2 text-xl font-extrabold text-[#E76F00]">₹ {p.price}</div>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-lg bg-white p-2 ring-1 ring-[#264B36]/10">
                <button aria-label={`Decrease ${p.label} quantity`} onClick={() => updateQty(p.id, -1)} className="rounded-md p-2 text-[#264B36] hover:bg-[#264B36]/5">
                  <Minus className="h-4 w-4" />
                </button>
                <div className="min-w-[3rem] text-center font-semibold text-[#264B36]">
                  {quantities[p.id] || 1}
                </div>
                <button aria-label={`Increase ${p.label} quantity`} onClick={() => updateQty(p.id, 1)} className="rounded-md p-2 text-[#264B36] hover:bg-[#264B36]/5">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                onClick={() => addToCart(p)}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-[#E76F00] px-4 py-3 text-white shadow hover:bg-[#cc6100] focus:outline-none focus:ring-2 focus:ring-[#E76F00]/40"
              >
                <ShoppingCart className="h-5 w-5" /> Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Cart summary */}
        <div className="mt-10 grid gap-6 md:grid-cols-[2fr,1fr]">
          <div className="rounded-2xl border border-[#264B36]/10 bg-white p-6">
            <h3 className="text-lg font-semibold text-[#264B36]">Your Cart</h3>
            {cart.length === 0 ? (
              <p className="mt-2 text-sm text-[#264B36]/70">Cart is empty. Add a pack to continue.</p>
            ) : (
              <ul className="mt-4 divide-y divide-[#264B36]/10">
                {cart.map((item) => (
                  <li key={item.id} className="flex items-center justify-between py-3">
                    <div>
                      <div className="font-medium text-[#264B36]">{item.label}</div>
                      <div className="text-sm text-[#264B36]/70">Qty: {item.qty}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="font-semibold text-[#E76F00]">₹ {item.price * item.qty}</div>
                      <button onClick={() => removeItem(item.id)} className="text-sm text-[#264B36]/70 underline">
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="rounded-2xl border border-[#264B36]/10 bg-[#FFF7E6] p-6">
            <div className="flex items-center justify-between text-[#264B36]">
              <span>Subtotal</span>
              <span className="text-xl font-extrabold text-[#E76F00]">₹ {subtotal}</span>
            </div>
            <p className="mt-1 text-xs text-[#264B36]/70">Taxes included. Shipping calculated at checkout.</p>
            <button
              disabled={cart.length === 0}
              onClick={() => setShowCheckout(true)}
              className="mt-4 w-full rounded-lg bg-[#2E7D32] py-3 font-semibold text-white shadow hover:bg-[#256a29] disabled:cursor-not-allowed disabled:opacity-60"
            >
              Proceed to Checkout
            </button>
            <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-[#264B36]">
              <div className="flex items-center gap-2 rounded-md bg-white p-2 ring-1 ring-[#264B36]/10">
                <Truck className="h-4 w-4 text-[#2E7D32]" /> Fast Shipping
              </div>
              <div className="flex items-center gap-2 rounded-md bg-white p-2 ring-1 ring-[#264B36]/10">
                <CreditCard className="h-4 w-4 text-[#2E7D32]" /> UPI/Cards
              </div>
              <div className="flex items-center gap-2 rounded-md bg-white p-2 ring-1 ring-[#264B36]/10">
                <Shield className="h-4 w-4 text-[#2E7D32]" /> Secure Payments
              </div>
            </div>
          </div>
        </div>
      </div>

      {showCheckout && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#264B36]">Checkout</h3>
              <button aria-label="Close checkout" onClick={() => setShowCheckout(false)} className="rounded-md p-2 text-[#264B36]/70 hover:bg-[#264B36]/5">✕</button>
            </div>
            <form className="mt-4 grid gap-4" onSubmit={handleCheckout} noValidate>
              <div>
                <label className="text-sm text-[#264B36]" htmlFor="name">Full Name</label>
                <input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 w-full rounded-lg border border-[#264B36]/20 bg-[#FFF7E6] p-3 outline-none focus:ring-2 focus:ring-[#E76F00]/40" required />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm text-[#264B36]" htmlFor="email">Email</label>
                  <input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 w-full rounded-lg border border-[#264B36]/20 bg-[#FFF7E6] p-3 outline-none focus:ring-2 focus:ring-[#E76F00]/40" required />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <label className="text-sm text-[#264B36]" htmlFor="phone">Phone</label>
                  <input id="phone" inputMode="numeric" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1 w-full rounded-lg border border-[#264B36]/20 bg-[#FFF7E6] p-3 outline-none focus:ring-2 focus:ring-[#E76F00]/40" placeholder="10-digit" required />
                  {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                </div>
              </div>
              <div>
                <label className="text-sm text-[#264B36]" htmlFor="address">Address</label>
                <textarea id="address" rows={3} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="mt-1 w-full rounded-lg border border-[#264B36]/20 bg-[#FFF7E6] p-3 outline-none focus:ring-2 focus:ring-[#E76F00]/40" required />
                {errors.address && <p className="mt-1 text-xs text-red-600">{errors.address}</p>}
              </div>
              <button type="submit" className="mt-2 rounded-lg bg-[#2E7D32] py-3 font-semibold text-white hover:bg-[#256a29]">Place Order</button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default PurchaseSection
